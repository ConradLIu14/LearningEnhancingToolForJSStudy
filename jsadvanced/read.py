import re
import json
# import jsonrpclib
import socket
chapter_pattern = r'第 ([0-9]+) 章　'
section_pattern = r'[0-9]　'

example = [{"Type": "chapter", "count": 1, "title": "什么是Javascript", "content": "content...",
            "children": [{"Type": "section", "count": 1, "title": "1.1 ...", "content":"content..",
                          "children":[]}
]},
           {"chapter2": "..."}]
def chapter_state(lines):
    print(lines)

def section_state(lines):
    print(lines)

def content_state(lines):
    return lines

class state:
    def __init__(self):
        self.state = 0
        self.states - {0:"uninit", 1:"Chapter", 2: "Chapter content", 3: ""}


root = []
content_pointer = None
with open("/jsadvanced.txt", "r", encoding = 'UTF-8') as f:
# with open("jsCatalog.txt", "r", encoding='UTF-8') as f:
    data = f.readlines()
    processor = None
    lines = [] # 读取的lines 结束后进入
    chapter_count = 0
    section_counts = []
    slash_n_count = 1
    curr_cheptor = None
    for line in data:
        if re.match(chapter_pattern, line):
            curr_cheptor = {"type": "chapter", "count": chapter_count + 1, "title":line.split('　')[1], "content": [], "children":[]}
            content_pointer = curr_cheptor["content"]
            root.append(curr_cheptor)

            lines = []
            processor = chapter_state
            chapter_count += 1
            section_counts = [1]
            empty_line_count = 0
            continue

        if re.search(section_pattern, line):
            if re.match(r'[0-9]', line):
                [section_hierarch, section_name] = line.split('　')
                section_level = section_hierarch.split(".")
                section_level = [int(i) for i in section_level]
                level_pointer = root
                processor = section_state
                lines = []
                empty_line_count = 0

                the_section = {"type": "section", "count": section_level.pop(), "title": section_name, "content": [],
                               "children": []}

                content_pointer = the_section["content"]
                for i in section_level:
                    level_pointer = level_pointer[i - 1]["children"]
                level_pointer.append(the_section)
                continue


            # if re.match(r'[A-Z]',line):
            #     print("appendix section")

        if line == "\n": slash_n_count += 1
        else:
            slash_n_count = 0
            lines.append(line.strip("\n"))

        if slash_n_count >= 5 :
            lines.append(line)
            content_pointer.append(lines)
            # lines = [line]
            slash_n_count = 0

sections_res = []
with open("/jsadvanced.txt", "r", encoding = 'UTF-8') as f:
    data = f.readlines()
    slash_n_count = 1
    for line in data:
        if re.match(chapter_pattern, line) or re.search(section_pattern, line):
            the_section = {"title": line, "content":[]}



def process_res_object(rest):
    cont = 0


rest = json.dumps(root, indent = 1, ensure_ascii = False) # 设置首行缩进
print(rest)
print(type (rest))

with open('/jsadvanced.js', 'w', encoding = 'utf-8') as f:
    json.dump(root, f, ensure_ascii = False)

file_handle = open('/jsadvanced.js', mode = 'w',encoding='utf-8')
file_handle.write(rest)

