import sys

sys.stdin = open("input.txt")

input = sys.stdin.readline

str1 = input()
str2 = input()

length = max(len(str1), len(str2))

dp = [0] * (length+1)

dp[0] = 1

for i in range(len(str1)):
    for j in range(i, len(str2)):
        if str1[i] == str2[j]:
            break
    break
