import nodemailer from 'nodemailer'

export default async (req, res) => {
  try {
    const { fullName, email, phone, company, role } = req.body

    const transporter = nodemailer.createTransport({
      host: process.env.NEXT_PUBLIC_SMTP,
      port: Number(process.env.NEXT_PUBLIC_PORT),
      secure: true,
      auth: {
        user: process.env.NEXT_PUBLIC_USER,
        pass: process.env.NEXT_PUBLIC_PASS,
      },
    })

    await transporter
      .sendMail({
        from: process.env.NEXT_PUBLIC_USER,
        to: 'michel.carnevali@devapi.com.br, luana@devapi.com.br',
        subject: `Solicitação de Parceria de Integração - ${company}`,
        text: `Nome: ${fullName} \n E-mail: ${email} \n Telefone: ${phone} \n Empresa: ${company} \n Cargo: ${role}`,
      })
      .catch(error => console.log(error))

    return res.status(200).json({
      message: 'E-mail enviado com sucesso! Em breve entraremos em contato.',
    })
  } catch (error) {
    return res.status(500).json({
      message: 'Erro ao enviar e-mail.',
    })
  }
}
