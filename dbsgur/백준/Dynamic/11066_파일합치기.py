# https://www.acmicpc.net/problem/11066
# 다시 풀기
import sys

sys.stdin = open("input.txt")

input = sys.stdin.readline

T = int(input())

for _ in range(T):
    K = int(input())
    files = [int(x) for x in input().split()]
    table = [[0] * K for _ in range(K)]
    for i in range(K-1):
        table[i][i+1] = files[i] + files[i+1]
        for j in range(i+2, K):
            table[i][j] = table[i][j-1] + files[j]
    for d in range(2, K):
        for i in range(K-d):
            j = i + d
            # i ~ k 까지 더한 비용의 최솟값 + k+1 ~ j 까지 더한 비용의 최솟값
            minimum = [table[i][K] + table[K+1][j] for K in range(i, j)]
            table[i][j] += min(minimum)
    print(table[0][K-1])

    # # print(f"files : {files}")
    # files.sort()
    # sum = [files[0], files[-1]]
    # i = 1
    # result = 0
    # while True:
    #     if i == K-1:
    #         break
    #     print(f"i : {i}")
    #     print(f"sum[0] : {sum[0]}")
    #     print(f"sum[1] : {sum[1]}")
    #     print(f"files[i] : {files[i]}")
    #     if sum[0] <= sum[1]:
    #       sum[0] += files[i]
    #         result += sum[0]
    #     else:
    #         sum[1] += files[i]
    #         result += sum[1]
    #     i += 1
    # # print(sum[0] + sum[1])
    # print("##################################")
    # print(result+sum[0]+sum[1])
