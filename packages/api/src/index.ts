import 'dotenv/config';

import { Hono } from 'hono';
import { serve } from '@hono/node-server';

const app = new Hono();

const port = Number(process.env.PORT) || 4000;

app.get('/', async ctx => {
    ctx.json({ message: 'Hello, World!' });
});

serve({
    fetch: app.fetch.bind(app),
    port
}, (
    {
        port
    }
) => {
    console.log(`Server is running on http://localhost:${port}`);
});