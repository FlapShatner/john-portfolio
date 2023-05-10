import { Path, useForm, UseFormRegister, SubmitHandler } from 'react-hook-form'
import { forwardRef } from 'react'
import type { FieldValues } from '@/pages/contact'

export type InputProps = {
  labelText: string
  name: string
  type: string
  placeholder: string
  label: Path<FieldValues>
  register: UseFormRegister<FieldValues>
  required: boolean
}

export const InputWithLabel = forwardRef(function InputWithLabel({ labelText, label, register, required, name, type, placeholder }: InputProps, ref) {
  return (
    <div>
      <label className='font-semibold'>{labelText}</label>
      <input
        className='flex h-10 w-full rounded-md border border-input bg-[#999999] px-3 py-2 mb-4 mt-2 text-sm font-semibold text-white ring-offset-background placeholder:text-white placeholder:text-opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
        type={type}
        {...register(label, { required: 'This field is required' })}
        id={name}
        placeholder={placeholder}
      />
    </div>
  )
})
