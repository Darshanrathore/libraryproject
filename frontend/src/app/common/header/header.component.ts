import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';
import { BooksdataService } from 'src/app/services/booksdata.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  books: any;

  constructor(private router: Router) {}

  navopen = false;
  dropopen = false;
  show = true;
  loginrole: string | any;
  isShowDivIf = true;

  toggleDisplayDivIf() {
    this.isShowDivIf = !this.isShowDivIf;
  }

  navbaropen() {
    this.navopen = !this.navopen;
    console.log(this.navopen);
  }
  dropdownopen() {
    console.log('rmcrfmfrvm');
    this.dropopen = !this.dropopen;
  }

  scrolltocontact() {
    let scrollElement = <HTMLInputElement>document.getElementById('contact us');
    scrollElement.scrollIntoView();
  }
  scrolltoabout() {
    let aboutelement = <HTMLInputElement>document.getElementById('about us');
    aboutelement.scrollIntoView();
  }

  logout() {
    sessionStorage.clear();
    alert('Logged out successfully');

    //this.router.navigate(['/login']);
    location.reload();
    // setTimeout(() => {

    // },1000);
  }

  education(val: string = 'Education') {
    console.log(val);
    // this.router.navigate([`bookscategory/${val}`]);
  }
  finance(val: string = 'financialbook') {
    console.log(val);
    // this.router.navigate([`bookscategory/${val}`]);
  }

  ngOnInit(): void {
    this.show = !sessionStorage.getItem('name');
    console.log(this.show);
    this.loginrole = sessionStorage.getItem('role');
    console.log(this.loginrole);
  }
  submitsearch(val: string) {
    console.log(val);
    this.router.navigate([`search/${val}`]);
  }

  searchvalue: string = '';

  @Output()
  searchtext: EventEmitter<string> = new EventEmitter<string>();

  onsearchText() {
    this.searchtext.emit(this.searchvalue);
  }
  // enterSearchValue: string = '';
  // @Output()
  // searchtextChanged: EventEmitter<string> = new EventEmitter<string>();

  // onsearchTextChanged() {
  //   this.searchtextChanged.emit(this.enterSearchValue);
  // }
}
