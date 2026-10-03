/**
 * Client for the Ecu593 system's public lead endpoint
 * (backend: src/modules/leads/leads.controller.ts → POST /v1/leads/register).
 * New leads land in the secretaries' pipeline.
 */

export interface LeadInput {
  firstName: string;
  lastName: string;
  phone: string;
  email?: string;
  program: string;
  modality: string;
  message?: string;
}

export type LeadResult =
  | { ok: true }
  | { ok: false; reason: 'not-configured' | 'network' | 'rejected'; detail?: string };

const toPayload = (input: LeadInput) => ({
  firstName: input.firstName.trim(),
  lastName: input.lastName.trim(),
  phone: input.phone.trim(),
  ...(input.email?.trim() ? { email: input.email.trim() } : {}),
  source: 'web',
  // The backend expects database ids for language/course; program and modality travel as notes.
  notes: [
    'Origen: landing',
    `Programa: ${input.program}`,
    `Modalidad: ${input.modality}`,
    input.message?.trim() ? `Mensaje: ${input.message.trim()}` : '',
  ]
    .filter(Boolean)
    .join(' · '),
});

export async function submitLead(apiUrl: string, input: LeadInput): Promise<LeadResult> {
  if (!apiUrl) return { ok: false, reason: 'not-configured' };

  try {
    const response = await fetch(`${apiUrl.replace(/\/$/, '')}/v1/leads/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(toPayload(input)),
    });
    if (response.ok) return { ok: true };
    return { ok: false, reason: 'rejected', detail: await response.text() };
  } catch (error) {
    return { ok: false, reason: 'network', detail: String(error) };
  }
}
