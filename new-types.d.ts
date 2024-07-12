declare namespace NodeJS {
  interface ProcessEnv {
    NEXTAUTH_SECRET: string;
    GITHUB_ID: string;
    GITHUB_SECRET: string;
  }
}
