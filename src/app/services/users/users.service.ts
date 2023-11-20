import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get('http://localhost:3000/users');
  }

  insertUser(body: any): Observable<any> {
    return this.http.post('http://localhost:3000/users', body);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/users/${id}`);
  }

  editUser(id: number, body: any): Observable<any> {
    return this.http.put(`http://localhost:3000/users/${id}`, body);
  }
}
