import React, { useState } from 'react';
import loginImg from './../../assets/login.png'

export default function Login() {
  const [inputValue, setInputValue] = useState('');
  return (
    <div className="flex flex-row ... items-center justify-center mt-36 ">
    <div className="flex w-full max-w-md h-screen ">
      <div className="flex flex-col justify-betweeen h-3/5 border border-gray-300 bg-blue-600 w-full p-4 ">
        <div>
        <div className='mt-8'>
          <span className="text-2xl font-bold text-white">Login</span>
        </div>
        <p className="text-lg text-stone-300 mt-10">
          Get access to your Orders, Wishlist, and Recommendations
        </p>
        </div>
        <div className='p-24 mt-16'>
            <img src={loginImg} alt="" className='h-36'/>
        </div>
        
      </div>
    </div>
  
    <div className="flex w-full max-w-md h-screen">
      <div className="w-full  h-3/5 p-6 border border-gray-300 shadow-md">
        <form autoComplete="on" className='flex flex-col items-center justify-around'>
            <div>
            <div className="relative mb-4">
      <input
        autoComplete="off"
        type="text"
        className="w-full p-3 border-b border-gray-300 rounded-none focus:outline-none focus:border-blue-500 peer"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <label
        className={`absolute left-3 top-3 transition-all duration-200 ease-in-out 
        ${inputValue ? '-top-4 text-xs text-blue-500' : 'text-gray-400'}`}
      >
        Enter Email/Mobile number
      </label>
    </div>
          <div className="mb-4 text-sm text-stone-500 ">
            By continuing, you agree to Flipkart's{' '}
            <a className="text-blue-600" target="_blank" href="/pages/terms">
              Terms of Use
            </a>{' '}
            and{' '}
            <a className="text-blue-600" target="_blank" href="/pages/privacypolicy">
              Privacy Policy
            </a>
            .
          </div>
          <div>
            <button className="w-full p-3 bg-orange-600 text-white rounded-md">
              Request OTP
            </button>
          </div>
          </div>
          <div className=" text-blue-700 mt-64">
            <a className="text-blue-600" href="/account/login?signup=true">
              New to Flipkart? Create an account
            </a>
          </div>
        </form>
      </div>
    </div>
  </div>
  

  );
}