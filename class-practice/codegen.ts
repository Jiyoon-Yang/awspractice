import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://main-practice.codebootcamp.co.kr/graphql",
  // documents: ["src/**/*.tsx", "src/**/*.ts"],
  documents: [
    "src/app/section19/19-04-search-debouncing-keyword-typescript/*.tsx",
  ],
  generates: {
    "src/app/commons/graphql/": {
      preset: "client",
    },
  },
};

export default config;
