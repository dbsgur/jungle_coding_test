# https://www.acmicpc.net/problem/17070
import sys

sys.stdin = open("input.txt")

input = sys.stdin.readline

N = int(input())

coordinate = [[int(x) for x in input().split()] for _ in range(N)]

# print(*coordinate)

dp = [[[0]*(N+1) for _ in range(N+1)]for _ in range(3)]
# 0 가로 1 세로 2 대각선
for i in range(2, N+1):
    if coordinate[0][i-1] != 0:
        break
    dp[0][1][i] = 1
# print(dp[0][1])
for x in range(2, N+1):
    for y in range(1, N+1):
        if coordinate[x-1][y-1] == 0:
            # print("IN IF")
            # print(f"x: {x} y: {y}")
            dp[0][x][y] = dp[0][x][y-1] + dp[2][x][y-1]
            dp[1][x][y] = dp[1][x-1][y] + dp[2][x-1][y]
            if coordinate[x-2][y-1] == 0 and coordinate[x-1][y-2] == 0:
                dp[2][x][y] = dp[0][x-1][y-1] + \
                    dp[1][x-1][y-1] + dp[2][x-1][y-1]

# print(dp[0])
# print(dp[1])
# print(dp[2])
print(dp[0][-1][-1] + dp[1][-1][-1] + dp[2][-1][-1])
