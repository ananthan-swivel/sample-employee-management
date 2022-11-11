import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Router, { useRouter } from "next/router";
import { useEffect } from 'react';

const Home: NextPage = () => {
  
  useEffect(() => {
    Router.push("/employee/list");
  }, [])
  
  return (
    <></>
  )
}

export default Home
