import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  private restUrl:string='http://localhost:8080/ourproj/product';
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  getProductFromService(): Observable<Product[]> {
    return this.http.get<Product[]>(this.restUrl + '/allproduct');
  }
  createProduct(product: any): Observable<Product> {
    return this.http.post<Product>(
      this.restUrl + '/createProduct',
      JSON.stringify(product),
      this.httpOptions
    );  
}
deleteProduct(cid: number) {
  return this.http.delete<Product>(
    this.restUrl + '/deleteProduct/' + cid,
    this.httpOptions
  );
}

getProduct(cid: any): Observable<Product> {
  return this.http.get<Product>(
    this.restUrl + '/getProduct/' + cid,
    this.httpOptions
  );
}

updateProduct(product: any): Observable<Product> {
  console.log('from service update() ' + product);
  return this.http.put<Product>(
    this.restUrl + '/updateProduct',
    JSON.stringify(product),
    this.httpOptions
  );
}
}