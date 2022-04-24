import sys
sys.stdin = open("wonyoung/input.txt", "r")
input = sys.stdin.readline

t = int(input())

for _ in range(t):
  n = int(input())
  coins = list(map(int, input().split()))
  m = int(input())

  dp = [0]*(m+1)
  dp[0] =1
  # 각 동전으로 만들 수 있는 경우의 수를 dp에 더해준다.
  for coin in coins:
    for j in range(1, m+1):
      if j-coin >=0:
        dp[j] += dp[j-coin]
  
  print(dp)
  print(dp[m])