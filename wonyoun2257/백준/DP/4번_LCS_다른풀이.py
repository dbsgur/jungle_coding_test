import sys
sys.stdin = open("wonyoung/input.txt", "r")
input = sys.stdin.readline

a_str = list(input().strip())
b_str = list(input().strip())

a_leng = len(a_str)+1
b_leng = len(b_str)+1

dp = [[0]*(a_leng) for _ in range(b_leng)]

for i in range(0, b_leng-1):
  for j in range(0, a_leng-1):
    if b_str[i] == a_str[j]:
      dp[i][j] = dp[i-1][j-1] +1
    else:
      dp[i][j] = max(dp[i-1][j], dp[i][j-1])

print(dp[b_leng-2][a_leng-2])