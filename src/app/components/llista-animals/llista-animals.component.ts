import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Animal } from '../../models/animal.model';
import { TargetaAnimalComponent } from '../targeta-animal/targeta-animal.component';
@Component({ selector: 'app-llista-animals', standalone: true, imports: [TargetaAnimalComponent], templateUrl: './llista-animals.component.html', styles: '.llista { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 240px), 1fr)); gap: 1rem; }' })
export class LlistaAnimalsComponent {
  @Input() animals: Animal[] = [];
  @Input() seleccionatId: number | null = null;
  @Output() seleccionar = new EventEmitter<Animal>();
}
