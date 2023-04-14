import { MessageTypesEnum } from '../enums';
import { ContextObject } from './base.type';

export type MessageResponse = {
  messaging_product: string;
  contacts: [
    {
      input: string;
      wa_id: string;
    },
  ];
  messages: [
    {
      id: string;
    },
  ];
};

export type MessageRequestBody<T extends MessageTypesEnum> = {
  messaging_product: 'whatsapp';
  recipient_type?: string;
  to: string;
  context?: ContextObject;
  type?: T;
};
