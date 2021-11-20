import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Order } from './order';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OrderserviceService {

  private restUrl:string='http://localhost:8080/ourproj/orders';
  snapshot: any;
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  getOrderFromService(): Observable<Order[]> {
    return this.http.get<Order[]>(this.restUrl + '/allorder');
  }
  createOrder(order: any): Observable<Order> {
    return this.http.post<Order>(
      this.restUrl + '/CreateOrder',
      JSON.stringify(order),
      this.httpOptions
    );  
}
deleteOrder(oid: number) {
  return this.http.delete<Order>(
    this.restUrl + '/deleteOrder/' + oid,
    this.httpOptions
  );
}

getOrder(oid: any): Observable<Order> {
  return this.http.get<Order>(
    this.restUrl + '/getOrder/' + oid,
    this.httpOptions
  );
}

updateOrder(order: any): Observable<Order> {
  console.log('from service update() ' + order);
  return this.http.put<Order>(
    this.restUrl + '/updateOrder',
    JSON.stringify(order),
    this.httpOptions
  );
}
}