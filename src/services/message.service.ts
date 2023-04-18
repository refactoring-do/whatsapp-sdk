import {
  AudioMediaObject,
  ContactObject,
  DocumentMediaObject,
  ImageMediaObject,
  InteractiveObject,
  LocationObject,
  MessageResponse,
  MessageTemplateObject,
  StickerMediaObject,
  TextObject,
  VideoMediaObject,
} from '../types';
import { ComponentTypesEnum, MessageTypesEnum } from '../enums';
import { createWrappedMessage } from '../utils';
import { ClientOptions } from '../interfaces';
import { BaseService } from './base.service';

export class MessageService extends BaseService {
  constructor(options: ClientOptions) {
    super(options);
  }

  /**
   * Sends a text message to a recipient using the provided `body` and optional
   * `replyMessageId`.
   * @param {TextObject} body - A `TextObject` representing the message content
   * to be sent.
   * @param {string} recipient - Must be a `string` phone number.
   * @param {string} [replyMessageId] - A `string` representing the ID of a message
   * to reply to. This is optional and can be omitted if not needed.
   */
  async sendText(body: TextObject, recipient: string, replyMessageId?: string): Promise<MessageResponse> {
    const payload = createWrappedMessage(MessageTypesEnum.Text, body, recipient, replyMessageId);

    const { data } = await this.http.post<MessageResponse>('messages', payload);

    return data;
  }

  /**
   * Sends an audio message to a recipient using the provided `body` and optional
   * `replyMessageId`.
   *
   * @param {string} recipient - Must be a `string` phone number.
   * @param {string} [replyMessageId] - A `string` representing the ID of a message
   * to reply to. This is optional and can be omitted if not needed.
   */
  async sendAudio(body: AudioMediaObject, recipient: string, replyMessageId?: string): Promise<MessageResponse> {
    const payload = createWrappedMessage(MessageTypesEnum.Audio, body, recipient, replyMessageId);

    const { data } = await this.http.post<MessageResponse>('messages', payload);

    return data;
  }

  /**
   * Sends a list of contact objects to a recipient using the provided `body` and
   * optional `replyMessageId`.
   *
   * @param {ContactObject[]} body - An array of `ContactObject` representing the
   * contact objects to be sent.
   * @param {string} recipient - Must be a `string` phone number.
   * @param {string} [replyMessageId] - A `string` representing the ID of a message
   * to reply to. This is optional and can be omitted if not needed.
   */
  async sendContacts(body: [ContactObject], recipient: string, replyMessageId?: string): Promise<MessageResponse> {
    const payload = createWrappedMessage(MessageTypesEnum.Contacts, body, recipient, replyMessageId);

    const { data } = await this.http.post<MessageResponse>('messages', payload);

    return data;
  }

  /**
   * Sends a document message to a recipient using the provided `body` and optional
   * `replyMessageId`.
   *
   * @param {DocumentMediaObject} body - A `DocumentMediaObject` representing the
   * document content to be sent.
   * @param {string} recipient - Must be a `string` phone number.
   * @param {string} [replyMessageId] - A `string` representing the ID of a message
   * to reply to. This is optional and can be omitted if not needed.
   */
  async sendDocument(body: DocumentMediaObject, recipient: string, replyMessageId?: string): Promise<MessageResponse> {
    const payload = createWrappedMessage(MessageTypesEnum.Document, body, recipient, replyMessageId);

    const { data } = await this.http.post<MessageResponse>('messages', payload);

    return data;
  }

  /**
   * Sends an image message to a recipient using the provided `body` and optional
   * `replyMessageId`.
   *
   * @param {ImageMediaObject} body - An `ImageMediaObject` representing the image
   * content to be sent.
   * @param {string} recipient - Must be a `string` phone number.
   * @param {string} [replyMessageId] - A `string` representing the ID of a message
   * to reply to. This is optional and can be omitted if not needed.
   */
  async sendImage(body: ImageMediaObject, recipient: string, replyMessageId?: string): Promise<MessageResponse> {
    const payload = createWrappedMessage(MessageTypesEnum.Image, body, recipient, replyMessageId);

    const { data } = await this.http.post<MessageResponse>('messages', payload);

    return data;
  }

