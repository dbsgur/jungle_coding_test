# https://www.acmicpc.net/problem/1339
import sys
import re

sys.stdin = open("input.txt")

input = sys.stdin.readline

N = int(input())

words = [[]for _ in range(8)]
print(words)
# words에 저장해야하는 것 -> 몇번 등장 ? 알파벳, 어디인덱스
# for _ in range(N):
#     tmp = list(input().strip())
#     idx = len(tmp)
#     for i in range(len(tmp)):
#         words.append((tmp[i], idx-i))


# print(words)
# # IDEA
# # 가장 긴놈(idx제일 큰놈) 찾아서 앞에서부터 가장 자주 나오는 애 9 주기
# words.sort(key=lambda x: (-x[1]))
# # words.sort(key=lambda x: -len(x))
# print(words)
