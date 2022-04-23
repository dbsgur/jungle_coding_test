# https://www.acmicpc.net/problem/2098
# 다시 풀기
import sys

sys.stdin = open("input.txt")

input = sys.stdin.readline

# A의 원소 개수가 몇개인지


def count(A, n):
    count = 0
    for i in range(n):
        if ((A & (1 << i)) != 0):
            count += 1
    return count

# i가 A에 포함 여부


def isIn(i, A):
    # v2부터 시작이니까 i-2
    # ex) 1 0 1
    # -> v4(o) v3(x) v2(o)
    if((A & (1 << (i-2))) != 0):
        return True
    return False

# 차집합 구하기


def diff(A, j):
    t = 1 << (j-2)
    return (A & (~t))


def minimum(W, D, i, A):
    minValue = INF
    minJ = 1
    n = len(W) - 1
    for j in range(2, n + 1):
        if isIn(j, A):
            m = W[i][j] + D[j][diff(A, j)]
            if minValue > m:
                minValue = m
                minJ = j
    return minValue, minJ


def travel(W):
    n = len(W) - 1
    size = 2 ** (n-1)
    D = [[0] * size for _ in range(n+1)]
    P = [[0] * size for _ in range(n+1)]
    for i in range(2, n+1):
        D[i][0] = W[i][1]
    for k in range(1, n-1):
        for A in range(1, size):
            if count(A, n) == k:
                for i in range(2, n + 1):
                    if not isIn(i, A):
                        D[i][A], P[i][A] = minimum(W, D, i, A)
    A = size - 1
    D[1][A], P[1][A] = minimum(W, D, 1, A)
    return D, P


N = int(input())

INF = 1e9
W = [[int(x) for x in input().split()] for _ in range(N)]

D, P = travel(W)
# print('D =')
# for i in range(1, len(D)):
#     print(D[i])
# print('P = ')
# for i in range(1, len(P)):
#     print(P[i])
# print('minlength = ', D[1][2**(len(W)-2)-1])
print(D[1][2**(len(W)-2)-1] + W[P[1][2**(len(W)-2)-1]][0])


# print(W)
# print(D)
# print(P)
