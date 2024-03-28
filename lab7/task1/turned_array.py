n = int(input())
a=[]

for i in range(n):
    a.append(int(input()))

i=0
j=n-1

c=0

while i<j:
    c = a[i]
    a[i] = a[j]
    a[j] = c
    i+=1
    j-=1

print(a)