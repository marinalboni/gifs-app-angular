import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historial: string[] = [];

  get historial() {
    return [...this._historial];
  }

  buscarGifs( query: string ): void {

    query = query.trim().toLowerCase();

    if( !this._historial.includes(query) ) {

      this._historial.unshift( query );
      this._historial = this._historial.slice(0, 10);

    }

  }

}
