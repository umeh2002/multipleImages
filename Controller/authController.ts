import { Request,Response } from "express";
import userModel from '../Model/authModel'
import cloudinary from "../Config/cloudinary";

export const createUser =async(req:any, res:Response)=>{
    try {
        const {userName} =req.body  
        const {secure_url}=await cloudinary.uploader.upload(req.file?.path)
        const user =await userModel.create({userName, pix:secure_url})

        return res.status(201).json({
            message:"User created successfully",
            data:user
        })
    } catch (error) {
        return res.status(404).json({
            message: error.message
        })
    }
}

export const viewUser =async(req:Request, res:Response)=>{
try {
    const user = await userModel.find()

    return res.status(200).json({
        message:"can see all users",
        data:user
    })
} catch (error) {
    return res.status(404).json({
        message: error.message
    })
}
}

export const createMultipleImages =async(req:any, res:Response)=>{
    try {
        const {userId} =req.params 
        const {userName}=req.body
        let data =req.files
        let pixes :Array<string> =[]
        for(let i of data){
            const {secure_url}=await cloudinary.uploader.upload(i.path) 

            pixes.push(secure_url)

        }

        const user =await userModel.create({
            userName,
            pixes,
        })

        return res.status(201).json({
            message:"Success",
            data: user
        })

    } catch (error) {
        return res.status(404).json({
            message: error.message
        })
    }
}