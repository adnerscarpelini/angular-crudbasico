import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {


  product: Product;

  constructor(private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute //ADNER: Pega a rota ativa pra obter o id do produto que está alterando
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.readById(id).subscribe(product => {
      this.product = product //Consulta o produto cujo id veio por parametro na url
    })
  }


  //ADNER: Chama o método com as regras definidas no SERVICES (product.service.ts)
  updateProduct(): void {
    this.productService.update(this.product).subscribe(() => { //O 'subscribe' fica aguardando o retorno da API pra mostrar a resposta
      this.productService.showMessage('Produto alterado!');
      this.router.navigate(['/products']); //Volta pros Produtos
    });

  }

  cancel(): void {
    this.router.navigate(['/products']); //Volta pros Produtos
  }

}
