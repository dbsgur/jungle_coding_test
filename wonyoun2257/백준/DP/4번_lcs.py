# 다시풀어보기
import sys
sys.stdin = open("wonyoung/input.txt", "r")
input = sys.stdin.readline

a_str = list(input().strip())
b_str = list(input().strip())
answer = [0]*len(b_str)

for i in range(len(a_str)):
  cnt = 0
  checker = a_str[i]
  for j in range(len(b_str)):
    if cnt < answer[j]:
      cnt = answer[j]
    elif a_str[i] == b_str[j]:
      answer[j] = cnt+1
print(answer)
print(max(answer))