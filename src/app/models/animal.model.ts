export type Especie = 'Gos' | 'Gat' | 'Conill';
export interface Animal {
  id: number;
  nom: string;
  descripcio: string;
  categoria: Especie;
  dataArribada: string;
  edat: number;
  destacat?: boolean;
}
export interface FiltresAnimals { text: string; categoria: string; }
