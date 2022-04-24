# https://www.acmicpc.net/problem/1700
import sys

sys.stdin = open("input.txt")

input = sys.stdin.readline

N, K = map(int, input().split())

flugs = [int(x) for x in input().split()]

multitab = []
count = 0
for i in range(K):
    flug = flugs[i]
    if flug in multitab:
        continue
    if len(multitab) < N:
        multitab.append(flug)
        continue

    # 멀티탬 다찼을 경우
    flag = False
    tmp = []
    for j in range(N):
        try:
            tmp.append(flugs[i:].index(multitab[j])-1)
        except:
            tmp.append(101)
    # multitab.pop(tmp.index(max(tmp)))
    # multitab.append(flug)
    # 👆 👇 시간 같음 ... 왜 ? 밑이 더 빠를것 같은뎅
    multitab[tmp.index(max(tmp))] = flug
    count += 1

print(count)

# test = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# print(test[3:6])
# test.pop(4)
# print(test[3:6])
