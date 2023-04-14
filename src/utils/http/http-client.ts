import * as https from 'https';
import * as http from 'http';

import { RequestOptions, Response } from './interfaces';

export class HttpClient {
  static async get<T>(url: string, options?: RequestOptions): Promise<Response<T>> {
    return this.request<T>('GET', url, undefined, options);
  }

  static async post<T>(url: string, data?: any, options?: RequestOptions): Promise<Response<T>> {
    return this.request<T>('POST', url, data, options);
  }

  static async put<T>(url: string, data?: any, options?: RequestOptions): Promise<Response<T>> {
    return this.request<T>('PUT', url, data, options);
  }

  static async patch<T>(url: string, data?: any, options?: RequestOptions): Promise<Response<T>> {
    return this.request<T>('PATCH', url, data, options);
  }

  static async delete<T>(url: string, options?: RequestOptions): Promise<Response<T>> {
    return this.request<T>('DELETE', url, undefined, options);
  }

  private static async request<T>(
    method: string,
    url: string,
    data?: any,
    options?: RequestOptions,
  ): Promise<Response<T>> {
    return new Promise<Response<T>>((resolve, reject) => {
      const headers =
        options && options.headers
          ? { Accept: 'application/json', 'Content-Type': 'application/json; charset=UTF-8', ...options.headers }
          : {};
      const urlObject = new URL(url);
      const protocol = urlObject.protocol === 'https:' ? https : http;
      const requestOptions: https.RequestOptions = {
        method,
        hostname: urlObject.hostname,
        port: urlObject.port,
        path: urlObject.pathname + urlObject.search,
        headers,
      };

      const request = protocol.request(requestOptions, (res) => {
        const chunks: any[] = [];

        res.on('data', (chunk) => {
          chunks.push(chunk);
        });

        res.on('end', () => {
          const responseData: T = JSON.parse(Buffer.concat(chunks).toString());
          const response: Response<T> = {
            data: responseData,
            status: res.statusCode || 500,
            statusText: res.statusMessage || 'Internal server error',
          };

          resolve(response);
        });
      });

      request.on('error', (error) => {
        reject(error);
      });

      if (data) {
        request.write(JSON.stringify(data));
      }

      request.end();
    });
  }
}
