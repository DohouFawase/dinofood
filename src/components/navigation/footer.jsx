import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Footer() {
    const date= new Date().getFullYear()
  return (
    <div>
      <div className="mt-4">
        <div className="py-5 px-12">
            <div className="grid lg:grid-cols-4 gap-x-4 py-8">
              <div className="">
              <h1 className='font-bold text-xl py-2'>
                <NavLink to={"#"}>DINO FOOD</NavLink>
              </h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet ad molestias doloribus?</p>
              </div>
              <div className="">
                <h1 className='font-bold text-xl py-2'>Quick Links</h1>
                <ul className='flex flex-col space-y-2'>
                  <li>
                    <NavLink>Home</NavLink>
                  </li>

                  <li>
                    <NavLink>About us</NavLink>
                  </li>


                  <li>
                    <NavLink>Reservation</NavLink>
                  </li>

                  <li>
                    <NavLink>Contact us</NavLink>
                  </li>
                </ul>
              </div>
              <div className="">
                <h1 className='font-bold text-xl py-2'>Menu</h1>
                <ul className='flex flex-col space-y-2'>
                  <li>
                    <NavLink>Spaquetti</NavLink>
                  </li>

                  <li>
                    <NavLink>Idomies</NavLink>
                  </li>


                  <li>
                    <NavLink>Lait Caillé</NavLink>
                  </li>

                  <li>
                    <NavLink>Atièkè</NavLink>
                  </li>
                </ul>
              </div>

              <div className="">
                <h1 className='font-bold text-xl py-2'>Other Links</h1>
                <ul className='flex flex-col space-y-2'>
                  <li>
                    <NavLink>Home</NavLink>
                  </li>

                  <li>
                    <NavLink>About us</NavLink>
                  </li>


                  <li>
                    <NavLink>Reservation</NavLink>
                  </li>

                  <li>
                    <NavLink>Contact us</NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <p className='font-bold text-[0.8rem] text-center'> {date} dinoFood. All Righnt Reserveed. Design by Illusionyxt Team  </p>
        </div>
      </div>
    </div>
  )
}
