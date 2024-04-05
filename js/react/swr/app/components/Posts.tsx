import useSWR from 'swr';

export default function Posts() {
  const { data } = useSWR('/posts/, fetcher');

  return <div>posts</div>;
}
