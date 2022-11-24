import React from 'react'
import { FcDeleteDatabase } from 'react-icons/fc';

// Show to data lenght === 0 for table and card view
const NoData = () => {
  return (
    <div className="text-center"><h5><FcDeleteDatabase size={50}/>No Data Found</h5></div>
  )
}

export default NoData