# https://www.acmicpc.net/problem/2437
import sys

sys.stdin = open("input.txt")

input = sys.stdin.readline

N = int(input())

weights = [int(x) for x in input().split()]

weights.sort()
target = 1
for weight in weights:
    if target < weight:
        break
    target += weight

print(target)
