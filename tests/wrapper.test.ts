import { createWrappedMessage } from '../src/utils';
import { MessageTypesEnum } from '../src/enums';
import { TextObject } from '../src/types';

describe('Client message wrapper', () => {
  test('Should wrap text message properly', () => {
    const text: TextObject = {
      body: 'Hello world',
    };

    const wrappedMessage = createWrappedMessage(MessageTypesEnum.Text, text, '10000000000');

    expect(wrappedMessage).toEqual({
      messaging_product: 'whatsapp',
      recipient_type: 'individual',
      to: '10000000000',
      type: 'text',
      text,
    });
  });
});
