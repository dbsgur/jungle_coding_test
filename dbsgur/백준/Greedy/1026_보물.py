# https://www.acmicpc.net/problem/1026
import sys

sys.stdin = open("input.txt")

input = sys.stdin.readline

N = int(input())

A = [int(x) for x in input().split()]
A.sort()
B = [int(x) for x in input().split()]
B.sort(reverse=True)

answer = 0
for i in range(N):
    answer += (A[i]*B[i])

print(answer)
