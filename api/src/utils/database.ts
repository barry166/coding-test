import { Database } from 'sqlite3';
import { wallet } from '../libs/auth';

const dbName: string = 'blockletApp.db';
const defaultAppId: string = wallet.address; // 这应该是从某处动态获取的

const db = new Database(dbName, (err: Error | null) => {
  if (err) {
    console.error(`Error opening database ${err.message}`);
  } else {
    db.run(
      `
            CREATE TABLE IF NOT EXISTS profiles (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                username TEXT,
                email TEXT,
                phone TEXT,
                appid TEXT UNIQUE,
                desc TEXT
            )
        `,
      (error: Error | null) => {
        if (error) {
          console.error(`Error creating table ${error.message}`);
        } else {
          // 插入一条初始数据，其中只有 appid 设置
          db.run(
            'INSERT INTO profiles (appid) VALUES (?) ON CONFLICT(appid) DO NOTHING',
            [defaultAppId],
            (insertErr: Error | null) => {
              if (insertErr) {
                console.error(`Error inserting initial data ${insertErr.message}`);
              }
            },
          );
        }
      },
    );
  }
});

export default db;
