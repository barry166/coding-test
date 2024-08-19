declare module 'vite-plugin-blocklet';

declare module 'express-history-api-fallback';

declare module 'express-async-errors';

namespace Express {
  interface Request {
    appid?: string;

    user?: {
      did: string;
      role: string;
      fullName: string;
      provider: string;
      walletOS: string;
    };
  }
}
