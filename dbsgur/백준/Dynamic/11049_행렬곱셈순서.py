# https://www.acmicpc.net/problem/11049
# 다시 풀기
# 형규 옹
import sys

N = int(sys.stdin.readline())

r, c = [], []
for _ in range(N):
    R, C = map(int, sys.stdin.readline().split())
    r += R,
    c += C,

dp = [[1 << 31]*N for _ in range(N)]
for i in range(N):
    dp[i][i] = 0
for k in range(1, N):
    for i in range(N-k):
        for j in range(i, i+k):
            dp[i][i+k] = min(dp[i][i+k], dp[i][j]+dp[j+1]
                             [i+k]+r[i]*r[j+1]*c[i+k])

print(dp[0][-1])


######


# import sys

# sys.stdin = open("input.txt")

# input = sys.stdin.readline

# N = int(input())

# matrix = [[int(x) for x in input().split()]for _ in range(N)]

# # print(matrix)
# MN = sys.maxsize
# # print(MN)
# dp = [[0] * N for _ in range(N)]
# # print(dp)
# for i in range(1, N):  # 몇 번째 대각선?
#     for j in range(0, N-i):  # 대각선에서 몇번째 열 ?
#         if i == 1:  # 차이가 1밖에 나지 않는 칸
#             dp[j][j+i] = matrix[j][0] * matrix[j][1] * matrix[j+1][1]
#             continue
#         dp[j][j+i] = MN  # 최댓값을 미리 넣어주기
#         for k in range(j, j+i):
#             dp[j][j+i] = min(dp[j][j+i], dp[j][k] + dp[k+1][j+i] +
#                              matrix[j][0] * matrix[k][1] * matrix[j+i][1])

# print(dp)
# print(dp[0][N-1])  # 맨 오른쪽 위
