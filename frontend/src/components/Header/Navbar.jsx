import React from 'react';
import flipkartLogo from './../../assets/flipkart.svg';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import StorefrontIcon from '@mui/icons-material/Storefront';
import MenuPopupState from '../../utils/MUI/popup';

export default function Navbar() {
  return (
    <div className='sticky bg-white shadow-md p-3 flex items-center'>
      <div className='w-full flex items-center justify-between px-12'>
        {/* Flipkart logo */}
          <div>
               <img src={flipkartLogo} alt="Flipkart Logo" />
          </div>

        {/* Search bar */}
        <div className='w-2/5 flex items-center p-2 bg-gray-100 rounded-xl'>
          <SearchIcon className='text-gray-500'/>
          <input 
            type='text' 
            className='w-full bg-transparent placeholder:text-gray-500 placeholder:text-lg outline-none' 
            placeholder='Search for Products, Brands and More' 
          />
        </div>

        {/* Buttons */}
        <div className='flex items-center gap-6'>
          {/* Login Button */}
          <button className='flex items-center text-lg p-2  rounded-xl hover:bg-blue-600 hover:text-white cursor-pointer mr-7'>
            
            <MenuPopupState name={"Login"}/>
            
          </button>
          


          {/* Cart Button */}
          <button className='flex items-center text-lg text-gray-700 hover:text-blue-500'>
            <ShoppingCartIcon className='mr-1' />
            Cart
          </button>

          {/* Become a Seller Button */}
          <button className='text-gray-700 hover:text-blue-500 flex items-center text-lg'>
            <StorefrontIcon/>
            Become a Seller
          </button>

          {/* More options (3 dots) */}
          <button className='text-gray-700 p-1 border border-transparent hover:border hover:border-gray-300 hover:bg-gray-100 hover:rounded-lg'>
            <MoreVertIcon className='font-thin'/>
          </button>
        </div>
      </div>
    </div>
  )
}
