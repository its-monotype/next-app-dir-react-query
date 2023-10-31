import getQueryClient from '@/utils/get-query-client';
import { getUser } from '@/utils/get-user';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { Profile } from './profile';

export default async function ProfilePage() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['user'],
    queryFn: getUser,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Profile />
    </HydrationBoundary>
  );
}
