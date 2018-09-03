#!/bin/python3
# https://www.hackerrank.com/challenges/crush/problem

import os

# Complete the arrayManipulation function below.
def arrayManipulation(n, queries):
    zeros = [0]*(n+1)
    max = 0
    for query in queries:
        a, b, k = query
        zeros[a-1] += k
        if(b <= len(zeros)): zeros[b] -= k
    max = a = 0
    for i in zeros:
        a = a + i
        if(max < a): max = a
    return max

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    nm = input().split()

    n = int(nm[0])

    m = int(nm[1])

    queries = []

    for _ in range(m):
        queries.append(list(map(int, input().rstrip().split())))

    result = arrayManipulation(n, queries)

    fptr.write(str(result) + '\n')

    fptr.close()
