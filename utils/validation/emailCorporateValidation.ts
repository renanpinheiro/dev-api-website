const arrayEmailsBlocks = [
  'gmail',
  'hotmail',
  'outlook',
  'webmail',
  'umbler',
  'teste',
  'testes',
  'test',
  'tests',
  'yahoo',
  'bol',
  'uol',
  'ig',
  'mozej',
  'mogmail',
  'linkapi',
  'wevo',
  'mailna',
  'apipaas',
]

const emailCorporateValidation = email => {
  if (email && email.split('@')[1]) {
    const corporateEmail = email.split('@')[1].split('.')[0]
    if (arrayEmailsBlocks.includes(corporateEmail)) {
      return false
    }
  }
  return true
}

export { emailCorporateValidation }
