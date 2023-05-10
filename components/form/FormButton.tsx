import React from 'react'

type FormButtonProps = {
  children: React.ReactNode
}

export const FormButton = ({ children }: FormButtonProps) => {
  return (
    <button
      type='submit'
      className='w-40 inline-flex items-center justify-center rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-[var(--fg)] text-black font-bold text-lg py-2 px-4 mx-auto'>
      {children}
    </button>
  )
}
