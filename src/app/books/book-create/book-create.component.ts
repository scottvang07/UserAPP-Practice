import { Component, OnInit } from '@angular/core';
import {BookService} from '../book.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})

export class BookCreateComponent implements OnInit {

  book:Object;

  constructor(
    private bookService:BookService,
    private router:Router
    ) { }

  ngOnInit() {
    this.book = {};
  }
//Functionality to create a new book -- loads when the page opens
  createBook(book:Object) {
    this.bookService.addBook(book).then((resp) => {
      this.router.navigate(['/books']);
    });
  }

}
