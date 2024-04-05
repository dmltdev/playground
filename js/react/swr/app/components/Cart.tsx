'use client';
import { useCart, useUser } from '../services/queries';

export default function Cart() {
  const userQuery = useUser();
  const cartQuery = useCart();

  return (
    <div>
      <p>
        Username:{' '}
        {userQuery.isLoading ? 'Loading...' : userQuery.data?.userName}
      </p>
      <p>
        Total cart cost:{' '}
        {cartQuery.data
          ? cartQuery.data.totalCost
          : cartQuery.isLoading
          ? 'Loading...'
          : 'No user found'}
      </p>
    </div>
  );
}
