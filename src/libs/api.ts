import { createAxios } from '@blocklet/js-sdk';

const api = createAxios({
  baseURL: window?.blocklet?.prefix || '/',
  headers: {
    'x-appid': window.blocklet?.appId || '',
  },
});

export default api;
