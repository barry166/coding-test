import { NextFunction, Request, Response } from 'express';

export default function checkAppId(req: Request, res: Response, next: NextFunction) {
  const appid = req.headers['x-appid'] as string;
  if (!appid) {
    res.status(400).json({ error: 'AppID is required in the header' });
    return;
  }
  req.appid = appid; // Attach appid to request object

  next();
}
