import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {AppError} from '../common/app-error';
import {NotFoundError} from '../common/not-found-error';
import {BadInput} from '../common/bad-input';
import {Observable} from 'rxjs';
import { map, catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    //private url;

  constructor(private url: string, private http: Http) {

  }

  getAll() {
    return this.http.get(this.url)
    .pipe(catchError(this.handleError));
  }

  Create(resource) {
    return this.http.post(this.url, JSON.stringify(resource))
    .pipe(catchError(this.handleError));
  }


  Update(resource) {
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({isRead: true}))
  //  this.http.put(this.url,JSON.stringify(post))
   .pipe(catchError(this.handleError));

  }

  Delete(id) {
     return this.http.get(this.url + '/' + id)
     .pipe(catchError(this.handleError));
   }

   private handleError (error: Response) {
     if(error.status === 400)
       return Observable.throw(new BadInput(error.json()));

     if(error.status === 404)
      return throwError(new NotFoundError());
     return throwError(new AppError(error));
   }
}
