import nodemailer from 'nodemailer'

interface IPayload extends ReadableStream<Uint8Array> {
  message: string
  email: string
  phone: string
  company: string
  role: string
  fullName: string
}

const partnerMail = async (req: Request, res) => {
  const { message, company, email, fullName, phone } = req.body as IPayload

  const transporter = nodemailer.createTransport({
    host: process.env.NEXT_PUBLIC_EMAIL_HOST,
    port: Number(process.env.NEXT_PUBLIC_EMAIL_PORT),
    secure: false,
    // auth: {
    //   user: '',
    //   pass: '',
    // },
    tls: {
      ciphers: 'SSLv3',
    },
  })

  await transporter
    .sendMail({
      from: `${fullName} <${email}>`,
      to: `${process.env.NEXT_PUBLIC_EMAIL_NAME} <${process.env.NEXT_PUBLIC_EMAIL_FROM}>`,
      subject: 'Parceria',
      html: `
    ${message}
    <br />
    <br />
    <hr />
    <span><b>Enviado por:</b> ${fullName}</span>
    <br />
    <span><b>Email:</b> ${email}</span>
    <br />
    <span><b>Telefone:</b> ${phone}</span>
    <br />
    <span><b>Empresa:</b> ${company}</span>
    <hr />
    `,
    })
    .catch(() => {
      return res.status(500).json({
        message: 'Não foi possivel enviar o email.',
      })
    })

  return res.status(200).json({
    message: 'Email enviado com sucesso',
  })
}

export default partnerMail
