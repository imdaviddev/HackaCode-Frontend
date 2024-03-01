import React from 'react'

interface Props {
    children: React.ReactNode
}

const Layaout:React.FC<Props> = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen w-screen bg-slate-400 dark:bg-gray-900'>
        { children }
    </div>
  )
}

export default Layaout