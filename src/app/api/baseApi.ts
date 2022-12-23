import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
    prepareHeaders: async (headers) => {
      // const user = await AsyncStorageService.getStoredData();
      // const hasUser = !!user && !!user!.userToken;
      // if (hasUser) {
      //   headers.set('Authorization', `Token ${user.userToken}`);
      // }
      // headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  endpoints: () => ({}),
  reducerPath: 'baseApi',
  tagTypes: ['TODOS'],
});
