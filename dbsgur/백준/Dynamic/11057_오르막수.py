# https://www.acmicpc.net/problem/12904
import sys

sys.stdin = open("input.txt")

input = sys.stdin.readline

N = int(input())

dp = [[0]*10 for _ in range(N+2)]

dp[1] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
dp[2] = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

for i in range(3, N+1):
    for j in range(10):
        dp[i][j] = sum(dp[i-1][j:]) % 10007

print(sum(dp[N]) % 10007)
