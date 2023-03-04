import React from 'react';
import { useLanguage } from '../context/GlobalContext';
import { MyRouter } from '../router/MyRouter';
import { Navbar, Cart } from './index';
import Login from './Login/Login';
import Search from './Search';

const Layout = () => {

  const { text } = useLanguage();

  const items = [
    {
      ref: "product-category/bycicles/road",
      text: text.header.road
    },
    {
      ref: "product-category/bycicles/mtb",
      text: text.header.mtb
    },
    {
      ref: "product-category/bycicles/ebike",
      text: text.header.ebike
    },
    {
      ref: "product-category/bycicles/city",
      text: text.header.city
    }
  ];

  return (
    <div className='layout'>
      <Navbar items={items} />
      <Login />
      <Search />
      <Cart />
      <MyRouter />
    </div>
  )
}

export default Layout;