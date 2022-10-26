import React from 'react';
import Footer from '../components/atoms/parts/Footer';
import Header from '../components/atoms/parts/Header';

export default function DefaultLayout(props:any) {
  return (
    <>
      <Header />
        {props.children}
      <Footer />
    </>
  );
}
