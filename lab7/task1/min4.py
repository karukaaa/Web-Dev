def min (a,b,c,d):
    r = a if a<b else b
    r = r if r<c else c
    r = r if r<d else d

    return r

print(min(4,4,6,7))