# https://www.acmicpc.net/problem/109424
# 팰린드롬이란 ? 거꾸로해도 같은 수
import sys

sys.stdin = open("input.txt")

input = sys.stdin.readline
# IDEA
# dp 로 미리 구하고
# 거기에 Q가 속해있는지 확인하는 방향으로 가야함
N = int(input())

nums = [int(x) for x in input().split()]

dp = [[0] * (N) for _ in range(N)]
# 오답 -> 길이긴놈 구하기 위해서는 짧은놈을 먼저 구해야함
# 즉, 길이가 for문 제일 밖에 있어야함
# for start in range(N):
#     for end in range(start, N):
#         if start == end or start+1 == end:
#             dp[start][end] = 1
#             continue
#         if dp[start+1][end-1] == 1 and nums[start] == nums[end]:
#             dp[start][end] = 1
for numLen in range(N):
    for start in range(N - numLen):
        end = start + numLen
        if start == end:
            dp[start][end] = 1
        elif nums[start] == nums[end]:
            if start + 1 == end:
                dp[start][end] = 1
            elif dp[start+1][end-1] == 1:
                dp[start][end] = 1

M = int(input())

for _ in range(M):
    s, e = map(int, input().split())
    print(dp[s-1][e-1])

# Q = [[int(x) for x in input().split()] for _ in range(M)]
