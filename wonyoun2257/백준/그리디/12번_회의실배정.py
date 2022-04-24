import sys
sys.stdin = open("wonyoung/input.txt", "r")
input = sys.stdin.readline

n = int(input())
arr = [tuple(map(int, input().split())) for _ in range(n)]

arr.sort(key = lambda x:(x[1], x[0]))

answer = 0
idx = 0
temp = 0
for i in arr:
  if temp == -1:
    temp = i[1]
    answer +=1
    continue

  if temp > i[0]:
    continue
  else:
    answer +=1
    temp = i[1]

print(answer)
