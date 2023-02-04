import React from 'react';
import data from "../Components/EventData";

const Cards = () => {

  return (
    <>
    <div className='mt-8 grid lg:grid-cols-3  gap-10'>
    {data.map((item)=>{    
    return(
      <a href={item.link}>
       <div className=  'ml-20 lg:ml-20 w-64  bg-white rounded-md shadow-md overflow-hidden p-4 md:w-80'>
    <img className='w-48 md:w-32 lg:w-64 object-cover ml-4 ' src={item.src} alt="Event Image" />
    <div className='m-4'>
      <span className='font-bold text-white tracking-wider'>{item.eventName}</span>
      <span className='block text-grey-500 text-sm'>{item.Time}</span>
     </div>
    </div> 
    </a>)
      })}
    </div>
    </>
  )
}

export default Cards
