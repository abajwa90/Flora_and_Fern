import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link onClick={() => scrollTo(0, 0)} className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
      <div className='w-full h-64 flex items-center justify-center bg-gray-100 overflow-hidden'>
        <img className='h-full w-auto object-cover' src={image[0]} alt="" />
      </div>
      <p className='pt-3 pb-1 text-sm text-center'>{name}</p>
      <p className='text-sm font-medium text-center'>{currency}{price}</p>
    </Link>
  );
}

export default ProductItem;
