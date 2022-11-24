import React from 'react';
import Footer from '../components/atoms/parts/Footer';
import Header from '../components/atoms/parts/Header';

// Defalut page layout
export default function DefaultLayout(props:any) {
  return (
    <>
      <Header title="Employee Management"/>
        {props.children}
      <Footer />
    </>
  );
}
