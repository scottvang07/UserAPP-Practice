import { Component, Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class UserService {

    // this is where the variables go

    apiUrl: string;

    constructor(
        private http: Http
    ) {
        // do init stuff
        //HOW TO TAP INTO THE API AND MONGODB STRUCTURE 
        this.apiUrl = 'http://localhost:8000/api'
    }
    // functions for CRUD (ensure the variable are changed)
    // get and display all books 
    getUsers(): Promise<Array<Object>> {
        return this.http.get(`${this.apiUrl}/users`).toPromise().then((resp) => {
            let users = resp.json();
            console.log('users', users);
            return users;
        });
    }
    //get and display one single book
    getUserById(userId): Promise<Object> {
        return this.http.get(`${this.apiUrl}/users/id/${userId}`).toPromise().then((resp) => {
            let user = resp.json();
            console.log('user', user);
            return user;
        });
    }
    //use for post - to add a new book 
    addUser(user): Promise<Object> {
        return this.http.post(`${this.apiUrl}/users`, user).toPromise().then((resp) => {
            let book = resp.json();
            console.log('users', user);
            return user;
        });
    }
    // delete a book 
    deleteUser(id): Promise<Object> {
        console.log(`from user.service delete method......`);
        return this.http.delete(`${this.apiUrl}/users/id/${id}`).toPromise().then((resp) => {
            let status = resp.json();
            console.log('user', status);
            return status;
        });
    }
    // patch - edit a book 
    updateUser(id, user): Promise<Object> {
        return this.http.put(`${this.apiUrl}/users/id/${id}`, user).toPromise().then((resp) => {
            let user = resp.json();
            console.log('users', user);
            return user;
        });
    }
    

}
