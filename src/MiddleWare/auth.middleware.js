import userModel from "../../Db/model/user.model.js";
import { verifyToken } from "../services/generateAndVerifyToken.js";

export const auth =async (req,res,next)=>{
   
    const {authorization}=req.headers;
   
   if(!authorization?.startsWith(process.env.BEARER_TOKEN)){
    return res.json({message:"invalied bearer key"});
   }
   const token =authorization.split(process.env.BEARER_TOKEN)[1];
   if(!token){
    return res.json({message:"invalied token"})
   }
   const decoded= verifyToken(token);
   
   const user = await userModel.findById(decoded.id);

   if(!user){
      return res.status(401).json({message:"invalied account"})
   }
   req.id=decoded.id;
   next();
   
 
}