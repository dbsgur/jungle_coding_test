# https://www.acmicpc.net/problem/2225
import sys

sys.stdin = open("input.txt")

input = sys.stdin.readline

N, K = map(int, input().split())


dp = [[0]*(N+1) for _ in range(K+1)]
# [더한 수][값] = 경우의수
for i in range(N+1):
    dp[1][i] = 1

for i in range(2, K+1):
    for num in range(N+1):
        for j in range(num+1):
            print(f"i: {i} num : {num} j :{j}")
            dp[i][num] += (dp[i-1][num-j] % 1000000000)
            # dp[i][num] += (dp[i-1][j] % 1000000000)

print(dp[K][N] % 1000000000)
