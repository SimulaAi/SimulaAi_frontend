import type { NextApiRequest, NextApiResponse } from 'next'

export interface LoginToken {
  token: string
}

export interface LoginError {
  error: string
}

export default function handler (
  req: NextApiRequest,
  res: NextApiResponse<LoginToken | LoginError>
) {
  setTimeout(() => {
    return res.status(200).json({ token: 'fake-token-for-while' })
  }, 1000)
}

export const config = {
  api: {
    externalResolver: true
  }
}
