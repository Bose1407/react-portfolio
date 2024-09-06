import React from 'react'
import { CiInstagram,CiLocationArrow1,CiMail } from 'react-icons/ci'

const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20 font-light tracking-tighter'>
        <h2 className='my-10 text-center text-4xl'>Get in Touch</h2>
        <div className="text-center tracking-tighter">
          <div className="my-4 flex justify-center items-center">
            <CiLocationArrow1 className='text-4xl mr-2' />
            <p>Madurai, Tamil Nadu</p>
          </div>
          <div className="my-4 flex justify-center items-center">
            <CiMail className='text-4xl mr-2' />
            <a href="mailto:boseb2516@gmail.com">boseb2516@gmail.com</a>
          </div>
          <div className="my-4 flex justify-center items-center">
            <CiInstagram className='text-4xl mr-2' />
            <a href="https://www.instagram.com/bose__14?igsh=Z2I4N3Foa2lpaXEz">bose__14</a>
          </div>
        </div>
    </div>
  )
}

export default Contact
