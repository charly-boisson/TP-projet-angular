import { Injectable } from '@angular/core';
import { Consultant } from '../models/consultant.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsultantService {

  constructor(private http: HttpClient) { }

  List(): Observable<Object> {
      return this.http.get('https://www.google.com/api/consultants')
    }

  GetConsultant(id: string) : Observable<Consultant> {
    const options = id ?{ params: new HttpParams().set('id', id) } : {};
    return this.http.get<Consultant>('https://www.google.com/api/consultants', options);
  }

  Add(consultant: Consultant): Observable<Consultant> {
    return this.http.post<Consultant>('https://www.google.com/api/consultants', consultant);
  }

  Delete(id: string): Observable<{}> {
    return this.http.delete('https://www.google.com/api/consultants/'+id)
  }

  Update(consultant: Consultant): Observable<Consultant> {
    return this.http.put<Consultant>('https://www.google.com/api/consultants', consultant);
  }

}
