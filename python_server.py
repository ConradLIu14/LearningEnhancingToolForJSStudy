
import socket
import json
from multiprocessing import Process

def handle_client(client_socket):
    """
    处理客户端请求
    """
    request_data = client_socket.recv(1024)
    print("request data:", request_data)
    # 构造响应数据
    response_start_line = "HTTP/1.1 200 OK\r\n"
    response_headers = "Server: My server\r\n"
    # response_body = "<h1>%s</h1>" % json.dumps(root[0], indent = 1, ensure_ascii = False)
    # response_body = "<!DOCTYPE HTML><html><head><title> js高级教程 </title>" \
    #                 "<meta charset=UTF-8></head><body> %s" \
    #                 "</body></html>" % json.dumps(root, indent = 1, ensure_ascii = False)

    response_body = "response"
    response = response_start_line + response_headers + "\r\n" + response_body

    # 向客户端返回响应数据
    client_socket.send(bytes(response, "utf-8"))
    # client_socket.send(bytes(response, "gb2312"))

    # 关闭客户端连接
    client_socket.close()


port = 8109
if __name__ == "__main__":
    server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    server_socket.bind(("localhost", port))
    server_socket.listen(128)

    while True:
        client_socket, client_address = server_socket.accept()
        print("[%s, %s]用户连接上了" % client_address)
        handle_client_process = Process(target=handle_client, args=(client_socket,))
        handle_client_process.start()
        client_socket.close()