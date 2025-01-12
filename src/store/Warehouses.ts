import { baseApi as api } from "./baseApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
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
  }),
  overrideExisting: false,
});
export { injectedRtkApi as api };
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
export type ReadModelWarehousesGetWarehouseQueryResponse = {
  typeId: string;
  id: number;
  code: string;
  name: string;
  description: string | null;
  isBlocked: boolean;
};
export type IdentityResponse = {
  typeId?: string;
  id?: number;
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
export const {
  useReadModelWarehousesGetWarehouseQuery,
  useWarehousesCreateWarehouseMutation,
  useWarehousesGetWarehousesQuery,
  useWarehousesUpdateWarehouseMutation,
  useWarehousesDeleteWarehouseMutation,
  useWarehousesGetWarehouseQuery,
  useWarehousesBlockWarehouseMutation,
  useWarehousesUnblockWarehouseMutation,
} = injectedRtkApi;
