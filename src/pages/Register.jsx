import React, {useState,} from 'react'
import { Link , useNavigate} from 'react-router-dom'
import { register } from '../assets'
import { EyeClose, EyeOpen } from '../assets/icons'
import { useFormik } from 'formik';
import { registerSchema } from '../schemas';
import {useUserAuth} from '../context/UserContext'

const Register = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [passwordType, setPsswordType]=useState('password')
  const [error, setError] = useState('')
  const {signUp} = useUserAuth()
  const navigate = useNavigate()
  const handleShowPassword = ()=>{
    setShowPassword(!showPassword)
    if(showPassword === true){
      setShowPassword(false)
      setPsswordType('password')
    }else{
      setShowPassword(true)
      setPsswordType('text')

    }
  }
  const {values, handleBlur, handleChange, touched, handleSubmit, errors} = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword:'',
    },
    validationSchema: registerSchema,
    onSubmit: async(values) => {
      setError('')
      const {email, password} = values
      try{
        await signUp(email, password)
        navigate("/login");
      }catch(err){
        console.log(err.message)
      }
      console.log(email);
    },
  });
  return (
    <div className='w-full h-full'>
      <div className='flex container mx-ato h-full'>
        <div className='flex-1  hidden lg:flex lg:justify-center lg:items-center h-full'>
            <img src={register} alt="login" className='w-[80%]'/>
        </div>
        <div className='flex-1 flex justify-center items-center'>
            <div className='flex flex-col justify-center items-center'>
                <div className='mb-10'>
                  <h1 className='text-center font-extrabold text-blue-500 text-[40px]'>Sign up</h1>
                  <p className='text-center  text-gray-500 text-[14px]'>Please sign up or <Link to='/login' className='text-blue-500 font-bold'>Login</Link></p>
                </div>
                <form onSubmit={handleSubmit} className=' w-[100%]'>
                  <div className='my-2'>
                    <label className='font-semibold text-gray-600 text-[14px]'>Fullname</label>
                    <input 
                      type='text' 
                      name='name' 
                      placeholder='John Doe'
                      value={values.name} 
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={errors.name && touched.name ? 'w-[100%] py-2 px-6 border border-red-500 rounded-md outline-none focus:border-gray-300': 'w-[100%] py-2 px-6 border border-gray-200 rounded-md outline-none focus:border-gray-300'}/>
                      {errors.name && touched.name && <p className='text-red-500 font-mono text-[12px]'>{errors.name}</p>}
                  </div>
                  <div className='my-2'>
                    <label className='font-semibold text-gray-600 text-[14px]'>Email</label>
                    <input 
                      type='email' 
                      name='email' 
                      placeholder='JohnDoe@gmail.com' 
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={errors.email && touched.email ? 'w-[100%] py-2 px-6 border border-red-500 rounded-md outline-none focus:border-gray-300': 'w-[100%] py-2 px-6 border border-gray-200 rounded-md outline-none focus:border-gray-300'}/>
                      {errors.email && touched.email && <p className='text-red-500 font-mono text-[12px]'>{errors.email}</p>}
                  </div>
                  <div className='my-2 relative'>
                  <div onClick={handleShowPassword} className='absolute top-9 right-3'>
                    {showPassword ? (<EyeOpen/>):(<EyeClose/>)}
                  </div>
                    <label className='font-semibold text-gray-600 text-[14px]'>Password</label>
                    
                    <input 
                      type={passwordType} 
                      name='password' 
                      placeholder='**********' 
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={errors.password && touched.password ? 'w-[100%] py-2 px-6 border border-red-500 rounded-md outline-none focus:border-gray-300': 'w-[100%] py-2 px-6 border border-gray-200 rounded-md outline-none focus:border-gray-300'}/>
                      {errors.password && touched.password && <p className='text-red-500 font-mono text-[12px]'>{errors.password}</p>}
                  </div>
                  <div className='my-2 relative'>
                  <div onClick={handleShowPassword} className='absolute top-9 right-3'>
                    {showPassword ? (<EyeOpen/>):(<EyeClose/>)}
                  </div>
                    <label className='font-semibold text-gray-600 text-[14px]'>Confirm Password</label>
                    
                    <input 
                      type={passwordType} 
                      name='confirmPassword' 
                      placeholder='**********' 
                      value={values.confirmPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={errors.confirmPassword && touched.confirmPassword ? 'w-[100%] py-2 px-6 border border-red-500 rounded-md outline-none focus:border-gray-300': 'w-[100%] py-2 px-6 border border-gray-200 rounded-md outline-none focus:border-gray-300'}/>
                      {errors.confirmPassword && touched.confirmPassword && <p className='text-red-500 font-mono text-[12px]'>{errors.confirmPassword}</p>}
                  </div>
                  <div className='my-4'>
                    <button 
                      type='submit'
                      className='rounded-md py-3 px-6 bg-blue-500 hover:bg-blue-700 text-white outline-none focus:outline-none w-[100%]' 
                      >Sign in</button>
                  </div>
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Register
