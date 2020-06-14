import { map, catchError } from 'rxjs/operators';
import { Product } from './product.model';
//ADNER: O SERVICE É ONDE FICAM AS REGRAS DE NEGÓCIO DO COMPONENTE E AS CHAMADAS PARA A API
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = 'http://localhost:3000/products';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    //ADNER: MatSnackBar é uma ToasT
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']  //Classes de CSS parar cada ação
    })
  }

  //ADNER: Quando chama a API, ele retorna o Observable do Tipo PRODUTO
  //Ou seja, a gente manda um produto e a API retorna ele com o produto preenchido, com ID gerado
  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }


  read(): Observable<Product[]> { //Retorna a lista de Produto
    return this.http.get<Product[]>(this.baseUrl);

  }

  readById(id: string): Observable<Product> {
    const url = `${this.baseUrl}/${id}`; //ADNER: Interpola o id do produto recebido na base da url
    return this.http.get<Product>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`; //ADNER: Interpola o id do produto recebido na base da url
    return this.http.put<Product>(url, product).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );

  }

  delete(id: string): Observable<Product> {
    const url = `${this.baseUrl}/${id}`; //ADNER: Interpola o id do produto recebido na base da url
    return this.http.delete<Product>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );

  }

  //Método para tratar erros
  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY
  }


}
