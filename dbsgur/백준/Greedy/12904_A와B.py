# https://www.acmicpc.net/problem/12904
import sys

sys.stdin = open("input.txt")

input = sys.stdin.readline

S = [x for x in input().strip()]
T = [x for x in input().strip()]

while len(S) < len(T):
    if T.pop() == "B":
        T.reverse()


if S == T:
    print(1)
else:
    print(0)
