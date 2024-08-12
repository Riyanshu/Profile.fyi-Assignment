import React from 'react';
import Link from 'next/link';
import CartIcon from './CartIcon';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md p-4">
      <div className="container flex justify-between items-center">
        <Link href="/" passHref>
          <span className="cursor-pointer text-xl font-bold text-gray-800 hover:text-gray-600 transition duration-200">
            My E-commerce Store
          </span>
        </Link>
        <CartIcon />
      </div>
    </header>
  );
};

export default Header;
