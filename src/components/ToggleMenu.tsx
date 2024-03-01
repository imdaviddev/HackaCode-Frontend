import React from 'react'
import { RxCross2 } from 'react-icons/rx'

interface Props {
    handleMenu: () => void
}

const ToggleMenu: React.FC<Props> = ({ handleMenu }) => {
  return (
    <div className='h-screen w-screen absolute top-0 right-0 bg-gray-100'>
        <RxCross2 className='text-red-700 size-8 right-5 top-5 absolute hover:bg-gray-600 hover:text-gray-100 cursor-pointer' onClick={handleMenu}/>
    </div>
  )
}

export default ToggleMenu