import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: unknown;
  Dimension: unknown;
  HexColor: unknown;
  Quality: unknown;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
  transform?: InputMaybe<ImageTransformOptions>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']>;
  contentType_contains?: InputMaybe<Scalars['String']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentType_not?: InputMaybe<Scalars['String']>;
  contentType_not_contains?: InputMaybe<Scalars['String']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName?: InputMaybe<Scalars['String']>;
  fileName_contains?: InputMaybe<Scalars['String']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName_not?: InputMaybe<Scalars['String']>;
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  height?: InputMaybe<Scalars['Int']>;
  height_exists?: InputMaybe<Scalars['Boolean']>;
  height_gt?: InputMaybe<Scalars['Int']>;
  height_gte?: InputMaybe<Scalars['Int']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  height_lt?: InputMaybe<Scalars['Int']>;
  height_lte?: InputMaybe<Scalars['Int']>;
  height_not?: InputMaybe<Scalars['Int']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size?: InputMaybe<Scalars['Int']>;
  size_exists?: InputMaybe<Scalars['Boolean']>;
  size_gt?: InputMaybe<Scalars['Int']>;
  size_gte?: InputMaybe<Scalars['Int']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size_lt?: InputMaybe<Scalars['Int']>;
  size_lte?: InputMaybe<Scalars['Int']>;
  size_not?: InputMaybe<Scalars['Int']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_contains?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_not?: InputMaybe<Scalars['String']>;
  url_not_contains?: InputMaybe<Scalars['String']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  width?: InputMaybe<Scalars['Int']>;
  width_exists?: InputMaybe<Scalars['Boolean']>;
  width_gt?: InputMaybe<Scalars['Int']>;
  width_gte?: InputMaybe<Scalars['Int']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  width_lt?: InputMaybe<Scalars['Int']>;
  width_lte?: InputMaybe<Scalars['Int']>;
  width_not?: InputMaybe<Scalars['Int']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};

export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
}

/** Documentation regarding code standards. [See type definition](https://app.contentful.com/spaces/ly1cjdv8rvqt/content_types/codeStandard) */
export type CodeStandard = Entry & {
  __typename?: 'CodeStandard';
  content?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  leadParagraph?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<CodeStandardLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  pageProperties?: Maybe<PageProperties>;
  sys: Sys;
};

