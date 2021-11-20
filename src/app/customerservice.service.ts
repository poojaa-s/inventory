import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from './customer';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CustomerserviceService {

  private restUrl:string='http://localhost:8080/ourproj/customer';
  snapshot: any;
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  getCustomerFromService(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.restUrl + '/allcus');
  }
 createCustomer(customer: any): Observable<Customer> {
    return this.http.post<Customer>(
      this.restUrl + '/saveCustomer',
      JSON.stringify(customer),
      this.httpOptions
    );  
}
deleteCustomer(cid: number) {
  return this.http.delete<Customer>(
    this.restUrl + '/deleteCustomer/' + cid,
    this.httpOptions
  );
}


getCustomer(cid: any): Observable<Customer> {
  return this.http.get<Customer>(
    this.restUrl + '/getCustomer/' + cid,
    this.httpOptions
  );
}

updateCustomer(customer: any): Observable<Customer> {
  console.log('from service update() ' + customer);
  return this.http.put<Customer>(
    this.restUrl + '/updateCustomer',
    JSON.stringify(customer),
    this.httpOptions
  );
}
}