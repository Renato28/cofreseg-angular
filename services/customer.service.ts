import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Customer } from '../customer/customer';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  url: string = `${ API_CONFIG.baseUrl}/api`

  constructor(private http: HttpClient) { }

  create(customer: Customer): Observable<string> {
    return this.http.post<string>(this.url, customer)
  }
}
