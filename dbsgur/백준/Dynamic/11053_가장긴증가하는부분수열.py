# https://www.acmicpc.net/problem/11053
# Longest Increase Sequence
import sys

sys.stdin = open("input.txt")

input = sys.stdin.readline

n = int(input())

A = [int(x) for x in input().split()]

dp = [0] * n

for i in range(n):
    for j in range(i):
        if A[i] > A[j] and dp[i] < dp[j]:
            dp[i] = dp[j]
    dp[i] += 1
print(max(dp))
