# https://www.acmicpc.net/problem/11047
# 그리디의 정의 -> 매순간 최선의 선택
import sys

sys.stdin = open("input.txt")

input = sys.stdin.readline

N, K = map(int, input().split())

coins = [int(input()) for _ in range(N)]

# 화폐단위 큰놈 먼저 비교하기 위해 리버스 소트
coins.sort(reverse=True)
count = 0
for coin in coins:
    if K == 0:
        break
    if coin > K:
        continue
    count += K // coin
    K -= coin*(K//coin)
    # K %= coin

print(count)
