import { Product } from './product.model';
//ADNER: O SERVICE É ONDE FICAM AS REGRAS DE NEGÓCIO DO COMPONENTE E AS CHAMADAS PARA A API
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = 'http://localhost:3000/products';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    //ADNER: MatSnackBar é uma ToasT
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  //ADNER: Quando chama a API, ele retorna o Observable do Tipo PRODUTO
  //Ou seja, a gente manda um produto e a API retorna ele com o produto preenchido, com ID gerado
  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product);

  }

}
