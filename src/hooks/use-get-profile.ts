import { useEffect, useState } from 'react';
import api from '../libs/api';
import { IProfile } from '../types/profile';

export default function useGetProfile() {
  const [user, setUser] = useState<IProfile>();

  useEffect(() => {
    api
      .get('/api/profile')
      .then((res) => {
        setUser(res.data || {});
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return {
    user,
    setUser,
  };
}
