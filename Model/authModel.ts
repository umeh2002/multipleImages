import mongoose from "mongoose";

interface iUser {
  userName: string;
  pix: string;
  pixes: Array<string>;
}

interface iUserData extends iUser, mongoose.Document {}

const userModel = new mongoose.Schema(
  {
    userName: String,
    pix: String,
    pixes: Array<String>,
  },
  { timestamps: true }
);

export default mongoose.model<iUserData>("user", userModel);
