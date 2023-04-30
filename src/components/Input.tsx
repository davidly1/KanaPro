import React from 'react'

interface IInputProps {
  input: string
  handleChange: (e: any) => void
  isLight: boolean
}
const Input: React.FC<IInputProps> = ({ input, handleChange, isLight }) => {
  return (
    <input
      type='text'
      value={input}
      onChange={handleChange}
      className={`block w-24 mx-auto pb-2 bg-transparent border-b-2 outline-none text-center text-6xl 
      ${
        isLight
          ? 'border-b-slate-800 text-slate-800'
          : 'border-b-slate-200 text-slate-200'
      }`}
    />
  )
}

export default Input
