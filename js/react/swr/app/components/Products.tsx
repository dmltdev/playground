'use client';
import { axiosInstance } from '../services/fetcher';
import { useCreateProduct } from '../services/mutations';
import { useProducts } from '../services/queries';
import { useState, ChangeEvent } from 'react';

export default function Products() {
  const { data, mutate } = useProducts();
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

    trigger({ title: inputValue });
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
      <button onClick={handleCreateProduct}>Create</button>
    </div>
  );
}
