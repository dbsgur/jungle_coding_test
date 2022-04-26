# https://www.acmicpc.net/problem/1080
import sys

sys.stdin = open("input.txt")

input = sys.stdin.readline

N, M = map(int, input().split())

A = [[int(x) for x in input().strip()] for _ in range(N)]
B = [[int(x) for x in input().strip()] for _ in range(N)]


def rev(x, y):
    for i in range(3):
        for j in range(3):
            A[x+i][y+j] = 1-A[x+i][y+j]


def check():
    for i in range(N):
        for j in range(M):
            if A[i][j] != B[i][j]:
                return False
    return True


count = 0
for i in range(N-2):
    for j in range(M-2):
        if A[i][j] != B[i][j]:
            rev(i, j)
            count += 1

if check():
    print(count)
else:
    print(-1)
