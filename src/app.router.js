import connectDB from '../Db/connectionDB.js';
import AuthRouter from './modules/auth/auth.router.js'
import userRouter from './modules/user/user.router.js'
import messageRouter from './modules/messages/message.router.js'

const initApp = (express,app)=>{
   
    app.use(express.json());
    app.get('/', (req, res) => res.json('Hello World!'))
    app.use('/auth', AuthRouter)
    app.use('/user', userRouter)
    app.use('/message',messageRouter)
    app.use('*',(req,res)=>{
        return res.json("page not found")
    })
    
}
export default initApp;