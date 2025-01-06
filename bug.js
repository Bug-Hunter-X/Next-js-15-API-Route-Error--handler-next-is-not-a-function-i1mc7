```javascript
// pages/api/hello.js
export default function handler(req, res) {
  // Some logic to handle the request
  console.log('Request received:', req.method, req.url);
  res.status(200).json({ name: 'John Doe' });
}
```
This is a Next.js API route that would normally work correctly in Next.js 13 and below, but will throw an error in Next.js 15 because of stricter type checking and edge runtime.