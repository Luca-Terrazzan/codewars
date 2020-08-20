def next_id(arr: []):
    if not arr:
        return 0
    # print(arr)
    arr = list(set(arr))
    arr.sort()
    reference = list(range(max(arr) + 1))

    diff = list(set(arr).symmetric_difference(reference))

    return diff[0] if diff else arr[-1] + 1

myarr = [3, 5, 5, 5, 7, 0, 4, 2, 11]
print(next_id(myarr))

myarr = []
print(next_id(myarr))
