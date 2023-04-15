import { ClientOptions } from '../interfaces';
import { API_URI } from '../constants';
import { HttpClient } from '../utils';

export class BaseService {
  protected readonly http: HttpClient;

  constructor(options: ClientOptions) {
    this.http = HttpClient.createClient({
      baseUrl: `${API_URI}/${options.cloudApiVersion}/${options.phoneNumberId}`,
      headers: {
        authorization: `Bearer ${options.accessToken}`,
      },
    });
  }
}
