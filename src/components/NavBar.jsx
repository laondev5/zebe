import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuClose, MenuOpen } from '../assets/icons';
import {useUserAuth} from '../context/UserContext'

const NavBar = () => {
const [mobileNav, setmobileNav] = useState(false)
const {user, logout} = useUserAuth();
const [modal, setModal] = useState(false)


const handleLogout = async()=>{
    try{
        logout()
    }catch(err){
        console.log(err)
    }
}

const handleModel = ()=>{
    if(modal === false){
        setModal(true)
    }else{
        setModal(false)
    }
}
const handleMobleNav = ()=>{
    
}

  return (
    <div className='w-full bg-gray-200 sticky top-0 py-2'>
      <nav className='container mx-auto flex justify-between items-center sm:px-4'>
        <Link to='/'>
            <div className='text-[18px] text-blue-600 font-bold ml-3 lg:ml-0'>ZeBe</div>
        </Link>
        <div className='hidden lg:flex gap-3 justify-between items-center'>
            <Link to='/'>
                <div className='px-3 font-semibold text-[14px] hover:text-blue-500 hover:underline'>Home</div>
            </Link>
            <Link to='/details'>
                <div className='px-3 font-semibold text-[14px] hover:text-blue-500 hover:underline'>Details</div>
            </Link>
            {user ? <div>
                    <div onClick={handleModel} className='text-[14px] z-50 w-[25px] h-[25px] flex justify-center items-center text-white font-semibold py-2 px-2 rounded-full border border-whide bg-blue-500'>
                        <h1>{user.email.charAt(0)}</h1>
                    </div>
                </div> : 
                <div className='ml-3 flex justify-between items-center'>
                    <Link to='/login'>
                        <div className='px-3 font-semibold text-[14px] text-blue-400 hover:text-blue-700 '>Login</div>
                    </Link>
                    <Link to='/register'>
                        <div className='px-4 py-1 border rounded-md border-blue-400 hover:border-blue-700 font-semibold text-[14px] text-blue-400 hover:text-blue-700 '>Sign up</div>
                    </Link>
                    
                </div>
            }
            
        </div>
        <div onClick={()=>setmobileNav(!mobileNav)} className='block lg:hidden z-30 mr-3'>
        {mobileNav ? <MenuClose/>:<MenuOpen/>}
        </div>
        <div className={mobileNav ? 'absolute lg:hidden top-0 right-0 w-[50%] h-[100vh] z-20 bg-[#fff] shadow-sm transition-all duration-500 ease-linear':'hidden'}>
            <div className='flex flex-col gap-2 mt-14 lg:hidden '>
                <Link to='/'>
                    <div className='px-3 font-semibold text-[14px] hover:text-blue-500 hover:underline'>Home</div>
                </Link>
                <Link to='/details'>
                    <div className='px-3 font-semibold text-[14px] hover:text-blue-500 hover:underline'>Details</div>
                </Link>
                {user ? <div>
                     <div onClick={handleModel} className='text-[14px] z-50 w-[25px] ml-3 h-[25px] flex justify-center items-center text-white font-semibold py-2 px-2 rounded-full border border-whide bg-blue-500'>
                        <h1>{user.email.charAt(0)}</h1>
                        <div className={modal ? 'absolute top-30 right-24 w-[80px] shadow-md bg-white rounded-sm py-3 px-4 transition-all ease-in-out duration-500': 'hidden'}>
                            <h1 onClick={handleLogout} className='text-[15px] font-semibold text-gray-700'>Logput</h1>
                        </div>
                     </div>
                    </div> :
                    <div className='flex flex-col gap-2 '>
                        <Link to='/login'>
                            <div className='px-3 font-semibold text-[14px] text-blue-400 hover:text-blue-700 '>Login</div>
                        </Link>
                        <Link to='/register'>
                            <div className='px-3   rounded-md font-semibold text-[14px] text-blue-400 hover:text-blue-700 '>Sign up</div>
                        </Link>
                        
                    </div>
                }
                
            </div>  
        </div>
      </nav>
    </div>
  )
}

export default NavBar
