vowels = 'aeiouAEIOU'


def disemvowel(string: str) -> str:
    if not string:
        return ''

    word = ''
    for char in string:
        if char not in vowels:
            word += char

    return word
