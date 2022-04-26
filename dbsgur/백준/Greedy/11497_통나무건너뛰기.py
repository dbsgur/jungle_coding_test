# https://www.acmicpc.net/problem/11497
import sys

sys.stdin = open("input.txt")
input = sys.stdin.readline

T = int(input())

for _ in range(T):
    N = int(input())
    logs = [int(x) for x in input().split()]
    logs.sort()
    answer = 0
    for i in range(2, N):
        answer = max(answer, abs(logs[i] - logs[i-2]))
    print(answer)
