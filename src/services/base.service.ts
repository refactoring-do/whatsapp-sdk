import {
  AudioMediaObject,
  ContactObject,
  DocumentMediaObject,
  ImageMediaObject,
  InteractiveObject,
  LocationObject,
  MessageTemplateObject,
  StickerMediaObject,
  TextObject,
  VideoMediaObject,
  MessageRequestBody,
} from '../types';
import { MessageTypesEnum, ComponentTypesEnum } from '../enums';
import { WhatsAppOptions } from '../interfaces';
import { API_URI } from '../constants';
import { HttpClient } from '../utils';

export class BaseService {
  protected readonly http: HttpClient;

  constructor(options: WhatsAppOptions) {
    this.http = HttpClient.createClient({
      baseUrl: `${API_URI}/${options.cloudApiVersion}/${options.phoneNumberId}`,
      headers: {
        authorization: `Bearer ${options.accessToken}`,
      },
    });
  }

  protected messageWrapper<T extends MessageTypesEnum, U extends ComponentTypesEnum>(
    type: T,
    payload:
      | AudioMediaObject
      | [ContactObject]
      | DocumentMediaObject
      | ImageMediaObject
      | InteractiveObject
      | LocationObject
      | MessageTemplateObject<U>
      | StickerMediaObject
      | TextObject
      | VideoMediaObject,
    toNumber: string,
    replyMessageId?: string,
  ) {
    const body: MessageRequestBody<T> = {
      messaging_product: 'whatsapp',
      recipient_type: 'individual',
      to: toNumber,
      type,
      [type]: payload,
    };

    if (replyMessageId) {
      body.context = { message_id: replyMessageId };
    }

    return body;
  }
}
