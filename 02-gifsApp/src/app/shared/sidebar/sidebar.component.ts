import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  constructor(private gifsSevice: GifsService) {}

  get historial() {
    return this.gifsSevice.historial;
  }

  buscar(termino: string) {
    this.gifsSevice.buscarGifs(termino);
  }
}
