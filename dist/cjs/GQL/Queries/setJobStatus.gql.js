"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setJobStatus = void 0;
const graphql_request_1 = require("graphql-request");
exports.setJobStatus = (0, graphql_request_1.gql) `
  mutation setJobStatus($id: Int!, $status: JobStatus!) {
    setJobStatus(id: $id, status: $status)
  }
`;
