import {
  LanguagesEnum,
  ComponentTypesEnum,
  ParametersTypesEnum,
  CurrencyCodesEnum,
  ButtonTypesEnum,
  ButtonPositionEnum,
  InteractiveTypesEnum,
} from '../enums';
import { DocumentMediaObject, ImageMediaObject, VideoMediaObject } from './message-type-object.type';

export type LanguageObject = {
  policy: 'deterministic';
  code: LanguagesEnum;
};

export type ComponentObject<T extends ComponentTypesEnum> = {
  type: T;
  parameters: (
    | CurrencyParametersObject
    | DateTimeParametersObject
    | DocumentParametersObject
    | ImageParametersObject
    | TextParametersObject
    | VideoParametersObject
  )[];
};

export type ParametersObject<T extends ParametersTypesEnum> = {
  type: T;
};

export type CurrencyObject = {
  fallback_value: string;
  code: CurrencyCodesEnum;
  amount_1000: number;
};

export type CurrencyParametersObject = ParametersObject<ParametersTypesEnum.Currency> & {
  currency: CurrencyObject;
};

export type QuickReplyButtonParametersObject = {
  type: ParametersTypesEnum.Payload;
  payload: string;
};

export type URLButtonParametersObject = SimpleTextObject & {
  type: ParametersTypesEnum.Text;
};

export type SimpleTextObject = {
  text: string;
};

export type ButtonParameterObject = QuickReplyButtonParametersObject | URLButtonParametersObject;

export type ButtonComponentObject = ComponentObject<ComponentTypesEnum.Button> & {
  parameters: ButtonParameterObject;
  sub_type: ButtonTypesEnum;
  index: ButtonPositionEnum;
};

export type DateTimeParametersObject = ParametersObject<ParametersTypesEnum.Currency> & {
  date_time: CurrencyObject;
};

export type DocumentParametersObject = ParametersObject<ParametersTypesEnum.Document> & DocumentMediaObject;

export type MetaDocumentMediaObject = {
  id: string;
  link?: never;
  caption?: string;
  filename?: string;
};

export type HostedDocumentMediaObject = {
  id?: never;
  link: string;
  caption?: string;
  filename?: string;
};

export type ImageParametersObject = ParametersObject<ParametersTypesEnum.Image> & ImageMediaObject;

export type MetaImageMediaObject = {
  id: string;
  link?: never;
  caption?: string;
};

export type HostedImageMediaObject = {
  id?: never;
  link: string;
  caption?: string;
};

export type TextParametersObject = ParametersObject<ParametersTypesEnum.Text> & SimpleTextObject;

export type VideoParametersObject = ParametersObject<ParametersTypesEnum.Video> & VideoMediaObject;

export type MetaHostedVideoMediaObject = {
  id: string;
  link?: never;
  caption?: string;
};

export type SelfHostedVideoMediaObject = {
  id?: never;
  link: string;
  caption?: string;
};

export type ContextObject = {
  message_id: string;
};

export type MetaAudioMediaObject = {
  id: string;
  link?: never;
};

export type HostedAudioMediaObject = {
  id?: never;
  link: string;
};

export type AddressesObject = {
  street?: string;
  city?: string;
  state?: string;
  zip?: string;
  country?: string;
  country_code?: string;
  type?: 'HOME' | 'WORK' | string;
};

export type EmailObject = {
  email?: string;
  type?: 'HOME' | 'WORK' | string;
};

export type NameObject = {
  formatted_name: string;
  first_name?: string;
  last_name?: string;
  middle_name?: string;
  suffix?: string;
  prefix?: string;
};

export type OrgObject = {
  company?: string;
  department?: string;
  title?: string;
};

export type PhoneObject = {
  phone?: 'PHONE_NUMBER';
  type?: 'CELL' | 'MAIN' | 'IPHONE' | 'HOME' | 'WORK' | string;
  wa_id?: string;
};

export type URLObject = {
  url?: string;
  type?: 'HOME' | 'WORK' | string;
};

export type ButtonInteractiveObject = {
  type: InteractiveTypesEnum.Button;
  body: SimpleTextObject;
  footer?: SimpleTextObject;
  header?: HeaderObject;
  action: ActionObject;
};

export type ActionObject = {
  button?: string;
  buttons?: ReplyButtonObject[];
  catalog_id?: string;
  product_retailer_id?: string;
  sections?: SectionObject[];
};

export type SectionObject = MultiProductSectionObject | ListSectionObject;

export type RowObject = {
  id: string;
  title: string;
  description?: string;
};

export type ListSectionObject = {
  product_items?: never;
  rows: RowObject[];
  title?: string;
};

export type ProductObject = {
  product_retailer_id: string;
};

export type MultiProductSectionObject = {
  product_items: ProductObject[];
  rows?: never;
  title?: string;
};

export type ButtonObject = {
  title: string;
  id: string;
};

export type ReplyButtonObject = {
  type: 'reply';
  reply: ButtonObject;
};

export type HeaderObject = {
  type: 'document' | 'image' | 'text' | 'video';
  document?: DocumentMediaObject;
  image?: ImageMediaObject;
  text?: string;
  video?: VideoMediaObject;
};

export type ListInteractiveObject = {
  type: InteractiveTypesEnum.List;
  body: SimpleTextObject;
  footer?: SimpleTextObject;
  header?: HeaderObject;
  action: ActionObject;
};

export type ProductInteractiveObject = {
  type: InteractiveTypesEnum.Product;
  body?: SimpleTextObject;
  footer?: SimpleTextObject;
  header?: HeaderObject;
  action: ActionObject;
};

export type ProductListInteractiveObject = {
  type: InteractiveTypesEnum.ProductList;
  body: SimpleTextObject;
  footer?: SimpleTextObject;
  header: HeaderObject;
  action: ActionObject;
};

export type ButtonReplyObject = {
  button_reply: {
    id: string;
    title: string;
  };
};

export type ListReplyObject = {
  list_reply: {
    id: string;
    title: string;
    description: string;
  };
};

export type MetaStickerMediaObject = {
  id: string;
  link?: never;
};

export type HostedStickerMediaObject = {
  id?: never;
  link: string;
};

export type InteractiveObject = {
  type: ButtonReplyObject | ListReplyObject;
};
