import userModel from "../../../../Db/model/user.model.js";
import bcrypt from 'bcryptjs';
import { compare, hashPassword } from "../../../services/hashAndCompare.js";
import { generateToken, verifyToken } from "../../../services/generateAndVerifyToken.js";
import { schemaSingin, schemaSingup } from "../auth.validatiion.js";
import { sendEmail } from "../../../services/sendEmail.js";

export const signup= async(req,res)=>{
    

    const {userName,email,password}=req.body;

    const user = await userModel.findOne({email})
    const token = generateToken({email},process.env.EMAIL_TOKEN);
    console.log(token);
    const link =`http://localhost:3000/auth/confirmEmail/${token}`
    if(!user){
         const newUser = await userModel.create({userName,email, password :hashPassword(password) });
         sendEmail(email,'Verify your Email',`<a href="${link}">"Verify your email</a>`);
         return res.status(201).json({message:"done", newUser});


    }

   return res.status(409).json({message:"email is exist"});


    
}

export const signin = async(req,res)=>{
    
    const {email,password}=req.body;
    const user = await userModel.findOne({email});
    if(!user){
        return res.status(400).json({message:"invalied email"})
    }
    if(user.confirmPassword==false){
        return res.json({message:"plz verify your email"});
    }
    const match = compare(password,user.password)
    if(match){
       const token= generateToken({id:user._id})
        return res.status(200).json({message:"success",token});
    }
    return res.status(400).json({message:"invalied password"});




}

export const confirmEmail =async(req,res)=>{
    const {token}= req.params;
    if(!token){
        return res.status(404).json({message:"invalied token"})
    }
    const {email} = verifyToken(token,process.env.EMAIL_TOKEN);
    const user= await userModel.updateOne({email},{confirmPassword:true})
    return res.status(200).json({message: "your email conffiem" })
    //return res.redirect("http://www.facebook.com")
    
}

