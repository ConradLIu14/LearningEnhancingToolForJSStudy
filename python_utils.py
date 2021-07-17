import io
import sys
import json
sys.stdout=io.TextIOWrapper(sys.stdout.buffer,encoding='utf8')
# qs1

d = ["./winterjs/1js类型.txt", "./winterjs/2js对象.txt", "./winterjs/3js模拟类.txt", "./js高级教程/12BOM.txt"]
d_i = 3
dest = "./JSONProblemSets/"
print("the d[0] is", d[0])

# with open(d[0], "r", encoding='utf-8') as f:
#     data = f.readline()
#     print(data)
#     data = f.readline()
#     print(data)
#     data = f.readline()
#     print(data)
#     data = f.readline()
#     print(data)
#     data = f.readline()
#     print(data)
#     data = f.readline()
#     print(data)
#     data = f.readline()
#     print(data)
#     data = f.readline()
#     print("the last data:",type(data), data, data == "")

class question:
    def __init__(self, ans : str, t : str):
        self.question_answer = ans
        self.question_type = t
    
    def get_dict(self):
        return dict([("answer", self.question_answer), ("type", self.question_type)])
    

q = question( "2", "3")


def remove_left_space(s:str):
    curr = 0
    for i in range(len(s)):
        if s[i] == " ":
            curr += 1
        else:
            break
    return s[curr:]

def process_section(s:str):
    return s

def process_problem(s:str):
    tag_index = s.find(".")
    res = [s[:tag_index]]
    # s = s[3:]
    curr = s.find("#qs")
    res.append({"type":"string", "string":s[:curr]})
    s = s[curr:]
    while curr != -1:
        t_index = s.find(":")
        t = s[:t_index]
        if t == "#qs2":
            t = "TextBox"
        else:
            t = "UnderLine"
        s = s[t_index + 1:]
        end_index = s.find("#qs")
        ans = s[:end_index]
        # res.append((t, ans))
        s = s[end_index+3:]
        curr = s.find("#qs")
        q = question(ans,t)
        res.append({"type": "question", "question":q.get_dict()})
        if curr != -1: res.append({"type":"string", "string":s[:curr]})
    res.append({"type":"string", "string":s[:curr]})
    return res

dictionary = list()
with open(d[d_i], "r", encoding='utf-8') as f:
    data = f.readline()
    while data:
        # print(data)
        # data = f.readline()
        curr = data
        data = remove_left_space(f.readline())
        while data:
            if data[0] == "p" and 48<=ord(data[1]) and ord(data[1])<= 57:
                break
            elif data[0] == "s" and 48<=ord(data[1]) and ord(data[1])<= 57:
                print("section")
                data = remove_left_space(f.readline())
                continue
            else:
                # curr += "\n"
                curr = curr.strip("\n")
                curr += data
                data = remove_left_space(f.readline())
        problems = process_problem(curr)
        dictionary.append([{"problem_index": problems[0]}, {"content" : problems[1:]}])
    

for i in dictionary:
    print(i)
    


# indent 超级好用，格式化保存字典，默认为None，小于0为零个空格
# f.write(json.dumps(dict, indent=4))
# json.dump(dict, f, indent=4)  # 传入文件描述符，和dumps一样的结果
d_json = ["./winterjs/1js类型.JSON", "./winterjs/2js对象.JSON", "./winterjs/3js模拟类.JSON", "./js高级教程/12BOM.JSON"]
with open(d_json[d_i], "w", encoding="utf-8") as f:
    json.dump(dictionary, f , indent=4, ensure_ascii=False)
j = json.dumps(dictionary, indent=4, ensure_ascii=False)
print(j)
    

s_try = "p3. 为什么有的编程规范要求用 void 0 代替 undefined？ #qs1:(因为 JavaScript 的代码 undefined 是一个变量，而并非是一个关键字，这是 JavaScript 语言公认的设计失误之一，所以，我们为了避免无意中被篡改，我建议使用 void 0 来获取 undefined 值。)#qs 现在我们就分别来看一下。)#qs"
ptry = process_problem(s_try)
for i in ptry:
    print(i)



"第 2 章　HTML中的JavaScript"



