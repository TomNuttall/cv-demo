/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Cv = {
  __typename?: 'CV';
  education: Array<Education>;
  employment: Array<Employment>;
  profile: Profile;
  skills: Skills;
};

export type CoveringLetter = {
  __typename?: 'CoveringLetter';
  letter: Array<Scalars['String']['output']>;
};

export type Education = {
  __typename?: 'Education';
  course: Scalars['String']['output'];
  courseDetails: Array<Scalars['String']['output']>;
  school: Scalars['String']['output'];
  yearFrom: Scalars['String']['output'];
  yearTo?: Maybe<Scalars['String']['output']>;
};

export type Employment = {
  __typename?: 'Employment';
  company: Scalars['String']['output'];
  location: Scalars['String']['output'];
  projectDetails: Array<Scalars['String']['output']>;
  projectType: Scalars['String']['output'];
  role: Scalars['String']['output'];
  roleDetails: Array<Scalars['String']['output']>;
  yearFrom: Scalars['String']['output'];
  yearTo?: Maybe<Scalars['String']['output']>;
};

export type Profile = {
  __typename?: 'Profile';
  about: Scalars['String']['output'];
  email: Scalars['String']['output'];
  github: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  getCV?: Maybe<Cv>;
  getCoveringLetter?: Maybe<CoveringLetter>;
};

export type Skills = {
  __typename?: 'Skills';
  certificates: Array<Scalars['String']['output']>;
  languages: Array<Scalars['String']['output']>;
  tools: Array<Scalars['String']['output']>;
};

export type GetCvQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCvQuery = { __typename?: 'Query', getCV?: { __typename?: 'CV', profile: { __typename?: 'Profile', name?: string | null, email: string, github: string, about: string }, employment: Array<{ __typename?: 'Employment', company: string, location: string, projectType: string, projectDetails: Array<string>, role: string, roleDetails: Array<string>, yearFrom: string, yearTo?: string | null }>, education: Array<{ __typename?: 'Education', course: string, courseDetails: Array<string>, school: string, yearFrom: string, yearTo?: string | null }>, skills: { __typename?: 'Skills', languages: Array<string>, tools: Array<string>, certificates: Array<string> } } | null };

export type GetCoveringLetterQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCoveringLetterQuery = { __typename?: 'Query', getCoveringLetter?: { __typename?: 'CoveringLetter', letter: Array<string> } | null };


export const GetCvDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCV"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCV"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"github"}},{"kind":"Field","name":{"kind":"Name","value":"about"}}]}},{"kind":"Field","name":{"kind":"Name","value":"employment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"company"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"projectType"}},{"kind":"Field","name":{"kind":"Name","value":"projectDetails"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"roleDetails"}},{"kind":"Field","name":{"kind":"Name","value":"yearFrom"}},{"kind":"Field","name":{"kind":"Name","value":"yearTo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"education"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"course"}},{"kind":"Field","name":{"kind":"Name","value":"courseDetails"}},{"kind":"Field","name":{"kind":"Name","value":"school"}},{"kind":"Field","name":{"kind":"Name","value":"yearFrom"}},{"kind":"Field","name":{"kind":"Name","value":"yearTo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"skills"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"languages"}},{"kind":"Field","name":{"kind":"Name","value":"tools"}},{"kind":"Field","name":{"kind":"Name","value":"certificates"}}]}}]}}]}}]} as unknown as DocumentNode<GetCvQuery, GetCvQueryVariables>;
export const GetCoveringLetterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCoveringLetter"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCoveringLetter"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"letter"}}]}}]}}]} as unknown as DocumentNode<GetCoveringLetterQuery, GetCoveringLetterQueryVariables>;