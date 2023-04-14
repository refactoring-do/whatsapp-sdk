import { WhatsApp } from '../src';

(async () => {
  const whatsapp = new WhatsApp({
    accessToken: '',
    cloudApiVersion: 'v15.0',
    phoneNumberId: 0,
  });

  const data = await whatsapp.service.sendText(
    {
      body: 'Hello world from Refactoring, SRL.',
    },
    10000000000,
  );

  console.log(data);
})();
