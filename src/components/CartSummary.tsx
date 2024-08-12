import React, { useState } from 'react';

interface CartSummaryProps {
  cartItems: {
    id: number;
    name: string;
    image: string;
    price: number;
    quantity: number;
  }[];
}

const CartSummary: React.FC<CartSummaryProps> = ({ cartItems }) => {
  const [discountType, setDiscountType] = useState<'fixed' | 'percentage' | null>(null);
  const [discountValue, setDiscountValue] = useState(0);

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const calculateDiscount = () => {
    if (discountType === 'fixed') {
      return discountValue;
    } else if (discountType === 'percentage') {
      return (subtotal * discountValue) / 100;
    }
    return 0;
  };

  const discount = calculateDiscount();
  const total = subtotal - discount;

  const handleDiscountChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const type = e.target.value as 'fixed' | 'percentage' | null;
    setDiscountType(type);

    if (type === 'fixed') {
      setDiscountValue(10);
    } else if (type === 'percentage') {
      setDiscountValue(10);
    } else {
      setDiscountValue(0);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
      <div className="space-y-2">
        <p className="text-lg">Subtotal: <span className="font-bold">${subtotal.toFixed(2)}</span></p>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Discount Type
          </label>
          <select
            value={discountType || ''}
            onChange={handleDiscountChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="" disabled>Select discount type</option>
            <option value="fixed">$10 off</option>
            <option value="percentage">10% off</option>
          </select>
        </div>
        {discountType && (
          <p className="text-lg">Discount: <span className="font-bold">-${discount.toFixed(2)}</span></p>
        )}
        <hr className="my-4" />
        <p className="text-xl font-bold">Total: <span>${total.toFixed(2)}</span></p>
      </div>
      <button className="mt-6 w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 rounded-lg">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CartSummary;
