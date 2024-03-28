import math

n = int(input())
i=1

while i<=n:
    if math.sqrt(i) == math.sqrt(i).__ceil__():
        print(i)
    i+=1

