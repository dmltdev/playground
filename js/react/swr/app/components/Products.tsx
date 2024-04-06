'use client';
import { axiosInstance } from '../services/fetcher';
import { useCreateProduct } from '../services/mutations';
import { useProducts } from '../services/queries';
import { useState, ChangeEvent } from 'react';

export default function Products() {
  const { data, mutate, isValidating } = useProducts();
  const { trigger, isMutating } = useCreateProduct();

  const [inputValue, setInputValue] = useState('');

  const handleInputValueUpdate = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleCreateProduct = async () => {
    // await axiosInstance.post('/products', {
    //   title: inputValue,
    // });
    // mutate();

    trigger(
      { title: inputValue },
      {
        // optimisticData: data && [
        //   ...data,
        //   { title: `${inputValue} (optimistic data)` },
        // ],
        optimisticData: data && [...data, { title: inputValue }],
        rollbackOnError: true, //! always use to rollback on error
      }
    );
  };

  return (
    <div>
      <p>Products:</p>
      <ul>
        {data?.map(product => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
      <input
        placeholder="Product title"
        value={inputValue}
        onChange={handleInputValueUpdate}
      />
      <button
        onClick={handleCreateProduct}
        disabled={isMutating || isValidating}>
        {isMutating || isValidating ? 'Creating...' : 'Create Product'}
      </button>
    </div>
  );
}
