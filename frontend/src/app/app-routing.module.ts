import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbookComponent } from './admin/addbook/addbook.component';
import { BooksComponent } from './admin/books/books.component';
import { UpdatebookComponent } from './admin/updatebook/updatebook.component';
import { AllbooksComponent } from './common/allbooks/allbooks.component';
import { HeaderComponent } from './common/header/header.component';
import { HomeComponent } from './common/home/home.component';
import { BuybookComponent } from './common/buybook/buybook.component';
import { LoginComponent } from './common/login/login.component';
import { SignupComponent } from './common/signup/signup.component';
import { StartpageComponent } from './startpage/startpage.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { AuthGuard } from './auth.guard';
import { PagenotfoundComponent } from './common/pagenotfound/pagenotfound.component';
import { EducationbookComponent } from './common/educationbook/educationbook.component';
import { FinancebookComponent } from './common/financebook/financebook.component';
import { BookscategoriesComponent } from './common/bookscategories/bookscategories.component';
import { SearchComponent } from './common/search/search.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { path: 'home', component: HomeComponent },
  { path: 'books', component: BooksComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'admin',
    component: AdminhomeComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'addbook',
    component: AddbookComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'books/updatebook/:id',
    component: UpdatebookComponent,
    canActivate: [AuthGuard],
  },

  
  {
    path: 'books/addbook',
    component:AddbookComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'allbooks',
    component: AllbooksComponent,
  },
  {
    path: 'education',
    component: EducationbookComponent,
    children: [
      {
        path: 'buybook/:id',
        component: BuybookComponent,
        outlet: 'education',
      },
    ],
  },
  {
    path: 'financial',
    component: FinancebookComponent,
    children: [
      {
        path: 'buybook/:id',
        component: BuybookComponent,
      },
    ],
  },
  {
    path: 'bookscategory/education',
    component: BookscategoriesComponent,
  },
  {
    path: 'allbooks/buybook/:id',
    component: BuybookComponent,
  },
  {
    path: 'search/:query',
    component: SearchComponent,
  },
  {
    path: '**',
    component: PagenotfoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
