#二进制转换十进制
a=int(input())#输入1010
decimal = int(str(a), 2)#输出10
print(decimal)
#十进制转换二进制
b=int(input())#输入10
binary = bin(b)
print(binary)#输出0b1010
print(binary[2:])#输出1010