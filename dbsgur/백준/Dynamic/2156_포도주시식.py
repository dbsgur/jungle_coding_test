# https://www.acmicpc.net/problem/2156
import sys

sys.stdin = open("input.txt")

input = sys.stdin.readline

n = int(input())

wine = [int(input()) for _ in range(n)]

if n == 1:
    print(wine[0])
elif n == 2:
    print(wine[0] + wine[1])
else:
    dp = [0] * n

    dp[0] = wine[0]
    dp[1] = wine[0] + wine[1]

    for i in range(2, n):
        dp[i] = max(dp[i-2] + wine[i], dp[i-3]+wine[i-1] + wine[i], dp[i-1])

    print(dp[n-1])
