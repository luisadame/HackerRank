#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the dynamicArray
function below.
def dynamicArray(n, queries):
    seqList = [[] for x in range(n)]
    lastAnswer = 0
    result = []

    for query in queries:
        q, x, y = query
        seq = seqList[(x ^ lastAnswer) % n]

        if q == 1:
            seq.append(y)
        else:
            lastAnswer = seq[y % len(seq)]
            result.append(lastAnswer)

    return result

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

nq = input().rstrip().split()

n = int(nq[0])

q = int(nq[1])

queries = []

for _ in range(q):
    queries.append(list(map(int, input().rstrip().split())))

result = dynamicArray(n, queries)

fptr.write('\n'.join(map(str, result)))
fptr.write('\n')

fptr.close()
