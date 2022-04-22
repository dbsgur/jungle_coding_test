# https://www.acmicpc.net/problem/9461
import sys

sys.stdin = open("input.txt")

input = sys.stdin.readline

T = int(input())

N = [int(input()) for _ in range(T)]

m = max(N)

P = [0] * (m + 1)

P[1] = 1
P[2] = 1
P[3] = 1

for i in range(4, m+1):
    P[i] = P[i-2] + P[i-3]

for num in N:
    print(P[num])
