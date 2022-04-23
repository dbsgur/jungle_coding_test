# https://www.acmicpc.net/problem/2098
# 다시 풀기
# feat, 형규형
import sys
sys.stdin = open(‘input.txt’)
N = int(sys.stdin.readline())
W = [list(map(int, sys.stdin.readline().split())) for _ in range(N)]
for i in range(N):
    for j in range(N):
        if W[i][j] == 0:
            W[i][j] = 1e9
dp = [[1e9]*N for _ in range(1 << N)]
dp[0][0] = 0
for S in range(1 << N):
    for i in range(N):
        for j in range(N):
            if S & (1 << j):
                dp[S][i] = min(dp[S][i], dp[S & (~(1 << j))][j] + W[j][i])
print(dp[-1][0])

# feat DFS (fatest)
n = int(input())

INF = int(1e9)
dp = [[INF] * (1 << n) for _ in range(n)]


def dfs(x, visited):
    if visited == (1 << n) - 1:     # 모든 도시를 방문했다면
        if graph[x][0]:             # 출발점으로 가는 경로가 있을 때
            return graph[x][0]
        else:                       # 출발점으로 가는 경로가 없을 때
            return INF

    if dp[x][visited] != INF:       # 이미 최소비용이 계산되어 있다면
        return dp[x][visited]

    for i in range(1, n):           # 모든 도시를 탐방
        if not graph[x][i]:         # 가는 경로가 없다면 skip
            continue
        if visited & (1 << i):      # 이미 방문한 도시라면 skip
            continue

        # 점화식 부분(위 설명 참고)
        dp[x][visited] = min(dp[x][visited], dfs(
            i, visited | (1 << i)) + graph[x][i])
    return dp[x][visited]


graph = []
for i in range(n):
    graph.append(list(map(int, input().split())))

print(dfs(0, 1))


# fuck 오답

sys.stdin = open("input.txt")

input = sys.stdin.readline

# A의 원소 개수가 몇개인지


def count(A, n):
    count = 0
    for i in range(n):
        if ((A & (1 << i)) != 0):
            count += 1
    return count

# i가 A에 포함 여부


def isIn(i, A):
    # v2부터 시작이니까 i-2
    # ex) 1 0 1
    # -> v4(o) v3(x) v2(o)
    if((A & (1 << (i-2))) != 0):
        return True
    return False

# 차집합 구하기


def diff(A, j):
    t = 1 << (j-2)
    return (A & (~t))


def minimum(W, D, i, A):
    minValue = INF
    minJ = 1
    n = len(W) - 1
    for j in range(2, n + 1):
        if isIn(j, A):
            m = W[i][j] + D[j][diff(A, j)]
            if minValue > m:
                minValue = m
                minJ = j
    return minValue, minJ


def travel(W):
    n = len(W) - 1
    size = 2 ** (n-1)
    D = [[0] * size for _ in range(n+1)]
    P = [[0] * size for _ in range(n+1)]
    for i in range(2, n+1):
        D[i][0] = W[i][1]
    for k in range(1, n-1):
        for A in range(1, size):
            if count(A, n) == k:
                for i in range(2, n + 1):
                    if not isIn(i, A):
                        D[i][A], P[i][A] = minimum(W, D, i, A)
    A = size - 1
    D[1][A], P[1][A] = minimum(W, D, 1, A)
    return D, P


N = int(input())

INF = 1e9
W = [[-1] * (N+1)]
for _ in range(N):
    tmp = [-1]
    tmp.extend(int(x) for x in input().split())
    W.append(tmp)

D, P = travel(W)
print('minlength = ', D[1][2**(len(W)-2)-1])
