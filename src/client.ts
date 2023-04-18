import { ClientOptions } from './interfaces';
import { MessageService } from './services';

/**
 * Creates a Whatsapp API Cloud client.
 */
export class Client extends MessageService {
  constructor(options: ClientOptions) {
    if (!options.accessToken || !options.cloudApiVersion || !options.phoneNumberId) {
      throw new Error('Invalid client options');
    }

    super(options);
  }
}
