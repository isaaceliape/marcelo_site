import { describe, expect, it } from "vitest";
import {
  contactValidationMessage,
  type ValidatableField,
} from "./contact-validation";

function field(overrides: Partial<ValidatableField> = {}): ValidatableField {
  return {
    name: "name",
    type: "text",
    validity: { valueMissing: false, typeMismatch: false },
    ...overrides,
  };
}

describe("contactValidationMessage", () => {
  it("asks for the name when it is missing", () => {
    expect(
      contactValidationMessage(
        field({ name: "name", validity: { valueMissing: true, typeMismatch: false } })
      )
    ).toBe("Por favor, preencha seu nome.");
  });

  it("asks for the email when it is missing", () => {
    expect(
      contactValidationMessage(
        field({
          name: "email",
          type: "email",
          validity: { valueMissing: true, typeMismatch: false },
        })
      )
    ).toBe("Por favor, informe seu e-mail.");
  });

  it("asks for the message when it is missing", () => {
    expect(
      contactValidationMessage(
        field({
          name: "message",
          validity: { valueMissing: true, typeMismatch: false },
        })
      )
    ).toBe("Por favor, escreva sua mensagem.");
  });

  it("falls back to a generic message for other missing fields", () => {
    expect(
      contactValidationMessage(
        field({
          name: "phone",
          validity: { valueMissing: true, typeMismatch: false },
        })
      )
    ).toBe("Por favor, preencha este campo.");
  });

  it("asks for a valid email on type mismatch", () => {
    expect(
      contactValidationMessage(
        field({
          name: "email",
          type: "email",
          validity: { valueMissing: false, typeMismatch: true },
        })
      )
    ).toBe("Por favor, informe um e-mail válido.");
  });

  it("prefers the missing message when both flags are set", () => {
    expect(
      contactValidationMessage(
        field({
          name: "email",
          type: "email",
          validity: { valueMissing: true, typeMismatch: true },
        })
      )
    ).toBe("Por favor, informe seu e-mail.");
  });

  it("returns an empty message when the field is valid", () => {
    expect(contactValidationMessage(field())).toBe("");
  });

  it("returns an empty message for type mismatch on non-email fields", () => {
    expect(
      contactValidationMessage(
        field({
          name: "phone",
          type: "tel",
          validity: { valueMissing: false, typeMismatch: true },
        })
      )
    ).toBe("");
  });
});
