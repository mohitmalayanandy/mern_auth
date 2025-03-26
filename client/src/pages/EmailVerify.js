import axios from 'axios';
import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'

const EmailVerify = () => {

  axios.defaults.withCredentials = true;
  const {backendUrl, isLoggedIn, userData, getUserData} = useContext(AppContext);


  const navigate = useNavigate()

  const inputRefs = React.useRef([]);
  const handleInput = (e, index)=>{
    if(e.target.value.length > 0 && index < inputRefs.current.length - 1){
      inputRefs.current[index + 1].focus();
    }
  }

  const handleKeyDown = (e, index)=>{
    if(e.key === 'Backspace' && e.target.value === '' && index > 0){
      inputRefs.current[index - 1].focus();
    }
  }

  const handlePaste = (e) => {
    const paste = e.clipboardData.getData('text');
    const pasteArray = paste.split('');
    pasteArray.forEach((char, index) => {
      if(inputRefs.current[index]){
        inputRefs.current[index].value = char;
      }
    });
  }

  const onSubmitHandler = async (e) =>{
    try {
      e.preventDefault();
      const otpArray = inputRefs.current.map(e => e.value)
      const otp = otpArray.join('')
      
      const {data} = await axios.post(backendUrl + '/api/auth/verify-account', {otp})

      if(data.success){
        toast.success(data.message);
        getUserData()
        navigate('/')
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.response?.data?.message)
    }
  }

  useEffect(()=>{
    isLoggedIn && userData && userData.isAccountVerified && navigate('/')
  }, [isLoggedIn, userData])

  return (
    <div className='flex items-center justify-center min-h-screen px-6 sm:px-0'>
      <div className='bg-black p-10 rounded-lg shadow-lg w-full sm:w-96 text-indigo-300'>
        <h2 className='text-3xl font-semibold text-white text-center mb-3'>Email Verify OTP</h2>
        <p className='text-center text-sm mb-6'>Enter the 6-digit OTP sent to your email</p>
        <form onSubmit={onSubmitHandler}>
          <div className='flex justify-between mb-8' onPaste={handlePaste}>
            {Array(6).fill(0).map((_, index) => (
              <input 
              type="text" 
              maxLength='1' 
              key={index} 
              required 
              className='w-12 h-12 bg-[#333A5C] text-white text-center text-xl rounded-md' 
              ref={e => inputRefs.current[index] = e}
              onInput={(e)=> handleInput(e, index)}
              onKeyDown={(e)=> handleKeyDown(e, index)}
              />
            ))}
          </div>
          <button type='submit' className='w-full py-2.5 rounded-full bg-gradient-to-r from-blue-500 to-green-500'>Verify Email</button>
        </form>
      </div>
    </div>
  )
}

export default EmailVerify