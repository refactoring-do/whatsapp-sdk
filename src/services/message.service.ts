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
import { API_URI } from '../constants';
import { HttpClient } from '../utils';

export class MessageService {
  private readonly uri: string;

  constructor(private readonly options: WhatsAppOptions) {
    this.uri = `${API_URI}/${this.options.cloudApiVersion}/${this.options.phoneNumberId}/messages`;
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

    const { data } = await HttpClient.post<MessageResponse>(this.uri, payload, {
      headers: {
        authorization: `Bearer ${this.options.accessToken}`,
      },
    });

    return data;
  }
}
