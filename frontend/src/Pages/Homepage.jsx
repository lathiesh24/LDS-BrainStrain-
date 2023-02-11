import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Components/Button';

const Homepage = () => {
  
  return (
      <>
    <div className='pt-20 text-black'>
      Welcome Home!
    </div>
   < div>     
   <Button>Submit</Button>
   </div>
     </>
  )
}

export default Homepage
