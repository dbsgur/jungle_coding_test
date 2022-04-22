import sys

sys.stdin = open("input.txt")

input = sys.stdin.readline

n = int(input())

stairs = [int(input()) for _ in range(n)]


if n == 1:
    print(stairs[n-1])
elif n == 2:
    print(stairs[0] + stairs[1])
else:
    dp = [0 for _ in range(n+1)]
    dp[0] = stairs[0]
    dp[1] = stairs[0] + stairs[1]

    for i in range(2, n):
        dp[i] = max(dp[i-2], dp[i-3]+stairs[i-1]) + stairs[i]

    print(dp[n-1])
