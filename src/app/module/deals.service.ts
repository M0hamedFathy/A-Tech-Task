import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, map } from 'rxjs';
import { Deal, IResponseArray } from '../shared/models/response.model';

@Injectable({
  providedIn: 'root',
})
export class DealsService {
  searchTerm = new Subject<string>();
  dealsNumber: BehaviorSubject<number> = new BehaviorSubject(0);
  constructor(private http: HttpClient) {}
  API: string = 'https://my-json-server.typicode.com/mabukoush1/contacts/db';
  getDeals(): Observable<{ deals: Deal[] }> {
    return this.http.get<{ deals: Deal[] }>(this.API);
  }
}
