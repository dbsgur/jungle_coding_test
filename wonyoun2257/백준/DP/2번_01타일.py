import sys
sys.stdin = open("wonyoung/input.txt", "r")
input = sys.stdin.readline

n = int(input())
dp = [0]*1000001
dp[1] = 1
dp[2] = 2

for i in range(3,len(dp)):
  dp[i] = (dp[i-1]+ dp[i-2]) % 15746

print()