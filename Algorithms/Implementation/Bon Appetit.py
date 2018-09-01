n, k = input().strip().split(' ')
n, k = [int(n), int(k)]
items = [int(item) for item in input().strip().split(' ')]
charged = int(input())

items.pop(k)
actual = sum(items) / 2

if(actual != charged):
    print(int(charged - actual))
else:
    print('Bon Appetit')    