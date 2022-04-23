# https://www.acmicpc.net/problem/1946
import sys

sys.stdin = open("input.txt")

input = sys.stdin.readline

T = int(input())

for _ in range(T):
    N = int(input())
    # 서류 심사 성적 순위, 면접성적의 순위
    # 합격한 한명에게라도 서류, 면접 둘 중하나라도 지면 안됨
    scores = [[int(x) for x in input().split()] for _ in range(N)]
    scores.sort()
    standI = scores[0][1]
    count = 1
    for i in range(1, N):
        if standI > scores[i][1]:
            count += 1
            standI = scores[i][1]

    print(count)
