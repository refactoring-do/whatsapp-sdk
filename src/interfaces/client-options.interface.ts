/**
 * Options for creating a client.
 */
export interface ClientOptions {
  accessToken: string;
  cloudApiVersion: 'v15.0' | 'v16.0';
  phoneNumberId: number;
}
