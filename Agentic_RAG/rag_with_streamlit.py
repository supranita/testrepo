import os
import warnings
from dotenv import load_dotenv
import streamlit as st
from langchain_text_splitters import MarkdownHeaderTextSplitter
from langchain_ollama import OllamaEmbeddings
from langchain_community.vectorstores import FAISS
from langchain_community.docstore.in_memory import InMemoryDocstore
import faiss


os.environ['KMP_DUPLICATE_LIB_OK'] = 'True'
warnings.filterwarnings("ignore")
load_dotenv('../.env')

st.set_page_config(page_title="RAG Chatbot", layout="wide")
st.title("RAG Product Assistant - Optra")


def read_markdown_files(input_dir):
    company_files = []
    for root, dirs, files in os.walk(input_dir):
        relative_path = os.path.relpath(root, input_dir)
        company_name = os.path.basename(relative_path)
        for file in files:
            if file.endswith('.md'):
                file_path = os.path.join(root, file)
                company_files.append({'company': company_name, 'file_path': file_path})
    return company_files

def get_markdown_splits(md_filename):
    with open(md_filename, "r", encoding="utf-8") as f:
        markdown_content = f.read()
    headers_to_split_on = [
        ("#", "Header 1"),
        ("##", "Header 2"),
        ("###", "Header 3"),
    ]
    markdown_splitter = MarkdownHeaderTextSplitter(headers_to_split_on)
    md_header_splits = markdown_splitter.split_text(markdown_content)
    return md_header_splits



@st.cache_resource(show_spinner=True)
def load_vector_store(input_dir, rebuild=False):
    db_name = os.path.join(input_dir, "vector_db")
    embeddings = OllamaEmbeddings(model="nomic-embed-text", base_url="http://localhost:11434")
    
    if not rebuild and os.path.exists(db_name):
        st.info("Fetch details on your Optra queries below:")
        return FAISS.load_local(db_name, embeddings, allow_dangerous_deserialization=True)
    
    st.info("Search your OPTRA queries below:")
    md_files_with_companies = read_markdown_files(input_dir)
    documents = []

    for md_file in md_files_with_companies:
        company_name = md_file['company']
        md_file_path = md_file['file_path']
        md_header_splits = get_markdown_splits(md_file_path)
        for doc in md_header_splits:
            doc.metadata['company'] = company_name
        documents.extend(md_header_splits)

    vector = embeddings.embed_query("Hello World")
    index = faiss.IndexFlatL2(len(vector))
    vector_store = FAISS(
        embedding_function=embeddings,
        index=index,
        docstore=InMemoryDocstore(),
        index_to_docstore_id={}
    )
    vector_store.add_documents(documents)
    vector_store.save_local(db_name)
    return vector_store

input_dir = '/Users/spachal/Library/CloudStorage/OneDrive-LexmarkInternationalInc/Official/ProductAssistant/chatkit/chatkit/markdown'
vector_store = load_vector_store(input_dir)
retriever = vector_store.as_retriever(search_type="mmr", search_kwargs={"k": 3})

company_filter = st.sidebar.text_input("Company Filter (optional)")

query = st.text_input("Ask a question about the documents:")

if query:
    st.info(f"Searching for: {query}")
    try:
        docs = retriever.invoke(query, filter={"company": company_filter} if company_filter else None)
        if docs:
            for i, doc in enumerate(docs):
                st.markdown(f"**Document {i+1} (Company: {doc.metadata.get('company', 'N/A')})**")
                st.markdown(doc.page_content)
                st.markdown("---")
        else:
            st.warning("No documents found for this query and company filter.")
    except Exception as e:
        st.error(f"Error retrieving documents: {e}")
