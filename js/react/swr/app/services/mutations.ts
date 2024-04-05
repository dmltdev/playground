import useSWRMutation from 'swr/mutation';
import { useProducts } from './queries';
import { createProduct } from './api';

export function useCreateProduct() {
  const { mutate } = useProducts();

  return useSWRMutation('/products', createProduct, {
    onError() {
      console.error('Error creating product');
    },
    onSuccess() {
      mutate();
    },
  });
}
