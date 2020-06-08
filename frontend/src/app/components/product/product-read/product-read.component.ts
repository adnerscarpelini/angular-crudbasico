import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[];
  displayedColumns = ['id', 'name', 'price', 'action']; //Colunas para exibir na tabela

  constructor(private productService: ProductService) { }

  //ASSIM QUE INICIA O COMPONENTE CONSULTA OS PRODUTOS
  ngOnInit(): void {

    //Chama o método no serviço de produtos (product.service.ts)
    //Assim que a API dá a resposta carrega a lista
    this.productService.read().subscribe(products => {
      this.products = products;
      //console.log(products);
    })

  }

}
