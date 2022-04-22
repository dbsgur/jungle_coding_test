import sys

sys.stdin = open("input.txt")

input = sys.stdin.readline

T = int(input())

N = [int(input()) for _ in range(T)]

m = max(N)

fibo = [[0, 0] for _ in range(m+1)]

fibo[0] = [1, 0]
fibo[1] = [0, 1]
# fibo[2] = [1, 1]

for i in range(2, m+1):
    fibo[i] = [fibo[i-1][0] + fibo[i-2][0], fibo[i-1][1] + fibo[i-2][1]]

for num in N:
    print(*fibo[num])
