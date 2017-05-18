import { Component, Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class BookService {

    // this is where the variables go

    apiUrl: string;

    constructor(
        private http: Http
    ) {
        // do init stuff
        //HOW TO TAP INTO THE API AND MONGODB STRUCTURE 
        this.apiUrl = 'http://34.209.151.254:3000/api/v1'
    }
    // functions for CRUD (ensure the variable are changed)
    // get and display all books 
    getBooks(): Promise<Array<Object>> {
        return this.http.get(`${this.apiUrl}/book`).toPromise().then((resp) => {
            let books = resp.json();
            console.log('books', books);
            return books;
        });
    }
    //get and display one single book
    getBookById(bookId): Promise<Object> {
        return this.http.get(`${this.apiUrl}/book/id/${bookId}`).toPromise().then((resp) => {
            let book = resp.json();
            console.log('book', book);
            return book;
        });
    }
    //use for post - to add a new book 
    addBook(book): Promise<Object> {
        return this.http.post(`${this.apiUrl}/book`, book).toPromise().then((resp) => {
            let book = resp.json();
            console.log('book', book);
            return book;
        });
    }
    // delete a book 
    deleteBook(id): Promise<Object> {
        console.log(`from book.service delete method......`);
        return this.http.delete(`${this.apiUrl}/book/id/${id}`).toPromise().then((resp) => {
            let status = resp.json();
            console.log('book', status);
            return status;
        });
    }
    // patch - edit a book 
    updateBook(id, book): Promise<Object> {
        return this.http.put(`${this.apiUrl}/book/id/${id}`, book).toPromise().then((resp) => {
            let book = resp.json();
            console.log('book', book);
            return book;
        });
    }
    

}
