import sys
sys.stdin = open("wonyoung/input.txt", "r")
input = sys.stdin.readline

input_li = input().strip()

li = input_li.split('-')

answer = 0

if len(li) >1:
  temp = li[0].split('+')
  for t in temp:
    answer += int(t)
  
  for i in range(1,len(li)):
    temp = li[i].split('+')
    for t in temp:
      answer -= int(t)
else:
  answer = sum(list(map(int , input_li.split('+'))))

print(answer)