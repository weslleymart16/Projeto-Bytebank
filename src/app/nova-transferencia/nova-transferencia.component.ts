import { Component, EventEmitter, Output } from "@angular/core";
import { TransferenciaModel } from "./models/transferencia.model";


@Component({
    selector: 'app-nova-transferencia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls: ['./nova-transferencia.component.scss']
})

export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<TransferenciaModel>();

  valor: number;
  destino: number;


  transferir() {
    console.log('Solicitado nova transferência');
    const valorEmitir:TransferenciaModel = {valor: this.valor, destino: this.destino};
    this.aoTransferir.emit(valorEmitir);
    this.limparCampos()
  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }
}
