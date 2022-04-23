# https://www.acmicpc.net/problem/1541
import sys

sys.stdin = open("input.txt")

input = sys.stdin.readline

exps = input().split('-')

value = []
for i in range(len(exps)):
    # split 할 수 없는게 있을 수 있쯤!
    try:
        value.append(sum(list(map(int, exps[i].split('+')))))
    except:
        value.append(int(exps[i]))

result = value[0]
for i in range(1, len(value)):
    result -= value[i]

print(result)
