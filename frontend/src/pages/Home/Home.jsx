import React from 'react'
import Navbar from '../../components/Header/Navbar';
import Category from '../../components/Categories/Category';
import Footer from '../../components/Footer/Footer';
import Info from '../../components/Footer/Info';

export default function Home() {
  return (
    <div className='min-h-screen bg-slate-100'>
       <Navbar/>
       <div className='p-3'>
         <Category/>
       </div>
       <Info/>
       <Footer/>
    </div>
  )
}
