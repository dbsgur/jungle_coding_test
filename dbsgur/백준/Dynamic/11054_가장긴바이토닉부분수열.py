# https://www.acmicpc.net/problem/11054
import sys

sys.stdin = open("input.txt")

input = sys.stdin.readline

n = int(input())

A = [int(x) for x in input().split()]

dp1 = [0] * n
dp2 = [0] * n
dp3 = [0] * n

for i in range(n):
    for j in range(i):
        if A[i] > A[j] and dp1[i] < dp1[j]:
            dp1[i] = dp1[j]
    dp1[i] += 1

for i in range(n-1, -1, -1):
    for j in range(n-1, i, -1):
        if A[i] > A[j] and dp2[i] < dp2[j]:
            dp2[i] = dp2[j]
    dp2[i] += 1

for i in range(n):
    dp3[i] = dp1[i] + dp2[i] - 1

print(max(dp3))
