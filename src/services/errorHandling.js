export const asyncHandler=(fn)=>{

    return (req,res)=>{
        fn(req,res).catch(error=>{
            return res.status(500).json({message:"catching error" , error})
        })

        }
    }

