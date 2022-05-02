# https://www.acmicpc.net/problem/2011
import sys

sys.stdin = open("input.txt")

input = sys.stdin.readline

crypt = [int(x) for x in input().strip()]

lengthC = len(crypt)


if crypt[0] == 0:
    print(0)
else:
    dp = [0] * (lengthC+1)
    crypt = [0] + crypt
    dp[0] = 1
    dp[1] = 1
    for i in range(2, lengthC+1):
        if crypt[i] > 0:
            dp[i] = dp[i-1]
        tmp = crypt[i-1] * 10 + crypt[i]
        if 10 <= tmp <= 26:
            dp[i] += dp[i-2]
    print(dp[-1] % 1000000)
