import { NextApiRequest, NextApiResponse } from 'next'
import { ApiError } from 'next/dist/server/api-utils'
import sendgrid from '@sendgrid/mail'
import { emailTemplate } from '@/lib/emailTemplate'

const apiKey = process.env.SENDGRID_API_KEY

if (!apiKey) throw new Error('SENDGRID_API_KEY is not set')

sendgrid.setApiKey(apiKey)

async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  try {
    // console.log('REQ.BODY', req.body)
    // jwr620@gmail.com
    await sendgrid.send({
      to: 'jrobertswebdev@gmail.com', // Your email where you'll receive emails
      from: 'noreply@jrobertsweb.dev', // your website email address here
      subject: `From your portfolio contact form`,
      html: emailTemplate(req.body.fullName, req.body.email, req.body.message),
    })
  } catch (error) {
    // console.log(error)
    const err = error as ApiError
    return res.status(err.statusCode || 500).json({ error: err.message })
  }

  return res.status(200).json({ error: '' })
}

export default sendEmail
