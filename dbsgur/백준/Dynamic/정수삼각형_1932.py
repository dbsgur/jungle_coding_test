import sys

sys.stdin = open("input.txt")

input = sys.stdin.readline

n = int(input())

tri = [[int(x) for x in input().strip().split()] for _ in range(n)]


if n == 1:
    print(tri[0][0])
else:
    for i in range(n-2, 0, -1):
        for j in range(i+1):
            tri[i][j] = tri[i][j] + max(tri[i+1][j], tri[i+1][j+1])
    print(max(tri[1])+tri[0][0])
