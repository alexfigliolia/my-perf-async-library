import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  verbose: true,
  generates: {
    "./src/GQL/Types/": {
      documents: ["src/GQL/Queries/*.gql.ts"],
      schema: "./src/GQL/Types/graphql-schema.graphql",
      preset: "client",
      plugins: [],
      presetConfig: {
        gqlTagName: "gql",
        fragmentMasking: false,
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
