export const phoneFormatter = phone => {
  const value = phone.split(/(\(.*?\))/g)

  return {
    phoneAreaCode: value[1].replace('(', '').replace(')', ''),
    phoneNumber: value[2].replace('-', ''),
  }
}

export const fullnameFormatter = name => {
  const value = name.split(' ')

  return {
    firstname: value[0],
    lastname: value[1],
  }
}

const monthVariation = {
  '01': 'Janeiro',
  '02': 'Fevereiro',
  '03': 'Março',
  '04': 'Abril',
  '05': 'Maio',
  '06': 'Junho',
  '07': 'Julho',
  '08': 'Agosto',
  '09': 'Setembro',
  10: 'Outubro',
  11: 'Novembro',
  12: 'Dezembro',
}

export const convertDate = (date: string) => {
  const newDate = new Date(date)
  const day = newDate.getDate().toString().padStart(2, '0')
  const month = (newDate.getMonth() + 1).toString().padStart(2, '0')
  return {
    withMonth: `${day} de ${monthVariation[month]}`,
  }
}
