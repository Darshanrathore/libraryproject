const sql = require("../config/db.config");

const user = (newuser) => {
    (this.email = newuser.email),
    (this.password = newuser.password);
};

user.login=(newuser,result)=>{
console.log("inside login model");
console.log(newuser);
    const email=newuser.email;
    const password=newuser.password;

    sql.query("select * from user where email=? and password=?",[email,password],(err,res)=>{

           if (err) {
             console.log(err);
             result(err, null);
           }if(res.length>0){
            delete res[0].password;
            result(null,res[0]);
           }
           else{
           result("invalid combination of credentials");
           }
    })

};
module.exports=user;


