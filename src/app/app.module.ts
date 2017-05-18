import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { UsersComponent } from './users/users.component';

// services //make sure to include the components
import { BookService } from './books/book.service';
import { BookCreateComponent } from './books/book-create/book-create.component';
import { BookComponent } from './books/book/book.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { DocsComponent } from './docs/docs.component';
import { HomeComponent } from './home/home.component';

//how to call and user the functions in UserService
import { UserService } from './users/users.service';
import { UserComponent } from './users/user/user.component';
import { UserCreateComponent } from './users/user-create/user-create.component';

// Routes //make sure to include the components 
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'books', component: BooksComponent },
  { path: 'book/:id',   component: BookComponent },
  { path: 'book-create',   component: BookCreateComponent },
  { path: 'docs',   component: DocsComponent },
  { path: "users" , component: UsersComponent},
  { path: 'user/:id',   component: UserComponent },
  { path: 'user-create',   component: UserCreateComponent },

];

@NgModule({ //ensure the component is declared within the bracket 
  declarations: [
    AppComponent,
    BooksComponent,
    BookCreateComponent,
    BookComponent,
    MainNavComponent,
    MainFooterComponent,
    DocsComponent,
    HomeComponent,
    UsersComponent,
    UserComponent,
    UserCreateComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  //Make sure to add in the provider of the service
  providers: [
    BookService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
