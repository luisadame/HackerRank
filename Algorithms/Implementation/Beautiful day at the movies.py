i, j, k = input().strip().split(' ')
i, j, k = [int(i), int(j), int(k)]
days = range(i, j + 1)

def reverse(n):
    return int(str(n)[::-1])

def isBeautifulDay(day):
    number = (day - reverse(day)) / k
    return True if float(number).is_integer() else False

counter = 0

# Evaluate the days
for day in days:
    if(isBeautifulDay(day)):
        counter += 1
        
print(counter)