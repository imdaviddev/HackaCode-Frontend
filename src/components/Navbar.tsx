import React, { useState } from 'react'
import { CgProfile } from 'react-icons/cg';
import { FaBarsStaggered } from 'react-icons/fa6';
import ItemNav from './ItemNav';
import { IoBedOutline } from "react-icons/io5";
import { PiCarProfileLight, PiTaxi } from 'react-icons/pi';
import { MdOutlineAttractions } from 'react-icons/md';
import { CiPlane } from 'react-icons/ci';
import ToggleMenu from './ToggleMenu';


const Navbar: React.FC = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const onClickToggleMenu = () => {
    setToggleMenu(toggleMenu ? false : true);
  }

  return (
    <header className='flex flex-col justify-between items-center bg-blue-900 text-white relative'>
      <div className='w-full max-w-screen-lg'>
        <div className='p-4 pb-3 flex justify-between w-full items-center'>
          <div className='font-bold text-xl'>Booking.com</div>
          <div className='flex flex-row gap-4 items-center'>
            <CgProfile className='size-6 cursor-pointer'/>
            <FaBarsStaggered className='size-6 opacity-50 hover:opacity-100 cursor-pointer' onClick={onClickToggleMenu}/>
          </div>
        </div>
        <nav className='w-full p-2 flex flex-row items-center gap-4'>
          <ItemNav icon={<IoBedOutline className='size-6'/>} nombre='Estadias' />
          <ItemNav icon={<CiPlane className='size-6'/>} nombre='Vuelos' />
          <ItemNav icon={<PiCarProfileLight className='size-6'/>} nombre='Alquiler de autos' />
          <ItemNav icon={<MdOutlineAttractions className='size-6'/>} nombre='Atracciones' />
          <ItemNav icon={<PiTaxi className='size-6'/>} nombre='Taxis (Aeropuerto)' />

        </nav>
      </div>

      {toggleMenu && <ToggleMenu handleMenu={onClickToggleMenu}/>}
    </header>
  )
}

export default Navbar