import { TestBed } from '@angular/core/testing';
import { App } from './app.component';
import { ANIMALS } from './mocks/animals.mock';
import { FiltresAnimalsComponent } from './components/filtres-animals/filtres-animals.component';

describe('Huellas', () => {
  beforeEach(async () => { await TestBed.configureTestingModule({ imports: [App] }).compileComponents(); });
  it('mostra els deu animals i el comptador inicial', async () => {
    const f = TestBed.createComponent(App); await f.whenStable();
    expect(f.nativeElement.querySelector('h1').textContent).toContain('Huellas');
    expect(f.nativeElement.querySelectorAll('app-targeta-animal').length).toBe(10);
    expect(f.nativeElement.querySelector('[role="status"]').textContent).toContain('10 resultats');
  });
  it('combina nom i espècie ignorant majúscules i espais', () => {
    const app = new App();
    app.aplicaFiltres({ text: ' LUNA ', categoria: '' });
    expect(app.animalsVisibles.map(a => a.id)).toEqual([1, 2]);
    app.aplicaFiltres({ text: ' LUNA ', categoria: 'Gat' });
    expect(app.animalsVisibles.map(a => a.id)).toEqual([2]);
  });
  it('neteja el detall exclòs pel filtre i el manté si continua visible', () => {
    const app = new App(); app.selecciona(ANIMALS[0]);
    app.aplicaFiltres({ text: 'Luna', categoria: 'Gos' });
    expect(app.animalSeleccionat?.id).toBe(1);
    app.aplicaFiltres({ text: 'Luna', categoria: 'Gat' });
    expect(app.animalSeleccionat).toBeNull();
    app.aplicaFiltres({ text: '', categoria: '' });
    expect(app.animalsVisibles.length).toBe(10);
  });
  it('propaga el clic de la targeta i formata la data al detall', async () => {
    const f = TestBed.createComponent(App); await f.whenStable();
    (f.nativeElement.querySelector('app-targeta-animal button') as HTMLButtonElement).click();
    await f.whenStable();
    expect(f.componentInstance.animalSeleccionat?.nom).toBe('Luna');
    expect(f.nativeElement.querySelector('aside').textContent).toContain('12/09/2026');
    expect(f.nativeElement.querySelector('app-targeta-animal button').getAttribute('aria-pressed')).toBe('true');
  });
  it('mostra estat buit amb zero coincidències', async () => {
    const f = TestBed.createComponent(App); await f.whenStable();
    const input = f.nativeElement.querySelector('input') as HTMLInputElement;
    input.value = 'zzzz'; input.dispatchEvent(new Event('input')); await f.whenStable();
    (f.nativeElement.querySelector('button[type="submit"]') as HTMLButtonElement).click(); await f.whenStable();
    expect(f.nativeElement.querySelector('section').textContent).toContain('No hi ha resultats');
    expect(f.nativeElement.querySelector('[role="status"]').textContent).toContain('0 resultats');
  });
});

describe('Formulari de filtres', () => {
  beforeEach(async () => { await TestBed.configureTestingModule({ imports: [FiltresAnimalsComponent] }).compileComponents(); });
  it('impedeix cerques curtes, combina valors i restableix controls i filtres', async () => {
    const f = TestBed.createComponent(FiltresAnimalsComponent); await f.whenStable();
    const el = f.nativeElement as HTMLElement;
    const input = el.querySelector('input')!;
    const submit = el.querySelector('button[type="submit"]') as HTMLButtonElement;
    const select = el.querySelector('select')!;
    const emit = vi.spyOn(f.componentInstance.aplicarFiltres, 'emit');
    expect(submit.disabled).toBe(true);
    input.value = 'Lu'; input.dispatchEvent(new Event('input')); input.dispatchEvent(new Event('blur')); await f.whenStable();
    expect(submit.disabled).toBe(true);
    expect(el.querySelector('[role="alert"]')?.textContent).toContain('3 caràcters');
    input.value = 'Luna'; input.dispatchEvent(new Event('input'));
    select.value = 'Gat'; select.dispatchEvent(new Event('change')); await f.whenStable();
    expect(submit.disabled).toBe(false);
    submit.click(); await f.whenStable();
    expect(emit).toHaveBeenLastCalledWith({ text: 'Luna', categoria: 'Gat' });
    (el.querySelector('button[type="button"]') as HTMLButtonElement).click(); await f.whenStable();
    expect(emit).toHaveBeenLastCalledWith({ text: '', categoria: '' });
    expect(input.value).toBe(''); expect(select.value).toBe(''); expect(submit.disabled).toBe(true);
    expect(el.querySelector('[role="alert"]')?.textContent?.trim()).toBe('');
  });
});
