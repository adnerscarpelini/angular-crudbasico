import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: null
  }

  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {

  }

  //ADNER: Chama o método com as regras definidas no SERVICES (product.service.ts)
  createProduct(): void {
    this.productService.create(this.product).subscribe(() => { //O 'subscribe' fica aguardando o retorno da API pra mostrar a resposta
      this.productService.showMessage('Produto criado!');
      this.router.navigate(['/products']); //Volta pros Produtos
    });

  }

  cancel(): void {
    this.router.navigate(['/products']); //Volta pros Produtos
  }

}
