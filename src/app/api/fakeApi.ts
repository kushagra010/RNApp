import { baseApi } from './baseApi';

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const fakeApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    todos: build.query<Todo[], void>({
      query: () => '/todos/',
      providesTags: ['TODOS'],
    }),
  }),
  overrideExisting: false,
});

export const { useTodosQuery } = fakeApi;
