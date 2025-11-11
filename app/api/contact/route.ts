import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    // Validação básica
    if (!name || !email || !message) {
      return Response.json(
        { error: "Campos obrigatórios não preenchidos" },
        { status: 400 }
      )
    }

    // Configurar transporte de email
    // ⚠️ IMPORTANTE: Configure as variáveis de ambiente
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    // Email para você (administrador)
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Novo contato do portfólio: ${name}`,
      html: `
        <h2>Novo Contato Recebido</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <hr>
        <p><small>Responda diretamente para: ${email}</small></p>
      `,
    })

    // Email de confirmação para o visitante
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Recebemos sua mensagem! 🎉",
      html: `
        <h2>Oi ${name}!</h2>
        <p>Obrigado por entrar em contato através do meu portfólio.</p>
        <p>Sua mensagem foi recebida com sucesso e em breve retornaremos com resposta.</p>
        <hr>
        <p><strong>Sua mensagem:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <hr>
        <p>Atenciosamente,<br>Lucas Silva</p>
      `,
    })

    return Response.json(
      { success: true, message: "Mensagem enviada com sucesso!" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Erro ao enviar email:", error)
    return Response.json(
      { error: "Erro ao processar a solicitação" },
      { status: 500 }
    )
  }
}
