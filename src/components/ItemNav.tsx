import React from 'react'

interface Props {
    nombre: string
    icon: React.ReactNode
}

const ItemNav: React.FC<Props> = ({ nombre, icon }) => {
  return <>
        <button className='items-center rounded-full flex flex-row gap-2 text-white p-3 hover:bg-blue-800 hover:bg-opacity-80'>
            {icon}
            <span>
                {nombre}
            </span>
        </button>
    </>
}

export default ItemNav