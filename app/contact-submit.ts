export interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export async function submitContactForm(
  payload: ContactPayload,
  fetchImpl: typeof fetch = fetch
): Promise<void> {
  const response = await fetchImpl("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const result = (await response.json().catch(() => null)) as {
      error?: string;
    } | null;
    throw new Error(result?.error || "Erro ao enviar. Tente novamente.");
  }
}
