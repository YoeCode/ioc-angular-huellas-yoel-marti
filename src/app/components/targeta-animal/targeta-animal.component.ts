import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Animal } from '../../models/animal.model';
import { EtiquetaEspecieComponent } from '../etiqueta-especie/etiqueta-especie.component';
@Component({ selector: 'app-targeta-animal', standalone: true, imports: [EtiquetaEspecieComponent], templateUrl: './targeta-animal.component.html', styleUrl: './targeta-animal.component.scss' })
export class TargetaAnimalComponent {
  @Input({ required: true }) animal!: Animal;
  @Input() seleccionat = false;
  @Output() seleccionar = new EventEmitter<Animal>();
}
