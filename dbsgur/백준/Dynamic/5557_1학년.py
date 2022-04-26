# https://www.acmicpc.net/problem/16953
import sys

sys.stdin = open("input.txt")

input = sys.stdin.readline

N = int(input())

nums = [int(x) for x in input().split()]

dp = [[0] * 21 for _ in range(N)]


dp[0][nums[0]] = 1

for i in range(1, N-1):
    for j in range(21):
        if dp[i-1][j]:
            if 0 <= j+nums[i] <= 20:
                dp[i][j+nums[i]] += dp[i-1][j]
            if 0 <= j-nums[i] <= 20:
                dp[i][j-nums[i]] += dp[i-1][j]
print(dp[N-2][nums[-1]])
