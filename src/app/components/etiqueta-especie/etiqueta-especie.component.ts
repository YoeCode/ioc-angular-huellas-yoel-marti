import { Component, Input } from '@angular/core';
import { Especie } from '../../models/animal.model';
@Component({ selector: 'app-etiqueta-especie', standalone: true, template: '<span class="etiqueta">{{ categoria }}</span>', styles: '.etiqueta { display: inline-block; padding: .25rem .65rem; border-radius: 2rem; background: #e4eee7; color: #24553d; font-size: .85rem; font-weight: 700; }' })
export class EtiquetaEspecieComponent {
  @Input({ required: true }) categoria!: Especie;
}
