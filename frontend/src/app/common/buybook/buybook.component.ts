import { Component, OnInit } from '@angular/core';
import { BooksdataService } from 'src/app/services/booksdata.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-buybook',
  templateUrl: './buybook.component.html',
  styleUrls: ['./buybook.component.css'],
})
export class BuybookComponent implements OnInit {
  buybook:any;
  id: any;
  constructor(private getbook: BooksdataService,private activeroute: ActivatedRoute) {
this.id = this.activeroute.snapshot.params['id'];
    this.getbook.getbyid(this.id).subscribe((data:object)=>{
      this.buybook=data;
      console.log(this.buybook);
    
    });
  }

  ngOnInit(): void {}
}
