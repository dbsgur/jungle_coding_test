import sys
sys.stdin = open("wonyoung/input.txt", "r")
input = sys.stdin.readline

n, k = map(int ,input().split())
coins = []
for _ in range(n):
  coin = int(input())
  if coin <= k:
    coins.append(coin)

answer = 0
for i in range(len(coins)-1, -1, -1):
  answer += k // coins[i]
  k %= coins[i]
  if k == 0:
    print(answer)
    break
