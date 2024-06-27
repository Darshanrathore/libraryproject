import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class BooksdataService {
  url = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getbooks() {
    return this.http.get(this.url + '/books');
  }

  financialbooks() {
    return this.http.get(this.url + '/financebook');
  }

  educationbooks() {
    return this.http.get(this.url + '/educationbook');
  }

  addbooks(data: any) {
    return this.http.post(this.url + '/addbook', data);
  }

  deletebook(id: number) {
    return this.http.delete(this.url + '/delete/' + id);
  }

  getbyid(id: number) {
    return this.http.get(this.url + '/findbook/' + id);
  }

  updatebook(id: any, data: any) {
    console.log('inside service');
    console.log(data);
    return this.http.patch(this.url + '/update/' + id, data);
  }
}
