import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      const formData = await fetch(
        'https://61cd783e7067f600179c5aa8.mockapi.io/api/ContactUsForm'
      )
      const data: FormData[] = await formData.json()
      res.status(200).json(data)
    } catch (error) {
      res.status(500).json({ message: error })
    }
  } else if (req.method === 'POST') {
    try {
      const formData = req.body
      const response = await fetch(
        'https://61cd783e7067f600179c5aa8.mockapi.io/api/ContactUs',
        {
          body: formData,
          method: 'POST'
        }
      )
      const data = await response.json()
      res.status(200).json(data)
    } catch (error) {
      res.status(500).json({ message: error })
    }
  }
}
