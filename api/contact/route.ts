import { NextResponse } from "next/server";
import Resend from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body as {
      name?: string;
      email?: string;
      phone?: string;
      message?: string;
    };

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Nome, e-mail e mensagem são obrigatórios." },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: "Site Dr. Marcelo Goncalves <contato@marcelogoncalves.com>",
      to: ["contato@marcelogoncalves.com"],
      replyTo: email,
      subject: `Novo contato pelo site — ${name}`,
      html: `
        <div style="font-family: Inter, system-ui, sans-serif; color: #161816; line-height: 1.6;">
          <h2 style="font-family: 'Cormorant Garamond', Georgia, serif; font-weight: 600; font-size: 22px; margin: 0 0 16px;">
            Novo contato pelo site
          </h2>
          <p style="margin: 0 0 8px;"><strong>Nome:</strong> ${escapeHtml(name)}</p>
          <p style="margin: 0 0 8px;"><strong>E-mail:</strong> ${escapeHtml(email)}</p>
          ${phone ? `<p style="margin: 0 0 8px;"><strong>Telefone:</strong> ${escapeHtml(phone)}</p>` : ""}
          <p style="margin: 12px 0 0;"><strong>Mensagem:</strong></p>
          <p style="margin: 8px 0 0; white-space: pre-wrap; color: #3a3835;">${escapeHtml(message)}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, id: data.id }, { status: 200 });
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return NextResponse.json(
      { error: "Erro ao enviar. Tente novamente." },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
