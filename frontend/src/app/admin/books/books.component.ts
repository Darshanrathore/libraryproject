import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import{HttpClientModule} from '@angular/common/http';
import { BooksdataService } from 'src/app/services/booksdata.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  title = 'All Books';
// imagepath:any='http://localhost:3000/api/images/';
  books: any;
  update=false;
  constructor(private booksdata: BooksdataService, private router: Router) {
    this.booksdata.getbooks().subscribe(
      (data) => {
        console.log(data);
        this.books = data;
      },
      (err) => console.log(err)
    );
  }


  // addbook() {
  //   this.router.navigate(['addbook']);
  // }
//  updatebook(id:any,bookname:string,discription:string){
//   this.router.navigate(['books/updatebook/'+id]);
//   console.log(id,bookname,discription);
//  };
 

  deletebook(id: any) {
    console.log(id);
    this.booksdata.deletebook(id).subscribe((data) => {
      console.log(data);
    });
    setTimeout(() => {
      window.location.reload();
      alert('Book deleted 👍');
    }, 1000);
  }

  ngOnInit(): void {}
}
