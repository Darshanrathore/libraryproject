import { Component, OnInit,Input } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { BooksdataService } from 'src/app/services/booksdata.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css'],
})
export class UpdatebookComponent implements OnInit {
  ubook: any;
  id: any;

  constructor(
    private upbook: BooksdataService,
    private router: Router,
    private activeroute: ActivatedRoute
  ) {
  
    this.id = this.activeroute.snapshot.params['id'];
  }
@Input() item:any=0;

  update(data: any) {
    console.log(data);
    console.log(typeof this.id,this.id);
    this.upbook.updatebook(this.id,data).subscribe((data)=>{
console.log(data);
    })

    setTimeout(() => {
      alert('Book Updated successfully 👍');
      
      this.router.navigate(['books']);
    }, 1000);
   }
  

  back() {
    this.router.navigate(['books']);
    
  }

  ngOnInit(): void {
    
    this.upbook.getbyid(this.id).subscribe((data: object)=>{
      console.log(data);
      this.ubook=data
     
    })

  
  }
  
}
