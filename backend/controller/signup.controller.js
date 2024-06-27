const user=require('../models/signup.model');

exports.signup=(req,res)=>{
console.log("inside sign-up controller.....");
    user.signup(req.body,(err,result)=>{
      
         if (err) {

           if (
             err.code.includes("ER_DUP_ENTRY") &&
             err.sqlMessage.includes("name")
           ) {
             res.send({ error: "username already exists" });
             console.log(err.code);
             console.log(err.sqlMessage);
           } else if (
             err.code.includes("ER_DUP_ENTRY") &&
             err.sqlMessage.includes("email")
           ) {
             res.send({ error: "email already exists" });
             console.log(err.code);
             console.log(err.sqlMessage);
           } else if (
             err.code.includes("ER_DUP_ENTRY") &&
             err.sqlMessage.includes("password")
           ) {
             res.send({ error: "password already exists" });
             console.log(err.code);
             console.log(err.sqlMessage);
           } else {
             res.send({ error: err });
             // res.send({ message: "existing" }); // Vikrant
             // throw err;
           }

          //  console.log("somthing went wrong");
          //  res.send(`${err}+ somthing went wrong`);
         } else {
           res.send(result);
         }
    })
}