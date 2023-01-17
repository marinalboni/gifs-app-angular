import { Component } from '@angular/core';
import { GifsService } from '../gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent {

  txtBuscar: string = '';

  constructor( private gifsService: GifsService ) {}

  buscar() {
    const valor = this.txtBuscar;

    if(valor.trim().length === 0) {
      return
    }

    this.gifsService.buscarGifs( valor );

    this.txtBuscar = '';
  }

}
