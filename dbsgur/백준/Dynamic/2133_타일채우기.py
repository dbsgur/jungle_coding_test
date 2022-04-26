# https://www.acmicpc.net/problem/2133
import sys

sys.stdin = open("input.txt")
input = sys.stdin.readline

N = int(input())

dp = [0] * (N+2)

dp[2] = 3

for i in range(4, N+1, 2):
    dp[i] = dp[2] * dp[i-2]
    for j in range(4, i, 2):
        dp[i] += 2 * dp[i-j]
    dp[i] += 2
print(dp[N])
