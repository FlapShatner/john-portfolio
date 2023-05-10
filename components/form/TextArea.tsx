import { forwardRef } from 'react'
import type { InputProps } from './InputWithLabel'
import { label } from 'yet-another-react-lightbox/core'

type TextAreaProps = Omit<InputProps, 'type'>

export const TextAreaWithLabel = forwardRef(function TextAreaWithLabel({ labelText, name, placeholder, register, label, required }: TextAreaProps, ref) {
  return (
    <div>
      <label className='font-semibold' htmlFor='message'>
        {labelText}
      </label>
      <textarea
        className='flex w-full rounded-md border border-input bg-[#999999] px-3 py-2 mb-4 mt-2 text-sm font-semibold text-white ring-offset-background placeholder:text-white placeholder:text-opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
        {...register(label, { required: 'This field is required' })}
        rows={5}
        id={name}
        placeholder={placeholder}
      />
    </div>
  )
})
