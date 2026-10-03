/**
 * A value we do not know yet. Use `pending("what is missing")` anywhere in
 * `src/config` or `src/data` instead of inventing content. Every pending value
 * is listed in PENDIENTES.md.
 */
export interface Pending {
  readonly pending: true;
  readonly label: string;
}

export type Maybe<T> = T | Pending;

export const pending = (label: string): Pending => ({ pending: true, label });

export const isPending = (value: unknown): value is Pending =>
  typeof value === 'object' && value !== null && (value as Pending).pending === true;

/** Pending slots are visible in dev, or in a preview build with PUBLIC_SHOW_PENDING=true. */
export const showPending =
  import.meta.env.DEV || import.meta.env.PUBLIC_SHOW_PENDING === 'true';
