const sql = require("../config/db.config");

const user=(newuser)=>{
    this.name=newuser.name,
    this.email=newuser.email,
    this.password=newuser.password
}

user.signup=(newuser,result)=>{
  console.log("inside signup model....");
sql.query('INSERT INTO user SET ?',newuser,(err,res)=>{

         if (err) {
           console.log(err);
           result(err, null);
         } 
         else {
           console.log(res);
           result(null,res);
         }
        
    });

};

module.exports=user;