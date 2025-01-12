import { baseApi as api } from "./baseApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    articlesCreateArticle: build.mutation<
      ArticlesCreateArticleApiResponse,
      ArticlesCreateArticleApiArg
    >({
      query: (queryArg) => ({
        url: `/arm/articles`,
        method: "POST",
        body: queryArg.articlesCreateArticleRequest,
      }),
    }),
    articlesGetArticles: build.query<
      ArticlesGetArticlesApiResponse,
      ArticlesGetArticlesApiArg
    >({
      query: (queryArg) => ({
        url: `/arm/articles`,
        params: {
          IncludeBlocked: queryArg.includeBlocked,
        },
      }),
    }),
    articlesUpdateArticle: build.mutation<
      ArticlesUpdateArticleApiResponse,
      ArticlesUpdateArticleApiArg
    >({
      query: (queryArg) => ({
        url: `/arm/articles/${queryArg.articleId}`,
        method: "PUT",
        body: queryArg.articlesUpdateArticleRequest,
      }),
    }),
    articlesDeleteArticle: build.mutation<
      ArticlesDeleteArticleApiResponse,
      ArticlesDeleteArticleApiArg
    >({
      query: (queryArg) => ({
        url: `/arm/articles/${queryArg.articleId}`,
        method: "DELETE",
      }),
    }),
    articlesGetArticle: build.query<
      ArticlesGetArticleApiResponse,
      ArticlesGetArticleApiArg
    >({
      query: (queryArg) => ({ url: `/arm/articles/${queryArg.articleId}` }),
    }),
    articlesBlockArticle: build.mutation<
      ArticlesBlockArticleApiResponse,
      ArticlesBlockArticleApiArg
    >({
      query: (queryArg) => ({
        url: `/arm/articles/${queryArg.articleId}/block`,
        method: "PATCH",
      }),
    }),
    articlesUnblockArticle: build.mutation<
      ArticlesUnblockArticleApiResponse,
      ArticlesUnblockArticleApiArg
    >({
      query: (queryArg) => ({
        url: `/arm/articles/${queryArg.articleId}/unblock`,
        method: "PATCH",
      }),
    }),
    articlesCreateMeasurementUnit: build.mutation<
      ArticlesCreateMeasurementUnitApiResponse,
      ArticlesCreateMeasurementUnitApiArg
    >({
      query: (queryArg) => ({
        url: `/arm/measurement-units`,
        method: "POST",
        body: queryArg.articlesCreateMeasurementUnitRequest,
      }),
    }),
    articlesGetMeasurementUnits: build.query<
      ArticlesGetMeasurementUnitsApiResponse,
      ArticlesGetMeasurementUnitsApiArg
    >({
      query: () => ({ url: `/arm/measurement-units` }),
    }),
    articlesUpdateMeasurementUnit: build.mutation<
      ArticlesUpdateMeasurementUnitApiResponse,
      ArticlesUpdateMeasurementUnitApiArg
    >({
      query: (queryArg) => ({
        url: `/arm/measurement-units/${queryArg.measurementUnitId}`,
        method: "PUT",
        body: queryArg.articlesUpdateMeasurementUnitRequest,
      }),
    }),
    articlesDeleteMeasurementUnit: build.mutation<
      ArticlesDeleteMeasurementUnitApiResponse,
      ArticlesDeleteMeasurementUnitApiArg
    >({
      query: (queryArg) => ({
        url: `/arm/measurement-units/${queryArg.measurementUnitId}`,
        method: "DELETE",
      }),
    }),
    articlesGetMeasurementUnit: build.query<
      ArticlesGetMeasurementUnitApiResponse,
      ArticlesGetMeasurementUnitApiArg
    >({
      query: (queryArg) => ({
        url: `/arm/measurement-units/${queryArg.measurementUnitId}`,
      }),
    }),
    readModelArticlesGetArticle: build.query<
      ReadModelArticlesGetArticleApiResponse,
      ReadModelArticlesGetArticleApiArg
    >({
      query: (queryArg) => ({ url: `/rmm/arm/articles/${queryArg.articleId}` }),
    }),
    readModelArticlesGetArticles: build.query<
      ReadModelArticlesGetArticlesApiResponse,
      ReadModelArticlesGetArticlesApiArg
    >({
      query: () => ({ url: `/rmm/arm/articles` }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as api };
export type ArticlesCreateArticleApiResponse =
  /** status 200 OK */ IdentityResponse;
export type ArticlesCreateArticleApiArg = {
  articlesCreateArticleRequest: ArticlesCreateArticleRequest;
};
export type ArticlesGetArticlesApiResponse =
  /** status 200 OK */ ArticlesGetArticlesQueryResponse[];
export type ArticlesGetArticlesApiArg = {
  includeBlocked?: boolean;
};
export type ArticlesUpdateArticleApiResponse = unknown;
export type ArticlesUpdateArticleApiArg = {
  articleId: number;
  articlesUpdateArticleRequest: ArticlesUpdateArticleRequest;
};
export type ArticlesDeleteArticleApiResponse = unknown;
export type ArticlesDeleteArticleApiArg = {
  articleId: number;
};
export type ArticlesGetArticleApiResponse =
  /** status 200 OK */ ArticlesGetArticlesQueryResponse;
export type ArticlesGetArticleApiArg = {
  articleId: number;
};
export type ArticlesBlockArticleApiResponse = unknown;
export type ArticlesBlockArticleApiArg = {
  articleId: number;
};
export type ArticlesUnblockArticleApiResponse = unknown;
export type ArticlesUnblockArticleApiArg = {
  articleId: number;
};
export type ArticlesCreateMeasurementUnitApiResponse =
  /** status 201 Created */ IdentityResponse;
export type ArticlesCreateMeasurementUnitApiArg = {
  articlesCreateMeasurementUnitRequest: ArticlesCreateMeasurementUnitRequest;
};
export type ArticlesGetMeasurementUnitsApiResponse =
  /** status 200 OK */ ArticlesGetMeasurementUnitsQueryResponse[];
export type ArticlesGetMeasurementUnitsApiArg = void;
export type ArticlesUpdateMeasurementUnitApiResponse = unknown;
export type ArticlesUpdateMeasurementUnitApiArg = {
  measurementUnitId: number;
  articlesUpdateMeasurementUnitRequest: ArticlesUpdateMeasurementUnitRequest;
};
export type ArticlesDeleteMeasurementUnitApiResponse = unknown;
export type ArticlesDeleteMeasurementUnitApiArg = {
  measurementUnitId: number;
};
export type ArticlesGetMeasurementUnitApiResponse =
  /** status 200 OK */ ArticlesGetMeasurementUnitsQueryResponse;
export type ArticlesGetMeasurementUnitApiArg = {
  measurementUnitId: number;
};
export type ReadModelArticlesGetArticleApiResponse =
  /** status 200 OK */ ReadModelArticlesGetArticleQueryResponse;
export type ReadModelArticlesGetArticleApiArg = {
  articleId: number;
};
export type ReadModelArticlesGetArticlesApiResponse =
  /** status 200 OK */ ReadModelArticlesGetArticlesQueryResponse[];
export type ReadModelArticlesGetArticlesApiArg = void;
export type IdentityResponse = {
  typeId?: string;
  id?: number;
};
export type ArticlesCreateArticleRequest = {
  code: string;
  name: string;
  unit: string;
  description?: string | null;
};
export type ArticlesGetArticlesQueryResponse = {
  id?: number;
  code: string;
  name: string;
  unit: string;
  description?: string | null;
  isBlocked?: boolean;
};
export type ArticlesUpdateArticleRequest = {
  code: string;
  name: string;
  unit: string;
  description?: string | null;
};
export type ArticlesCreateMeasurementUnitRequest = {
  name: string;
  code: string;
};
export type ArticlesGetMeasurementUnitsQueryResponse = {
  id?: number;
  code: string;
  name: string;
};
export type ArticlesUpdateMeasurementUnitRequest = {
  name: string;
};
export type ReadModelArticlesGetArticleQueryResponse = {
  typeId: string;
  id: number;
  code: string;
  name: string;
  unit: string;
  description: string | null;
  isBlocked: boolean;
};
export type ReadModelArticlesGetArticlesQueryResponse = {
  id?: number;
  code: string;
  name: string;
  unit: string;
  description?: string | null;
  isBlocked?: boolean;
};
export const {
  useArticlesCreateArticleMutation,
  useArticlesGetArticlesQuery,
  useArticlesUpdateArticleMutation,
  useArticlesDeleteArticleMutation,
  useArticlesGetArticleQuery,
  useArticlesBlockArticleMutation,
  useArticlesUnblockArticleMutation,
  useArticlesCreateMeasurementUnitMutation,
  useArticlesGetMeasurementUnitsQuery,
  useArticlesUpdateMeasurementUnitMutation,
  useArticlesDeleteMeasurementUnitMutation,
  useArticlesGetMeasurementUnitQuery,
  useReadModelArticlesGetArticleQuery,
  useReadModelArticlesGetArticlesQuery,
} = injectedRtkApi;
