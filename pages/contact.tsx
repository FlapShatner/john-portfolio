import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import PageTransition from '@/components/pageTransition'
import { InputWithLabel } from '@/components/form/InputWithLabel'
import { TextAreaWithLabel } from '@/components/form/TextArea'
import { FormButton } from '@/components/form/FormButton'

type ContactPageProps = {}
type ContactPageRef = React.ForwardedRef<HTMLDivElement>
export interface FieldValues {
  fullName: string
  email: string
  message: string
}

const Error = ({ children }: { children: React.ReactNode }) => <p className='text-red-500 text-sm font-semibold relative top-5 left-40'>{children}</p>

const Contact = (props: ContactPageProps, ref: ContactPageRef) => {
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const [buttonText, setButtonText] = useState('SUBMIT')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>()

  const onSubmit: SubmitHandler<Record<string, any>> = async (data) => {
    // console.log(data)
    setButtonText('SENDING...')
    const res = await fetch('/api/sendgrid', {
      body: JSON.stringify({
        fullName: data.fullName,
        email: data.email,
        message: data.message,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    const { error } = await res.json()

    if (error) {
      console.log(error)
      setButtonText('SUBMIT')
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 5000)
    } else {
      setButtonText('SENT!')
      setSuccess(true)
      setTimeout(() => {
        setSuccess(false)
      }, 5000)
    }
  }

  return (
    <PageTransition ref={ref}>
      <h1 className='text-center py-6 text-4xl font-extrabold'>Contact</h1>
      <form className='flex flex-col max-w-3xl mx-auto px-4' onSubmit={handleSubmit(onSubmit)}>
        <Error>{errors.fullName?.message}</Error>
        <InputWithLabel labelText='NAME*' label='fullName' register={register} required type='text' name='name' placeholder='Your Name Here' />
        <Error>{errors.email?.message}</Error>
        <InputWithLabel labelText='EMAIL*' label='email' register={register} required type='email' name='email' placeholder='Your Email Address Here' />
        <Error>{errors.message?.message}</Error>
        <TextAreaWithLabel
          labelText='YOUR INQUIRY*'
          label='message'
          register={register}
          required
          name='message'
          placeholder='PLEASE BE AS DETAILED AS POSSIBLE IN YOUR MESSAGE!'
        />
        <FormButton>{buttonText}</FormButton>
        {success && <p className='text-green-500 text-sm font-semibold relative top-2 text-center '>Message sent successfully!</p>}
        {error && <p className='text-red-500 text-sm font-semibold relative top-2 text-center'>Message failed to send. Please try again.</p>}
      </form>
    </PageTransition>
  )
}

export default Contact
