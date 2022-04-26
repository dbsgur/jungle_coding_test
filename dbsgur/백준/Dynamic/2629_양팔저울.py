# https://www.acmicpc.net/problem/2629
# 다시풀기
import sys

sys.stdin = open("input.txt")
input = sys.stdin.readline

N = int(input())

weights = [int(x) for x in input().split()]

ballN = int(input())

ballWeights = [int(x) for x in input().split()]

# 추의 무게는 최대 500이므로 [[추의 개수*500] * 추의 개수]로 배열을 구성
# dp[추 개수][무게] = 가능 여부
dp = [[0 for _ in range((i+1)*500 + 1)] for i in range(N+1)]
# print(dp)
r = []


def cal(num, weight):
    if num > N:
        return
    if dp[num][weight]:
        return
    dp[num][weight] = 1

    cal(num+1, weight)
    cal(num+1, weight+weights[num-1])
    cal(num+1, abs(weight-weights[num-1]))


cal(0, 0)

for ball in ballWeights:
    if ball > 30 * 500:
        r.append("N")
        continue
    if dp[N][ball] == 1:
        r.append("Y")
    else:
        r.append("N")
print(*r)
