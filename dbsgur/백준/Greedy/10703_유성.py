# https://www.acmicpc.net/problem/10703
import sys

sys.stdin = open("input.txt")

input = sys.stdin.readline

R, S = map(int, input().split())

pixels = [[x for x in input().strip()] for _ in range(R)]

arr = [["."] * S for _ in range(R)]
