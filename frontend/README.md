# TIENDA VIRTUAL - Frontend

El Frontend de Tienda Virtual está desarrollado en Angular 13. Se implemento Bootstrap en los estilos, y se utilizó la librería Sweet Alert2 para las alertas.

Cuenta con un dashboard usuario, en el que para poder comprar uhn producto, el usuario debe loguearse, de lo contrario solo podrá visualizar los productos.

El administrador puede crear nuevos productos, editar y eliminar, y también puede recorrer las aplicación en modo usuario.

Para la autenticación se utilizó JWT, y se protegió las rutas con sus respectivos Guards usuario y admin.

Faltaron implementar las funcionalidades tanto en backend y frontend de visualizar compras y clientes.

El Frontend esta deployeado en: [Tienda Virtual](https://tutiendavirtual.vercel.app/)

La documentación del back la puedes ver en [backend](https://github.com/SantiagoCastellaniDev/ExamenTecnico/backend.md)

......
[Volver](https://github.com/SantiagoCastellaniDev/ExamenTecnico/README.md)
......


A continuación, la documentación ofrecida por Angular:

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
