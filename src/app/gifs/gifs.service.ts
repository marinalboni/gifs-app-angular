import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data, SearchGifsResponse } from './intefaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = 'IE5XJUJNJTUj46ZGp9yeNCaQQvbdf8uP';
  private apiURL: string = 'https://api.giphy.com/v1/gifs';
  private _historial: string[] = [];

  public resultados: Data[] = [];

  get historial() {
    return [...this._historial];
  }

  constructor( private http: HttpClient ) {

    if(localStorage.getItem('historial') && localStorage.getItem('ultimosResultados')) {
      this._historial = JSON.parse( localStorage.getItem('historial')! );
      this.resultados = JSON.parse( localStorage.getItem('ultimosResultados')! );
    }

  }

  buscarGifs( query: string ): void {

    query = query.trim().toLowerCase();

    if( !this._historial.includes( query ) ) {

      this._historial.unshift( query );
      this._historial = this._historial.slice(0, 10);

      localStorage.setItem('historial', JSON.stringify( this._historial ) )

    }

    const params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('q', query)
    .set('limit', '10')

    this.http.get<SearchGifsResponse>(`${this.apiURL}/search`, { params })
    .subscribe(( resp ) => {
      this.resultados = resp.data;
      localStorage.setItem('ultimosResultados', JSON.stringify(resp.data));
    })

  }

}
