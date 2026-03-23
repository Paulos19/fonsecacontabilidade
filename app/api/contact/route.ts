import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: Number(process.env.EMAIL_SERVER_PORT),
      secure: process.env.EMAIL_SERVER_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    });

    const htmlTemplate = `
      <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #050505; color: #ffffff; padding: 40px; border-radius: 12px; border: 1px solid #1a1a1a;">
        <h2 style="color: #37A674; margin-bottom: 24px; font-weight: 300;">Olá, ${name}!</h2>
        <p style="color: #cccccc; font-size: 16px; line-height: 1.6; font-weight: 300;">
          Recebemos sua mensagem com sucesso. Um especialista de alta performance da <strong>Fonseca Contabilidade</strong> estudará seu caso e entrará em contato muito em breve para agendar seu diagnóstico estratégico.
        </p>
        
        <div style="background-color: #0a0a0a; padding: 24px; border-radius: 8px; margin-top: 32px; border-left: 4px solid #37A674;">
          <h3 style="color: #ffffff; margin-top: 0; font-size: 14px; text-transform: uppercase; letter-spacing: 2px;">Resumo da sua Mensagem</h3>
          <p style="color: #888888; font-style: italic; line-height: 1.5; margin-bottom: 0;">"${message}"</p>
        </div>
        
        <p style="color: #666666; font-size: 13px; margin-top: 40px; border-top: 1px solid #1a1a1a; padding-top: 20px;">
          Este é um e-mail automático. Por favor, aguarde o contato do nosso time comercial.
          <br/><br/>
          <strong>Fonseca Contabilidade</strong>
        </p>
      </div>
    `;

    // Dispara o email rico para o cliente
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: email,
      subject: "Seu contato foi recebido - Fonseca Contabilidade",
      html: htmlTemplate,
    });

    // Dispara o email de alerta padronizado para o próprio contador (admin)
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_SERVER_USER,
      subject: `🚨 Novo Lead Capturado: ${name}`,
      html: `
        <h2>Novo Lead na Landing Page</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>WhatsApp:</strong> ${phone}</p>
        <p><strong>Mensagem:</strong></p>
        <blockquote style="background:#eee;padding:10px;">${message}</blockquote>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email Error:", error);
    return NextResponse.json({ error: "Erro interno no envio de email" }, { status: 500 });
  }
}
