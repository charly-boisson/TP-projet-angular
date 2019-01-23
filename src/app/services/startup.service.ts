import { Injectable } from '@angular/core';
import { Startup } from '../models/startup.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StartupService {

  constructor(private http: HttpClient) { }

  List(): Observable<Object> {
      return this.http.get('https://www.google.com/api/startups/')
    }

  GetStartup(id: string) : Observable<Startup> {
    const options = id ?{ params: new HttpParams().set('id', id) } : {};
    return this.http.get<Startup>('https://www.google.com/api/startups', options);
  }

  Add(startup: Startup): Observable<Startup> {
    return this.http.post<Startup>('https://www.google.com/api/startups', startup);
  }

  Delete(id: string): Observable<{}> {
    return this.http.delete('https://www.google.com/api/startups/'+id)
  }

  Update(startup: Startup): Observable<Startup> {
    return this.http.put<Startup>('https://www.google.com/api/startups', startup);
  }

}
