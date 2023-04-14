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
import { WhatsAppOptions } from '../interfaces';
import { BaseService } from './base.service';

export class MessageService extends BaseService {
  constructor(options: WhatsAppOptions) {
    super(options);
  }

  async sendText(body: TextObject, recipient: string, replyMessageId?: string): Promise<MessageResponse> {
    const payload = this.messageWrapper(MessageTypesEnum.Text, body, recipient, replyMessageId);

    const { data } = await this.http.post<MessageResponse>('messages', payload);

    return data;
  }

  async sendAudio(body: AudioMediaObject, recipient: string, replyMessageId?: string): Promise<MessageResponse> {
    const payload = this.messageWrapper(MessageTypesEnum.Audio, body, recipient, replyMessageId);

    const { data } = await this.http.post<MessageResponse>('messages', payload);

    return data;
  }

  async sendContacts(body: [ContactObject], recipient: string, replyMessageId?: string): Promise<MessageResponse> {
    const payload = this.messageWrapper(MessageTypesEnum.Contacts, body, recipient, replyMessageId);

    const { data } = await this.http.post<MessageResponse>('messages', payload);

    return data;
  }

  async sendDocument(body: DocumentMediaObject, recipient: string, replyMessageId?: string): Promise<MessageResponse> {
    const payload = this.messageWrapper(MessageTypesEnum.Document, body, recipient, replyMessageId);

    const { data } = await this.http.post<MessageResponse>('messages', payload);

    return data;
  }

  async sendImage(body: ImageMediaObject, recipient: string, replyMessageId?: string): Promise<MessageResponse> {
    const payload = this.messageWrapper(MessageTypesEnum.Image, body, recipient, replyMessageId);

    const { data } = await this.http.post<MessageResponse>('messages', payload);

    return data;
  }

  async sendVideo(body: VideoMediaObject, recipient: string, replyMessageId?: string): Promise<MessageResponse> {
    const payload = this.messageWrapper(MessageTypesEnum.Video, body, recipient, replyMessageId);

    const { data } = await this.http.post<MessageResponse>('messages', payload);

    return data;
  }

  async sendInteractive(body: InteractiveObject, recipient: string, replyMessageId?: string): Promise<MessageResponse> {
    const payload = this.messageWrapper(MessageTypesEnum.Interactive, body, recipient, replyMessageId);

    const { data } = await this.http.post<MessageResponse>('messages', payload);

    return data;
  }

  async sendLocation(body: LocationObject, recipient: string, replyMessageId?: string): Promise<MessageResponse> {
    const payload = this.messageWrapper(MessageTypesEnum.Location, body, recipient, replyMessageId);

    const { data } = await this.http.post<MessageResponse>('messages', payload);

    return data;
  }

  async sendSticker(body: StickerMediaObject, recipient: string, replyMessageId?: string): Promise<MessageResponse> {
    const payload = this.messageWrapper(MessageTypesEnum.Sticker, body, recipient, replyMessageId);

    const { data } = await this.http.post<MessageResponse>('messages', payload);

    return data;
  }

  async sendTemplate(
    body: MessageTemplateObject<ComponentTypesEnum>,
    recipient: string,
    replyMessageId?: string,
  ): Promise<MessageResponse> {
    const payload = this.messageWrapper(MessageTypesEnum.Template, body, recipient, replyMessageId);

    const { data } = await this.http.post<MessageResponse>('messages', payload);

    return data;
  }
}
