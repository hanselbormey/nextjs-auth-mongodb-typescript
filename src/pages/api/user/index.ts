// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '~lib/mongodb';
import { getSession } from 'next-auth/react';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });

  if (req.method === 'GET') {
    try {
      const { email } = req.query;
      const client = await clientPromise;
      const data = await client.db().collection('users').findOne({ email });
      res.status(200).json(data);
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }

  }

  if (req.method === 'POST') {
    console.log('making a post');
  }

/*   if (session) {
    res.send({
      content: session
    });
  } else {
    res.send({
      error: 'You must be sign in to view the protected content on this page.'
    });
  } */
}
