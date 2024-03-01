import React from 'react'
import { CgProfile } from 'react-icons/cg';
import { FaBarsStaggered } from 'react-icons/fa6';
import ItemNav from './ItemNav';
import { IoBedOutline } from "react-icons/io5";
import { PiCarProfileLight, PiTaxi } from 'react-icons/pi';
import { MdOutlineAttractions } from 'react-icons/md';
import { CiPlane } from 'react-icons/ci';


const Navbar: React.FC = () => {
  return (
    <header className='flex flex-col justify-between items-center bg-blue-900 text-white'>
      <div className='p-6 pb-2 flex justify-between w-full'>
        <div className='font-bold'>Booking.com</div>
        <div className='flex flex-row gap-2'>
          <CgProfile className='size-6'/>
          <FaBarsStaggered className='size-6'/>
        </div>
      </div>
      <nav className='w-full p-4 flex flex-row items-center gap-4'>
        <ItemNav icon={<IoBedOutline />} nombre='Estadias' />
        <ItemNav icon={<CiPlane />} nombre='Vuelos' />
        <ItemNav icon={<PiCarProfileLight />} nombre='Alquiler de autos' />
        <ItemNav icon={<MdOutlineAttractions />} nombre='Atracciones' />
        <ItemNav icon={<PiTaxi />} nombre='Taxis (Aeropuerto)' />

      </nav>
    </header>
  )
}

export default Navbar