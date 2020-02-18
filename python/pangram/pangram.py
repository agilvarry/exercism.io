import string

def is_pangram(sentence):
    
    alphabet = set(string.ascii_lowercase)
    sentence_set = set(removeNonAscii(sentence))

    if len(alphabet) > len(sentence_set) and len(sentence_set) > 0:
        return True
    else:
        return False

def removeNonAscii(s): return "".join(filter(lambda x: ord(x)<128, s))