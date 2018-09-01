from math import floor

def viral(days):
    m = 5
    share = 3
    reached = 0
    for i in range(days):
        reached += floor(m/2)
        m = floor(m/2) * share
    return reached
        
print(viral(int(input().strip())))