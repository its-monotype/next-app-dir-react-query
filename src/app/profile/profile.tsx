'use client';

import { getUser } from '@/utils/get-user';
import { useQuery } from '@tanstack/react-query';

export const Profile = () => {
  const { data: user } = useQuery({
    queryKey: ['user'],
    queryFn: getUser,
  });

  return <div>Welcome to profile {user?.name}!</div>;
};
