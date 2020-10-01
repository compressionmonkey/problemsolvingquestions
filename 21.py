s=list('hefg')
if (sorted(s,reverse=True))==s:
    print("no answer")
else:
    for i in range(len(s) - 1, 0, -1):
        if s[i] > s[i - 1]:
            lft = s[:i]
            rgt = s[i:]
            break

    rgt =(sorted(rgt))

    for i in range(len(rgt)):
        if lft[len(lft) - 1] < rgt[i]:
            t = lft[len(lft) - 1]
            lft[len(lft) - 1] = rgt[i]
            rgt[i] = t
            break


    print(''.join(lft+rgt))