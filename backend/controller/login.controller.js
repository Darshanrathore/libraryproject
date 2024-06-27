const user=require('../models/login.model');

exports.login=(req,res)=>{
  console.log("inside logincontroller");
    console.log(req.body);
    user.login(req.body,(err,result)=>{
      if (err) {
        console.log("somthing went wrong");
       res.send(`${err} `);
      } else {
        res.send(result);
      }
    })
}