# https://www.acmicpc.net/problem/9084
# 다시풀기
import sys

sys.stdin = open("input.txt")

input = sys.stdin.readline

T = int(input())

for _ in range(T):
    N = int(input())
    coins = [int(x) for x in input().split()]
    money = int(input())
    dp = [0] * (money + 1)
    dp[0] = 1
    for coin in coins:
        for j in range(coin, money+1):
            dp[j] += dp[j - coin]
    print(dp[money])
