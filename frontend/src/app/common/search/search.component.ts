import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksdataService } from 'src/app/services/booksdata.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
searchResult:undefined|[]|object;
  constructor(private activeRoute:ActivatedRoute,private books:BooksdataService) { }

  ngOnInit(): void {
  }

  enterSearchValue:string='';

  @Output()
  searchtextChanged:EventEmitter<string>=new EventEmitter<string>();

  onsearchTextChanged(){
    this.searchtextChanged.emit(this.enterSearchValue)
  }
}
