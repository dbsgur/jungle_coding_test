import sys
sys.stdin = open("wonyoung/input.txt", "r")
input = sys.stdin.readline

t = int(input())

for _ in range(t):
  n = int(input())
  arr = []
  temp1, temp2 = 0, 0
  answer = 0

  for _ in range(n):
    a, b = map(int, input().split())
    arr.append((a,b))
  arr.sort()

  for i in arr:
    if temp1 == 0 and temp2 == 0:
      temp1, temp2 = i[0], i[1]
      answer += 1
      continue
    
    if temp2 > i[1]:
      temp2 = i[1]
      answer+=1
  print(answer)