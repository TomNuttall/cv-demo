import { GraphQLResolveInfo } from 'graphql';
import { Context } from '../context.js';
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
  yearTo: Maybe<Scalars['String']['output']>;
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
  yearTo: Maybe<Scalars['String']['output']>;
};

export type Profile = {
  __typename?: 'Profile';
  about: Scalars['String']['output'];
  email: Scalars['String']['output'];
  github: Scalars['String']['output'];
  name: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  getCV: Maybe<Cv>;
  getCoveringLetter: Maybe<CoveringLetter>;
  getMyApplications: Array<Scalars['String']['output']>;
};


export type QueryGetCvArgs = {
  id: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetCoveringLetterArgs = {
  id: InputMaybe<Scalars['String']['input']>;
};

export type Skills = {
  __typename?: 'Skills';
  certificates: Array<Scalars['String']['output']>;
  languages: Array<Scalars['String']['output']>;
  tools: Array<Scalars['String']['output']>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  CV: ResolverTypeWrapper<Cv>;
  CoveringLetter: ResolverTypeWrapper<CoveringLetter>;
  Education: ResolverTypeWrapper<Education>;
  Employment: ResolverTypeWrapper<Employment>;
  Profile: ResolverTypeWrapper<Profile>;
  Query: ResolverTypeWrapper<{}>;
  Skills: ResolverTypeWrapper<Skills>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean']['output'];
  CV: Cv;
  CoveringLetter: CoveringLetter;
  Education: Education;
  Employment: Employment;
  Profile: Profile;
  Query: {};
  Skills: Skills;
  String: Scalars['String']['output'];
}>;

export type CvResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CV'] = ResolversParentTypes['CV']> = ResolversObject<{
  education: Resolver<Array<ResolversTypes['Education']>, ParentType, ContextType>;
  employment: Resolver<Array<ResolversTypes['Employment']>, ParentType, ContextType>;
  profile: Resolver<ResolversTypes['Profile'], ParentType, ContextType>;
  skills: Resolver<ResolversTypes['Skills'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CoveringLetterResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CoveringLetter'] = ResolversParentTypes['CoveringLetter']> = ResolversObject<{
  letter: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EducationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Education'] = ResolversParentTypes['Education']> = ResolversObject<{
  course: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  courseDetails: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  school: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  yearFrom: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  yearTo: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EmploymentResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Employment'] = ResolversParentTypes['Employment']> = ResolversObject<{
  company: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  location: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  projectDetails: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  projectType: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  role: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  roleDetails: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  yearFrom: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  yearTo: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProfileResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Profile'] = ResolversParentTypes['Profile']> = ResolversObject<{
  about: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  github: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  getCV: Resolver<Maybe<ResolversTypes['CV']>, ParentType, ContextType, QueryGetCvArgs>;
  getCoveringLetter: Resolver<Maybe<ResolversTypes['CoveringLetter']>, ParentType, ContextType, QueryGetCoveringLetterArgs>;
  getMyApplications: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
}>;

export type SkillsResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Skills'] = ResolversParentTypes['Skills']> = ResolversObject<{
  certificates: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  languages: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  tools: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = Context> = ResolversObject<{
  CV: CvResolvers<ContextType>;
  CoveringLetter: CoveringLetterResolvers<ContextType>;
  Education: EducationResolvers<ContextType>;
  Employment: EmploymentResolvers<ContextType>;
  Profile: ProfileResolvers<ContextType>;
  Query: QueryResolvers<ContextType>;
  Skills: SkillsResolvers<ContextType>;
}>;

