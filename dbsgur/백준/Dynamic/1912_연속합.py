# https://www.acmicpc.net/problem/1921
import sys

sys.stdin = open("input.txt")

input = sys.stdin.readline

n = int(input())

nums = [int(x) for x in input().split()]

# print(nums)
dp = [nums[0]]

for i in range(n-1):
    dp.append(max(dp[i] + nums[i+1], nums[i+1]))

print(max(dp))
