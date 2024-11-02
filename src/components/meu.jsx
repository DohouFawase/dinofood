import React from 'react'
import { HoverImageLinks } from './menuLink'

export default function Menu() {
  return (
    <div>
      <div className="">
        <div className="">
            <h1 className='text-center text-[3rem] font-bold  '>Our Miraultemese  <br /> Food Menu</h1>
            <div className="px-12 md:px-0">
            <HoverImageLinks />
            </div>
        </div>
      </div>
    </div>
  )
}
