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

  async sendText(body: TextObject, recipient: string, replyMessageId?: string): Promise<MessageResponse> {
    const payload = createWrappedMessage(MessageTypesEnum.Text, body, recipient, replyMessageId);

    const { data } = await this.http.post<MessageResponse>('messages', payload);

    return data;
  }

  async sendAudio(body: AudioMediaObject, recipient: string, replyMessageId?: string): Promise<MessageResponse> {
    const payload = createWrappedMessage(MessageTypesEnum.Audio, body, recipient, replyMessageId);

    const { data } = await this.http.post<MessageResponse>('messages', payload);

    return data;
  }

  async sendContacts(body: [ContactObject], recipient: string, replyMessageId?: string): Promise<MessageResponse> {
    const payload = createWrappedMessage(MessageTypesEnum.Contacts, body, recipient, replyMessageId);

    const { data } = await this.http.post<MessageResponse>('messages', payload);

    return data;
  }

  async sendDocument(body: DocumentMediaObject, recipient: string, replyMessageId?: string): Promise<MessageResponse> {
    const payload = createWrappedMessage(MessageTypesEnum.Document, body, recipient, replyMessageId);

    const { data } = await this.http.post<MessageResponse>('messages', payload);

    return data;
  }

  async sendImage(body: ImageMediaObject, recipient: string, replyMessageId?: string): Promise<MessageResponse> {
    const payload = createWrappedMessage(MessageTypesEnum.Image, body, recipient, replyMessageId);

    const { data } = await this.http.post<MessageResponse>('messages', payload);

    return data;
  }

  async sendVideo(body: VideoMediaObject, recipient: string, replyMessageId?: string): Promise<MessageResponse> {
    const payload = createWrappedMessage(MessageTypesEnum.Video, body, recipient, replyMessageId);

    const { data } = await this.http.post<MessageResponse>('messages', payload);

    return data;
  }

  async sendInteractive(body: InteractiveObject, recipient: string, replyMessageId?: string): Promise<MessageResponse> {
    const payload = createWrappedMessage(MessageTypesEnum.Interactive, body, recipient, replyMessageId);

    const { data } = await this.http.post<MessageResponse>('messages', payload);

    return data;
  }

  async sendLocation(body: LocationObject, recipient: string, replyMessageId?: string): Promise<MessageResponse> {
    const payload = createWrappedMessage(MessageTypesEnum.Location, body, recipient, replyMessageId);

    const { data } = await this.http.post<MessageResponse>('messages', payload);

    return data;
  }

  async sendSticker(body: StickerMediaObject, recipient: string, replyMessageId?: string): Promise<MessageResponse> {
    const payload = createWrappedMessage(MessageTypesEnum.Sticker, body, recipient, replyMessageId);

    const { data } = await this.http.post<MessageResponse>('messages', payload);

    return data;
  }

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
