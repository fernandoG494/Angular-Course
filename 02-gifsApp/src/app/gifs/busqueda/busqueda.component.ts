import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
})
export class BusquedaComponent {
  @ViewChild('textBuscar') textBuscar!: ElementRef<HTMLInputElement>;

  constructor(private gifService: GifsService) {}

  buscar() {
    const valor = this.textBuscar.nativeElement.value;

    if (valor.trim().length === 0) {
      return;
    }

    this.gifService.buscarGifs(valor);
    this.textBuscar.nativeElement.value = '';
  }
}
