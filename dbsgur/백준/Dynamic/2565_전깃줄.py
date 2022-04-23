# https://www.acmicpc.net/problem/2565
# idea
# 1. a전봇대 기준 정렬
# 2. 가장긴 증가하는 부분수열

import sys

sys.stdin = open("input.txt")

input = sys.stdin.readline

n = int(input())

poles = [[int(x) for x in input().split()] for _ in range(n)]

poles.sort(key=lambda x: x[0])

dp = [0] * n

for i in range(n):
    for j in range(i):
        if poles[i][1] > poles[j][1] and dp[i] < dp[j]:
            dp[i] = dp[j]
    dp[i] += 1
print(n - max(dp))
