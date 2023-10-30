export const getUser = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const res = await fetch('https://jsonplaceholder.typicode.com/users/1', {
    cache: 'no-store',
  });
  const data = await res.json();
  return data;
};
