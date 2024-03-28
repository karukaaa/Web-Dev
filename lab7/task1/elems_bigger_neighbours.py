n = int(input())
a=[]
c=0
for i in range(n):
    a.append(int(input()))

for i in range(1,n-1):
    if a[i]>a[i-1] and a[i]>a[i+1]:
        c+=1

print(c)