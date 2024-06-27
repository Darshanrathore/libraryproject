import { Component, OnInit, ResolvedReflectiveFactory } from '@angular/core';
import { FormGroup, FormControl, Validators,NgForm } from '@angular/forms';
import { BooksdataService } from 'src/app/services/booksdata.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {



  constructor( private addbookservice:BooksdataService,private router:Router,private http:HttpClient) { }

  addbook(data:object){
console.log(data);
this.addbookservice.addbooks(data).subscribe((data)=>{
console.log(data);
alert("Book Added successfully");
 this.router.navigate(['books']);
});
  }

  back(){
    this.router.navigate(['books']);
  }
// url="../../../assets/images/No image.jpg"

//  onselectFile(e:any){
// if(e.target.files){
//   var reader=new FileReader();
//   this.selectedfile=e.target.files[0];
//   reader.readAsDataURL(e.target.files[0]);
//   reader.onload=(event:any)=>{
//     this.url=event.target.result;
    
//   }
// }
//  }


  ngOnInit(): void {
  }

}
