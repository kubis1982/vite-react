import { baseApi as api } from "./baseApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    accessManagementCreateSession: build.mutation<
      AccessManagementCreateSessionApiResponse,
      AccessManagementCreateSessionApiArg
    >({
      query: (queryArg) => ({
        url: `/acm/sessions`,
        method: "POST",
        body: queryArg.accessManagementCreateSessionRequest,
      }),
    }),
    accessManagementRefreshSession: build.mutation<
      AccessManagementRefreshSessionApiResponse,
      AccessManagementRefreshSessionApiArg
    >({
      query: (queryArg) => ({
        url: `/acm/sessions/${queryArg.refreshToken}/refresh`,
        method: "PATCH",
      }),
    }),
    accessManagementResetPassword: build.mutation<
      AccessManagementResetPasswordApiResponse,
      AccessManagementResetPasswordApiArg
    >({
      query: (queryArg) => ({
        url: `/acm/reset-password`,
        method: "POST",
        body: queryArg.accessManagementCreateUserCodeRequest,
      }),
    }),
    accessManagementConfirmPassword: build.mutation<
      AccessManagementConfirmPasswordApiResponse,
      AccessManagementConfirmPasswordApiArg
    >({
      query: (queryArg) => ({
        url: `/acm/confirm-password`,
        method: "PATCH",
        body: queryArg.accessManagementChangePasswordByTokenRequest,
      }),
    }),
    accessManagementCreateUser: build.mutation<
      AccessManagementCreateUserApiResponse,
      AccessManagementCreateUserApiArg
    >({
      query: (queryArg) => ({
        url: `/acm/users`,
        method: "POST",
        body: queryArg.accessManagementCreateUserRequest,
      }),
    }),
    accessManagementUpdateUser: build.mutation<
      AccessManagementUpdateUserApiResponse,
      AccessManagementUpdateUserApiArg
    >({
      query: (queryArg) => ({
        url: `/acm/users/${queryArg.userId}`,
        method: "PUT",
        body: queryArg.accessManagementUpdateUserRequest,
      }),
    }),
    accessManagementDeleteUser: build.mutation<
      AccessManagementDeleteUserApiResponse,
      AccessManagementDeleteUserApiArg
    >({
      query: (queryArg) => ({
        url: `/acm/users/${queryArg.userId}`,
        method: "DELETE",
      }),
    }),
    accessManagementGetUser: build.query<
      AccessManagementGetUserApiResponse,
      AccessManagementGetUserApiArg
    >({
      query: (queryArg) => ({ url: `/acm/users/${queryArg.userId}` }),
    }),
    accessManagementChangePassword: build.mutation<
      AccessManagementChangePasswordApiResponse,
      AccessManagementChangePasswordApiArg
    >({
      query: (queryArg) => ({
        url: `/acm/users/${queryArg.userId}/change-password`,
        method: "PATCH",
        body: queryArg.accessManagementChangePasswordRequest,
      }),
    }),
    accessManagementActivateUser: build.mutation<
      AccessManagementActivateUserApiResponse,
      AccessManagementActivateUserApiArg
    >({
      query: (queryArg) => ({
        url: `/acm/users/${queryArg.userId}/activate`,
        method: "PATCH",
      }),
    }),
    accessManagementDeactivateUser: build.mutation<
      AccessManagementDeactivateUserApiResponse,
      AccessManagementDeactivateUserApiArg
    >({
      query: (queryArg) => ({
        url: `/acm/users/${queryArg.userId}/deactivate`,
        method: "PATCH",
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as api };
export type AccessManagementCreateSessionApiResponse = /** status 200 OK */
  | AccessManagementSessionResponse
  | /** status 201 Created */ AccessManagementSessionResponse;
export type AccessManagementCreateSessionApiArg = {
  accessManagementCreateSessionRequest: AccessManagementCreateSessionRequest;
};
export type AccessManagementRefreshSessionApiResponse =
  /** status 200 OK */ AccessManagementSessionResponse;
export type AccessManagementRefreshSessionApiArg = {
  refreshToken: string;
};
export type AccessManagementResetPasswordApiResponse = unknown;
export type AccessManagementResetPasswordApiArg = {
  accessManagementCreateUserCodeRequest: AccessManagementCreateUserCodeRequest;
};
export type AccessManagementConfirmPasswordApiResponse = unknown;
export type AccessManagementConfirmPasswordApiArg = {
  accessManagementChangePasswordByTokenRequest: AccessManagementChangePasswordByTokenRequest;
};
export type AccessManagementCreateUserApiResponse =
  /** status 201 Created */ IdentityResponse;
export type AccessManagementCreateUserApiArg = {
  accessManagementCreateUserRequest: AccessManagementCreateUserRequest;
};
export type AccessManagementUpdateUserApiResponse = unknown;
export type AccessManagementUpdateUserApiArg = {
  userId: number;
  accessManagementUpdateUserRequest: AccessManagementUpdateUserRequest;
};
export type AccessManagementDeleteUserApiResponse = unknown;
export type AccessManagementDeleteUserApiArg = {
  userId: number;
};
export type AccessManagementGetUserApiResponse =
  /** status 200 OK */ AccessManagementGetUserQueryResponse;
export type AccessManagementGetUserApiArg = {
  userId: number;
};
export type AccessManagementChangePasswordApiResponse = unknown;
export type AccessManagementChangePasswordApiArg = {
  userId: number;
  accessManagementChangePasswordRequest: AccessManagementChangePasswordRequest;
};
export type AccessManagementActivateUserApiResponse = unknown;
export type AccessManagementActivateUserApiArg = {
  userId: number;
};
export type AccessManagementDeactivateUserApiResponse = unknown;
export type AccessManagementDeactivateUserApiArg = {
  userId: number;
};
export type AccessManagementSessionResponse = {
  accessToken: string;
  refreshToken: string;
  expiryDate: string;
  refreshTokenExpiryDate: string;
};
export type AccessManagementCreateSessionRequest = {
  name: string;
  password: string;
};
export type AccessManagementCreateUserCodeRequest = {
  email: string;
};
export type AccessManagementChangePasswordByTokenRequest = {
  token: string;
  password: string;
};
export type IdentityResponse = {
  typeId?: string;
  id?: number;
};
export type AccessManagementCreateUserRequest = {
  email: string;
  password: string;
  firstName?: string | null;
  lastName?: string | null;
  middleName?: string | null;
};
export type AccessManagementUpdateUserRequest = {
  firstName?: string | null;
  lastName?: string | null;
  middleName?: string | null;
};
export type AccessManagementGetUserQueryResponse = {
  typeId: string;
  id?: number;
  email?: string | null;
  firstName?: string | null;
  middleName?: string | null;
  lastName?: string | null;
  isActive?: boolean | null;
  lastLogged?: string | null;
};
export type AccessManagementChangePasswordRequest = {
  password: string;
};
export const {
  useAccessManagementCreateSessionMutation,
  useAccessManagementRefreshSessionMutation,
  useAccessManagementResetPasswordMutation,
  useAccessManagementConfirmPasswordMutation,
  useAccessManagementCreateUserMutation,
  useAccessManagementUpdateUserMutation,
  useAccessManagementDeleteUserMutation,
  useAccessManagementGetUserQuery,
  useAccessManagementChangePasswordMutation,
  useAccessManagementActivateUserMutation,
  useAccessManagementDeactivateUserMutation,
} = injectedRtkApi;
