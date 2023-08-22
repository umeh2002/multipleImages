import cors from "cors"
import express, { Application,Request,Response } from "express"
import router from "./Router/userRouter"

const main =(app:Application)=>{
    app.use(express.json())
    app.use(cors())

    app.use("/api/v2", router)
    app.get("/",(req:Request,res:Response)=>{
try {
    return res.status(200).json({
        message:"welcome and start working 👍😊"
    })
} catch (error) {
    return res.status(404).json({
        message: error.message
    })
}
})
}

export default main