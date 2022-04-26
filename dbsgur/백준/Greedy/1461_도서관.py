# https://www.acmicpc.net/problem/16953
import sys

sys.stdin = open("input.txt")

input = sys.stdin.readline

N, M = map(int, input().split())

books = [int(x) for x in input().split()]

books.sort()
# + - divide
answer = 0
left = []  # -
right = []  # +
for book in books:
    if book < 0:
        left.append(book)
    else:
        right.append(book)

distance = []
left.sort()
for i in range(len(left) // M):
    distance.append(abs(left[M*i]))
if len(left) % M > 0:
    distance.append(abs(left[(len(left)//M)*M]))

right.sort(reverse=True)
for i in range(len(right) // M):
    distance.append(abs(right[M*i]))
if len(right) % M > 0:
    distance.append(abs(right[(len(right)//M)*M]))

distance.sort()
answer = distance.pop()
answer += 2*sum(distance)
print(answer)
