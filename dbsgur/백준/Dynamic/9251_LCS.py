# https://www.acmicpc.net/problem/9251
# 다시 풀기
# Longest Common Sequence
import sys

sys.stdin = open("input.txt")

input = sys.stdin.readline

str1 = input().strip()
str2 = input().strip()

length1 = len(str1)
length2 = len(str2)

matrix = [[0]*(length2+1) for _ in range(length1+1)]

for i in range(1, length1 + 1):
    for j in range(1, length2 + 1):
        if str1[i-1] == str2[j-1]:
            # matrix[i][j] == str1[:i-1]이랑 str[:j-1]까지 LCS의 최대값
            matrix[i][j] = matrix[i-1][j-1] + 1
        else:
            matrix[i][j] = max(matrix[i-1][j], matrix[i][j-1])
print(matrix[-1][-1])
