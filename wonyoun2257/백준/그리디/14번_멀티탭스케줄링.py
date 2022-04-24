import sys
sys.stdin = open("wonyoung/input.txt", "r")
input = sys.stdin.readline

n, k = map(int, input().split())
arr = list(map(int, input().split()))

answer = 0

tap = []
for i in range(k):
  if len(tap) < n and arr[i] not in tap:
    tap.append(arr[i])
  else:
    checker = arr[i]
    if arr[i] not in tap:
      temp = []
      for el in tap:
        # 멀티텝에 곶혀있는 기기 중 다음 등장순서가 가장 느린것을 뽑는다.
        # 순서, 기기번호
        if el in arr[i:k]:
          temp.append((arr[i:k].index(el), el))
        else:
          temp.append((1000, el))
      temp.sort(reverse= True)
      tap.remove(temp[0][1])
      tap.append(arr[i])
      answer+=1

print(answer)
