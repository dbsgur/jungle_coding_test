# https://www.acmicpc.net/problem/14501
import sys

sys.stdin = open("input.txt")

input = sys.stdin.readline

N = int(input())

schedules = [[int(x) for x in input().split()]for _ in range(N)]

dp = [0] * (N+1)

for i in range(N-1, -1, -1):
    if schedules[i][0] + i > N:
        dp[i] = dp[i+1]
    else:
        dp[i] = max(dp[i+1], schedules[i][1] + dp[i+schedules[i][0]])

print(dp[0])
