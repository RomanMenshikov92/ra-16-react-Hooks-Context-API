export type ApiResponse<T> = {
  data: T | undefined;
  loading: boolean;
  error: string | undefined;
};
