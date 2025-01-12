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
    contractorsCreateContractor: build.mutation<
      ContractorsCreateContractorApiResponse,
      ContractorsCreateContractorApiArg
    >({
      query: (queryArg) => ({
        url: `/cnm/contractors`,
        method: "POST",
        body: queryArg.contractorsCreateContractorRequest,
      }),
    }),
    contractorsUpdateContractor: build.mutation<
      ContractorsUpdateContractorApiResponse,
      ContractorsUpdateContractorApiArg
    >({
      query: (queryArg) => ({
        url: `/cnm/contractors/${queryArg.contractorId}`,
        method: "PUT",
        body: queryArg.contractorsUpdateContractorRequest,
      }),
    }),
    contractorsDeleteContractor: build.mutation<
      ContractorsDeleteContractorApiResponse,
      ContractorsDeleteContractorApiArg
    >({
      query: (queryArg) => ({
        url: `/cnm/contractors/${queryArg.contractorId}`,
        method: "DELETE",
      }),
    }),
    contractorsBlockContractor: build.mutation<
      ContractorsBlockContractorApiResponse,
      ContractorsBlockContractorApiArg
    >({
      query: (queryArg) => ({
        url: `/cnm/contractors/${queryArg.contractorId}/block`,
        method: "PATCH",
      }),
    }),
    contractorsUnblockContractor: build.mutation<
      ContractorsUnblockContractorApiResponse,
      ContractorsUnblockContractorApiArg
    >({
      query: (queryArg) => ({
        url: `/cnm/contractors/${queryArg.contractorId}/unblock`,
        method: "PATCH",
      }),
    }),
    contractorsGetAddresses: build.query<
      ContractorsGetAddressesApiResponse,
      ContractorsGetAddressesApiArg
    >({
      query: (queryArg) => ({
        url: `/cnm/contractors/${queryArg.contractorId}/addresses`,
      }),
    }),
    contractorsCreateAddress: build.mutation<
      ContractorsCreateAddressApiResponse,
      ContractorsCreateAddressApiArg
    >({
      query: (queryArg) => ({
        url: `/cnm/contractors/${queryArg.contractorId}/addresses`,
        method: "POST",
        body: queryArg.contractorsCreateAddressRequest,
      }),
    }),
    contractorsGetAddress: build.query<
      ContractorsGetAddressApiResponse,
      ContractorsGetAddressApiArg
    >({
      query: (queryArg) => ({
        url: `/cnm/contractors/${queryArg.contractorId}/addresses/${queryArg.addressId}`,
      }),
    }),
    contractorsDeleteAddress: build.mutation<
      ContractorsDeleteAddressApiResponse,
      ContractorsDeleteAddressApiArg
    >({
      query: (queryArg) => ({
        url: `/cnm/contractors/${queryArg.contractorId}/addresses/${queryArg.addressId}`,
        method: "DELETE",
      }),
    }),
    contractorsUpdateAddress: build.mutation<
      ContractorsUpdateAddressApiResponse,
      ContractorsUpdateAddressApiArg
    >({
      query: (queryArg) => ({
        url: `/cnm/contractors/${queryArg.contractorId}/addresses/${queryArg.addressId}`,
        method: "PUT",
        body: queryArg.contractorsUpdateAddressRequest,
      }),
    }),
    contractorsSetDefaultAddress: build.mutation<
      ContractorsSetDefaultAddressApiResponse,
      ContractorsSetDefaultAddressApiArg
    >({
      query: (queryArg) => ({
        url: `/cnm/contractors/${queryArg.contractorId}/addresses/${queryArg.addressId}/default`,
        method: "PATCH",
      }),
    }),
    orderingCreatePurchaseOrder: build.mutation<
      OrderingCreatePurchaseOrderApiResponse,
      OrderingCreatePurchaseOrderApiArg
    >({
      query: (queryArg) => ({
        url: `/orm/purchase-orders`,
        method: "POST",
        body: queryArg.orderingCreatePurchaseOrderRequest,
      }),
    }),
    orderingUpdatePurchaseOrder: build.mutation<
      OrderingUpdatePurchaseOrderApiResponse,
      OrderingUpdatePurchaseOrderApiArg
    >({
      query: (queryArg) => ({
        url: `/orm/purchase-orders/${queryArg.orderId}`,
        method: "PUT",
        body: queryArg.orderingUpdatePurchaseOrderRequest,
      }),
    }),
    orderingDeletePurchaseOrder: build.mutation<
      OrderingDeletePurchaseOrderApiResponse,
      OrderingDeletePurchaseOrderApiArg
    >({
      query: (queryArg) => ({
        url: `/orm/purchase-orders/${queryArg.orderId}`,
        method: "DELETE",
      }),
    }),
    orderingConfirmPurchaseOrder: build.mutation<
      OrderingConfirmPurchaseOrderApiResponse,
      OrderingConfirmPurchaseOrderApiArg
    >({
      query: (queryArg) => ({
        url: `/orm/purchase-orders/${queryArg.orderId}/confirm`,
        method: "PATCH",
      }),
    }),
    orderingCreatePurchaseItem: build.mutation<
      OrderingCreatePurchaseItemApiResponse,
      OrderingCreatePurchaseItemApiArg
    >({
      query: (queryArg) => ({
        url: `/orm/purchase-orders/${queryArg.orderId}/items`,
        method: "POST",
        body: queryArg.orderingCreatePurchaseItemRequest,
      }),
    }),
    orderingUpdatePurchaseItem: build.mutation<
      OrderingUpdatePurchaseItemApiResponse,
      OrderingUpdatePurchaseItemApiArg
    >({
      query: (queryArg) => ({
        url: `/orm/purchase-orders/${queryArg.orderId}/items/${queryArg.itemId}`,
        method: "PUT",
        body: queryArg.orderingUpdatePurchaseItemRequest,
      }),
    }),
    orderingDeletePurchaseItem: build.mutation<
      OrderingDeletePurchaseItemApiResponse,
      OrderingDeletePurchaseItemApiArg
    >({
      query: (queryArg) => ({
        url: `/orm/purchase-orders/${queryArg.orderId}/items/${queryArg.itemId}`,
        method: "DELETE",
      }),
    }),
    orderingCreateSalesOrder: build.mutation<
      OrderingCreateSalesOrderApiResponse,
      OrderingCreateSalesOrderApiArg
    >({
      query: (queryArg) => ({
        url: `/orm/sales-orders`,
        method: "POST",
        body: queryArg.orderingCreateSalesOrderRequest,
      }),
    }),
    orderingUpdateSalesOrder: build.mutation<
      OrderingUpdateSalesOrderApiResponse,
      OrderingUpdateSalesOrderApiArg
    >({
      query: (queryArg) => ({
        url: `/orm/sales-orders/${queryArg.orderId}`,
        method: "PUT",
        body: queryArg.orderingUpdateSalesOrderRequest,
      }),
    }),
    orderingDeleteSalesOrder: build.mutation<
      OrderingDeleteSalesOrderApiResponse,
      OrderingDeleteSalesOrderApiArg
    >({
      query: (queryArg) => ({
        url: `/orm/sales-orders/${queryArg.orderId}`,
        method: "DELETE",
      }),
    }),
    orderingConfirmSalesOrder: build.mutation<
      OrderingConfirmSalesOrderApiResponse,
      OrderingConfirmSalesOrderApiArg
    >({
      query: (queryArg) => ({
        url: `/orm/sales-orders/${queryArg.orderId}/confirm`,
        method: "PATCH",
      }),
    }),
    orderingCreateSalesItem: build.mutation<
      OrderingCreateSalesItemApiResponse,
      OrderingCreateSalesItemApiArg
    >({
      query: (queryArg) => ({
        url: `/orm/sales-orders/${queryArg.orderId}/items`,
        method: "POST",
        body: queryArg.orderingCreateSalesItemRequest,
      }),
    }),
    orderingUpdateSalesItem: build.mutation<
      OrderingUpdateSalesItemApiResponse,
      OrderingUpdateSalesItemApiArg
    >({
      query: (queryArg) => ({
        url: `/orm/sales-orders/${queryArg.orderId}/items/${queryArg.itemId}`,
        method: "PUT",
        body: queryArg.orderingUpdateSalesItemRequest,
      }),
    }),
    orderingDeleteSalesItem: build.mutation<
      OrderingDeleteSalesItemApiResponse,
      OrderingDeleteSalesItemApiArg
    >({
      query: (queryArg) => ({
        url: `/orm/sales-orders/${queryArg.orderId}/items/${queryArg.itemId}`,
        method: "DELETE",
      }),
    }),
    orderingGetOrderStates: build.query<
      OrderingGetOrderStatesApiResponse,
      OrderingGetOrderStatesApiArg
    >({
      query: () => ({ url: `/orm/order-states` }),
    }),
    readModelArticlesGetArticle: build.query<
      ReadModelArticlesGetArticleApiResponse,
      ReadModelArticlesGetArticleApiArg
    >({
      query: (queryArg) => ({ url: `/rmm/arm/articles/${queryArg.articleId}` }),
    }),
    readModelContractorsGetContractor: build.query<
      ReadModelContractorsGetContractorApiResponse,
      ReadModelContractorsGetContractorApiArg
    >({
      query: (queryArg) => ({
        url: `/rmm/cnm/contractors/${queryArg.contractorId}`,
      }),
    }),
    readModelContractorsGetContractorAddress: build.query<
      ReadModelContractorsGetContractorAddressApiResponse,
      ReadModelContractorsGetContractorAddressApiArg
    >({
      query: (queryArg) => ({
        url: `/rmm/cnm/contractors/${queryArg.contractorId}/addresses/${queryArg.addressId}`,
      }),
    }),
    readModelOrderingGetSalesOrder: build.query<
      ReadModelOrderingGetSalesOrderApiResponse,
      ReadModelOrderingGetSalesOrderApiArg
    >({
      query: (queryArg) => ({
        url: `/rmm/orm/sales-orders/${queryArg.orderId}`,
      }),
    }),
    readModelOrderingGetSalesOrderItem: build.query<
      ReadModelOrderingGetSalesOrderItemApiResponse,
      ReadModelOrderingGetSalesOrderItemApiArg
    >({
      query: (queryArg) => ({
        url: `/rmm/orm/sales-orders/${queryArg.orderId}/items/${queryArg.orderItemId}`,
      }),
    }),
    readModelOrderingGetPurchaseOrder: build.query<
      ReadModelOrderingGetPurchaseOrderApiResponse,
      ReadModelOrderingGetPurchaseOrderApiArg
    >({
      query: (queryArg) => ({
        url: `/rmm/orm/purchase-orders/${queryArg.orderId}`,
      }),
    }),
    readModelOrderingGetPurchaseOrderItem: build.query<
      ReadModelOrderingGetPurchaseOrderItemApiResponse,
      ReadModelOrderingGetPurchaseOrderItemApiArg
    >({
      query: (queryArg) => ({
        url: `/rmm/orm/purchase-orders/${queryArg.orderId}/items/${queryArg.orderItemId}`,
      }),
    }),
    readModelWarehousesGetWarehouse: build.query<
      ReadModelWarehousesGetWarehouseApiResponse,
      ReadModelWarehousesGetWarehouseApiArg
    >({
      query: (queryArg) => ({
        url: `/rmm/wam/warehouses/${queryArg.warehouseId}`,
      }),
    }),
    warehousesCreateWarehouse: build.mutation<
      WarehousesCreateWarehouseApiResponse,
      WarehousesCreateWarehouseApiArg
    >({
      query: (queryArg) => ({
        url: `/wam/warehouses`,
        method: "POST",
        body: queryArg.warehousesCreateWarehouseRequest,
      }),
    }),
    warehousesGetWarehouses: build.query<
      WarehousesGetWarehousesApiResponse,
      WarehousesGetWarehousesApiArg
    >({
      query: (queryArg) => ({
        url: `/wam/warehouses`,
        params: {
          IncludeBlocked: queryArg.includeBlocked,
        },
      }),
    }),
    warehousesUpdateWarehouse: build.mutation<
      WarehousesUpdateWarehouseApiResponse,
      WarehousesUpdateWarehouseApiArg
    >({
      query: (queryArg) => ({
        url: `/wam/warehouses/${queryArg.warehouseId}`,
        method: "PUT",
        body: queryArg.warehousesUpdateWarehouseRequest,
      }),
    }),
    warehousesDeleteWarehouse: build.mutation<
      WarehousesDeleteWarehouseApiResponse,
      WarehousesDeleteWarehouseApiArg
    >({
      query: (queryArg) => ({
        url: `/wam/warehouses/${queryArg.warehouseId}`,
        method: "DELETE",
      }),
    }),
    warehousesGetWarehouse: build.query<
      WarehousesGetWarehouseApiResponse,
      WarehousesGetWarehouseApiArg
    >({
      query: (queryArg) => ({ url: `/wam/warehouses/${queryArg.warehouseId}` }),
    }),
    warehousesBlockWarehouse: build.mutation<
      WarehousesBlockWarehouseApiResponse,
      WarehousesBlockWarehouseApiArg
    >({
      query: (queryArg) => ({
        url: `/wam/warehouses/${queryArg.warehouseId}/block`,
        method: "PATCH",
      }),
    }),
    warehousesUnblockWarehouse: build.mutation<
      WarehousesUnblockWarehouseApiResponse,
      WarehousesUnblockWarehouseApiArg
    >({
      query: (queryArg) => ({
        url: `/wam/warehouses/${queryArg.warehouseId}/unblock`,
        method: "PATCH",
      }),
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
export type ContractorsCreateContractorApiResponse =
  /** status 201 Created */ IdentityResponse;
export type ContractorsCreateContractorApiArg = {
  contractorsCreateContractorRequest: ContractorsCreateContractorRequest;
};
export type ContractorsUpdateContractorApiResponse = unknown;
export type ContractorsUpdateContractorApiArg = {
  contractorId: number;
  contractorsUpdateContractorRequest: ContractorsUpdateContractorRequest;
};
export type ContractorsDeleteContractorApiResponse = unknown;
export type ContractorsDeleteContractorApiArg = {
  contractorId: number;
};
export type ContractorsBlockContractorApiResponse = unknown;
export type ContractorsBlockContractorApiArg = {
  contractorId: number;
};
export type ContractorsUnblockContractorApiResponse = unknown;
export type ContractorsUnblockContractorApiArg = {
  contractorId: number;
};
export type ContractorsGetAddressesApiResponse =
  /** status 200 OK */ ContractorsGetAddressesQueryResponse[];
export type ContractorsGetAddressesApiArg = {
  contractorId: number;
};
export type ContractorsCreateAddressApiResponse =
  /** status 201 Created */ IdentityResponse;
export type ContractorsCreateAddressApiArg = {
  contractorId: number;
  contractorsCreateAddressRequest: ContractorsCreateAddressRequest;
};
export type ContractorsGetAddressApiResponse =
  /** status 200 OK */ ContractorsGetAddressesQueryResponse;
export type ContractorsGetAddressApiArg = {
  contractorId: number;
  addressId: number;
};
export type ContractorsDeleteAddressApiResponse = unknown;
export type ContractorsDeleteAddressApiArg = {
  contractorId: number;
  addressId: number;
};
export type ContractorsUpdateAddressApiResponse = unknown;
export type ContractorsUpdateAddressApiArg = {
  contractorId: number;
  addressId: number;
  contractorsUpdateAddressRequest: ContractorsUpdateAddressRequest;
};
export type ContractorsSetDefaultAddressApiResponse = unknown;
export type ContractorsSetDefaultAddressApiArg = {
  contractorId: number;
  addressId: number;
};
export type OrderingCreatePurchaseOrderApiResponse =
  /** status 201 Created */ IdentityResponse;
export type OrderingCreatePurchaseOrderApiArg = {
  orderingCreatePurchaseOrderRequest: OrderingCreatePurchaseOrderRequest;
};
export type OrderingUpdatePurchaseOrderApiResponse = unknown;
export type OrderingUpdatePurchaseOrderApiArg = {
  orderId: number;
  orderingUpdatePurchaseOrderRequest: OrderingUpdatePurchaseOrderRequest;
};
export type OrderingDeletePurchaseOrderApiResponse = unknown;
export type OrderingDeletePurchaseOrderApiArg = {
  orderId: number;
};
export type OrderingConfirmPurchaseOrderApiResponse = unknown;
export type OrderingConfirmPurchaseOrderApiArg = {
  orderId: number;
};
export type OrderingCreatePurchaseItemApiResponse =
  /** status 201 Created */ IdentityResponse;
export type OrderingCreatePurchaseItemApiArg = {
  orderId: number;
  orderingCreatePurchaseItemRequest: OrderingCreatePurchaseItemRequest;
};
export type OrderingUpdatePurchaseItemApiResponse = unknown;
export type OrderingUpdatePurchaseItemApiArg = {
  orderId: number;
  itemId: number;
  orderingUpdatePurchaseItemRequest: OrderingUpdatePurchaseItemRequest;
};
export type OrderingDeletePurchaseItemApiResponse = unknown;
export type OrderingDeletePurchaseItemApiArg = {
  orderId: number;
  itemId: number;
};
export type OrderingCreateSalesOrderApiResponse =
  /** status 201 Created */ IdentityResponse;
export type OrderingCreateSalesOrderApiArg = {
  orderingCreateSalesOrderRequest: OrderingCreateSalesOrderRequest;
};
export type OrderingUpdateSalesOrderApiResponse = unknown;
export type OrderingUpdateSalesOrderApiArg = {
  orderId: number;
  orderingUpdateSalesOrderRequest: OrderingUpdateSalesOrderRequest;
};
export type OrderingDeleteSalesOrderApiResponse = unknown;
export type OrderingDeleteSalesOrderApiArg = {
  orderId: number;
};
export type OrderingConfirmSalesOrderApiResponse = unknown;
export type OrderingConfirmSalesOrderApiArg = {
  orderId: number;
};
export type OrderingCreateSalesItemApiResponse =
  /** status 201 Created */ IdentityResponse;
export type OrderingCreateSalesItemApiArg = {
  orderId: number;
  orderingCreateSalesItemRequest: OrderingCreateSalesItemRequest;
};
export type OrderingUpdateSalesItemApiResponse = unknown;
export type OrderingUpdateSalesItemApiArg = {
  orderId: number;
  itemId: number;
  orderingUpdateSalesItemRequest: OrderingUpdateSalesItemRequest;
};
export type OrderingDeleteSalesItemApiResponse = unknown;
export type OrderingDeleteSalesItemApiArg = {
  orderId: number;
  itemId: number;
};
export type OrderingGetOrderStatesApiResponse =
  /** status 200 OK */ OrderingGetOrderStatesQueryResponse[];
export type OrderingGetOrderStatesApiArg = void;
export type ReadModelArticlesGetArticleApiResponse =
  /** status 200 OK */ ReadModelArticlesGetArticleQueryResponse;
export type ReadModelArticlesGetArticleApiArg = {
  articleId: number;
};
export type ReadModelContractorsGetContractorApiResponse =
  /** status 200 OK */ ReadModelContractorsGetContractorQueryResponse;
export type ReadModelContractorsGetContractorApiArg = {
  contractorId: number;
};
export type ReadModelContractorsGetContractorAddressApiResponse =
  /** status 200 OK */ ReadModelContractorsGetContractorAddressQueryResponse;
export type ReadModelContractorsGetContractorAddressApiArg = {
  contractorId: number;
  addressId: number;
};
export type ReadModelOrderingGetSalesOrderApiResponse =
  /** status 200 OK */ ReadModelOrderingGetOrderQueryResponse;
export type ReadModelOrderingGetSalesOrderApiArg = {
  orderId: number;
};
export type ReadModelOrderingGetSalesOrderItemApiResponse =
  /** status 200 OK */ ReadModelOrderingGetOrderItemQueryResponse;
export type ReadModelOrderingGetSalesOrderItemApiArg = {
  orderId: number;
  orderItemId: number;
};
export type ReadModelOrderingGetPurchaseOrderApiResponse =
  /** status 200 OK */ ReadModelOrderingGetOrderQueryResponse;
export type ReadModelOrderingGetPurchaseOrderApiArg = {
  orderId: number;
};
export type ReadModelOrderingGetPurchaseOrderItemApiResponse =
  /** status 200 OK */ ReadModelOrderingGetOrderItemQueryResponse;
export type ReadModelOrderingGetPurchaseOrderItemApiArg = {
  orderId: number;
  orderItemId: number;
};
export type ReadModelWarehousesGetWarehouseApiResponse =
  /** status 200 OK */ ReadModelWarehousesGetWarehouseQueryResponse;
export type ReadModelWarehousesGetWarehouseApiArg = {
  warehouseId: number;
};
export type WarehousesCreateWarehouseApiResponse =
  /** status 200 OK */ IdentityResponse;
export type WarehousesCreateWarehouseApiArg = {
  warehousesCreateWarehouseRequest: WarehousesCreateWarehouseRequest;
};
export type WarehousesGetWarehousesApiResponse =
  /** status 200 OK */ WarehousesGetWarehousesQueryResponse[];
export type WarehousesGetWarehousesApiArg = {
  includeBlocked?: boolean;
};
export type WarehousesUpdateWarehouseApiResponse = unknown;
export type WarehousesUpdateWarehouseApiArg = {
  warehouseId: number;
  warehousesUpdateWarehouseRequest: WarehousesUpdateWarehouseRequest;
};
export type WarehousesDeleteWarehouseApiResponse = unknown;
export type WarehousesDeleteWarehouseApiArg = {
  warehouseId: number;
};
export type WarehousesGetWarehouseApiResponse =
  /** status 200 OK */ WarehousesGetWarehousesQueryResponse;
export type WarehousesGetWarehouseApiArg = {
  warehouseId: number;
};
export type WarehousesBlockWarehouseApiResponse = unknown;
export type WarehousesBlockWarehouseApiArg = {
  warehouseId: number;
};
export type WarehousesUnblockWarehouseApiResponse = unknown;
export type WarehousesUnblockWarehouseApiArg = {
  warehouseId: number;
};
export type ReadModelArticlesGetArticlesApiResponse =
  /** status 200 OK */ ReadModelArticlesGetArticlesQueryResponse[];
export type ReadModelArticlesGetArticlesApiArg = void;
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
export type ContractorsAddressRequest = {
  line1?: string | null;
  line2?: string | null;
  postalCode?: string | null;
  city: string | null;
  country: string | null;
};
export type ContractorsCreateContractorRequest = {
  name: string;
  code: string;
  description?: string | null;
  country: string;
  address: ContractorsAddressRequest;
};
export type ContractorsUpdateContractorAddressRequest = {
  id: number;
  line1?: string | null;
  line2?: string | null;
  postalCode?: string | null;
  city: string | null;
  country: string | null;
};
export type ContractorsUpdateContractorRequest = {
  name: string;
  code: string;
  description?: string | null;
  country: string;
  address: ContractorsUpdateContractorAddressRequest;
};
export type ContractorsGetAddressesQueryResponse = {
  id?: number;
  line1: string;
  line2: string;
  postalCode: string;
  city: string;
  country: string;
  isDefault?: boolean;
};
export type ContractorsCreateAddressRequest = {
  line1?: string | null;
  line2?: string | null;
  postalCode?: string | null;
  city: string | null;
  country: string | null;
};
export type ContractorsUpdateAddressRequest = {
  line1?: string | null;
  line2?: string | null;
  postalCode?: string | null;
  city: string | null;
  country: string | null;
};
export type OrderingAddressRequest = {
  line1?: string | null;
  line2?: string | null;
  postalCode?: string | null;
  city: string | null;
  country: string | null;
} | null;
export type OrderingCreatePurchaseOrderRequest = {
  contractorId: number;
  address?: OrderingAddressRequest;
  warehouseId: number;
  executionDate: string;
  description?: string | null;
};
export type OrderingUpdatePurchaseOrderRequest = {
  contractorId: number;
  address?: OrderingAddressRequest;
  warehouseId: number;
  executionDate: string;
  description?: string | null;
};
export type OrderingCreatePurchaseItemRequest = {
  articleId: number;
  quantity: number;
  unit: string;
  numerator?: number;
  denominator?: number;
  description?: string | null;
};
export type OrderingUpdatePurchaseItemRequest = {
  articleId: number;
  quantity: number;
  unit: string;
  numerator?: number;
  denominator?: number;
  description?: string | null;
};
export type OrderingCreateSalesOrderRequest = {
  contractorId: number;
  address?: OrderingAddressRequest;
  warehouseId: number;
  executionDate: string;
  description?: string | null;
};
export type OrderingUpdateSalesOrderRequest = {
  contractorId: number;
  address?: OrderingAddressRequest;
  warehouseId: number;
  executionDate: string;
  description?: string | null;
};
export type OrderingCreateSalesItemRequest = {
  articleId: number;
  quantity: number;
  unit: string;
  numerator?: number;
  denominator?: number;
  description?: string | null;
};
export type OrderingUpdateSalesItemRequest = {
  articleId: number;
  quantity: number;
  unit: string;
  numerator?: number;
  denominator?: number;
  description?: string | null;
};
export type OrderingGetOrderStatesQueryResponse = {
  id?: number;
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
export type ReadModelContractorsContractorAddressResponse = {
  typeId: string;
  id: number;
  line1: string | null;
  line2: string | null;
  postalCode: string | null;
  city: string | null;
  country: string | null;
} | null;
export type ReadModelContractorsGetContractorQueryResponse = {
  typeId: string;
  id: number;
  country: string;
  code: string;
  name: string;
  description: string | null;
  address?: ReadModelContractorsContractorAddressResponse;
  isBlocked: boolean;
};
export type ReadModelAddressResponse = {
  line1: string | null;
  line2: string | null;
  postalCode: string | null;
  city: string | null;
  country: string | null;
};
export type ReadModelEntityResponse = {
  name: string;
  code: string;
  typeId: string;
  id: number;
};
export type ReadModelContractorsGetContractorAddressQueryResponse = {
  typeId: string;
  id: number;
  isDefault: boolean;
  address: ReadModelAddressResponse;
  contractor: ReadModelEntityResponse;
};
export type ReadModelStatusResponse = {
  id: number;
  name: string;
};
export type ReadModelArticleResponse = {
  unit: string;
  name: string;
  code: string;
  typeId: string;
  id: number;
};
export type ReadModelOrderingGetOrderItemResponse2 = {
  typeId: string;
  id: number;
  quantity: number;
  quantityCompleted?: number | null;
  description?: string | null;
  article: ReadModelArticleResponse;
};
export type ReadModelOrderingGetOrderItemResponse =
  ReadModelOrderingGetOrderItemResponse2[];
export type ReadModelOrderingGetOrderQueryResponse = {
  typeId: string;
  id: number;
  executionDate?: string | null;
  orderNo?: string | null;
  description?: string | null;
  contractor: ReadModelEntityResponse;
  warehouse: ReadModelEntityResponse;
  status: ReadModelStatusResponse;
  address: ReadModelAddressResponse;
  items: ReadModelOrderingGetOrderItemResponse;
};
export type ReadModelDocumentResponse = {
  typeId: string;
  id: number;
  number: string | null;
};
export type ReadModelOrderingGetOrderItemQueryResponse = {
  quantityUnit: string;
  order: ReadModelDocumentResponse;
  typeId: string;
  id: number;
  quantity: number;
  quantityCompleted?: number | null;
  description?: string | null;
  article: ReadModelArticleResponse;
};
export type ReadModelWarehousesGetWarehouseQueryResponse = {
  typeId: string;
  id: number;
  code: string;
  name: string;
  description: string | null;
  isBlocked: boolean;
};
export type WarehousesCreateWarehouseRequest = {
  code: string;
  name: string;
  description?: string | null;
  hasLocations?: boolean;
};
export type WarehousesGetWarehousesQueryResponse = {
  id?: number;
  code: string;
  name: string;
  description?: string | null;
  isBlocked?: boolean;
};
export type WarehousesUpdateWarehouseRequest = {
  code: string;
  name: string;
  description?: string | null;
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
  useContractorsCreateContractorMutation,
  useContractorsUpdateContractorMutation,
  useContractorsDeleteContractorMutation,
  useContractorsBlockContractorMutation,
  useContractorsUnblockContractorMutation,
  useContractorsGetAddressesQuery,
  useContractorsCreateAddressMutation,
  useContractorsGetAddressQuery,
  useContractorsDeleteAddressMutation,
  useContractorsUpdateAddressMutation,
  useContractorsSetDefaultAddressMutation,
  useOrderingCreatePurchaseOrderMutation,
  useOrderingUpdatePurchaseOrderMutation,
  useOrderingDeletePurchaseOrderMutation,
  useOrderingConfirmPurchaseOrderMutation,
  useOrderingCreatePurchaseItemMutation,
  useOrderingUpdatePurchaseItemMutation,
  useOrderingDeletePurchaseItemMutation,
  useOrderingCreateSalesOrderMutation,
  useOrderingUpdateSalesOrderMutation,
  useOrderingDeleteSalesOrderMutation,
  useOrderingConfirmSalesOrderMutation,
  useOrderingCreateSalesItemMutation,
  useOrderingUpdateSalesItemMutation,
  useOrderingDeleteSalesItemMutation,
  useOrderingGetOrderStatesQuery,
  useReadModelArticlesGetArticleQuery,
  useReadModelContractorsGetContractorQuery,
  useReadModelContractorsGetContractorAddressQuery,
  useReadModelOrderingGetSalesOrderQuery,
  useReadModelOrderingGetSalesOrderItemQuery,
  useReadModelOrderingGetPurchaseOrderQuery,
  useReadModelOrderingGetPurchaseOrderItemQuery,
  useReadModelWarehousesGetWarehouseQuery,
  useWarehousesCreateWarehouseMutation,
  useWarehousesGetWarehousesQuery,
  useWarehousesUpdateWarehouseMutation,
  useWarehousesDeleteWarehouseMutation,
  useWarehousesGetWarehouseQuery,
  useWarehousesBlockWarehouseMutation,
  useWarehousesUnblockWarehouseMutation,
  useReadModelArticlesGetArticlesQuery,
} = injectedRtkApi;
