# https://www.acmicpc.net/problem/2167
import sys

sys.stdin = open("input.txt")

input = sys.stdin.readline

N, M = map(int, input().split())

matrix = [[int(x) for x in input().split()] for _ in range(N)]

K = int(input())

dp = [[0] * (M+1)for _ in range(N+1)]


for i in range(1, N+1):
    for j in range(1, M+1):
        dp[i][j] = matrix[i-1][j-1] + dp[i-1][j] + dp[i][j-1] - dp[i-1][j-1]

for _ in range(K):
    i, j, x, y = map(int, input().split())
    answer = dp[x][y] - dp[x][j-1] - dp[i-1][y] + dp[i-1][j-1]
    print(answer)
