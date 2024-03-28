n = int(input())

a=[]
c=0
for i in range(n):
    a.append(int(input()))
    if a[i]>0:
        c+=1
print(c)