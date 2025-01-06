```javascript
// pages/api/hello.js
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Some logic to handle the request
  console.log('Request received:', req.method, req.url);
  res.status(200).json({ name: 'John Doe' });
}
```
This updated code explicitly types `req` and `res` using `NextApiRequest` and `NextApiResponse` respectively, resolving the type error.  This updated structure is essential for compatibility with Next.js 15 and beyond.