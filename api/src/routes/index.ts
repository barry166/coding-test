import middleware from '@blocklet/sdk/lib/middlewares';
import { Router } from 'express';
import db from '../utils/database';
import { ProfileInput, profileSchema } from '../utils/validators';

const router = Router();

router.use('/user', middleware.user(), (req, res) => res.json(req.user || {}));

router.use('/data', (_, res) => {
  return res.json({
    message: 'Hello Blocklet!',
  });
});

// 获取用户 Profile 信息
router.get('/profile', (req, res) => {
  const { appid } = req; // 使用从中间件中附加的 appid

  db.get('SELECT * FROM profiles WHERE appid = ?', [appid], (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json(row);
  });
});

// 更新用户 Profile 信息
router.post('/profile', (req, res) => {
  const result = profileSchema.safeParse(req.body);
  if (!result.success) {
    res.status(400).json(result.error);
    return;
  }
  const { appid } = req;
  const { username, email, phone, desc }: ProfileInput = result.data;
  db.run(
    'UPDATE profiles SET username = ?, email = ?, phone = ?, desc = ? WHERE appid = ?',
    [username, email, phone, desc, appid],
    function error(err) {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({ message: 'Profile updated successfully!' });
    },
  );
});

export default router;
