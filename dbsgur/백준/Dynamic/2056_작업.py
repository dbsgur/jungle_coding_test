# https://www.acmicpc.net/problem/2056
import sys
from collections import deque

sys.stdin = open("input.txt")

input = sys.stdin.readline

N = int(input())

graph = [[]for _ in range(N+1)]
time = [0] * (N+1)
indegree = [0] * (N+1)
for i in range(N):
    workInformation = [int(x) for x in input().split()]
    time[i+1] = workInformation[0]
    if workInformation[-1] == 0:
        continue
    # print(f"workinformation : {workInformation[1]}")
    for j in range(1, workInformation[1]+1):
        # graph[i+1].append(workInformation[1+j])
        graph[workInformation[1+j]].append(i+1)
        indegree[i+1] += 1

# print(f"graph : {graph}")
# print(f"time : {time}")
# print(f"indegree : {indegree}")

dp = [0] * (N+1)
dq = deque()
for i in range(1, N+1):
    if indegree[i] == 0:
        dp[i] = time[i]
        dq.append(i)

while dq:
    node = dq.popleft()
    for next in graph[node]:
        indegree[next] -= 1
        # print(f"next: {next}")
        # print(f"node: {node}")
        # print(f"time[next] : {time[next]}")
        # print(f"dp[node] : {dp[node]}")
        # print(f"dp[next] : {dp[next]}")
        dp[next] = max(dp[next], time[next]+dp[node])
        # print(f"next  :: dp[next] : {dp[next]}")
        # print("##################")
        if indegree[next] == 0:
            dq.append(next)

print(max(dp))
