import {
  AudioMediaObject,
  ContactObject,
  DocumentMediaObject,
  ImageMediaObject,
  InteractiveObject,
  LocationObject,
  MessageRequestBody,
  MessageResponse,
  MessageTemplateObject,
  StickerMediaObject,
  TextObject,
  VideoMediaObject,
} from '../types';
import { ComponentTypesEnum, MessageTypesEnum } from '../enums';
import { WhatsAppOptions } from '../interfaces';
import { HttpClient } from '../utils';

export class MessageService {
  private readonly http: HttpClient;

  constructor(private readonly options: WhatsAppOptions) {
    this.http = HttpClient.createClient({
      baseUrl: `https://graph.facebook.com/${this.options.cloudApiVersion}/${this.options.phoneNumberId}`,
      headers: {
        authorization: `Bearer ${this.options.accessToken}`,
      },
    });
  }

  private messageWrapper<T extends MessageTypesEnum, U extends ComponentTypesEnum>(
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

  async sendText(body: TextObject, recipient: number, replyMessageId?: string): Promise<MessageResponse> {
    const payload = this.messageWrapper(MessageTypesEnum.Text, body, recipient.toString(), replyMessageId);

    const { data } = await this.http.post<MessageResponse>('messages', payload);

    return data;
  }
}
