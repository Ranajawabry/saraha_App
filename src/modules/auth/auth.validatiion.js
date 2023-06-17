import joi from "joi";

export const schemaSingup=

{
    body : joi.object({
        userName:  joi.string().alphanum().required().messages({
            "string.empty" : "empty userName not allowed",
            "string.alphanum" :"userName must be carachter"
        }),
        email:joi.string().email().required(),
        password:  joi.string().required(),
        cPassword: joi.string().valid(joi.ref('password')).required(),
        age:joi.number().integer().min(15).max(30),
        gender:joi.string().alphanum().valid('female','male')
    
    }).required() ,

    query :  joi.object({
      test: joi.boolean().required()
    
    }).required() ,
}


export const schemaSingin=
{

body : joi.object({
   
    email:joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    password:  joi.string().required(),
   

}).required()

}

