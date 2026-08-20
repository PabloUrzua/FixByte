import handler from './.vercel/output/functions/_render.func/dist/server/entry.mjs';

const mockRequest = new Request('http://localhost:3000/');
const mockContext = {
  request: mockRequest,
  url: new URL('http://localhost:3000/')
};

async function test() {
  try {
    const response = await handler(mockRequest, mockContext);
    console.log('Response status:', response.status);
    const text = await response.text();
    console.log('Response body:', text.slice(0, 500));
  } catch (err) {
    console.error('Invocation failed:', err);
  }
}

test();
