import { submitLead, type LeadInput } from '../lib/leads';

/** Ecuadorian mobile numbers: 09XXXXXXXX. */
const PHONE_PATTERN = /^09\d{8}$/;

const form = document.querySelector<HTMLFormElement>('[data-lead-form]');

if (form) {
  const apiUrl = form.dataset.apiUrl ?? '';
  const whatsappNumber = form.dataset.whatsapp ?? '';
  const status = form.querySelector<HTMLElement>('[data-form-status]')!;
  const submit = form.querySelector<HTMLButtonElement>('button[type="submit"]')!;
  const programSelect = form.querySelector<HTMLSelectElement>('select[name="program"]')!;
  const phoneInput = form.querySelector<HTMLInputElement>('input[name="phone"]')!;

  // Program CTAs elsewhere on the page preselect the program.
  document.querySelectorAll<HTMLAnchorElement>('[data-program]').forEach((link) => {
    link.addEventListener('click', () => {
      programSelect.value = link.dataset.program ?? '';
    });
  });

  phoneInput.addEventListener('input', () => {
    phoneInput.value = phoneInput.value.replace(/\D/g, '').slice(0, 10);
    phoneInput.setCustomValidity('');
  });

  const read = (): LeadInput => {
    const data = new FormData(form);
    const value = (key: string) => String(data.get(key) ?? '');
    return {
      firstName: value('firstName'),
      lastName: value('lastName'),
      phone: value('phone'),
      email: value('email'),
      program: value('program'),
      modality: value('modality'),
      message: value('message'),
    };
  };

  const whatsappFallback = (lead: LeadInput) => {
    const text = `Hola, soy ${lead.firstName} ${lead.lastName}. Quiero información del programa ${lead.program} (${lead.modality}). Mi número es ${lead.phone}.`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  const setState = (state: 'idle' | 'sending' | 'success' | 'error', ...message: (string | Node)[]) => {
    form.dataset.state = state;
    submit.disabled = state === 'sending';
    status.replaceChildren(...message);
  };

  const strong = (text: string) => Object.assign(document.createElement('strong'), { textContent: text });
  const link = (href: string, text: string) =>
    Object.assign(document.createElement('a'), { href, textContent: text, target: '_blank', rel: 'noopener' });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (!PHONE_PATTERN.test(phoneInput.value)) {
      phoneInput.setCustomValidity('Escribe un celular de 10 dígitos que empiece con 09.');
    }
    if (!form.reportValidity()) return;

    const lead = read();
    setState('sending', 'Enviando tu solicitud…');
    const result = await submitLead(apiUrl, lead);

    if (result.ok) {
      setState(
        'success',
        strong(`¡Solicitud recibida, ${lead.firstName}!`),
        ` Secretaría te escribirá al ${lead.phone} muy pronto.`,
      );
      form.reset();
      return;
    }

    setState(
      'error',
      'No pudimos enviar tu solicitud en este momento. ',
      link(whatsappFallback(lead), 'Envíala por WhatsApp'),
      ' y te atendemos igual.',
    );
  });
}
