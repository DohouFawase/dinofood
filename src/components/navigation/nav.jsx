import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
const url = [
    {
        title: 'Menu',
        link:"#"

    },

    {
        title: 'Cart',
        link:"#"

    },

    {
        title: 'About',
        link:"#"

    },

    {
        title: 'Contact',
        link:"#"

    }
]
export default function Nav() {
  const [toogle, setTogle] = useState(false)
  function dropp () {
    setTogle(!toogle)
    console.log("hello")
  }
  return (
    <div>
      <div className="px-12 py-6">
        <div className="flex justify-between items-center">
            <div className="lg:flex hidden">
                <ul className='  md:flex lg:flex justify-between gap-x-3'>
                    {
                        url.map((linkUrl) => {
                            
                            return(
                                <>
                                <li className=''>
                                    <NavLink  to={linkUrl.link}>
                                         {linkUrl.title} 
                                    </NavLink>
                                </li>
                               </>
                            )
                        
                        })
                    }
                   
                </ul>
            </div>
            <div className="flex gap-2">
                <div className="">
                <p onClick={dropp} className=' lg:hidden'>Toogle</p>
                </div>

                <h1>Dino's Food</h1>
            </div>
            <div className="">
                <NavLink>Contact</NavLink>
            </div>
        </div>
      </div>
    </div>
  )
}
