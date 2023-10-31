'use client';

import { getUser } from '@/utils/get-user';
import { useQuery } from '@tanstack/react-query';

export const Header = () => {
  const { data: user } = useQuery({
    queryKey: ['user'],
    queryFn: getUser,
  });

  return <div className="text-white">{user?.name}</div>;
};
