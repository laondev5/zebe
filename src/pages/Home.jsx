import React, { useState } from 'react'

const Home = () => {
  const [like, setLike] = useState(false)
  const [count, setCount] = useState()
  const handleLike = ()=>{
    // setLike(!like)
    // if(like === true){
    //   setCount(count + 1)
    // }else if(like === false && count >= 1){
    //   setCount(count - 1)
    // }
    // if(like === false){
    //   setLike(true)
    //   setCount(count + 1)
    // }else{
    //   if(like === true && count >= 1){
    //     setLike(false)
    //     setCount(count - 1)
    //   }
    // }
  }
  return (
    <div className='flex gap-2'>
    Home
    </div>
  )
}

export default Home
