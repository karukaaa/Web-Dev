x = int(input())
y = int(input())
z = int(input())
n = int(input())

c = [[i,j,k] for i in range(x+1) for j in range(y+1) for k in range(z+1)]

r = [e for e in c if sum(e)!=n]

print(r)