import {
  ButtonPositionEnum,
  ButtonTypesEnum,
  ComponentTypesEnum,
  CurrencyCodesEnum,
  InteractiveTypesEnum,
  LanguagesEnum,
  MessageTypesEnum,
  ParametersTypesEnum,
} from '../enums';

type LanguageObject = {
  policy: 'deterministic';
  code: LanguagesEnum;
};

type ComponentObject<T extends ComponentTypesEnum> = {
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

type ParametersObject<T extends ParametersTypesEnum> = {
  type: T;
};

type CurrencyObject = {
  fallback_value: string;
  code: CurrencyCodesEnum;
  amount_1000: number;
};

type CurrencyParametersObject = ParametersObject<ParametersTypesEnum.Currency> & {
  currency: CurrencyObject;
};

type QuickReplyButtonParametersObject = {
  type: ParametersTypesEnum.Payload;
  payload: string;
};

type URLButtonParametersObject = SimpleTextObject & {
  type: ParametersTypesEnum.Text;
};

type SimpleTextObject = {
  text: string;
};

type ButtonParameterObject = QuickReplyButtonParametersObject | URLButtonParametersObject;

type ButtonComponentObject = ComponentObject<ComponentTypesEnum.Button> & {
  parameters: ButtonParameterObject;
  sub_type: ButtonTypesEnum;
  index: ButtonPositionEnum;
};

type DateTimeParametersObject = ParametersObject<ParametersTypesEnum.Currency> & {
  date_time: CurrencyObject;
};

type DocumentParametersObject = ParametersObject<ParametersTypesEnum.Document> & DocumentMediaObject;

type MetaDocumentMediaObject = {
  id: string;
  link?: never;
  caption?: string;
  filename?: string;
};

type HostedDocumentMediaObject = {
  id?: never;
  link: string;
  caption?: string;
  filename?: string;
};

type ImageParametersObject = ParametersObject<ParametersTypesEnum.Image> & ImageMediaObject;

type MetaImageMediaObject = {
  id: string;
  link?: never;
  caption?: string;
};

type HostedImageMediaObject = {
  id?: never;
  link: string;
  caption?: string;
};

type TextParametersObject = ParametersObject<ParametersTypesEnum.Text> & SimpleTextObject;

type VideoParametersObject = ParametersObject<ParametersTypesEnum.Video> & VideoMediaObject;

type MetaHostedVideoMediaObject = {
  id: string;
  link?: never;
  caption?: string;
};

type SelfHostedVideoMediaObject = {
  id?: never;
  link: string;
  caption?: string;
};

type ContextObject = {
  message_id: string;
};

type MetaAudioMediaObject = {
  id: string;
  link?: never;
};

type HostedAudioMediaObject = {
  id?: never;
  link: string;
};

type AddressesObject = {
  street?: string;
  city?: string;
  state?: string;
  zip?: string;
  country?: string;
  country_code?: string;
  type?: 'HOME' | 'WORK' | string;
};

type EmailObject = {
  email?: string;
  type?: 'HOME' | 'WORK' | string;
};

type NameObject = {
  formatted_name: string;
  first_name?: string;
  last_name?: string;
  middle_name?: string;
  suffix?: string;
  prefix?: string;
};

type OrgObject = {
  company?: string;
  department?: string;
  title?: string;
};

type PhoneObject = {
  phone?: 'PHONE_NUMBER';
  type?: 'CELL' | 'MAIN' | 'IPHONE' | 'HOME' | 'WORK' | string;
  wa_id?: string;
};

type URLObject = {
  url?: string;
  type?: 'HOME' | 'WORK' | string;
};

type ButtonInteractiveObject = {
  type: InteractiveTypesEnum.Button;
  body: SimpleTextObject;
  footer?: SimpleTextObject;
  header?: HeaderObject;
  action: ActionObject;
};

type ActionObject = {
  button?: string;
  buttons?: ReplyButtonObject[];
  catalog_id?: string;
  product_retailer_id?: string;
  sections?: SectionObject;
};

type SectionObject = MultiProductSectionObject | ListSectionObject;

type RowObject = {
  id: string;
  title: string;
  description?: string;
};

type ListSectionObject = {
  product_items?: never;
  rows: RowObject[];
  title?: string;
};

type ProductObject = {
  product_retailer_id: string;
};

type MultiProductSectionObject = {
  product_items: ProductObject[];
  rows?: never;
  title?: string;
};

type ButtonObject = {
  title: string;
  id: string;
};

type ReplyButtonObject = {
  type: 'reply';
  reply: ButtonObject;
};

type HeaderObject = {
  type: 'document' | 'image' | 'text' | 'video';
  document?: DocumentMediaObject;
  image?: ImageMediaObject;
  text?: string;
  video?: VideoMediaObject;
};

type ListInteractiveObject = {
  type: InteractiveTypesEnum.List;
  body: SimpleTextObject;
  footer?: SimpleTextObject;
  header?: HeaderObject;
  action: ActionObject;
};

type ProductInteractiveObject = {
  type: InteractiveTypesEnum.Product;
  body?: SimpleTextObject;
  footer?: SimpleTextObject;
  header?: HeaderObject;
  action: ActionObject;
};

type ProductListInteractiveObject = {
  type: InteractiveTypesEnum.ProductList;
  body: SimpleTextObject;
  footer?: SimpleTextObject;
  header: HeaderObject;
  action: ActionObject;
};

type ButtonReplyObject = {
  button_reply: {
    id: string;
    title: string;
  };
};

type ListReplyObject = {
  list_reply: {
    id: string;
    title: string;
    description: string;
  };
};

type MetaStickerMediaObject = {
  id: string;
  link?: never;
};

type HostedStickerMediaObject = {
  id?: never;
  link: string;
};

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

export type MessageRequestBody<T extends MessageTypesEnum> = GeneralMessageBody & {
  recipient_type?: string;
  to: string;
  context?: ContextObject;
  type?: T;
};

export type GeneralMessageBody = GeneralRequestBody & {
  messaging_product: 'whatsapp';
};

export type GeneralRequestBody = Record<string, any>;

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
