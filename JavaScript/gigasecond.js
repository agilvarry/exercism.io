const gigaMillisecond = 10**9 * 1000
export const gigasecond = (date) => {
  return new Date(date.getTime() + gigaMillisecond)
}