import { Component, OnInit } from '@angular/core';
import { BooksdataService } from 'src/app/services/booksdata.service';

@Component({
  selector: 'app-educationbook',
  templateUrl: './educationbook.component.html',
  styleUrls: ['./educationbook.component.css'],
})
export class EducationbookComponent implements OnInit {
  books: any;
  constructor(private bookservice: BooksdataService) {
     this.bookservice.educationbooks().subscribe(
       (data) => {
         console.log(data);
         this.books = data;
       },
       (err) => console.log(err)
     );
  }

  ngOnInit(): void {}
}
