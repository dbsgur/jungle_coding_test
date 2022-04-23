# https://www.acmicpc.net/problem/12865
# Knapsack Algorithms
import sys

sys.stdin = open("input.txt")

input = sys.stdin.readline

N, K = map(int, input().split())

things = []

for i in range(N):
    w, v = map(int, input().split())
    things.append([w, v])

dp = [[0] * (K+1) for _ in range(N+1)]

for i in range(1, N+1):
    for j in range(1, K+1):
        weight = things[i-1][0]
        value = things[i-1][1]
        if weight > j:
            dp[i][j] = dp[i-1][j]
        else:
            dp[i][j] = max(dp[i-1][j], dp[i-1][j-weight]+value)

print(dp[N][K])
