'use client';
import { usePosts } from '@/app/services/queries';

export default function Posts({ pageIndex }: { pageIndex: number }) {
  const { data, error, isLoading } = usePosts(pageIndex);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  const posts = data?.data;

  return (
    <ul>
      {posts?.map(post => (
        <li key={post.id}>
          <p>Title: {post.title}</p>
        </li>
      ))}
    </ul>
  );
}
