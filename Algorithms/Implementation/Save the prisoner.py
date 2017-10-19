t = int(input().strip())

n, m, s = input().strip().split(' ')
n, m, s = [int(n), int(m), int(s)]

for case in range(t):
    for i in range(1, round(len(n)/m)):
        
        #if this is the last sweet we store the id
        if(m < 2):
            warned = s
            break
        else:
            m -= 1
            
        #if the loop does a cycle bigger than the number of prisoners reset the prisoner id to 1
        if(i >= len(n)):
            s = 1
        else:            
            s += 1