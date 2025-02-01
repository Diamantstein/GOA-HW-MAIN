#   I

def validate_pin(pin):
    return (len(pin) == 4 or len(pin) == 6 ) and pin.isdigit()


# II

def open_or_senior(data):
    return ["Senior" if age >= 55 and handicap >= 8 else "Open" for (age, handicap) in data]

# III


def min_max(lst):
    return[min(lst), max(lst)]


# IV

def arithmetic(a, b, operator):
    if operator == "add":
        return a+b
    
    elif operator == "subtract":
        return a-b
    
    elif operator == "multiply":
        return a*b
    
    elif operator == "divide":
        return a/b
    

# V

def capitals(word):
    final = []
    for index, char in enumerate(word):
        if char.isupper():
            final.append(index)
            
    return final



# VI

def array_diff(a, b):
    return [x for x in a if x not in b]



# VII

def to_weird_case(words):
    s = words.split()
    result = []

    for word in s:
        upper_letters = ''

        for i in range(len(word)):
            if i % 2 == 0:
                upper_letters += word[i].upper()

            else:
                upper_letters += word[i].lower()
        result.append(upper_letters)

    return ' '.join(result)



# VIII


def camel_case(s):
    ss = s.split(' ')
    word = [word.capitalize() for word in ss]
    final = ''.join(word)
    return final



# IX



def kebabize(st):
    kebabized = ''
    previous_is_upper = False

    for char in st:
        if char.isupper():
            if not previous_is_upper and kebabized:
                kebabized += '-'
            kebabized += char.lower()
            previous_is_upper = True
        elif char.isalpha():
            kebabized += char
            previous_is_upper = False

    return kebabized






