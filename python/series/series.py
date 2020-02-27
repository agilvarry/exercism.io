def slices(series, length):
    if length > len(series):
       raise ValueError("Length cannot be longer than series")
    elif length <1:
        raise ValueError("Length cannot be less than 1")
    return [series[i:i+length] for i in range(len(series)-length+1)]