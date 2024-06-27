import { Component, OnInit } from '@angular/core';
import { BooksdataService } from 'src/app/services/booksdata.service';

@Component({
  selector: 'app-financebook',
  templateUrl: './financebook.component.html',
  styleUrls: ['./financebook.component.css'],
})
export class FinancebookComponent implements OnInit {
  books: any;
  constructor(private bookservice: BooksdataService) {
     this.bookservice.financialbooks().subscribe(
       (data) => {
         console.log(data);
         this.books = data;
       },
       (err) => console.log(err)
     );
  }

  ngOnInit(): void {}
}
