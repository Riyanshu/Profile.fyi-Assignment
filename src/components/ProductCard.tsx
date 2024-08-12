import Image from 'next/image';
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    image: string;
    price: number;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { dispatch } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      item: {
        id: product.id,
        name: product.name,
        image: product.image,
        price: product.price,
        quantity: 1,
      },
    });

    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1000);
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="flex justify-center items-center h-48">
        <Image
          src={`/images/${product.image}`}
          alt={product.name}
          width={200}
          height={150}
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold text-center">{product.name}</h2>
        <p className="mt-2 text-lg font-bold text-blue-600 text-center">${product.price.toFixed(2)}</p>
        <button
          className={`mt-4 w-full ${
            isAdded ? 'bg-green-500' : 'bg-blue-500 hover:bg-blue-600'
          } text-white font-medium py-2 rounded-lg transition-all duration-300`}
          onClick={handleAddToCart}
        >
          {isAdded ? 'Added!' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
