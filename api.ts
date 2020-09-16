import { Router } from 'https://deno.land/x/oak@v6.2.0/mod.ts';
import * as planets from './models/planets.ts';

const router = new Router();

router.get('/', (ctx) => {
  ctx.response.body = 'Mission Control API 🚀';
});

router.get('/planets', (ctx) => {
  ctx.throw(400, 'Sorry planets are not available!');
  ctx.response.body = planets.getAllPlanets();
});

export default router;
