declare namespace NodeJS {
  interface ProcessEnv {
    NEXTAUTH_SECRET: string;
    GITHUB_ID: string;
    GITHUB_SECRET: string;
    NEXT_PUBLIC_SERVICE_DOMAIN: string;
    NEXT_PUBLIC_API_KEY: string;
  }
}
