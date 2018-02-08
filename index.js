import Koa from 'koa'
import router from './router'

const app = new Koa();

app.use(router.routes());

module.exports = app;

// app.listen(3000, () => {console.log('Koa start at 3000...')});
// aaa