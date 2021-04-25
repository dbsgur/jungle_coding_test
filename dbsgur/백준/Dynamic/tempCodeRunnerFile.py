
    memory = memorys[i]
    cost = costs[i]
    for j in range(totalCost):
        if j < cost:  # 현재 앱을 비활성화할만큼의 cost가 충분하지 않을 경우
            dp[i][j] = dp[i-1][j]
        else:  # 같은 cost내에서 현재 앱을 끈 뒤의 byte와 현재 앱을 끄지 않은 뒤의 byte를 비교
            dp[i][j] = max(memory + dp[i-1][j-cost], dp[i-1][j])
        if dp[i][j] >= M:
            result = min(result