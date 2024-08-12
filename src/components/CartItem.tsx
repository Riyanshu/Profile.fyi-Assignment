import Image from 'next/image';
import React from 'react';

interface CartItemProps {
  item: {
    id: number;
    name: string;
    image: string;
    price: number;
    quantity: number;
  };
  onRemove: () => void;
  onUpdateQuantity: (quantity: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onRemove, onUpdateQuantity }) => {
  const { name, image, price, quantity } = item;

  return (
    <div className="flex items-center bg-white shadow-md rounded-lg p-4">
      <div className="flex-shrink-0 mx-auto">
        <Image
          src={`/images/${image}`}
          alt={name}
          width={80}
          height={80}
          className="object-cover rounded-md"
        />
      </div>
      <div className="ml-4 flex-1">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-sm text-gray-500">${price.toFixed(2)}</p>
        <div className="mt-2 flex items-center">
          <button
            className="bg-gray-200 px-2 py-1 rounded-l-lg"
            onClick={() => onUpdateQuantity(quantity - 1)}
            disabled={quantity <= 1}
          >
            -
          </button>
          <span className="mx-2">{quantity}</span>
          <button
            className="bg-gray-200 px-2 py-1 rounded-r-lg"
            onClick={() => onUpdateQuantity(quantity + 1)}
          >
            +
          </button>
        </div>
      </div>
      <button
        className="ml-auto bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
        onClick={onRemove}
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
