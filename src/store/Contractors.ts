import { baseApi as api } from "./baseApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
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
  }),
  overrideExisting: false,
});
export { injectedRtkApi as api };
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
export type IdentityResponse = {
  typeId?: string;
  id?: number;
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
export const {
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
  useReadModelContractorsGetContractorQuery,
  useReadModelContractorsGetContractorAddressQuery,
} = injectedRtkApi;
