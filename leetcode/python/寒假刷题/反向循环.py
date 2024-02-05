num = 1993
s = list(str(num))
print(s)
l = len(s)
temp = 0
for i in range(l):
    if s[i] == max(s[i:]):
        continue
    else:
        temp = s[i]
        s[i] = max(s[i:])
        for j in range(l - 1, i, -1):
            if s[j] == s[i]:
                s[j] = temp
                break
        break
print(int(''.join(s)))
