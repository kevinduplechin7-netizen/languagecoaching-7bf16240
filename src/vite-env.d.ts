/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SUBSTACK_PUBLICATION_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
