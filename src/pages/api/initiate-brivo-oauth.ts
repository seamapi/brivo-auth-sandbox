// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

type Data = {
}

export default async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const response = await axios.post('https://auth.brivo.com/oauth/authorize', 
    'response_type=code&client_id=9616d71a-3470-4d71-a359-ad5cc816299c&state=abcd',
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic OTYxNmQ3MWEtMzQ3MC00ZDcxLWEzNTktYWQ1Y2M4MTYyOTljOmxDWGZhMTNqUG9oUmk4blE5N1A4Y3U4STliajlqblVO',
        'api-key': '6pu4sb9dccvevnkhzb7e66sc'
      }
    }
  )

  res.status(200).json({
    url: response.request._redirectable._options.href,
    data: response.data,
  })
}
