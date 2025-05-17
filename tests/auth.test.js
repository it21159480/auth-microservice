import request from 'supertest';
import app from '../server';  // You need to export the express app from your server.js

describe('Health Check', () => {
  it('should return OK on /health', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('OK');
  });
});

// Add more tests for your auth routes here
