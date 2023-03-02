import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MyRouter } from '../router/MyRouter';
import { Navbar, Footer, Cart } from './index';

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
    <>
      <Navbar items={items} />
      <Cart />
      <MyRouter />
      <Footer />
    </>
  )
}

export default Layout;