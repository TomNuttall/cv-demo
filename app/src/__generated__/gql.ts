/* eslint-disable */
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
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  query GetMyApplications {\n    getMyApplications\n  }\n": typeof types.GetMyApplicationsDocument,
    "\n  query GetCV($id: String) {\n    getCV(id: $id) {\n      profile {\n        name\n        email\n        github\n        about\n      }\n      employment {\n        company\n        location\n        projectType\n        projectDetails\n        role\n        roleDetails\n        yearFrom\n        yearTo\n      }\n      education {\n        course\n        courseDetails\n        school\n        yearFrom\n        yearTo\n      }\n      skills {\n        languages\n        tools\n        certificates\n      }\n    }\n  }\n": typeof types.GetCvDocument,
    "\n  query GetCoveringLetter($id: String) {\n    getCoveringLetter(id: $id) {\n      letter\n    }\n  }\n": typeof types.GetCoveringLetterDocument,
};
const documents: Documents = {
    "\n  query GetMyApplications {\n    getMyApplications\n  }\n": types.GetMyApplicationsDocument,
    "\n  query GetCV($id: String) {\n    getCV(id: $id) {\n      profile {\n        name\n        email\n        github\n        about\n      }\n      employment {\n        company\n        location\n        projectType\n        projectDetails\n        role\n        roleDetails\n        yearFrom\n        yearTo\n      }\n      education {\n        course\n        courseDetails\n        school\n        yearFrom\n        yearTo\n      }\n      skills {\n        languages\n        tools\n        certificates\n      }\n    }\n  }\n": types.GetCvDocument,
    "\n  query GetCoveringLetter($id: String) {\n    getCoveringLetter(id: $id) {\n      letter\n    }\n  }\n": types.GetCoveringLetterDocument,
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
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetMyApplications {\n    getMyApplications\n  }\n"): (typeof documents)["\n  query GetMyApplications {\n    getMyApplications\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetCV($id: String) {\n    getCV(id: $id) {\n      profile {\n        name\n        email\n        github\n        about\n      }\n      employment {\n        company\n        location\n        projectType\n        projectDetails\n        role\n        roleDetails\n        yearFrom\n        yearTo\n      }\n      education {\n        course\n        courseDetails\n        school\n        yearFrom\n        yearTo\n      }\n      skills {\n        languages\n        tools\n        certificates\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetCV($id: String) {\n    getCV(id: $id) {\n      profile {\n        name\n        email\n        github\n        about\n      }\n      employment {\n        company\n        location\n        projectType\n        projectDetails\n        role\n        roleDetails\n        yearFrom\n        yearTo\n      }\n      education {\n        course\n        courseDetails\n        school\n        yearFrom\n        yearTo\n      }\n      skills {\n        languages\n        tools\n        certificates\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetCoveringLetter($id: String) {\n    getCoveringLetter(id: $id) {\n      letter\n    }\n  }\n"): (typeof documents)["\n  query GetCoveringLetter($id: String) {\n    getCoveringLetter(id: $id) {\n      letter\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;