/** Documentation regarding code standards. [See type definition](https://app.contentful.com/spaces/ly1cjdv8rvqt/content_types/codeStandard) */
export type CodeStandardContentArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** Documentation regarding code standards. [See type definition](https://app.contentful.com/spaces/ly1cjdv8rvqt/content_types/codeStandard) */
export type CodeStandardLeadParagraphArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** Documentation regarding code standards. [See type definition](https://app.contentful.com/spaces/ly1cjdv8rvqt/content_types/codeStandard) */
export type CodeStandardLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** Documentation regarding code standards. [See type definition](https://app.contentful.com/spaces/ly1cjdv8rvqt/content_types/codeStandard) */
export type CodeStandardNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** Documentation regarding code standards. [See type definition](https://app.contentful.com/spaces/ly1cjdv8rvqt/content_types/codeStandard) */
export type CodeStandardPagePropertiesArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type CodeStandardCollection = {
  __typename?: 'CodeStandardCollection';
  items: Array<Maybe<CodeStandard>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type CodeStandardFilter = {
  AND?: InputMaybe<Array<InputMaybe<CodeStandardFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CodeStandardFilter>>>;
  content?: InputMaybe<Scalars['String']>;
  content_contains?: InputMaybe<Scalars['String']>;
  content_exists?: InputMaybe<Scalars['Boolean']>;
  content_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  content_not?: InputMaybe<Scalars['String']>;
  content_not_contains?: InputMaybe<Scalars['String']>;
  content_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  leadParagraph?: InputMaybe<Scalars['String']>;
  leadParagraph_contains?: InputMaybe<Scalars['String']>;
  leadParagraph_exists?: InputMaybe<Scalars['Boolean']>;
  leadParagraph_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  leadParagraph_not?: InputMaybe<Scalars['String']>;
  leadParagraph_not_contains?: InputMaybe<Scalars['String']>;
  leadParagraph_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageProperties?: InputMaybe<CfPagePropertiesNestedFilter>;
  pageProperties_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type CodeStandardLinkingCollections = {
  __typename?: 'CodeStandardLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};

export type CodeStandardLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum CodeStandardOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

/** The documentation page content for a component. [See type definition](https://app.contentful.com/spaces/ly1cjdv8rvqt/content_types/component) */
export type Component = Entry & {
  __typename?: 'Component';
  accessibility?: Maybe<Scalars['String']>;
  contentGuidelines?: Maybe<Scalars['String']>;
  contentGuidelinesDo?: Maybe<Scalars['String']>;
  contentGuidelinesDont?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  group?: Maybe<Scalars['String']>;
  interactions?: Maybe<Scalars['String']>;
  leadParagraph?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<ComponentLinkingCollections>;
  modifiersCollection?: Maybe<ComponentModifiersCollection>;
  name?: Maybe<Scalars['String']>;
  pageProperties?: Maybe<PageProperties>;
  shouldLinkToExamples?: Maybe<Scalars['Boolean']>;
  statesCollection?: Maybe<ComponentStatesCollection>;
  stylesCollection?: Maybe<ComponentStylesCollection>;
  sys: Sys;
  usage?: Maybe<Scalars['String']>;
  usageDo?: Maybe<Scalars['String']>;
  usageDont?: Maybe<Scalars['String']>;
  userResearch?: Maybe<Scalars['String']>;
};

/** The documentation page content for a component. [See type definition](https://app.contentful.com/spaces/ly1cjdv8rvqt/content_types/component) */
export type ComponentAccessibilityArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** The documentation page content for a component. [See type definition](https://app.contentful.com/spaces/ly1cjdv8rvqt/content_types/component) */
export type ComponentContentGuidelinesArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** The documentation page content for a component. [See type definition](https://app.contentful.com/spaces/ly1cjdv8rvqt/content_types/component) */
export type ComponentContentGuidelinesDoArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** The documentation page content for a component. [See type definition](https://app.contentful.com/spaces/ly1cjdv8rvqt/content_types/component) */
export type ComponentContentGuidelinesDontArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** The documentation page content for a component. [See type definition](https://app.contentful.com/spaces/ly1cjdv8rvqt/content_types/component) */
export type ComponentGroupArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** The documentation page content for a component. [See type definition](https://app.contentful.com/spaces/ly1cjdv8rvqt/content_types/component) */
export type ComponentInteractionsArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** The documentation page content for a component. [See type definition](https://app.contentful.com/spaces/ly1cjdv8rvqt/content_types/component) */
export type ComponentLeadParagraphArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** The documentation page content for a component. [See type definition](https://app.contentful.com/spaces/ly1cjdv8rvqt/content_types/component) */
export type ComponentLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** The documentation page content for a component. [See type definition](https://app.contentful.com/spaces/ly1cjdv8rvqt/content_types/component) */
export type ComponentModifiersCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

/** The documentation page content for a component. [See type definition](https://app.contentful.com/spaces/ly1cjdv8rvqt/content_types/component) */
export type ComponentNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** The documentation page content for a component. [See type definition](https://app.contentful.com/spaces/ly1cjdv8rvqt/content_types/component) */
export type ComponentPagePropertiesArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

/** The documentation page content for a component. [See type definition](https://app.contentful.com/spaces/ly1cjdv8rvqt/content_types/component) */
export type ComponentShouldLinkToExamplesArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** The documentation page content for a component. [See type definition](https://app.contentful.com/spaces/ly1cjdv8rvqt/content_types/component) */
export type ComponentStatesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

/** The documentation page content for a component. [See type definition](https://app.contentful.com/spaces/ly1cjdv8rvqt/content_types/component) */
export type ComponentStylesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

/** The documentation page content for a component. [See type definition](https://app.contentful.com/spaces/ly1cjdv8rvqt/content_types/component) */
export type ComponentUsageArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** The documentation page content for a component. [See type definition](https://app.contentful.com/spaces/ly1cjdv8rvqt/content_types/component) */
export type ComponentUsageDoArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** The documentation page content for a component. [See type definition](https://app.contentful.com/spaces/ly1cjdv8rvqt/content_types/component) */
export type ComponentUsageDontArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** The documentation page content for a component. [See type definition](https://app.contentful.com/spaces/ly1cjdv8rvqt/content_types/component) */
export type ComponentUserResearchArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ComponentCollection = {
  __typename?: 'ComponentCollection';
  items: Array<Maybe<Component>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ComponentFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentFilter>>>;
  accessibility?: InputMaybe<Scalars['String']>;
  accessibility_contains?: InputMaybe<Scalars['String']>;
  accessibility_exists?: InputMaybe<Scalars['Boolean']>;
  accessibility_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  accessibility_not?: InputMaybe<Scalars['String']>;
  accessibility_not_contains?: InputMaybe<Scalars['String']>;
  accessibility_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentGuidelines?: InputMaybe<Scalars['String']>;
  contentGuidelinesDo?: InputMaybe<Scalars['String']>;
  contentGuidelinesDo_contains?: InputMaybe<Scalars['String']>;
  contentGuidelinesDo_exists?: InputMaybe<Scalars['Boolean']>;
  contentGuidelinesDo_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentGuidelinesDo_not?: InputMaybe<Scalars['String']>;
  contentGuidelinesDo_not_contains?: InputMaybe<Scalars['String']>;
  contentGuidelinesDo_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentGuidelinesDont?: InputMaybe<Scalars['String']>;
  contentGuidelinesDont_contains?: InputMaybe<Scalars['String']>;
  contentGuidelinesDont_exists?: InputMaybe<Scalars['Boolean']>;
  contentGuidelinesDont_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentGuidelinesDont_not?: InputMaybe<Scalars['String']>;
  contentGuidelinesDont_not_contains?: InputMaybe<Scalars['String']>;
  contentGuidelinesDont_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentGuidelines_contains?: InputMaybe<Scalars['String']>;
  contentGuidelines_exists?: InputMaybe<Scalars['Boolean']>;
  contentGuidelines_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentGuidelines_not?: InputMaybe<Scalars['String']>;
  contentGuidelines_not_contains?: InputMaybe<Scalars['String']>;
  contentGuidelines_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  group?: InputMaybe<Scalars['String']>;
  group_contains?: InputMaybe<Scalars['String']>;
  group_exists?: InputMaybe<Scalars['Boolean']>;
  group_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  group_not?: InputMaybe<Scalars['String']>;
  group_not_contains?: InputMaybe<Scalars['String']>;
  group_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  interactions?: InputMaybe<Scalars['String']>;
  interactions_contains?: InputMaybe<Scalars['String']>;
  interactions_exists?: InputMaybe<Scalars['Boolean']>;
  interactions_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  interactions_not?: InputMaybe<Scalars['String']>;
  interactions_not_contains?: InputMaybe<Scalars['String']>;
  interactions_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  leadParagraph?: InputMaybe<Scalars['String']>;
  leadParagraph_contains?: InputMaybe<Scalars['String']>;
  leadParagraph_exists?: InputMaybe<Scalars['Boolean']>;
  leadParagraph_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  leadParagraph_not?: InputMaybe<Scalars['String']>;
  leadParagraph_not_contains?: InputMaybe<Scalars['String']>;
  leadParagraph_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  modifiersCollection_exists?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageProperties?: InputMaybe<CfPagePropertiesNestedFilter>;
  pageProperties_exists?: InputMaybe<Scalars['Boolean']>;
  shouldLinkToExamples?: InputMaybe<Scalars['Boolean']>;
  shouldLinkToExamples_exists?: InputMaybe<Scalars['Boolean']>;
  shouldLinkToExamples_not?: InputMaybe<Scalars['Boolean']>;
  statesCollection_exists?: InputMaybe<Scalars['Boolean']>;
  stylesCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  usage?: InputMaybe<Scalars['String']>;
  usageDo?: InputMaybe<Scalars['String']>;
  usageDo_contains?: InputMaybe<Scalars['String']>;
  usageDo_exists?: InputMaybe<Scalars['Boolean']>;
  usageDo_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  usageDo_not?: InputMaybe<Scalars['String']>;
  usageDo_not_contains?: InputMaybe<Scalars['String']>;
  usageDo_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  usageDont?: InputMaybe<Scalars['String']>;
  usageDont_contains?: InputMaybe<Scalars['String']>;
  usageDont_exists?: InputMaybe<Scalars['Boolean']>;
  usageDont_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  usageDont_not?: InputMaybe<Scalars['String']>;
  usageDont_not_contains?: InputMaybe<Scalars['String']>;
  usageDont_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  usage_contains?: InputMaybe<Scalars['String']>;
  usage_exists?: InputMaybe<Scalars['Boolean']>;
  usage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  usage_not?: InputMaybe<Scalars['String']>;
  usage_not_contains?: InputMaybe<Scalars['String']>;
  usage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  userResearch?: InputMaybe<Scalars['String']>;
  userResearch_contains?: InputMaybe<Scalars['String']>;
  userResearch_exists?: InputMaybe<Scalars['Boolean']>;
  userResearch_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  userResearch_not?: InputMaybe<Scalars['String']>;
  userResearch_not_contains?: InputMaybe<Scalars['String']>;
  userResearch_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentLinkingCollections = {
  __typename?: 'ComponentLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};

export type ComponentLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

/** Modifiers of components, e.g.: button with icon, input with help text, etc. [See type definition](https://app.contentful.com/spaces/ly1cjdv8rvqt/content_types/componentModifier) */
export type ComponentModifier = Entry & {
  __typename?: 'ComponentModifier';
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  isPreviewDarkThemed?: Maybe<Scalars['Boolean']>;
  linkedFrom?: Maybe<ComponentModifierLinkingCollections>;
  modifierId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  sys: Sys;
};

/** Modifiers of components, e.g.: button with icon, input with help text, etc. [See type definition](https://app.contentful.com/spaces/ly1cjdv8rvqt/content_types/componentModifier) */
export type ComponentModifierDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** Modifiers of components, e.g.: button with icon, input with help text, etc. [See type definition](https://app.contentful.com/spaces/ly1cjdv8rvqt/content_types/componentModifier) */
export type ComponentModifierIsPreviewDarkThemedArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** Modifiers of components, e.g.: button with icon, input with help text, etc. [See type definition](https://app.contentful.com/spaces/ly1cjdv8rvqt/content_types/componentModifier) */
export type ComponentModifierLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** Modifiers of components, e.g.: button with icon, input with help text, etc. [See type definition](https://app.contentful.com/spaces/ly1cjdv8rvqt/content_types/componentModifier) */
export type ComponentModifierModifierIdArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** Modifiers of components, e.g.: button with icon, input with help text, etc. [See type definition](https://app.contentful.com/spaces/ly1cjdv8rvqt/content_types/componentModifier) */
export type ComponentModifierNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ComponentModifierCollection = {
  __typename?: 'ComponentModifierCollection';
  items: Array<Maybe<ComponentModifier>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ComponentModifierFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentModifierFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentModifierFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  isPreviewDarkThemed?: InputMaybe<Scalars['Boolean']>;
  isPreviewDarkThemed_exists?: InputMaybe<Scalars['Boolean']>;
  isPreviewDarkThemed_not?: InputMaybe<Scalars['Boolean']>;
  modifierId?: InputMaybe<Scalars['String']>;
  modifierId_contains?: InputMaybe<Scalars['String']>;
  modifierId_exists?: InputMaybe<Scalars['Boolean']>;
  modifierId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  modifierId_not?: InputMaybe<Scalars['String']>;
  modifierId_not_contains?: InputMaybe<Scalars['String']>;
  modifierId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ComponentModifierLinkingCollections = {
  __typename?: 'ComponentModifierLinkingCollections';
  componentCollection?: Maybe<ComponentCollection>;
  entryCollection?: Maybe<EntryCollection>;
};

export type ComponentModifierLinkingCollectionsComponentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type ComponentModifierLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ComponentModifierOrder {
  IsPreviewDarkThemedAsc = 'isPreviewDarkThemed_ASC',
  IsPreviewDarkThemedDesc = 'isPreviewDarkThemed_DESC',
  ModifierIdAsc = 'modifierId_ASC',
  ModifierIdDesc = 'modifierId_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type ComponentModifiersCollection = {
  __typename?: 'ComponentModifiersCollection';
  items: Array<Maybe<ComponentModifier>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum ComponentOrder {
  GroupAsc = 'group_ASC',
  GroupDesc = 'group_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  ShouldLinkToExamplesAsc = 'shouldLinkToExamples_ASC',
  ShouldLinkToExamplesDesc = 'shouldLinkToExamples_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

/** States of components, e.g.: disabled, readonly, etc. [See type definition](https://app.contentful.com/spaces/ly1cjdv8rvqt/content_types/componentState) */
export type ComponentState = Entry & {
  __typename?: 'ComponentState';
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  isPreviewDarkThemed?: Maybe<Scalars['Boolean']>;
  linkedFrom?: Maybe<ComponentStateLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  stateId?: Maybe<Scalars['String']>;
  sys: Sys;
};

/** States of components, e.g.: disabled, readonly, etc. [See type definition](https://app.contentful.com/spaces/ly1cjdv8rvqt/content_types/componentState) */
export type ComponentStateDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** States of components, e.g.: disabled, readonly, etc. [See type definition](https://app.contentful.com/spaces/ly1cjdv8rvqt/content_types/componentState) */
export type ComponentStateIsPreviewDarkThemedArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** States of components, e.g.: disabled, readonly, etc. [See type definition](https://app.contentful.com/spaces/ly1cjdv8rvqt/content_types/componentState) */
export type ComponentStateLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** States of components, e.g.: disabled, readonly, etc. [See type definition](https://app.contentful.com/spaces/ly1cjdv8rvqt/content_types/componentState) */
export type ComponentStateNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** States of components, e.g.: disabled, readonly, etc. [See type definition](https://app.contentful.com/spaces/ly1cjdv8rvqt/content_types/componentState) */
export type ComponentStateStateIdArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ComponentStateCollection = {
  __typename?: 'ComponentStateCollection';
  items: Array<Maybe<ComponentState>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ComponentStateFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentStateFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentStateFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  isPreviewDarkThemed?: InputMaybe<Scalars['Boolean']>;
  isPreviewDarkThemed_exists?: InputMaybe<Scalars['Boolean']>;
  isPreviewDarkThemed_not?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  stateId?: InputMaybe<Scalars['String']>;
  stateId_contains?: InputMaybe<Scalars['String']>;
  stateId_exists?: InputMaybe<Scalars['Boolean']>;
  stateId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  stateId_not?: InputMaybe<Scalars['String']>;
  stateId_not_contains?: InputMaybe<Scalars['String']>;
  stateId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ComponentStateLinkingCollections = {
  __typename?: 'ComponentStateLinkingCollections';
  componentCollection?: Maybe<ComponentCollection>;
  entryCollection?: Maybe<EntryCollection>;
};

export type ComponentStateLinkingCollectionsComponentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type ComponentStateLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ComponentStateOrder {
  IsPreviewDarkThemedAsc = 'isPreviewDarkThemed_ASC',
  IsPreviewDarkThemedDesc = 'isPreviewDarkThemed_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  StateIdAsc = 'stateId_ASC',
  StateIdDesc = 'stateId_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type ComponentStatesCollection = {
  __typename?: 'ComponentStatesCollection';
  items: Array<Maybe<ComponentState>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

/** Styles of components, e.g.: assertive button, subtle button, etc. [See type definition](https://app.contentful.com/spaces/ly1cjdv8rvqt/content_types/componentStyle) */
export type ComponentStyle = Entry & {
  __typename?: 'ComponentStyle';
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  isPreviewDarkThemed?: Maybe<Scalars['Boolean']>;
  linkedFrom?: Maybe<ComponentStyleLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  styleId?: Maybe<Scalars['String']>;
  sys: Sys;
};

/** Styles of components, e.g.: assertive button, subtle button, etc. [See type definition](https://app.contentful.com/spaces/ly1cjdv8rvqt/content_types/componentStyle) */
export type ComponentStyleDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** Styles of components, e.g.: assertive button, subtle button, etc. [See type definition](https://app.contentful.com/spaces/ly1cjdv8rvqt/content_types/componentStyle) */
export type ComponentStyleIsPreviewDarkThemedArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** Styles of components, e.g.: assertive button, subtle button, etc. [See type definition](https://app.contentful.com/spaces/ly1cjdv8rvqt/content_types/componentStyle) */
export type ComponentStyleLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** Styles of components, e.g.: assertive button, subtle button, etc. [See type definition](https://app.contentful.com/spaces/ly1cjdv8rvqt/content_types/componentStyle) */
export type ComponentStyleNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** Styles of components, e.g.: assertive button, subtle button, etc. [See type definition](https://app.contentful.com/spaces/ly1cjdv8rvqt/content_types/componentStyle) */
export type ComponentStyleStyleIdArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ComponentStyleCollection = {
  __typename?: 'ComponentStyleCollection';
  items: Array<Maybe<ComponentStyle>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ComponentStyleFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentStyleFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentStyleFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  isPreviewDarkThemed?: InputMaybe<Scalars['Boolean']>;
  isPreviewDarkThemed_exists?: InputMaybe<Scalars['Boolean']>;
  isPreviewDarkThemed_not?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  styleId?: InputMaybe<Scalars['String']>;
  styleId_contains?: InputMaybe<Scalars['String']>;
  styleId_exists?: InputMaybe<Scalars['Boolean']>;
  styleId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  styleId_not?: InputMaybe<Scalars['String']>;
  styleId_not_contains?: InputMaybe<Scalars['String']>;
  styleId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ComponentStyleLinkingCollections = {
  __typename?: 'ComponentStyleLinkingCollections';
  componentCollection?: Maybe<ComponentCollection>;
  entryCollection?: Maybe<EntryCollection>;
};

export type ComponentStyleLinkingCollectionsComponentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type ComponentStyleLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ComponentStyleOrder {
  IsPreviewDarkThemedAsc = 'isPreviewDarkThemed_ASC',
  IsPreviewDarkThemedDesc = 'isPreviewDarkThemed_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  StyleIdAsc = 'styleId_ASC',
  StyleIdDesc = 'styleId_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type ComponentStylesCollection = {
  __typename?: 'ComponentStylesCollection';
  items: Array<Maybe<ComponentStyle>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

/** Documentation for content guidelines. [See type definition](https://app.contentful.com/spaces/ly1cjdv8rvqt/content_types/contentGuideline) */
export type ContentGuideline = Entry & {
  __typename?: 'ContentGuideline';
  content?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  leadParagraph?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<ContentGuidelineLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  pageProperties?: Maybe<PageProperties>;
  sys: Sys;
};

/** Documentation for content guidelines. [See type definition](https://app.contentful.com/spaces/ly1cjdv8rvqt/content_types/contentGuideline) */
export type ContentGuidelineContentArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** Documentation for content guidelines. [See type definition](https://app.contentful.com/spaces/ly1cjdv8rvqt/content_types/contentGuideline) */
export type ContentGuidelineLeadParagraphArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** Documentation for content guidelines. [See type definition](https://app.contentful.com/spaces/ly1cjdv8rvqt/content_types/contentGuideline) */
export type ContentGuidelineLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** Documentation for content guidelines. [See type definition](https://app.contentful.com/spaces/ly1cjdv8rvqt/content_types/contentGuideline) */
export type ContentGuidelineNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** Documentation for content guidelines. [See type definition](https://app.contentful.com/spaces/ly1cjdv8rvqt/content_types/contentGuideline) */
export type ContentGuidelinePagePropertiesArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type ContentGuidelineCollection = {
  __typename?: 'ContentGuidelineCollection';
  items: Array<Maybe<ContentGuideline>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ContentGuidelineFilter = {
  AND?: InputMaybe<Array<InputMaybe<ContentGuidelineFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ContentGuidelineFilter>>>;
  content?: InputMaybe<Scalars['String']>;
  content_contains?: InputMaybe<Scalars['String']>;
  content_exists?: InputMaybe<Scalars['Boolean']>;
  content_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  content_not?: InputMaybe<Scalars['String']>;
  content_not_contains?: InputMaybe<Scalars['String']>;
  content_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  leadParagraph?: InputMaybe<Scalars['String']>;
  leadParagraph_contains?: InputMaybe<Scalars['String']>;
  leadParagraph_exists?: InputMaybe<Scalars['Boolean']>;
  leadParagraph_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  leadParagraph_not?: InputMaybe<Scalars['String']>;
  leadParagraph_not_contains?: InputMaybe<Scalars['String']>;
  leadParagraph_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageProperties?: InputMaybe<CfPagePropertiesNestedFilter>;
  pageProperties_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type ContentGuidelineLinkingCollections = {
  __typename?: 'ContentGuidelineLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};

export type ContentGuidelineLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ContentGuidelineOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

/** Documentation for foundations. [See type definition](https://app.contentful.com/spaces/ly1cjdv8rvqt/content_types/foundation) */
export type Foundation = Entry & {
  __typename?: 'Foundation';
  content?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  group?: Maybe<Scalars['String']>;
  leadParagraph?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<FoundationLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  pageProperties?: Maybe<PageProperties>;
  sys: Sys;
};

/** Documentation for foundations. [See type definition](https://app.contentful.com/spaces/ly1cjdv8rvqt/content_types/foundation) */
export type FoundationContentArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** Documentation for foundations. [See type definition](https://app.contentful.com/spaces/ly1cjdv8rvqt/content_types/foundation) */
export type FoundationGroupArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** Documentation for foundations. [See type definition](https://app.contentful.com/spaces/ly1cjdv8rvqt/content_types/foundation) */
export type FoundationLeadParagraphArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** Documentation for foundations. [See type definition](https://app.contentful.com/spaces/ly1cjdv8rvqt/content_types/foundation) */
export type FoundationLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** Documentation for foundations. [See type definition](https://app.contentful.com/spaces/ly1cjdv8rvqt/content_types/foundation) */
export type FoundationNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** Documentation for foundations. [See type definition](https://app.contentful.com/spaces/ly1cjdv8rvqt/content_types/foundation) */
export type FoundationPagePropertiesArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type FoundationCollection = {
  __typename?: 'FoundationCollection';
  items: Array<Maybe<Foundation>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type FoundationFilter = {
  AND?: InputMaybe<Array<InputMaybe<FoundationFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FoundationFilter>>>;
  content?: InputMaybe<Scalars['String']>;
  content_contains?: InputMaybe<Scalars['String']>;
  content_exists?: InputMaybe<Scalars['Boolean']>;
  content_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  content_not?: InputMaybe<Scalars['String']>;
  content_not_contains?: InputMaybe<Scalars['String']>;
  content_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  group?: InputMaybe<Scalars['String']>;
  group_contains?: InputMaybe<Scalars['String']>;
  group_exists?: InputMaybe<Scalars['Boolean']>;
  group_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  group_not?: InputMaybe<Scalars['String']>;
  group_not_contains?: InputMaybe<Scalars['String']>;
  group_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  leadParagraph?: InputMaybe<Scalars['String']>;
  leadParagraph_contains?: InputMaybe<Scalars['String']>;
  leadParagraph_exists?: InputMaybe<Scalars['Boolean']>;
  leadParagraph_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  leadParagraph_not?: InputMaybe<Scalars['String']>;
  leadParagraph_not_contains?: InputMaybe<Scalars['String']>;
  leadParagraph_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageProperties?: InputMaybe<CfPagePropertiesNestedFilter>;
  pageProperties_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type FoundationLinkingCollections = {
  __typename?: 'FoundationLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};

export type FoundationLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum FoundationOrder {
  GroupAsc = 'group_ASC',
  GroupDesc = 'group_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum ImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP',
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT',
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB',
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']>;
};

/** [See type definition](https://app.contentful.com/spaces/ly1cjdv8rvqt/content_types/pageProperties) */
export type PageProperties = Entry & {
  __typename?: 'PageProperties';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<PagePropertiesLinkingCollections>;
  seoMetaDescription?: Maybe<Scalars['String']>;
  sys: Sys;
};

/** [See type definition](https://app.contentful.com/spaces/ly1cjdv8rvqt/content_types/pageProperties) */
export type PagePropertiesLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/ly1cjdv8rvqt/content_types/pageProperties) */
export type PagePropertiesSeoMetaDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type PagePropertiesCollection = {
  __typename?: 'PagePropertiesCollection';
  items: Array<Maybe<PageProperties>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PagePropertiesFilter = {
  AND?: InputMaybe<Array<InputMaybe<PagePropertiesFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PagePropertiesFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  seoMetaDescription?: InputMaybe<Scalars['String']>;
  seoMetaDescription_contains?: InputMaybe<Scalars['String']>;
  seoMetaDescription_exists?: InputMaybe<Scalars['Boolean']>;
  seoMetaDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  seoMetaDescription_not?: InputMaybe<Scalars['String']>;
  seoMetaDescription_not_contains?: InputMaybe<Scalars['String']>;
  seoMetaDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type PagePropertiesLinkingCollections = {
  __typename?: 'PagePropertiesLinkingCollections';
  codeStandardCollection?: Maybe<CodeStandardCollection>;
  componentCollection?: Maybe<ComponentCollection>;
  contentGuidelineCollection?: Maybe<ContentGuidelineCollection>;
  entryCollection?: Maybe<EntryCollection>;
  foundationCollection?: Maybe<FoundationCollection>;
  resourceCollection?: Maybe<ResourceCollection>;
};

export type PagePropertiesLinkingCollectionsCodeStandardCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type PagePropertiesLinkingCollectionsComponentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type PagePropertiesLinkingCollectionsContentGuidelineCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type PagePropertiesLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type PagePropertiesLinkingCollectionsFoundationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type PagePropertiesLinkingCollectionsResourceCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum PagePropertiesOrder {
  SeoMetaDescriptionAsc = 'seoMetaDescription_ASC',
  SeoMetaDescriptionDesc = 'seoMetaDescription_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type Query = {
  __typename?: 'Query';
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  codeStandard?: Maybe<CodeStandard>;
  codeStandardCollection?: Maybe<CodeStandardCollection>;
  component?: Maybe<Component>;
  componentCollection?: Maybe<ComponentCollection>;
  componentModifier?: Maybe<ComponentModifier>;
  componentModifierCollection?: Maybe<ComponentModifierCollection>;
  componentState?: Maybe<ComponentState>;
  componentStateCollection?: Maybe<ComponentStateCollection>;
  componentStyle?: Maybe<ComponentStyle>;
  componentStyleCollection?: Maybe<ComponentStyleCollection>;
  contentGuideline?: Maybe<ContentGuideline>;
  contentGuidelineCollection?: Maybe<ContentGuidelineCollection>;
  entryCollection?: Maybe<EntryCollection>;
  foundation?: Maybe<Foundation>;
  foundationCollection?: Maybe<FoundationCollection>;
  pageProperties?: Maybe<PageProperties>;
  pagePropertiesCollection?: Maybe<PagePropertiesCollection>;
  resource?: Maybe<Resource>;
  resourceCollection?: Maybe<ResourceCollection>;
};

export type QueryAssetArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetFilter>;
};

export type QueryCodeStandardArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type QueryCodeStandardCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<CodeStandardOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CodeStandardFilter>;
};

export type QueryComponentArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type QueryComponentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ComponentFilter>;
};

export type QueryComponentModifierArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type QueryComponentModifierCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentModifierOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ComponentModifierFilter>;
};

export type QueryComponentStateArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type QueryComponentStateCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentStateOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ComponentStateFilter>;
};

export type QueryComponentStyleArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type QueryComponentStyleCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentStyleOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ComponentStyleFilter>;
};

export type QueryContentGuidelineArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type QueryContentGuidelineCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ContentGuidelineOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ContentGuidelineFilter>;
};

export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EntryFilter>;
};

export type QueryFoundationArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type QueryFoundationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<FoundationOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FoundationFilter>;
};

export type QueryPagePropertiesArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type QueryPagePropertiesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PagePropertiesOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PagePropertiesFilter>;
};

export type QueryResourceArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type QueryResourceCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ResourceOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ResourceFilter>;
};

/** Documentation for resources. [See type definition](https://app.contentful.com/spaces/ly1cjdv8rvqt/content_types/resource) */
export type Resource = Entry & {
  __typename?: 'Resource';
  content?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  group?: Maybe<Scalars['String']>;
  leadParagraph?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<ResourceLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  pageProperties?: Maybe<PageProperties>;
  sys: Sys;
};

/** Documentation for resources. [See type definition](https://app.contentful.com/spaces/ly1cjdv8rvqt/content_types/resource) */
export type ResourceContentArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** Documentation for resources. [See type definition](https://app.contentful.com/spaces/ly1cjdv8rvqt/content_types/resource) */
export type ResourceGroupArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** Documentation for resources. [See type definition](https://app.contentful.com/spaces/ly1cjdv8rvqt/content_types/resource) */
export type ResourceLeadParagraphArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** Documentation for resources. [See type definition](https://app.contentful.com/spaces/ly1cjdv8rvqt/content_types/resource) */
export type ResourceLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** Documentation for resources. [See type definition](https://app.contentful.com/spaces/ly1cjdv8rvqt/content_types/resource) */
export type ResourceNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** Documentation for resources. [See type definition](https://app.contentful.com/spaces/ly1cjdv8rvqt/content_types/resource) */
export type ResourcePagePropertiesArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type ResourceCollection = {
  __typename?: 'ResourceCollection';
  items: Array<Maybe<Resource>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ResourceFilter = {
  AND?: InputMaybe<Array<InputMaybe<ResourceFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ResourceFilter>>>;
  content?: InputMaybe<Scalars['String']>;
  content_contains?: InputMaybe<Scalars['String']>;
  content_exists?: InputMaybe<Scalars['Boolean']>;
  content_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  content_not?: InputMaybe<Scalars['String']>;
  content_not_contains?: InputMaybe<Scalars['String']>;
  content_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  group?: InputMaybe<Scalars['String']>;
  group_contains?: InputMaybe<Scalars['String']>;
  group_exists?: InputMaybe<Scalars['Boolean']>;
  group_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  group_not?: InputMaybe<Scalars['String']>;
  group_not_contains?: InputMaybe<Scalars['String']>;
  group_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  leadParagraph?: InputMaybe<Scalars['String']>;
  leadParagraph_contains?: InputMaybe<Scalars['String']>;
  leadParagraph_exists?: InputMaybe<Scalars['Boolean']>;
  leadParagraph_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  leadParagraph_not?: InputMaybe<Scalars['String']>;
  leadParagraph_not_contains?: InputMaybe<Scalars['String']>;
  leadParagraph_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageProperties?: InputMaybe<CfPagePropertiesNestedFilter>;
  pageProperties_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type ResourceLinkingCollections = {
  __typename?: 'ResourceLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};

export type ResourceLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ResourceOrder {
  GroupAsc = 'group_ASC',
  GroupDesc = 'group_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String'];
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  publishedVersion?: Maybe<Scalars['Int']>;
  spaceId: Scalars['String'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  id?: InputMaybe<Scalars['String']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_exists?: InputMaybe<Scalars['Boolean']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_not?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type CfPagePropertiesNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfPagePropertiesNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfPagePropertiesNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  seoMetaDescription?: InputMaybe<Scalars['String']>;
  seoMetaDescription_contains?: InputMaybe<Scalars['String']>;
  seoMetaDescription_exists?: InputMaybe<Scalars['Boolean']>;
  seoMetaDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  seoMetaDescription_not?: InputMaybe<Scalars['String']>;
  seoMetaDescription_not_contains?: InputMaybe<Scalars['String']>;
  seoMetaDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type GetCodeStandardQueryVariables = Exact<{
  id: Scalars['String'];
  preview?: InputMaybe<Scalars['Boolean']>;
}>;

export type GetCodeStandardQuery = {
  __typename?: 'Query';
  codeStandard?: {
    __typename?: 'CodeStandard';
    name?: string | null;
    leadParagraph?: string | null;
    content?: string | null;
    pageProperties?: { __typename?: 'PageProperties'; seoMetaDescription?: string | null } | null;
    sys: { __typename?: 'Sys'; id: string; publishedAt?: string | null };
  } | null;
};

export type GetComponentQueryVariables = Exact<{
  id: Scalars['String'];
  preview?: InputMaybe<Scalars['Boolean']>;
}>;

export type GetComponentQuery = {
  __typename?: 'Query';
  component?: {
    __typename?: 'Component';
    name?: string | null;
    leadParagraph?: string | null;
    shouldLinkToExamples?: boolean | null;
    usage?: string | null;
    usageDo?: string | null;
    usageDont?: string | null;
    interactions?: string | null;
    contentGuidelines?: string | null;
    contentGuidelinesDo?: string | null;
    contentGuidelinesDont?: string | null;
    userResearch?: string | null;
    accessibility?: string | null;
    group?: string | null;
    modifiersCollection?: {
      __typename?: 'ComponentModifiersCollection';
      items: Array<{
        __typename?: 'ComponentModifier';
        name?: string | null;
        description?: string | null;
        modifierId?: string | null;
        isPreviewDarkThemed?: boolean | null;
      } | null>;
    } | null;
    stylesCollection?: {
      __typename?: 'ComponentStylesCollection';
      items: Array<{
        __typename?: 'ComponentStyle';
        name?: string | null;
        description?: string | null;
        styleId?: string | null;
        isPreviewDarkThemed?: boolean | null;
      } | null>;
    } | null;
    statesCollection?: {
      __typename?: 'ComponentStatesCollection';
      items: Array<{
        __typename?: 'ComponentState';
        name?: string | null;
        description?: string | null;
        stateId?: string | null;
        isPreviewDarkThemed?: boolean | null;
      } | null>;
    } | null;
    pageProperties?: { __typename?: 'PageProperties'; seoMetaDescription?: string | null } | null;
    sys: { __typename?: 'Sys'; id: string; publishedAt?: string | null };
  } | null;
};

export type GetContentGuidelineQueryVariables = Exact<{
  id: Scalars['String'];
  preview?: InputMaybe<Scalars['Boolean']>;
}>;

export type GetContentGuidelineQuery = {
  __typename?: 'Query';
  contentGuideline?: {
    __typename?: 'ContentGuideline';
    name?: string | null;
    leadParagraph?: string | null;
    content?: string | null;
    pageProperties?: { __typename?: 'PageProperties'; seoMetaDescription?: string | null } | null;
    sys: { __typename?: 'Sys'; id: string; publishedAt?: string | null };
  } | null;
};

export type GetFoundationQueryVariables = Exact<{
  id: Scalars['String'];
  preview?: InputMaybe<Scalars['Boolean']>;
}>;

export type GetFoundationQuery = {
  __typename?: 'Query';
  foundation?: {
    __typename?: 'Foundation';
    name?: string | null;
    leadParagraph?: string | null;
    content?: string | null;
    pageProperties?: { __typename?: 'PageProperties'; seoMetaDescription?: string | null } | null;
    sys: { __typename?: 'Sys'; id: string; publishedAt?: string | null };
  } | null;
};

export type GetCollectionsQueryVariables = Exact<{
  preview?: InputMaybe<Scalars['Boolean']>;
}>;

export type GetCollectionsQuery = {
  __typename?: 'Query';
  foundationCollection?: {
    __typename?: 'FoundationCollection';
    items: Array<{
      __typename?: 'Foundation';
      name?: string | null;
      group?: string | null;
      leadParagraph?: string | null;
      sys: { __typename?: 'Sys'; id: string };
    } | null>;
  } | null;
  contentGuidelineCollection?: {
    __typename?: 'ContentGuidelineCollection';
    items: Array<{
      __typename?: 'ContentGuideline';
      name?: string | null;
      leadParagraph?: string | null;
      sys: { __typename?: 'Sys'; id: string };
    } | null>;
  } | null;
  codeStandardCollection?: {
    __typename?: 'CodeStandardCollection';
    items: Array<{
      __typename?: 'CodeStandard';
      name?: string | null;
      leadParagraph?: string | null;
      sys: { __typename?: 'Sys'; id: string };
    } | null>;
  } | null;
  componentCollection?: {
    __typename?: 'ComponentCollection';
    items: Array<{
      __typename?: 'Component';
      name?: string | null;
      group?: string | null;
      leadParagraph?: string | null;
      sys: { __typename?: 'Sys'; id: string };
    } | null>;
  } | null;
  resourceCollection?: {
    __typename?: 'ResourceCollection';
    items: Array<{
      __typename?: 'Resource';
      name?: string | null;
      group?: string | null;
      leadParagraph?: string | null;
      sys: { __typename?: 'Sys'; id: string };
    } | null>;
  } | null;
};

export type GetResourceQueryVariables = Exact<{
  id: Scalars['String'];
  preview?: InputMaybe<Scalars['Boolean']>;
}>;

export type GetResourceQuery = {
  __typename?: 'Query';
  resource?: {
    __typename?: 'Resource';
    name?: string | null;
    leadParagraph?: string | null;
    content?: string | null;
    pageProperties?: { __typename?: 'PageProperties'; seoMetaDescription?: string | null } | null;
    sys: { __typename?: 'Sys'; id: string; publishedAt?: string | null };
  } | null;
};

export const GetCodeStandardDocument = gql`
  query getCodeStandard($id: String!, $preview: Boolean) {
    codeStandard(id: $id, preview: $preview) {
      name
      leadParagraph
      content
      pageProperties {
        seoMetaDescription
      }
      sys {
        id
        publishedAt
      }
    }
  }
`;

/**
 * __useGetCodeStandardQuery__
 *
 * To run a query within a React component, call `useGetCodeStandardQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCodeStandardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCodeStandardQuery({
 *   variables: {
 *      id: // value for 'id'
 *      preview: // value for 'preview'
 *   },
 * });
 */
export function useGetCodeStandardQuery(
  baseOptions: Apollo.QueryHookOptions<GetCodeStandardQuery, GetCodeStandardQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetCodeStandardQuery, GetCodeStandardQueryVariables>(GetCodeStandardDocument, options);
}
export function useGetCodeStandardLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetCodeStandardQuery, GetCodeStandardQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetCodeStandardQuery, GetCodeStandardQueryVariables>(GetCodeStandardDocument, options);
}
export type GetCodeStandardQueryHookResult = ReturnType<typeof useGetCodeStandardQuery>;
export type GetCodeStandardLazyQueryHookResult = ReturnType<typeof useGetCodeStandardLazyQuery>;
export type GetCodeStandardQueryResult = Apollo.QueryResult<GetCodeStandardQuery, GetCodeStandardQueryVariables>;
export const GetComponentDocument = gql`
  query getComponent($id: String!, $preview: Boolean) {
    component(id: $id, preview: $preview) {
      name
      leadParagraph
      modifiersCollection {
        items {
          name
          description
          modifierId
          isPreviewDarkThemed
        }
      }
      stylesCollection {
        items {
          name
          description
          styleId
          isPreviewDarkThemed
        }
      }
      statesCollection {
        items {
          name
          description
          stateId
          isPreviewDarkThemed
        }
      }
      shouldLinkToExamples
      usage
      usageDo
      usageDont
      interactions
      contentGuidelines
      contentGuidelinesDo
      contentGuidelinesDont
      userResearch
      accessibility
      group
      pageProperties {
        seoMetaDescription
      }
      sys {
        id
        publishedAt
      }
    }
  }
`;

/**
 * __useGetComponentQuery__
 *
 * To run a query within a React component, call `useGetComponentQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetComponentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetComponentQuery({
 *   variables: {
 *      id: // value for 'id'
 *      preview: // value for 'preview'
 *   },
 * });
 */
export function useGetComponentQuery(
  baseOptions: Apollo.QueryHookOptions<GetComponentQuery, GetComponentQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetComponentQuery, GetComponentQueryVariables>(GetComponentDocument, options);
}
export function useGetComponentLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetComponentQuery, GetComponentQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetComponentQuery, GetComponentQueryVariables>(GetComponentDocument, options);
}
export type GetComponentQueryHookResult = ReturnType<typeof useGetComponentQuery>;
export type GetComponentLazyQueryHookResult = ReturnType<typeof useGetComponentLazyQuery>;
export type GetComponentQueryResult = Apollo.QueryResult<GetComponentQuery, GetComponentQueryVariables>;
export const GetContentGuidelineDocument = gql`
  query getContentGuideline($id: String!, $preview: Boolean) {
    contentGuideline(id: $id, preview: $preview) {
      name
      leadParagraph
      content
      pageProperties {
        seoMetaDescription
      }
      sys {
        id
        publishedAt
      }
    }
  }
`;

/**
 * __useGetContentGuidelineQuery__
 *
 * To run a query within a React component, call `useGetContentGuidelineQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetContentGuidelineQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetContentGuidelineQuery({
 *   variables: {
 *      id: // value for 'id'
 *      preview: // value for 'preview'
 *   },
 * });
 */
export function useGetContentGuidelineQuery(
  baseOptions: Apollo.QueryHookOptions<GetContentGuidelineQuery, GetContentGuidelineQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetContentGuidelineQuery, GetContentGuidelineQueryVariables>(
    GetContentGuidelineDocument,
    options
  );
}
export function useGetContentGuidelineLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetContentGuidelineQuery, GetContentGuidelineQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetContentGuidelineQuery, GetContentGuidelineQueryVariables>(
    GetContentGuidelineDocument,
    options
  );
}
export type GetContentGuidelineQueryHookResult = ReturnType<typeof useGetContentGuidelineQuery>;
export type GetContentGuidelineLazyQueryHookResult = ReturnType<typeof useGetContentGuidelineLazyQuery>;
export type GetContentGuidelineQueryResult = Apollo.QueryResult<
  GetContentGuidelineQuery,
  GetContentGuidelineQueryVariables
>;
export const GetFoundationDocument = gql`
  query getFoundation($id: String!, $preview: Boolean) {
    foundation(id: $id, preview: $preview) {
      name
      leadParagraph
      content
      pageProperties {
        seoMetaDescription
      }
      sys {
        id
        publishedAt
      }
    }
  }
`;

/**
 * __useGetFoundationQuery__
 *
 * To run a query within a React component, call `useGetFoundationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFoundationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFoundationQuery({
 *   variables: {
 *      id: // value for 'id'
 *      preview: // value for 'preview'
 *   },
 * });
 */
export function useGetFoundationQuery(
  baseOptions: Apollo.QueryHookOptions<GetFoundationQuery, GetFoundationQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetFoundationQuery, GetFoundationQueryVariables>(GetFoundationDocument, options);
}
export function useGetFoundationLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetFoundationQuery, GetFoundationQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetFoundationQuery, GetFoundationQueryVariables>(GetFoundationDocument, options);
}
export type GetFoundationQueryHookResult = ReturnType<typeof useGetFoundationQuery>;
export type GetFoundationLazyQueryHookResult = ReturnType<typeof useGetFoundationLazyQuery>;
export type GetFoundationQueryResult = Apollo.QueryResult<GetFoundationQuery, GetFoundationQueryVariables>;
export const GetCollectionsDocument = gql`
  query getCollections($preview: Boolean) {
    foundationCollection(order: name_ASC, preview: $preview) {
      items {
        name
        group
        leadParagraph
        sys {
          id
        }
      }
    }
    contentGuidelineCollection(order: name_ASC, preview: $preview) {
      items {
        name
        leadParagraph
        sys {
          id
        }
      }
    }
    codeStandardCollection(preview: $preview) {
      items {
        name
        leadParagraph
        sys {
          id
        }
      }
    }
    componentCollection(order: name_ASC, preview: $preview) {
      items {
        name
        group
        leadParagraph
        sys {
          id
        }
      }
    }
    resourceCollection(order: name_ASC, preview: $preview) {
      items {
        name
        group
        leadParagraph
        sys {
          id
        }
      }
    }
  }
`;

/**
 * __useGetCollectionsQuery__
 *
 * To run a query within a React component, call `useGetCollectionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCollectionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCollectionsQuery({
 *   variables: {
 *      preview: // value for 'preview'
 *   },
 * });
 */
export function useGetCollectionsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetCollectionsQuery, GetCollectionsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetCollectionsQuery, GetCollectionsQueryVariables>(GetCollectionsDocument, options);
}
export function useGetCollectionsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetCollectionsQuery, GetCollectionsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetCollectionsQuery, GetCollectionsQueryVariables>(GetCollectionsDocument, options);
}
export type GetCollectionsQueryHookResult = ReturnType<typeof useGetCollectionsQuery>;
export type GetCollectionsLazyQueryHookResult = ReturnType<typeof useGetCollectionsLazyQuery>;
export type GetCollectionsQueryResult = Apollo.QueryResult<GetCollectionsQuery, GetCollectionsQueryVariables>;
export const GetResourceDocument = gql`
  query getResource($id: String!, $preview: Boolean) {
    resource(id: $id, preview: $preview) {
      name
      leadParagraph
      content
      pageProperties {
        seoMetaDescription
      }
      sys {
        id
        publishedAt
      }
    }
  }
`;

/**
 * __useGetResourceQuery__
 *
 * To run a query within a React component, call `useGetResourceQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetResourceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetResourceQuery({
 *   variables: {
 *      id: // value for 'id'
 *      preview: // value for 'preview'
 *   },
 * });
 */
export function useGetResourceQuery(baseOptions: Apollo.QueryHookOptions<GetResourceQuery, GetResourceQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetResourceQuery, GetResourceQueryVariables>(GetResourceDocument, options);
}
export function useGetResourceLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetResourceQuery, GetResourceQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetResourceQuery, GetResourceQueryVariables>(GetResourceDocument, options);
}
export type GetResourceQueryHookResult = ReturnType<typeof useGetResourceQuery>;
export type GetResourceLazyQueryHookResult = ReturnType<typeof useGetResourceLazyQuery>;
export type GetResourceQueryResult = Apollo.QueryResult<GetResourceQuery, GetResourceQueryVariables>;
