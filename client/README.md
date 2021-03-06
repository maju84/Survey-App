# Client

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.0.

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

## Architecture Decision Records (ADR) regarding ng client

- core.module.ts: well suited for a potential later versioning: instead of dumping everything into the default app.module.ts. <br>
Example: for a possible complete different ui version we could provide a core2.module.ts in parallel

- super lean app.module.ts: we strip off the central app.module.ts as far as possible for a "quick "startup / first load" experience. <br> 
By using a PreloadingStrategy we set the stage for background loading of sub -pages / modules (, aiming for a good "offline first experience").

- dedicated feature/create-survey module: future stuff is registered at this module, not the central app module <br>
-> supports our chosen lazy / backround loading approach
