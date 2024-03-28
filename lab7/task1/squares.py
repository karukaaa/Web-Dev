import math

a = int(input())
b = int(input())

for i in range(a,b):
    if math.sqrt(i)==math.sqrt(i).__ceil__():
        print(i)