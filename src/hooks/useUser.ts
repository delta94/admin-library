import { ApiResponse, Profile } from 'types';
import { useState, useEffect } from 'react';

export default (request: () => Promise<ApiResponse>) => {
  const [user, setUser] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  const getUser = async () => {
    const { json, error } = await request();

    setLoading(false);

    if (error) return;

    setUser(json);
  };

  useEffect(() => {
    getUser();
  }, []);

  return { user, loading, getUser };
};
