import React from 'react'
import {useNavigate} from "react-router-dom"
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';


const SignReg = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/")
  }
  return (
    <div className="bg-gradient-to-r from-red-200 to-red-500 min-h-screen justify-center align-center flex">
       <div className='border-2 bg-white shadow-lg grid grid-flow-row space-y-8 justify-center align-middle px-20 my-8 py-10 md:px-36 '>
         <div className='grid justify-center'>
           Register
         </div>
         <div className=''>
          <label>
            Username
          </label>
           <div className='flex flex-row border-b border-slate-400' >
            <div className='mt-1.5 pr-2'>
             <ion-icon name="person-outline"></ion-icon>
            </div>
             <input type="text" className=" outline-none"   placeholder="Type Your Username" />
            </div>
         </div>
         <div className=''>
          <label>
            Email-Id
          </label>
           <div className='flex flex-row border-b border-slate-400' >
            <div className='mt-1.5 pr-2'>
             <ion-icon name="mail-outline"></ion-icon>
            </div>
             <input type="email" className=" outline-none"   placeholder="Type Your Email-Id" />
            </div>
         </div>
         <div className=''>
          <label>
            College Name
          </label>
           <div className='flex flex-row border-b border-slate-400' >
            <div className='mt-1.5 pr-2'>
             <ion-icon name="book-outline"></ion-icon>
            </div>
             <input type="text" className=" outline-none"   placeholder="Type Your College Name" />
            </div>
         </div>
         <div className=''>
          <label>
            Year of Study
          </label>
           <div className='flex flex-row border-b border-slate-400' >
            <div className='mt-1.5 pr-2'>
             <ion-icon name="library-outline"></ion-icon>
            </div>
             <input type="number" className=" outline-none"   placeholder="Type Your Year of Study" />
            </div>
         </div>
         <div className=''>
          <label>
            Phone Number
          </label>
           <div className='flex flex-row border-b border-slate-400' >
            <div className='mt-1.5 pr-2'>
             <ion-icon name="call-outline"></ion-icon>
            </div>
             <input type="text" className="outline-none" placeholder="Type Your Phone Number" />
            </div>
         </div>
         
         <div className='grid justify-center'>
            <button className='border-2  p-3 text-center text-white bg-gradient-to-r from-red-200 to-red-500 rounded-md hover:bg-yellow-500 
    duration-500' onClick={handleSubmit}>Proceed to Pay</button>
            </div>
       </div>
    </div>
  )
}

export default SignReg