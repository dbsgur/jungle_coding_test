# https://www.acmicpc.net/problem/10703
import sys

sys.stdin = open("input.txt")

input = sys.stdin.readline

R, S = map(int, input().split())

pixels = [[x for x in input().strip()] for _ in range(R)]

minDistance = 3000

for y in range(S):
    meteor = -1
    for x in range(R):
        if pixels[x][y] == "X":
            meteor = max(meteor, x)
        if pixels[x][y] == "#" and meteor >= 0:
            minDistance = min(minDistance, x-meteor-1)
            break
if minDistance == 0:
    for i in range(R):
        print(*pixels[i], sep='')
        sys.exit(0)

for x in range(R-1, -1, -1):
    for y in range(S):
        if pixels[x][y] == "X":
            pixels[x][y] = "."
            pixels[x+minDistance][y] = "X"

for i in range(R):
    print(*pixels[i], sep='')
