import React from 'react';
import Footer from './parts/Footer';
import Header from './parts/Header';

export default function DefaultLayout(props:any) {
  return (
    <>
      <Header />
        {props.children}
      <Footer />
    </>
  );
}
