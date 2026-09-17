import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body as {
      name?: string;
      email?: string;
      phone?: string;
      message?: string;
    };

    if (!resend) {
      return NextResponse.json(
        { error: "Serviço de e-mail não configurado no servidor." },
        { status: 500 }
      );
    }

    const safeEmail = String(email || "").trim();
    const safeName = String(name || "").trim();
    const safeMessage = String(message || "").trim();
    const safePhone = String(phone || "").trim();

    if (!safeName || !safeEmail || !safeMessage) {
      return NextResponse.json(
        { error: "Nome, e-mail e mensagem são obrigatórios." },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: "Dr. Marcelo Goncalves <teste@resend.dev>",
      to: ["contato@marcelogoncalves.com", "isaaceliape@gmail.com"],
      replyTo: safeEmail,
      subject: `Novo contato pelo site, ${safeName}`,
      html: `
        <div style="font-family: Inter, system-ui, sans-serif; color: #161816; line-height: 1.6;">
          <h2 style="font-family: 'Cormorant Garamond', Georgia, serif; font-weight: 600; font-size: 22px; margin: 0 0 16px;">
            Novo contato pelo site
          </h2>
          <p style="margin: 0 0 8px;"><strong>Nome:</strong> ${escapeHtml(safeName)}</p>
          <p style="margin: 0 0 8px;"><strong>E-mail:</strong> ${escapeHtml(safeEmail)}</p>
          ${safePhone ? `<p style="margin: 0 0 8px;"><strong>Telefone:</strong> ${escapeHtml(safePhone)}</p>` : ""}
          <p style="margin: 12px 0 0;"><strong>Mensagem:</strong></p>
          <p style="margin: 8px 0 0; white-space: pre-wrap; color: #3a3835;">${escapeHtml(safeMessage)}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
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
