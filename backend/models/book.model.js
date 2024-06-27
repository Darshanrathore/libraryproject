const sql=require('../config/db.config');

const book=(newbook)=>{
    this.bookname=newbook.bookname;
    this.discription=newbook.discription;
    this.author=newbook.author;
    this.price=newbook.price;
    this.image=newbook.image;
    this.category=newbook.category;
   

};

book.getallbooks=(result)=>{
    const query="select * from books";
    sql.query(query,(err,res)=>{
        if(err){
            console.log("somthing went wrong");
            result(null,err)
        }else{
            console.log("books received");
            result(null,res);
        }
    });
};

book.getbyid=(id,result)=>{
    console.log(id);
    sql.query(`SELECT * from books WHERE id=?`,id,(err,res)=>{
        if(err){
            console.log("somthing went wrong");
            result(null,err);
        }else{
            console.log(res);
            result(null,res);
        }
    });
};

book.addbook=(book,result)=>{
  
    sql.query(`INSERT INTO books SET ?`, [book], (err, res) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        console.log(book);
        result(null, res);
      }
    });
};
book.deletebook=(id,result)=>{
    console.log(id);
    sql.query("DELETE FROM books WHERE id=?",id,(err,res)=>{
         if (err) {
           console.log(err);
           result(err, null);
         } else {
           console.log(res);
           result(null, "Book deleted succesfully",res);
         }
    });
};

book.update=(id,book,result)=>{
    console.log("inside update model");
    console.log(book);
    sql.query("UPDATE books SET ? WHERE id=?",[book,id],(err,res)=>{
         if (err) {
           console.log(err);
           result(err, null);
         } else {
           console.log(res);
           result(null, "Book deleted succesfully", res);
         }
    })

};
book.findeducation=(result)=>{
const query = "select * from books WHERE category='Education'";
sql.query(query, (err, res) => {
  if (err) {
    console.log("somthing went wrong");
    result(null, err);
  } else {
    console.log("books received");
    result(null, res);
  }
});
}

book.findfinance = (result) => {
  console.log("finding finance");
  const query = "select * from books WHERE category='Finance'";
  sql.query(query, (err, res) => {
    if (err) {
      console.log("somthing went wrong");
      result(null, err);
    } else {
      console.log("books received");
      result(null, res);
    }
  });
};



module.exports=book;