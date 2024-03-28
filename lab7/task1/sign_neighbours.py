n = int(input())
a=[]
c = False

for i in range(n):
    a.append(int(input()))

for i in range(1,n-1):
    if (a[i] >= 0 and a[i-1] >= 0) or (a[i] >= 0 and a[i+1] >= 0):
        c = True
    elif (a[i] < 0 and a[i-1] < 0) or (a[i] < 0 and a[i+1] <0):
        c = True

if c==True:
    print("YES")
else:
    print("NO")


