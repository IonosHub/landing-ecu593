interface ImportMetaEnv {
  readonly PUBLIC_SITE_URL?: string;
  readonly PUBLIC_API_URL?: string;
  readonly PUBLIC_WHATSAPP_NUMBER?: string;
  readonly PUBLIC_SHOW_PENDING?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
