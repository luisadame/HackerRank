#!/bin/python3

n,k = input().strip().split(' ')
n,k = [int(n),int(k)]
a = [int(a_temp) for a_temp in input().strip().split(' ')]

pairs = 0

for i in range(len(a)):
    for j in range(1, len(a)):
        if(i < j and (a[i] + a[j]) % k == 0):
            pairs += 1
            
print(pairs)