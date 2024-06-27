const express=require('express');
const router=require('express').Router();
const bookcontroller=require('../controller/book.controller');
const logincontroller=require('../controller/login.controller');
const signupcontroller=require('../controller/signup.controller');

const multer = require("multer");
const path=require('path')
console.log("inside router");



// const storage=multer.diskStorage({
//   destination:'../../frontend_library/src/assets/images',
//   filename:(req,file,res)=>{
//     return res(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
//   }
// });
// const upload=multer({
//   storage:storage
// });


//router.post('/login',logincontroller.login);
router.post("/signup",signupcontroller.signup);
router.get("/books",bookcontroller.getallbooks);
router.get("/findbook/:id",bookcontroller.getbyid);
router.post("/addbook",bookcontroller.addbook);
router.delete("/delete/:id",bookcontroller.deletebook);
router.patch("/update/:id",bookcontroller.updatebook);
router.get("/educationbook", bookcontroller.educationcategory);
router.get("/financebook", bookcontroller.financecategory);

router.post("/login",logincontroller.login);
router.post("/signup",signupcontroller.signup);

module.exports=router;