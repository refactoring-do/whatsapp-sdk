import { Client } from '../lib';

describe('Client message wrapper', () => {
  let client: Client;

  beforeAll(() => {
    client = new Client({ accessToken: 'test', cloudApiVersion: 'v15.0', phoneNumberId: 1234567890 });
  });

  it('Should be defined', () => {
    expect(client).toBeDefined();
  });
});
