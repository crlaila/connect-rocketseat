import { defineConfig } from "orval";

export default defineConfig({
  // nome pra minha api
  api: {
    input: "http://localhost:3333/docs/json",
    output: {
      // arquivo gerado automatico com base na doc
      target: "./src/http/api.ts",
      client: "fetch",
      httpClient: "fetch",
      // apaga o arquivo anterior caso exista
      clean: true,
      baseUrl: "http://localhost:3333",

      override: {
        fetch: {
          // desabilita o retorno do tipo httpResponse
          // para evitar conflitos com o Next.js
          includeHttpResponseReturnType: false,
        },
      },
    },
  },
});
