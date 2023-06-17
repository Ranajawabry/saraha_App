
const dataMethods=['body','query','params']

export const validation = (schema) => {
 
  return (req, res, next) => {
    const validationArray = [];
    dataMethods.forEach((key)=>{
      if (schema[key]) {
        const vaildationResult = schema[key].validate(req[key], {
          abortEarly: false,
        });
        if (vaildationResult.error) {
          validationArray.push(vaildationResult.error.details);
        }
      }
    })
    
    

    if (validationArray.length > 0) {
      
      return res.status(400).json(validationArray);
    } 
    
      return next();
    
  };
};
