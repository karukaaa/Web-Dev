n = int(input())
a = []

for i in range(n):
    a.append(int(input()))

b = a[0]
r = a[0]

for i in range(n):
    if a[i]>b:
        r = b
        b = a[i]
    elif a[i] > r and a[i] != b:
        r = a[i]
print(r)