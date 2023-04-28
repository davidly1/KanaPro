import React from 'react'

interface IButtonProps {
  isLight: boolean
  handleButtonClick: () => void
}

const Button: React.FC<IButtonProps> = ({ isLight, handleButtonClick }) => {
  return isLight ? (
    <button
      onClick={handleButtonClick}
      className='text-slate-800 rounded-xl bg-slate-500 p-4 text-slate-200'
    >
      Click for Dark Mode
    </button>
  ) : (
    <button
      onClick={handleButtonClick}
      className='text-slate-200 rounded-xl bg-slate-500 p-4'
    >
      Click for Light Mode
    </button>
  )
}

export default Button
