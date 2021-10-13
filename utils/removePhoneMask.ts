export const removePhoneMask = (phone: string) => {
  return phone.replace(/[\(\)\ \s-]/g, '')
}
