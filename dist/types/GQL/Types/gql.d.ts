import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
declare const documents: {
    "\n  mutation setJobStatus($id: Int!, $status: JobStatus!) {\n    setJobStatus(id: $id, status: $status)\n  }\n": DocumentNode<types.SetJobStatusMutation, types.Exact<{
        id: number;
        status: types.JobStatus;
    }>>;
};
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export declare function gql(source: string): unknown;
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export declare function gql(source: "\n  mutation setJobStatus($id: Int!, $status: JobStatus!) {\n    setJobStatus(id: $id, status: $status)\n  }\n"): (typeof documents)["\n  mutation setJobStatus($id: Int!, $status: JobStatus!) {\n    setJobStatus(id: $id, status: $status)\n  }\n"];
export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
export {};