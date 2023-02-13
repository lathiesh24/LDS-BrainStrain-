import React from 'react'
import { useNavigate } from 'react-router-dom';

const Button = (props) => {
  const navigate = useNavigate();
  const handleClick = ()=>{
    navigate("/brainstrain")
  }
  return (
    <button className='bg-yellow-500 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400  
    duration-500'>
      {props.children}
    </button>
  )
}
  

export default Button;