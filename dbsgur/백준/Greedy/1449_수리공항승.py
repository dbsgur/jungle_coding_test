# https://www.acmicpc.net/problem/1449
import sys

sys.stdin = open("input.txt")

input = sys.stdin.readline

N, L = map(int, input().split())

leaks = [int(x) for x in input().split()]

leaks.sort()

answer = 1

start = leaks[0]
i = 1
while i < N:
    if leaks[i] >= start + L:
        answer += 1
        start = leaks[i]
    i += 1

print(answer)
