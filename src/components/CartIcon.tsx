import React from 'react';
import { useRouter } from 'next/router';
import { useCart } from '../context/CartContext';

const CartIcon: React.FC = () => {
  const { state } = useCart();
  const totalItems = state.items.reduce((acc, item) => acc + item.quantity, 0);
  const router = useRouter();

  const goToCart = () => {
    router.push('/cart');
  };

  return (
    <div className="relative cursor-pointer" onClick={goToCart}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-gray-800"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1 5h10l-1-5M5 21h2m10 0h2M7 21a2 2 0 11-4 0 2 2 0 014 0zm12 0a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
          {totalItems}
        </span>
      )}
    </div>
  );
};

export default CartIcon;
