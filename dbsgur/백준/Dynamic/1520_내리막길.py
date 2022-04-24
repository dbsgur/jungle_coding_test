# https://www.acmicpc.net/problem/1520
# 다시 풀기
import sys

sys.stdin = open("input.txt")

input = sys.stdin.readline

M, N = map(int, input().split())

maps = [[int(x) for x in input().split()] for _ in range(M)]

print(f"maps : {maps}")

cases = [[-1]*N for _ in range(M)]

# 상 하 좌 우
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]


def dfs(x, y):
    if x == M-1 and y == N - 1:
        return 1
    if cases[x][y] != -1:
        return cases[x][y]
    cases[x][y] = 0
    for i in range(4):
        nx = x + dx[i]
        ny = y + dy[i]
        if nx < 0 or ny < 0 or nx >= M or ny >= N:
            continue
        if maps[nx][ny] < maps[x][y]:
            cases[x][y] += dfs(nx, ny)
    return cases[x][y]


print(dfs(0, 0))
