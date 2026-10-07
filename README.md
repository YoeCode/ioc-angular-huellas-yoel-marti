# Huellas

## Autor

Yoel Martí Solé.

## Descripció

Aplicació que facilita l’adopció d’animals mitjançant un catàleg
amb fitxes informatives, filtres de cerca i un formulari d’interès
en l’adopció.

Aquestes funcionalitats s’implementaran progressivament durant
el semestre. Actualment, el projecte disposa d’una pantalla
inicial de presentació.

## Versions utilitzades

- Node.js: v25.2.1
- npm: 11.6.2
- Angular CLI: 22.2.1
- Angular: 22.2.1
- Git: git version 2.50.1 (Apple Git-155)

## Com crear i executar el projecte

Comanda utilitzada per crear el projecte:

```bash
ng new ioc-angular-huellas-yoel-marti --routing --style=scss --ssr=false --standalone --file-name-style-guide=2016 --skip-git --package-manager=npm
```

Per descarregar l’estat de l’EAC1 i instal·lar les dependències:

```bash
git clone --branch ra1-setup https://github.com/YoeCode/ioc-angular-huellas-yoel-marti.git
cd ioc-angular-huellas-yoel-marti
npm install
```

Per executar l’aplicació:

```bash
ng serve
```

Obriu http://localhost:4200 al navegador.

## Estat de l’EAC1

- Entorn de desenvolupament verificat.
- Projecte standalone amb routing, SCSS i sense SSR.
- Carpetes components, services, models i pages amb .gitkeep.
- Branques main, ra1-setup, ra2-components, ra3-serveis i ra4-navegacio.
- Pantalla inicial personalitzada amb interpolació i layout flex.
- Execució i actualització automàtica del navegador comprovades.

La branca ra1-setup conté els canvis de l’EAC1.
Les branques main, ra2-components, ra3-serveis i ra4-navegacio
conserven el projecte base.

## Enllaç del repositori

https://github.com/YoeCode/ioc-angular-huellas-yoel-marti

Branca de l’EAC1:
https://github.com/YoeCode/ioc-angular-huellas-yoel-marti/tree/ra1-setup
