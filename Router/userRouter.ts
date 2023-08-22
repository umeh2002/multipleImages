import express, { Router } from "express";
import { createMultipleImages, createUser, viewUser } from "../Controller/authController";
import { upload, uploadMoreImages } from "../Config/multer";


const router =express.Router()

router.route("/create").post(upload,createUser)
router.route("/create-multiple").post(uploadMoreImages,createMultipleImages)

router.route("/get-all").get(viewUser)

export default router