# https://www.acmicpc.net/problem/1965
# νμ΄ π λ³΄μλ§μ LIS (Longest Increasing Sequence)κ° λ μ¬λΌμ μ¨λ²λ¦Ό
import sys

sys.stdin = open("input.txt")

input = sys.stdin.readline

n = int(input())

boxs = [int(x) for x in input().split()]


dp = [1] * n

for i in range(n):
    for j in range(i):
        if boxs[i] > boxs[j] and dp[i] <= dp[j]:
            dp[i] = dp[j]+1

# π == π

# dp = [0] * n

# for i in range(n):
#     for j in range(i):
#         if boxs[i] > boxs[j] and dp[i] < dp[j]:
#             dp[i] = dp[j]
#     dp[i] += 1


print(max(dp))
