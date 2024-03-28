def power(a,b):
    c = a
    for i in range(1,b):
        a*=c
    return a

print(power(2,3))
