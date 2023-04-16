import {
  AudioMediaObject,
  ContactObject,
  DocumentMediaObject,
  ImageMediaObject,
  InteractiveObject,
  LocationObject,
  MessageRequestBody,
  MessageTemplateObject,
  StickerMediaObject,
  TextObject,
  VideoMediaObject,
} from '../types';
import { MessageTypesEnum, ComponentTypesEnum } from '../enums';

type Payload<U extends ComponentTypesEnum> =
  | AudioMediaObject
  | [ContactObject]
  | DocumentMediaObject
  | ImageMediaObject
  | InteractiveObject
  | LocationObject
  | MessageTemplateObject<U>
  | StickerMediaObject
  | TextObject
  | VideoMediaObject;

export function createWrappedMessage<T extends MessageTypesEnum, U extends ComponentTypesEnum>(
  type: T,
  payload: Payload<U>,
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
