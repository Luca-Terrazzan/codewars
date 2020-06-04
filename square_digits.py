# https://www.codewars.com/kata/546e2562b03326a88e000020/train/python

# Welcome. In this kata, you are asked to square every digit of a number.

# For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

# Note: The function accepts an integer and returns an integer

def square_digits(num):
    # Convert the number to string to faciliate looping over digits
    stringedNum = str(num)
    squaredString = ''

    for digit in stringedNum:
        # For each digit, convert it back to int and square it
        numdigit = int(digit)
        squaredString += str(numdigit*numdigit)

    return int(squaredString)

print(square_digits(9119))
