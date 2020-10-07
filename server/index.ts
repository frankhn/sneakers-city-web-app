import next from 'next';
import express, { Application, Request, Response } from 'express';
import path from 'path';

const { PORT = 3000 } = process.env;

const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });
const handler = app.getRequestHandler();

app.prepare().then(() => {
  const server: Application = express();

  app.setAssetPrefix(process.env.STATIC_PATH);
  server.use(express.static(path.join(__dirname, '../public/static')));

  server.all('*', (req: Request, res: Response) => handler(req, res));

  server.listen(PORT);

  // eslint-disable-next-line no-console
  console.log(
    `> Server listening at http://localhost:${PORT} as ${dev ? 'development' : process.env.NODE_ENV
    }`,
  );
});
