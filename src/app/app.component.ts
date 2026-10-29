import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Animal, FiltresAnimals } from './models/animal.model';
import { ANIMALS } from './mocks/animals.mock';
import { LlistaAnimalsComponent } from './components/llista-animals/llista-animals.component';
import { FiltresAnimalsComponent } from './components/filtres-animals/filtres-animals.component';
import { EtiquetaEspecieComponent } from './components/etiqueta-especie/etiqueta-especie.component';
@Component({ selector: 'app-root', standalone: true, imports: [DatePipe, LlistaAnimalsComponent, FiltresAnimalsComponent, EtiquetaEspecieComponent], templateUrl: './app.component.html', styleUrl: './app.component.scss' })
export class App {
  public appName = 'Huellas';
  public animalsVisibles = [...ANIMALS];
  public animalSeleccionat: Animal | null = null;
  public filtresActius: FiltresAnimals = { text: '', categoria: '' };
  public aplicaFiltres(filtres: FiltresAnimals): void {
    const text = filtres.text.trim().toLocaleLowerCase('ca');
    this.filtresActius = { text: filtres.text.trim(), categoria: filtres.categoria };
    this.animalsVisibles = ANIMALS.filter(animal => animal.nom.toLocaleLowerCase('ca').includes(text) && (!filtres.categoria || animal.categoria === filtres.categoria));
    if (this.animalSeleccionat && !this.animalsVisibles.some(animal => animal.id === this.animalSeleccionat?.id)) this.animalSeleccionat = null;
  }
  public selecciona(animal: Animal): void { this.animalSeleccionat = animal; }
}
