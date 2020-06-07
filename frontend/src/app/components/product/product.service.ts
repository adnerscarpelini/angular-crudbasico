//ADNER: O SERVICE É ONDE FICAM AS REGRAS DE NEGÓCIO DO COMPONENTE E AS CHAMADAS PARA A API
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private snackBar: MatSnackBar) { }

  showMessage(msg: string): void {
    //ADNER: MatSnackBar é uma ToasT
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

}
