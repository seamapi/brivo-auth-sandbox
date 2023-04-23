// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
}

export default async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const response = await fetch('https://auth.brivo.com/oauth/authorize', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded', 
      'Authorization': 'Basic OTYxNmQ3MWEtMzQ3MC00ZDcxLWEzNTktYWQ1Y2M4MTYyOTljOmxDWGZhMTNqUG9oUmk4blE5N1A4Y3U4STliajlqblVO',
      'api-key': '6pu4sb9dccvevnkhzb7e66sc'
    },
    body: 'response_type=code&client_id=9616d71a-3470-4d71-a359-ad5cc816299c&state=abcd' 
  })

  res.status(200).json({ url: response.url })
}
