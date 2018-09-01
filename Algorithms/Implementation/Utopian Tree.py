#!/bin/python3

t = int(input().strip())
for a0 in range(t):
    height = 1
    n = int(input().strip())
    for i in range(1, n + 1):
        if(i % 2 != 0):
            height *= 2
        else:
            height += 1
    print(height)