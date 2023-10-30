'use client';

import { getUser } from '@/api/get-user';
import { useQuery } from '@tanstack/react-query';

export const Profile = async () => {
  const { data: user } = useQuery({
    queryKey: ['user'],
    queryFn: getUser,
  });

  return <div>Welcome to profile {user?.name}!</div>;
};
