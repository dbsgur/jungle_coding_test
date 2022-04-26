# https://www.acmicpc.net/problem/14852
import sys

sys.stdin = open("input.txt")
input = sys.stdin.readline

N = int(input())
# N+2 를 해주는 이유
# if) N == 1이면 indexError가 뜸
dp = [0] * (N+2)
dp[0] = 1
dp[1] = 2
dp[2] = 7
# dp[3] = 22
if N <= 2:
    print(dp[N])
    sys.exit(0)
for i in range(3, N+1):
    dp[i] = (dp[i-1]*3 + dp[i-2] - dp[i-3]) % 1000000007

print(dp[N] % 1000000007)
