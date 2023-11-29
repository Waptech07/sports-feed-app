import React from 'react'

const Button = ({ variant, text }) => {
  // the variant prop should only reseive boolean values
  // "True" representing the button with outline and transparent background by default 
  // "False" representing the button with no outline and a solid background by default 

  return (
    <>
      {variant ?
        <button className='py-1.5 px-5 rounded-md ring-1 ring-primary text-primary bg-transparent duration-500'>
          {text}
        </button> :
        <button className='py-1.5 px-5 rounded-md ring-1 ring-primary text-darkBg bg-primary duration-500'>
          {text}
        </button>}
    </>
  )
}

export default Button