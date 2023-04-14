import { WhatsAppOptions } from './interfaces';
import { MessageService } from './services';

export class WhatsApp {
  readonly service: MessageService;

  constructor(options: WhatsAppOptions) {
    this.service = new MessageService(options);
  }
}
