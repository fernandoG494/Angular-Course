import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _historial: string[] = [];
  private apiKey: string = 'KinLWxGq0F5UdV61ciSFzJTW002vNqMS';

  get historial() {
    return [...this._historial];
  }

  buscarGifs(query: string) {
    query = query.trim().toLowerCase();

    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);
    }

    fetch(
      'https://api.giphy.com/v1/gifs/search?api_key=KinLWxGq0F5UdV61ciSFzJTW002vNqMS&q=dragon ball z&limit=10'
    ).then((resp) => {
      resp.json().then((data) => {
        console.log(data);
      });
    });
  }
}
