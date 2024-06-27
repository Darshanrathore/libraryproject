import { Component, OnInit } from '@angular/core';
import { BooksdataService } from 'src/app/services/booksdata.service';
@Component({
  selector: 'app-allbooks',
  templateUrl: './allbooks.component.html',
  styleUrls: ['./allbooks.component.css'],
})
export class AllbooksComponent implements OnInit {
  books: any;
  financial: any;
  Education: any;
  constructor(private bookservice: BooksdataService) {
    this.bookservice.getbooks().subscribe(
      (data) => {
        console.log(data);
        this.books = data;
      },
      (err) => console.log(err)
    );
  }
searchText:string='';

onsearchTextEntered(searchValue:string){
  this.searchText=searchValue;
  console.log(this.searchText);

}
  ngOnInit(): void {}
}
