def xor(x, y):
    return int((x or y) and not(x and y))

print(xor(1, 1))