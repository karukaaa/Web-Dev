a = input()
a = a[::-1]

c=0
n=0

for i in a:
    if i=="1":
        c+=2**n
    n+=1

print(c)
