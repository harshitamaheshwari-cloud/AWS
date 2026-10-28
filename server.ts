import express = require('express');

const app = express();
const port = Number(process.env.PORT) || 3000;

app.get('/', (_request, response) => {
  response.send('Hello from the Host server!');
});

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok' });
});

app.use((_request, response) => {
  response.status(404).send('Not found');
});

app.listen(port, () => {
  console.log(`Host server listening at http://localhost:${port}`);
});