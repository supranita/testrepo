import warnings
warnings.filterwarnings("ignore")

import os
from dotenv import load_dotenv

# Add the project's root directory to sys.path
os.environ['KMP_DUPLICATE_LIB_OK'] = 'True'
load_dotenv('../.env')

from langchain_ollama import ChatOllama
from langchain_ollama import OllamaEmbeddings
from langchain_community.vectorstores import FAISS

model = "llama3.2:1b"

llm = ChatOllama(model=model, base_url="http://localhost:11434")
output = llm.invoke("Hello, how are you?")
print(output.content)


db_name = "../PRODUCTASSISTANT/chatkit/markdown/vector_db/"
embeddigs = OllamaEmbeddings(model="nomic-embed-text:latest", base_url="http://localhost:11434")

vector_store_new = FAISS.load_local(db_name, embeddigs, allow_dangerous_deserialization=True)

retriever = vector_store_new.as_retriever(search_type="mmr", search_kwargs={"k": 3})


question = "What is the revenue of Facebook in 2024?"

docs = retriever.invoke(question, filter = {"company": "facebook"})
print(docs)