import sys

sys.stdin = open("input.txt")

input = sys.stdin.readline

n = int(input())

dp = [0] * (n+1)

divideN = 15746
