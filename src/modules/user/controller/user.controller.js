import userModel from "../../../../Db/model/user.model.js";
import cloudinary from "../../../services/cloudinary.js";

export const profile=(req,res)=>{
    return res.json({message:"profile"});
}

export const profilePicture =async(req,res)=>{
   
    if(!req.file){
        return res.status(400).json({message:"no file exist"});
    }
    

   const {secure_url} = await cloudinary.uploader.upload(req.file.path, {folder: "saraha/user"});
       
    
    const user= await userModel.updateOne({_id:req.id},{profilePic:secure_url})

    return res.status(200).json({message:"success",user})
}