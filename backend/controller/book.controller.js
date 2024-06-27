const book=require('../models/book.model');



exports.getallbooks=(req,res)=>{
    console.log("feacting books");
    book.getallbooks((err,result)=>{
        if(err){
            console.log("somthing went wrong");
            res.send(`${err} somthing went wrong`);
        }else{
            res.send(result)
        };
    });
};

exports.getbyid=(req,res)=>{
    console.log("geeting book");
    book.getbyid(req.params.id,(err,result)=>{
        if(err){
            res.send(`${err} somthing went wrong`);
        }else{
            res.send(result);
        };
    });
};
exports.addbook=(req,res)=>{
  
    console.log("adding book");
    book.addbook(req.body,(err,result)=>{
         if(err){
            res.send(`${err} somthing went wrong`);
        }else{
            res.send(result);
        };
    });
};
exports.deletebook=(req,res)=>{
    console.log("deleting book");
    book.deletebook(req.params.id,(err, result) => {
      if (err) {
        res.send(`${err} somthing went wrong`);
      } else {
        res.send({message:"book deleted succesfully"});
      }
    });
};

exports.updatebook=(req,res)=>{
    console.log("updating book");
    book.update(req.params.id,req.body,(err,result)=>{
        if (err) {
          res.send(`${err} somthing went wrong`);
        } else {
          res.send(result);
        }

    })
};

exports.educationcategory=(req,res)=>{
    console.log("finding categories...");
    book.findeducation((err, result) => {
      if (err) {
        res.send(`${err} somthing went wrong`);
      } else {
        res.send(result);
      }
    });
}
exports.financecategory = (req, res) => {
  console.log("finding categories...");
  book.findfinance((err, result) => {
    if (err) {
      res.send(`${err} somthing went wrong`);
    } else {
      res.send(result);
    }
  });
};