import os
import warnings
from dotenv import load_dotenv

os.environ['KMP_DUPLICATE_LIB_OK'] = 'True'
warnings.filterwarnings("ignore")

load_dotenv('../.env')

import os

def read_markdown_files(input_dir):
    company_files = []

    for root, dirs, files in os.walk(input_dir):
        # Get the company name from the folder structure
        relative_path = os.path.relpath(root, input_dir)
        company_name = os.path.basename(relative_path)

        for file in files:
            if file.endswith('.md'):
                file_path = os.path.join(root, file)
                company_files.append({'company': company_name, 'file_path': file_path})

    return company_files


input_dir = '../ProductAssistant/chatkit/chatkit/markdown'
print(read_markdown_files(input_dir))


from langchain_text_splitters import MarkdownHeaderTextSplitter

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
    
# md_header_splits = get_markdown_splits("//Users/spachal/Library/CloudStorage/OneDrive-LexmarkInternationalInc/Official/ProductAssistant/chatkit/chatkit/markdown/google/goog-10-q-q3-2024.md")
# for split in md_header_splits:
#     print(split)

input_dir = '/Users/spachal/Library/CloudStorage/OneDrive-LexmarkInternationalInc/Official/ProductAssistant/chatkit/chatkit/markdown'
md_files_with_companies = read_markdown_files(input_dir)

documents = []
for md_file in md_files_with_companies:
    company_name = md_file['company']
    md_file_path = md_file['file_path']

    md_header_splits = get_markdown_splits(md_file_path)

    for doc in md_header_splits:
        doc.metadata['company'] = company_name

    documents.extend(md_header_splits)
