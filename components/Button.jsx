import React from 'react'

const Button = ({children}) => {
  return (
    <button className='active:scale-95 transition-all duration-300 hover:bg-gray-100 px-2 py-2 border  rounded-lg '>
        {children}
    </button>
  )
}

export default Button