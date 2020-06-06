// ADNER: CRIAÇÃO DE UMA DIRETIVA ESTRUTURAL PARAR FAZER UM LAÇO

import { Directive, OnInit, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit {

  @Input('myForEm') numbers: number[] //Pega o array de numeros que vem depois da palavra "Em"

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>) {

  }

  ngOnInit(): void {
    for (let number of this.numbers) {
      this.container.createEmbeddedView(this.template, { $implicit: number })
    }
  }
}
