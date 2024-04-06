import useSWR from 'swr';
import useSWRInfinite from 'swr/infinite';

import { Cart } from '@/app/types/cart';
import { User } from '@/app/types/user';
import { PostsResponse } from '@/app/types/post';
import { Todo } from '@/app/types/todo';
import { Product } from '@/app/types/product';
import { logger } from '@/app/utils/logger';
import { use } from 'react';

export function useUser() {
  return useSWR<User>('/user');
}

export function useCart() {
  const { data } = useUser();

  return useSWR<Cart>(data ? '/cart' : null);
}

export function useProducts() {
  return useSWR<Product[]>('/products', { use: [logger] });
}

export function usePosts(pageIndex: number) {
  return useSWR<PostsResponse>(`/posts?_page=${pageIndex}&_per_page=3`, {
    use: [logger],
  });
}

export function useTodos() {
  const getKey = (pageIndex: number, previousPageData: Todo[]) => {
    if (previousPageData && !previousPageData.length) return null;
    return `/todos?_page=${pageIndex + 1}&_limit=3`;
  };

  return useSWRInfinite<Todo[]>(getKey, { use: [logger] });
}
