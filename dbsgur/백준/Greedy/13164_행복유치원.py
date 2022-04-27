# https://www.acmicpc.net/problem/13164
import sys

sys.stdin = open("input.txt")

input = sys.stdin.readline

N, K = map(int, input().split())

talls = [int(x) for x in input().split()]

gaps = []

for i in range(1, N):
    gaps.append(talls[i] - talls[i-1])

gaps.sort()

# print(gaps)
print(sum(gaps[:N-K]))
# print(N-K-1)
