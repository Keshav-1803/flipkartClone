import React from 'react'
import Navbar from '../../components/Header/Navbar';
import Category from '../../components/Categories/Category';

export default function Home() {
  return (
    <div className='min-h-screen bg-slate-100'>
       <Navbar/>
       <div className='p-3'>
         <Category/>
       </div>
       
    </div>
  )
}
