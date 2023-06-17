
import mongoose, { Schema, model } from "mongoose";
const UserSchema = new Schema ({
    userName:{
        type: String,
        required : true
    },
    email :{
            type: String,
            required : true
    },
    password:{
        
            type: String,
            required : true
        },
    confirmPassword:{
        type:Boolean,
        default:false
    },
    profilePic:{
        type :String
    }


}, {
    timestamps:true
})

const userModel = mongoose.models.User || model('User', UserSchema);    //avoid many requests error

export default userModel