import { TextObject, ImageMediaObject, AudioMediaObject, VideoMediaObject, LocationObject } from '../src/types';
import { Client } from '../src';

describe('Message Service', () => {
  let client: Client;
  let recipient: string;

  beforeAll(() => {
    client = new Client({
      accessToken: process.env.ACCESS_TOKEN ?? '',
      cloudApiVersion: 'v15.0',
      phoneNumberId: Number(process.env.PHONE_NUMBER_ID),
    });
    recipient = process.env.RECIPIENT_NUMBER ?? '';
  });

  test('Should send text message properly', async () => {
    const text: TextObject = {
      body: 'Hello world',
    };

    const data = await client.sendText(text, recipient);

    expect(Object.keys(data).sort()).toEqual(['contacts', 'messages', 'messaging_product']);
  });

  test('Should send text message properly', async () => {
    const image: ImageMediaObject = {
      caption: 'Hello world',
      link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png',
    };

    const data = await client.sendImage(image, recipient);

    expect(Object.keys(data).sort()).toEqual(['contacts', 'messages', 'messaging_product']);
  });

  test('Should send audio message properly', async () => {
    const audio: AudioMediaObject = {
      link: 'https://samplelib.com/lib/preview/mp3/sample-3s.mp3',
    };

    const data = await client.sendAudio(audio, recipient);

    expect(Object.keys(data).sort()).toEqual(['contacts', 'messages', 'messaging_product']);
  });

  test('Should send video message properly', async () => {
    const video: VideoMediaObject = {
      link: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    };

    const data = await client.sendVideo(video, recipient);

    expect(Object.keys(data).sort()).toEqual(['contacts', 'messages', 'messaging_product']);
  });

  test('Should send location message properly', async () => {
    const location: LocationObject = {
      latitude: 18.456177289234116,
      longitude: -69.95233672760023,
      address: 'Plaza Karina, Av 27 de Febrero 409, Santo Domingo 10149, Dominican Republic',
      name: 'Coquet Studio',
    };

    const data = await client.sendLocation(location, recipient);

    expect(Object.keys(data).sort()).toEqual(['contacts', 'messages', 'messaging_product']);
  });
});
