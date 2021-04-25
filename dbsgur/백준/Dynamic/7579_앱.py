# https://www.acmicpc.net/problem/7579
# 다시 풀기
import sys

sys.stdin = open("input.txt")

input = sys.stdin.readline

N, M = map(int, input().split())

# apps = [[0] * 2 for _ in range(N)]

memorys = [int(x) for x in input().split()]

costs = [int(x) for x in input().split()]

totalCost = sum(costs)
dp = [[0]*(totalCost+1) for _ in range(N+1)]

result = 1e9

# print(dp)
for i in range(N):
    memory = memorys[i]
    cost = costs[i]
    for j in range(totalCost):
        if j < cost:  # 현재 앱을 비활성화할만큼의 cost가 충분하지 않을 경우
            dp[i][j] = dp[i-1][j]
        else:  # 같은 cost내에서 현재 앱을 끈 뒤의 byte와 현재 앱을 끄지 않은 뒤의 byte를 비교
            dp[i][j] = max(memory + dp[i-1][j-cost], dp[i-1][j])
        if dp[i][j] >= M:
            # print(f"j : {j} dp[{i}][{j}] : {dp[i][j]}")
            result = min(result, j)

# print(f"dp : \n{dp}")
if M == 0:
    print(0)
elif N == 1:
    print(costs[0])
elif result == 1e9:
    print(N*M)
else:
    print(result)
