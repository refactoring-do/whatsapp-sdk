import * as https from 'https';
import * as http from 'http';

import { HttpClientOptions, RequestOptions, Response } from './interfaces';

export class HttpClient {
  private constructor(private readonly options: HttpClientOptions) {
    this.options.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=UTF-8',
      ...options.headers,
    };
  }

  static createClient(options: HttpClientOptions) {
    return new HttpClient(options);
  }

  async get<T>(url: string, options?: RequestOptions): Promise<Response<T>> {
    return this.request<T>('GET', url, undefined, options);
  }

  async post<T>(url: string, data?: any, options?: RequestOptions): Promise<Response<T>> {
    return this.request<T>('POST', url, data, options);
  }

  async put<T>(url: string, data?: any, options?: RequestOptions): Promise<Response<T>> {
    return this.request<T>('PUT', url, data, options);
  }

  async patch<T>(url: string, data?: any, options?: RequestOptions): Promise<Response<T>> {
    return this.request<T>('PATCH', url, data, options);
  }

  async delete<T>(url: string, options?: RequestOptions): Promise<Response<T>> {
    return this.request<T>('DELETE', url, undefined, options);
  }

  private async request<T>(method: string, url: string, data?: any, options?: RequestOptions): Promise<Response<T>> {
    return new Promise<Response<T>>((resolve, reject) => {
      url = this.options.baseUrl ? `${this.options.baseUrl}/${url}` : url;
      const urlObject = new URL(url);
      const protocol = urlObject.protocol === 'https:' ? https : http;
      const requestOptions: https.RequestOptions = {
        method,
        hostname: urlObject.hostname,
        port: urlObject.port,
        path: urlObject.pathname + urlObject.search,
        headers: this.options.headers,
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
