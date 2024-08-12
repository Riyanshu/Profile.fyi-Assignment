import React from 'react';
import { useCart } from '../context/CartContext';
import CartItemComponent from '../components/CartItem';
import CartSummary from '../components/CartSummary';

const CartPage: React.FC = () => {
  const { state, dispatch } = useCart();

  const handleRemoveItem = (id: number) => {
    dispatch({ type: 'REMOVE_FROM_CART', id });
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', id, quantity });
  };

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Your Shopping Cart</h1>
      {state.items.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            {state.items.map(item => (
              <CartItemComponent
                key={item.id}
                item={item}
                onRemove={() => handleRemoveItem(item.id)}
                onUpdateQuantity={(quantity) => handleUpdateQuantity(item.id, quantity)}
              />
            ))}
          </div>
          <CartSummary cartItems={state.items} />
        </div>
      )}
    </div>
  );
};

export default CartPage;
