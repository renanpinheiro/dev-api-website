export const validateOddNumber = (number: number): boolean => {
  const rest = number % 2
  if (rest === 0) {
    return true
  } else {
    return false
  }
}
