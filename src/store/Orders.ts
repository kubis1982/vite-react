import { baseApi as api } from "./baseApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    ordersCreatePurchaseOrder: build.mutation<
      OrdersCreatePurchaseOrderApiResponse,
      OrdersCreatePurchaseOrderApiArg
    >({
      query: (queryArg) => ({
        url: `/orm/purchase-orders`,
        method: "POST",
        body: queryArg.ordersCreatePurchaseOrderRequest,
      }),
    }),
    ordersUpdatePurchaseOrder: build.mutation<
      OrdersUpdatePurchaseOrderApiResponse,
      OrdersUpdatePurchaseOrderApiArg
    >({
      query: (queryArg) => ({
        url: `/orm/purchase-orders/${queryArg.orderId}`,
        method: "PUT",
        body: queryArg.ordersUpdatePurchaseOrderRequest,
      }),
    }),
    ordersDeletePurchaseOrder: build.mutation<
      OrdersDeletePurchaseOrderApiResponse,
      OrdersDeletePurchaseOrderApiArg
    >({
      query: (queryArg) => ({
        url: `/orm/purchase-orders/${queryArg.orderId}`,
        method: "DELETE",
      }),
    }),
    ordersConfirmPurchaseOrder: build.mutation<
      OrdersConfirmPurchaseOrderApiResponse,
      OrdersConfirmPurchaseOrderApiArg
    >({
      query: (queryArg) => ({
        url: `/orm/purchase-orders/${queryArg.orderId}/confirm`,
        method: "PATCH",
      }),
    }),
    ordersCreatePurchaseItem: build.mutation<
      OrdersCreatePurchaseItemApiResponse,
      OrdersCreatePurchaseItemApiArg
    >({
      query: (queryArg) => ({
        url: `/orm/purchase-orders/${queryArg.orderId}/items`,
        method: "POST",
        body: queryArg.ordersCreatePurchaseItemRequest,
      }),
    }),
    ordersUpdatePurchaseItem: build.mutation<
      OrdersUpdatePurchaseItemApiResponse,
      OrdersUpdatePurchaseItemApiArg
    >({
      query: (queryArg) => ({
        url: `/orm/purchase-orders/${queryArg.orderId}/items/${queryArg.itemId}`,
        method: "PUT",
        body: queryArg.ordersUpdatePurchaseItemRequest,
      }),
    }),
    ordersDeletePurchaseItem: build.mutation<
      OrdersDeletePurchaseItemApiResponse,
      OrdersDeletePurchaseItemApiArg
    >({
      query: (queryArg) => ({
        url: `/orm/purchase-orders/${queryArg.orderId}/items/${queryArg.itemId}`,
        method: "DELETE",
      }),
    }),
    ordersCreateSalesOrder: build.mutation<
      OrdersCreateSalesOrderApiResponse,
      OrdersCreateSalesOrderApiArg
    >({
      query: (queryArg) => ({
        url: `/orm/sales-orders`,
        method: "POST",
        body: queryArg.ordersCreateSalesOrderRequest,
      }),
    }),
    ordersUpdateSalesOrder: build.mutation<
      OrdersUpdateSalesOrderApiResponse,
      OrdersUpdateSalesOrderApiArg
    >({
      query: (queryArg) => ({
        url: `/orm/sales-orders/${queryArg.orderId}`,
        method: "PUT",
        body: queryArg.ordersUpdateSalesOrderRequest,
      }),
    }),
    ordersDeleteSalesOrder: build.mutation<
      OrdersDeleteSalesOrderApiResponse,
      OrdersDeleteSalesOrderApiArg
    >({
      query: (queryArg) => ({
        url: `/orm/sales-orders/${queryArg.orderId}`,
        method: "DELETE",
      }),
    }),
    ordersConfirmSalesOrder: build.mutation<
      OrdersConfirmSalesOrderApiResponse,
      OrdersConfirmSalesOrderApiArg
    >({
      query: (queryArg) => ({
        url: `/orm/sales-orders/${queryArg.orderId}/confirm`,
        method: "PATCH",
      }),
    }),
    ordersCreateSalesItem: build.mutation<
      OrdersCreateSalesItemApiResponse,
      OrdersCreateSalesItemApiArg
    >({
      query: (queryArg) => ({
        url: `/orm/sales-orders/${queryArg.orderId}/items`,
        method: "POST",
        body: queryArg.ordersCreateSalesItemRequest,
      }),
    }),
    ordersUpdateSalesItem: build.mutation<
      OrdersUpdateSalesItemApiResponse,
      OrdersUpdateSalesItemApiArg
    >({
      query: (queryArg) => ({
        url: `/orm/sales-orders/${queryArg.orderId}/items/${queryArg.itemId}`,
        method: "PUT",
        body: queryArg.ordersUpdateSalesItemRequest,
      }),
    }),
    ordersDeleteSalesItem: build.mutation<
      OrdersDeleteSalesItemApiResponse,
      OrdersDeleteSalesItemApiArg
    >({
      query: (queryArg) => ({
        url: `/orm/sales-orders/${queryArg.orderId}/items/${queryArg.itemId}`,
        method: "DELETE",
      }),
    }),
    ordersGetOrderStates: build.query<
      OrdersGetOrderStatesApiResponse,
      OrdersGetOrderStatesApiArg
    >({
      query: () => ({ url: `/orm/order-states` }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as api };
export type OrdersCreatePurchaseOrderApiResponse =
  /** status 201 Created */ IdentityResponse;
export type OrdersCreatePurchaseOrderApiArg = {
  ordersCreatePurchaseOrderRequest: OrdersCreatePurchaseOrderRequest;
};
export type OrdersUpdatePurchaseOrderApiResponse = unknown;
export type OrdersUpdatePurchaseOrderApiArg = {
  orderId: number;
  ordersUpdatePurchaseOrderRequest: OrdersUpdatePurchaseOrderRequest;
};
export type OrdersDeletePurchaseOrderApiResponse = unknown;
export type OrdersDeletePurchaseOrderApiArg = {
  orderId: number;
};
export type OrdersConfirmPurchaseOrderApiResponse = unknown;
export type OrdersConfirmPurchaseOrderApiArg = {
  orderId: number;
};
export type OrdersCreatePurchaseItemApiResponse =
  /** status 201 Created */ IdentityResponse;
export type OrdersCreatePurchaseItemApiArg = {
  orderId: number;
  ordersCreatePurchaseItemRequest: OrdersCreatePurchaseItemRequest;
};
export type OrdersUpdatePurchaseItemApiResponse = unknown;
export type OrdersUpdatePurchaseItemApiArg = {
  orderId: number;
  itemId: number;
  ordersUpdatePurchaseItemRequest: OrdersUpdatePurchaseItemRequest;
};
export type OrdersDeletePurchaseItemApiResponse = unknown;
export type OrdersDeletePurchaseItemApiArg = {
  orderId: number;
  itemId: number;
};
export type OrdersCreateSalesOrderApiResponse =
  /** status 201 Created */ IdentityResponse;
export type OrdersCreateSalesOrderApiArg = {
  ordersCreateSalesOrderRequest: OrdersCreateSalesOrderRequest;
};
export type OrdersUpdateSalesOrderApiResponse = unknown;
export type OrdersUpdateSalesOrderApiArg = {
  orderId: number;
  ordersUpdateSalesOrderRequest: OrdersUpdateSalesOrderRequest;
};
export type OrdersDeleteSalesOrderApiResponse = unknown;
export type OrdersDeleteSalesOrderApiArg = {
  orderId: number;
};
export type OrdersConfirmSalesOrderApiResponse = unknown;
export type OrdersConfirmSalesOrderApiArg = {
  orderId: number;
};
export type OrdersCreateSalesItemApiResponse =
  /** status 201 Created */ IdentityResponse;
export type OrdersCreateSalesItemApiArg = {
  orderId: number;
  ordersCreateSalesItemRequest: OrdersCreateSalesItemRequest;
};
export type OrdersUpdateSalesItemApiResponse = unknown;
export type OrdersUpdateSalesItemApiArg = {
  orderId: number;
  itemId: number;
  ordersUpdateSalesItemRequest: OrdersUpdateSalesItemRequest;
};
export type OrdersDeleteSalesItemApiResponse = unknown;
export type OrdersDeleteSalesItemApiArg = {
  orderId: number;
  itemId: number;
};
export type OrdersGetOrderStatesApiResponse =
  /** status 200 OK */ OrdersGetOrderStatesQueryResponse[];
export type OrdersGetOrderStatesApiArg = void;
export type IdentityResponse = {
  typeId?: string;
  id?: number;
};
export type OrdersAddressRequest = {
  line1?: string | null;
  line2?: string | null;
  postalCode?: string | null;
  city: string | null;
  country: string | null;
} | null;
export type OrdersCreatePurchaseOrderRequest = {
  contractorId: number;
  address?: OrdersAddressRequest;
  warehouseId: number;
  executionDate: string;
  description?: string | null;
};
export type OrdersUpdatePurchaseOrderRequest = {
  contractorId: number;
  address?: OrdersAddressRequest;
  warehouseId: number;
  executionDate: string;
  description?: string | null;
};
export type OrdersCreatePurchaseItemRequest = {
  articleId: number;
  quantity: number;
  unit: string;
  numerator?: number;
  denominator?: number;
  description?: string | null;
};
export type OrdersUpdatePurchaseItemRequest = {
  articleId: number;
  quantity: number;
  unit: string;
  numerator?: number;
  denominator?: number;
  description?: string | null;
};
export type OrdersCreateSalesOrderRequest = {
  contractorId: number;
  address?: OrdersAddressRequest;
  warehouseId: number;
  executionDate: string;
  description?: string | null;
};
export type OrdersUpdateSalesOrderRequest = {
  contractorId: number;
  address?: OrdersAddressRequest;
  warehouseId: number;
  executionDate: string;
  description?: string | null;
};
export type OrdersCreateSalesItemRequest = {
  articleId: number;
  quantity: number;
  unit: string;
  numerator?: number;
  denominator?: number;
  description?: string | null;
};
export type OrdersUpdateSalesItemRequest = {
  articleId: number;
  quantity: number;
  unit: string;
  numerator?: number;
  denominator?: number;
  description?: string | null;
};
export type OrdersGetOrderStatesQueryResponse = {
  id?: number;
  name: string;
};
export const {
  useOrdersCreatePurchaseOrderMutation,
  useOrdersUpdatePurchaseOrderMutation,
  useOrdersDeletePurchaseOrderMutation,
  useOrdersConfirmPurchaseOrderMutation,
  useOrdersCreatePurchaseItemMutation,
  useOrdersUpdatePurchaseItemMutation,
  useOrdersDeletePurchaseItemMutation,
  useOrdersCreateSalesOrderMutation,
  useOrdersUpdateSalesOrderMutation,
  useOrdersDeleteSalesOrderMutation,
  useOrdersConfirmSalesOrderMutation,
  useOrdersCreateSalesItemMutation,
  useOrdersUpdateSalesItemMutation,
  useOrdersDeleteSalesItemMutation,
  useOrdersGetOrderStatesQuery,
} = injectedRtkApi;
