def next_id(arr: []):
    return min(set(arr) ^ set(range(max(arr) + 2))) if arr else 0

myarr = [3, 5, 5, 5, 7, 0, 4, 2, 11]
print(next_id(myarr))

myarr2 = set(range(max(myarr) + 2))
print(set(myarr) ^ set(myarr2))

myarr = []
print(next_id(myarr))

myarr = list(range(99999))
print(next_id(myarr))
