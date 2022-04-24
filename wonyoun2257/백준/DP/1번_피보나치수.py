import sys
sys.stdin = open("wonyoung/input.txt", "r")
input = sys.stdin.readline

# n = int(input())
n = 0
dp = [0] * (91)

dp[1] = 1
dp[2] = 1
for i in range(3,n+1):
  dp[i] = dp[i-1]+dp[i-2]

print(dp[n])