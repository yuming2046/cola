import Koa from 'koa'
import router from './router'

const app = new Koa();

app.use(router.routes());

app.on('error', (error, ctx) => {
    console.log('奇怪的错误' + JSON.stringify(ctx.onerror))
    console.log('server error:' + error)
})

module.exports = app

// app.listen(3000, () => {console.log('Koa start at 3000...')});