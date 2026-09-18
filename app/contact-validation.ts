export interface ValidatableField {
  name: string;
  type: string;
  validity: {
    valueMissing: boolean;
    typeMismatch: boolean;
  };
}

export function contactValidationMessage(field: ValidatableField): string {
  if (field.validity.valueMissing) {
    if (field.name === "name") return "Por favor, preencha seu nome.";
    if (field.name === "email") return "Por favor, informe seu e-mail.";
    if (field.name === "message") return "Por favor, escreva sua mensagem.";
    return "Por favor, preencha este campo.";
  }
  if (field.validity.typeMismatch && field.type === "email") {
    return "Por favor, informe um e-mail válido.";
  }
  return "";
}
