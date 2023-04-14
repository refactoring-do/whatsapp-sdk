export interface RequestOptions {
  headers?: { [key: string]: string };
}

export interface Response<T> {
  data: T;
  status: number;
  statusText: string;
}
