import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  constructor(private http: HttpClient) {}

  private _historial: string[] = [];
  private apiKey: string = 'KinLWxGq0F5UdV61ciSFzJTW002vNqMS';

  public resultados: any[] = [];

  get historial() {
    return [...this._historial];
  }

  async buscarGifs(query: string) {
    query = query.trim().toLowerCase();

    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);
    }

    this.http
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=KinLWxGq0F5UdV61ciSFzJTW002vNqMS&q=${query}&limit=10`
      )
      .subscribe((resp: any) => {
        console.log(resp.data);
        this.resultados = resp.data;
      });
  }
}
