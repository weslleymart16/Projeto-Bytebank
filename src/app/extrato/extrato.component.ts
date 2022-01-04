import { TransferenciaService } from './../services/transferencia.service';
import { TransferenciaModel } from './../nova-transferencia/models/transferencia.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

 transferencias: any;

  constructor(private service: TransferenciaService) { }

  ngOnInit() {
    this.transferencias = this.service.transferencias;
  }

}
