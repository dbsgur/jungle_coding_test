strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
dict = {}
len_str = len(strs)
for i in range(len_str):
    tmp = ''.join(sorted(list(strs[i])))
    # print(list(strs[i]))
    if tmp in dict:
        dict[tmp].append(strs[i])
    else:
        dict[tmp] = [strs[i]]

    # 키 : [원래문자] value : [문자들]
    # 같으면 반환
# print(dict.values())
answer = list(dict.values())
print(answer)
