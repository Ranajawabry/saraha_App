import asyncHandler from 'express-async-handler'
import * as dotenv from 'dotenv' 
dotenv.config()

import express from'express'
import initApp from './src/app.router.js'
import connectDB from './Db/connectionDB.js'
const app = express()
initApp(express,app);
const port = 3000
connectDB().then(()=>{
    app.listen(port, () => console.log(`Example app listening on port ${port}!`))
}
   
)

