import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {

  get queriesList() {
    return this.gifsService.historial
  }

  constructor( private gifsService: GifsService ) {}

  onClick( query: string ) {
    this.gifsService.buscarGifs(query)
  }

}
