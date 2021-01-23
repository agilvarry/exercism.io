import string

def removeNonAscii(s): return filter(str.isalpha, s)

def is_pangram(sentence):
    alphabet = set(string.ascii_lowercase)
    sentence_set = set(removeNonAscii(sentence.lower()))
    return len(alphabet) == len(sentence_set)