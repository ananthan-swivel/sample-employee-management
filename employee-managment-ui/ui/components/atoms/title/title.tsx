import React from 'react'
import Head from 'next/head'

type Props = {
    title?: string | string[];
    iconComp?: React.ReactNode;
  };
const  Title: React.FC<Props> = ({
    title,
    iconComp,
    }) => {
    
  return (
    <>
     <Head>
      <title>{process.env.PROJECT_NAME} | {title}</title>
    </Head>
    <div className="title-bar text-dark d-flex justify-content-between p-1">
        <div>
          {iconComp} <strong>{title}</strong>
        </div>
      </div>
    </>
  )
}


export default Title
