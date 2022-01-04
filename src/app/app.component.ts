import { TransferenciaService } from './services/transferencia.service';
import { TransferenciaModel } from './nova-transferencia/models/transferencia.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';

  constructor(private service: TransferenciaService){

  }

  transferir(transferencias:TransferenciaModel){
    this.service.adicionar(transferencias);

  }
}
