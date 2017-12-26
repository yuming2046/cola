import Router from "koa-router"

const userRouter = new Router()
console.log(userRouter)
console.log("user")

userRouter.prefix('/user')

userRouter.get('/list', (ctx, next) => {
    ctx.body = 'helle user list'
})
userRouter.post('/add', (ctx, next) => {})
userRouter.put('/update', (ctx, next) => {})
userRouter.del('/delete', (ctx, next) => {})

export default userRouter