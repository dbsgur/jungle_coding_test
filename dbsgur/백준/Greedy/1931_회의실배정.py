# https://www.acmicpc.net/problem/1931
import sys

sys.stdin = open("input.txt")

input = sys.stdin.readline

N = int(input())

conferences = [[int(x) for x in input().split()] for _ in range(N)]

# 회의를 끝나는시간(우선순위), 시작시간 순으로 정렬
conferences.sort(key=lambda x: (x[1], x[0]))


count = 0
endT = 0
for st, et in conferences:
    # 회의 시작시간이 이전 종료시간보다 같거나 크다면 endT 갱신
    if st >= endT:
        endT = et
        count += 1

print(count)
