import React from 'react';
import pic from '../../images/banner-image.png';
export default function Home() {

  return (document.title = "Employee Management System",
    <div className='text-center'>
        <h1 className='text-center'>Employee Management System</h1>
        <img src={pic} alt='banner' className='logo img-fluid' style={{height:'75vh'}}/>
    </div>
  )
}
