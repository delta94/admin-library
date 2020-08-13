import { ApiResponse, Profile } from 'types';
import { useState, useEffect } from 'react';

interface Result {
  user: Profile | null;
  loading: boolean;
  getUser: () => void;
}

export default (request: () => Promise<ApiResponse>): Result => {
  const [user, setUser] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  const getUser = async () => {
    const { json, error } = await request();

    setLoading(false);

    if (error) return;

    setUser(json as Profile);
  };

  useEffect(() => {
    getUser();
  }, []);

  return { user, loading, getUser };
};
