# Huellas · Animals en adopció

Projecte educatiu de **Yoel Martí Solé** per a DA2_OA01, EAC2 (RA2).
Continua la base de l’EAC1: una interfície per conèixer animals que busquen una llar.
Les dades són fictícies; no és un servei real d’adopcions.

## Entorn
- Node.js 24.22.0 LTS (requisit: 24.15.0 o superior de la branca 24).
- npm: consulteu `npm --version` amb Node 24.
- Angular / Angular CLI 22.x, TypeScript 6.0.x; versions exactes al lockfile.
- Git 2.x; components standalone, SCSS i sense SSR.

## Instal·lació i execució
```bash
npm install
npx ng serve
```
Obriu http://localhost:4200. També podeu usar `ng serve` amb el CLI 22 al PATH.
```bash
npx ng test --watch=false
npx ng build
```
`ng test` inicia les proves; `--watch=false` permet executar-les una sola vegada.

## Branca i historial
Branca de treball i lliurament: **ra2-components**.
S’hi ha incorporat `ra1-setup` (commit de l’EAC1: `4d43239`) abans dels canvis.
```bash
git switch ra2-components
git merge ra1-setup
git log --oneline --decorate --max-count=5
```
Publicació dels canvis revisats:
```bash
git add src README.md
git commit -m "feat(ra2): completar animals, filtres i detall accessibles"
git push -u origin ra2-components
```
Repositori: https://github.com/YoeCode/ioc-angular-huellas-yoel-marti
Branca: https://github.com/YoeCode/ioc-angular-huellas-yoel-marti/tree/ra2-components

## Model i dades
`src/app/models/animal.model.ts`: `Animal` amb id, nom, descripcio, categoria
(unió Gos/Gat/Conill), dataArribada ISO, edat numèrica i destacat booleà opcional.
`src/app/mocks/animals.mock.ts`: 10 animals tipats amb identificadors únics.

## Components
| Component | Responsabilitat i comunicació |
| --- | --- |
| App | Estat, filtre combinat, comptador, detall i DatePipe |
| FiltresAnimalsComponent | FormsModule; emet aplicarFiltres amb text i categoria |
| LlistaAnimalsComponent | Rep animals i seleccionatId; @for amb track animal.id; reemet seleccionar |
| TargetaAnimalComponent | Rep animal i seleccionat; botó accessible que emet seleccionar |
| EtiquetaEspecieComponent | Rep categoria obligatòria i mostra l’espècie |

## Comportament i verificacions
- Cerca per nom sense distingir majúscules i amb espais exteriors eliminats.
- Text obligatori de 3 caràcters; categoria opcional. Ex.: `Luna` dona dos resultats;
  amb espècie `Gat` queda `Luna Petita`. `zzzz` produeix estat buit.
- Aplica queda deshabilitat si el formulari és invàlid. L’error apareix després de tocar el camp.
- Restableix buida text i categoria, recupera els 10 animals i reinicia l’estat del formulari.
- La selecció es conserva mentre el resultat sigui visible i es neteja si queda exclòs.
- Plantilles amb @if/@else i @for; data d’arribada amb date:'dd/MM/yyyy'.
- Enllaç de salt, labels, focus visible, aria-pressed a les targetes i avisos amb status/alert.
- Dues columnes en escriptori; una columna a 700 px o menys. Targetes adaptables sense desbordament.
- Proves automatitzades: filtre combinat, selecció i data, estat buit, validació i restabliment.

## Evidències i lliurament
El document ODT inclou els exercicis 1–5, captures, URL de la branca i commit final.
Comproveu el repositori públic i manteniu-lo accessible durant la revisió.
