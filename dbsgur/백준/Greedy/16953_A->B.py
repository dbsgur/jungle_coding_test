# https://www.acmicpc.net/problem/16953
import sys
from collections import deque

sys.stdin = open("input.txt")

input = sys.stdin.readline

A, B = map(int, input().split())

answer = 1
# TOP - BOTTOM
while (A != B):
    answer += 1
    tmp = B
    if B % 10 == 1:
        B //= 10
    elif B % 2 == 0:
        B //= 2
    if tmp == B:
        answer = -1
        break

print(answer)

# BOTTOM -> TOP
dq = deque()
dq.append((A, 1))
r = 0
while dq:
    n, t = dq.popleft()
    if n > B:
        continue
    if n == B:
        print(t)
        break
    dq.append((int(str(n)+"1"), t+1))
    dq.append((n*2, t+1))
else:
    print(-1)