  /**
   * Sends a video message to a recipient using the provided `body` and optional
   * `replyMessageId`.
   *
   * @param {VideoMediaObject} body - A `VideoMediaObject` representing the video
   * content to be sent.
   * @param {string} recipient - Must be a `string` phone number.
   * @param {string} [replyMessageId] - A `string` representing the ID of a message
   * to reply to. This is optional and can be omitted if not needed.
   */
  async sendVideo(body: VideoMediaObject, recipient: string, replyMessageId?: string): Promise<MessageResponse> {
    const payload = createWrappedMessage(MessageTypesEnum.Video, body, recipient, replyMessageId);

    const { data } = await this.http.post<MessageResponse>('messages', payload);

    return data;
  }

  /**
   * Sends an interactive message to a recipient using the provided `body` and optional
   * `replyMessageId`.
   *
   * @param {InteractiveObject} body - An `InteractiveObject` representing the interactive
   * message to be sent.
   * @param {string} recipient - Must be a `string` phone number.
   * @param {string} [replyMessageId] - A `string` representing the ID of a message
   * to reply to. This is optional and can be omitted if not needed.
   */
  async sendInteractive(body: InteractiveObject, recipient: string, replyMessageId?: string): Promise<MessageResponse> {
    const payload = createWrappedMessage(MessageTypesEnum.Interactive, body, recipient, replyMessageId);

    const { data } = await this.http.post<MessageResponse>('messages', payload);

    return data;
  }

  /**
   * Sends a location message to a recipient using the provided `body` and optional
   * `replyMessageId`.
   *
   * @param {LocationObject} body - A `LocationObject` representing the location to
   * be sent.
   * @param {string} recipient - Must be a `string` phone number.
   * @param {string} [replyMessageId] - A `string` representing the ID of a message
   * to reply to. This is optional and can be omitted if not needed.
   */
  async sendLocation(body: LocationObject, recipient: string, replyMessageId?: string): Promise<MessageResponse> {
    const payload = createWrappedMessage(MessageTypesEnum.Location, body, recipient, replyMessageId);

    const { data } = await this.http.post<MessageResponse>('messages', payload);

    return data;
  }

  /**
   * Sends a sticker message to a recipient using the provided `body` and optional
   * replyMessageId`.
   *
   * @param {StickerMediaObject} body - A `StickerMediaObject` representing the
   * sticker content to be sent.
   * @param {string} recipient - Must be a `string` phone number.
   * @param {string} [replyMessageId] - A `string` representing the ID of a message
   * to reply to. This is optional and can be omitted if not needed.
   */
  async sendSticker(body: StickerMediaObject, recipient: string, replyMessageId?: string): Promise<MessageResponse> {
    const payload = createWrappedMessage(MessageTypesEnum.Sticker, body, recipient, replyMessageId);

    const { data } = await this.http.post<MessageResponse>('messages', payload);

    return data;
  }

  /**
   * Sends a message template to a recipient using the provided `body` and optional
   * `replyMessageId`.
   *
   * @param {MessageTemplateObject<ComponentTypesEnum>} body - A `MessageTemplateObject`
   * representing the message template to be sent. The `ComponentTypesEnum` specifies the
   * type of the template being used.
   * @param {string} recipient - Must be a `string` phone number.
   * @param {string} [replyMessageId] - A `string` representing the ID of a message
   * to reply to. This is optional and can be omitted if not needed.
   */
  async sendTemplate(
    body: MessageTemplateObject<ComponentTypesEnum>,
    recipient: string,
    replyMessageId?: string,
  ): Promise<MessageResponse> {
    const payload = createWrappedMessage(MessageTypesEnum.Template, body, recipient, replyMessageId);

    const { data } = await this.http.post<MessageResponse>('messages', payload);

    return data;
  }
}
