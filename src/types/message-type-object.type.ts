import {
  LanguageObject,
  ComponentObject,
  ButtonComponentObject,
  MetaDocumentMediaObject,
  HostedDocumentMediaObject,
  MetaImageMediaObject,
  HostedImageMediaObject,
  MetaHostedVideoMediaObject,
  SelfHostedVideoMediaObject,
  MetaAudioMediaObject,
  HostedAudioMediaObject,
  AddressesObject,
  EmailObject,
  NameObject,
  OrgObject,
  PhoneObject,
  URLObject,
  ButtonInteractiveObject,
  ListInteractiveObject,
  ProductInteractiveObject,
  ProductListInteractiveObject,
  MetaStickerMediaObject,
  HostedStickerMediaObject,
} from './base.type';
import { ComponentTypesEnum } from '../enums';

export type TextObject = {
  body: string;
  preview_url?: boolean;
};

export type MessageTemplateObject<T extends ComponentTypesEnum> = {
  name: string;
  language: LanguageObject;
  components?: (ComponentObject<T> | ButtonComponentObject)[];
};

export type DocumentMediaObject = MetaDocumentMediaObject | HostedDocumentMediaObject;

export type ImageMediaObject = MetaImageMediaObject | HostedImageMediaObject;

export type VideoMediaObject = MetaHostedVideoMediaObject | SelfHostedVideoMediaObject;

export type AudioMediaObject = MetaAudioMediaObject | HostedAudioMediaObject;

export type ContactObject = {
  addresses?: AddressesObject[];
  birthday?: `${number}${number}${number}${number}-${number}${number}-${number}${number}`;
  emails?: EmailObject[];
  name: NameObject;
  org?: OrgObject;
  phones?: PhoneObject[];
  urls?: URLObject[];
};

export type InteractiveObject =
  | ButtonInteractiveObject
  | ListInteractiveObject
  | ProductInteractiveObject
  | ProductListInteractiveObject;

export type LocationObject = {
  longitude: number;
  latitude: number;
  name?: string;
  address?: string;
};

export type StickerMediaObject = MetaStickerMediaObject | HostedStickerMediaObject;
