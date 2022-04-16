export type ApiResponseBody<T> = {
  data: T;
};

export type ApiCreateResponseBody = {
  data: {
    location: string;
  };
};
