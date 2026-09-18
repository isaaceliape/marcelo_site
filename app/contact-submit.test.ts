import { describe, expect, it, vi } from "vitest";
import { submitContactForm } from "./contact-submit";

const payload = {
  name: "Maria Silva",
  email: "maria@exemplo.com",
  phone: "+55 11 99999-0000",
  message: "Gostaria de agendar uma avaliação.",
};

function mockFetch(response: Partial<Response>): typeof fetch {
  return vi.fn().mockResolvedValue({
    ok: true,
    json: () => Promise.resolve({}),
    ...response,
  });
}

describe("submitContactForm", () => {
  it("posts the payload as JSON to /api/contact", async () => {
    const fetchMock = mockFetch({ ok: true });

    await submitContactForm(payload, fetchMock);

    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  });

  it("resolves without throwing on success", async () => {
    await expect(
      submitContactForm(payload, mockFetch({ ok: true }))
    ).resolves.toBeUndefined();
  });

  it("throws the server error message on a 400 response", async () => {
    const fetchMock = mockFetch({
      ok: false,
      status: 400,
      json: () =>
        Promise.resolve({ error: "Nome, e-mail e mensagem são obrigatórios." }),
    });

    await expect(submitContactForm(payload, fetchMock)).rejects.toThrow(
      "Nome, e-mail e mensagem são obrigatórios."
    );
  });

  it("throws the server error message on a 500 response", async () => {
    const fetchMock = mockFetch({
      ok: false,
      status: 500,
      json: () => Promise.resolve({ error: "Erro ao enviar. Tente novamente." }),
    });

    await expect(submitContactForm(payload, fetchMock)).rejects.toThrow(
      "Erro ao enviar. Tente novamente."
    );
  });

  it("throws a fallback message when the error body has no message", async () => {
    const fetchMock = mockFetch({
      ok: false,
      status: 500,
      json: () => Promise.resolve({}),
    });

    await expect(submitContactForm(payload, fetchMock)).rejects.toThrow(
      "Erro ao enviar. Tente novamente."
    );
  });

  it("throws a fallback message when the error body is not JSON", async () => {
    const fetchMock = mockFetch({
      ok: false,
      status: 500,
      json: () => Promise.reject(new SyntaxError("Unexpected token")),
    });

    await expect(submitContactForm(payload, fetchMock)).rejects.toThrow(
      "Erro ao enviar. Tente novamente."
    );
  });

  it("propagates network failures", async () => {
    const fetchMock = vi
      .fn()
      .mockRejectedValue(new TypeError("Failed to fetch"));

    await expect(submitContactForm(payload, fetchMock)).rejects.toThrow(
      "Failed to fetch"
    );
  });
});
