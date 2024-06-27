import { Component, OnInit, ViewChild } from '@angular/core';
import { NgIf } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { BooksdataService } from 'src/app/services/booksdata.service';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  books : any;
financial: any;
Education:any;
  constructor(private bookservice: BooksdataService) {
    this.bookservice.getbooks().subscribe(
      (data) => {
        console.log(data);
        this.books = data;
    
      },
      (err) => console.log(err)
    );
    
  }

  ngOnInit(): void {}
}
