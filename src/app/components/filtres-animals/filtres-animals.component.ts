import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FiltresAnimals } from '../../models/animal.model';
@Component({ selector: 'app-filtres-animals', standalone: true, imports: [FormsModule], templateUrl: './filtres-animals.component.html', styleUrl: './filtres-animals.component.scss' })
export class FiltresAnimalsComponent {
  text = '';
  categoria = '';
  @Output() aplicarFiltres = new EventEmitter<FiltresAnimals>();
  aplica(formulari: NgForm): void {
    if (formulari.invalid || this.text.trim().length < 3) return;
    this.aplicarFiltres.emit({ text: this.text.trim(), categoria: this.categoria });
  }
  restableix(formulari: NgForm): void {
    this.text = '';
    this.categoria = '';
    formulari.resetForm({ text: '', categoria: '' });
    this.aplicarFiltres.emit({ text: '', categoria: '' });
  }
}
