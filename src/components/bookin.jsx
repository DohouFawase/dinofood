import React from 'react'
import { Link } from 'react-router-dom'

export default function Bookin() {
  return (
    <div className='w-full '>
      <div className="bgImage bg-[url('./booking.jpg')] object-container  max-w-full bg-no-repeat h-screen flex justify-center items-center">
    

        <div className="  flex flex-col text-center justify-center items-center ">
            <p className='text-white font-bold text-[2.5rem] lg:text-[5.9rem] uppercase'>Booking <br />Restaurante Now </p>
            <p className='text-white font-bold'>Booking Restaurante and will you get cash ack 10%</p>
            <div className="mt-4">
            <Link to={"#"} className='hover:shadow-md text-black font-bold bg-white px-4 p-3 rounded-full w-44 '>Booking now</Link>

            </div>
        </div>
      </div>
    </div>
  )
}
