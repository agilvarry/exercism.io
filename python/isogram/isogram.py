def is_isogram(string):
    only_alpha = list(filter(lambda s: s.isalpha(), string.lower()))
    unique_alpha = set(only_alpha)
    return len(unique_alpha) == len(only_alpha) 
