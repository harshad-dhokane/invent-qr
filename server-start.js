// Import your server from the built server file
import { server } from './build/server/index.js';

// Get the port from environment variable or use 8080 as default
const port = process.env.PORT || 8080;

// Start the server listening on all interfaces (0.0.0.0)
server.listen({
  port: port,
  hostname: '0.0.0.0',
}, () => {
  console.log(`Server is running on http://0.0.0.0:${port}`);
});