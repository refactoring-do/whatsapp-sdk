import { ClientOptions } from '../src/interfaces';
import { Client } from '../src';

describe('Client instance definition cases', () => {
  let options: ClientOptions;

  beforeAll(() => {
    options = { accessToken: 'test', cloudApiVersion: 'v15.0', phoneNumberId: 1234567890 };
  });

  it('A client instance should be properly defined', () => {
    expect(() => {
      new Client(options);
    }).toBeDefined();
  });

  it('An instance of a client should not throw if it is properly defined', () => {
    expect(() => {
      new Client(options);
    }).not.toThrow();
  });

  it('Exception should be thrown if any of the required properties are missing', () => {
    const invalidClientOptions: any = { cloudApiVersion: 'v15.0', phoneNumberId: 1234567890 };
    expect(() => {
      new Client(invalidClientOptions);
    }).toThrow('Invalid client options');
  });
});
