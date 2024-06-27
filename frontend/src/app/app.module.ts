import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { AboutusComponent } from './common/aboutus/aboutus.component';
import { HomeComponent } from './common/home/home.component';
import { LoginComponent } from './common/login/login.component';
import { SignupComponent } from './common/signup/signup.component';
import { BooksComponent } from './admin/books/books.component';
import { StartpageComponent } from './startpage/startpage.component';
import{ReactiveFormsModule} from '@angular/forms';
import { AddbookComponent } from './admin/addbook/addbook.component';
import { UpdatebookComponent } from './admin/updatebook/updatebook.component';
import{FormsModule} from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AllbooksComponent } from './common/allbooks/allbooks.component';
//import { NgxNavbarModule } from 'ngx-bootstrap-navbar';
import { BuybookComponent } from './common/buybook/buybook.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { AdminheaderComponent } from './admin/adminheader/adminheader.component';
import { AdminnavComponent } from './admin/adminnav/adminnav.component';
import { PagenotfoundComponent } from './common/pagenotfound/pagenotfound.component';
import { FinancebookComponent } from './common/financebook/financebook.component';
import { EducationbookComponent } from './common/educationbook/educationbook.component';
import{Ng2SearchPipeModule} from 'ng2-search-filter';
import { BookscategoriesComponent } from './common/bookscategories/bookscategories.component';
import { SearchComponent } from './common/search/search.component'
@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    FooterComponent,
    AboutusComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    BooksComponent,
    StartpageComponent,
    AddbookComponent,
    UpdatebookComponent,
    AllbooksComponent,
    BuybookComponent,
    AdminhomeComponent,
    AdminheaderComponent,
    AdminnavComponent,
    PagenotfoundComponent,
    FinancebookComponent,
    EducationbookComponent,
    BookscategoriesComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    NgbModule,
    Ng2SearchPipeModule,
    // NgxNavbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
