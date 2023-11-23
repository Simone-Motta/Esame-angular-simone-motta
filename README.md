## Menù

1. [Introduzione](#PrSimoneMottaEsame)
2. [Componenti](#componenti)
3. [Servizi](#servizi)
4. [Configurazione](#build)
5. [Help](#help)

# PrSimoneMottaEsame

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.10. Quest'applicativo permette la ricerca del meteo e l'orario di alba e tramonto, grazie all'inserimento della latitudine e longitudine. Il funzionamento si basa sull'API fornite dal sito SunsetSunrise.io e 7Timer!

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Componenti

### TopBar Component
- In questo componente viene visualizzata una <navbar>, con due link uno che usa il routerLink per andare al componente HomeComponent, e un'altro che porta alla <section> con l'attributo id = provaApi, per fare ciò viene utilizzata la funzione navigateToProva() che oltre ad indicare la route da seguire permette di passare, attraverso l'attributo fragment, permette di indicare anche l'id scelto

### Home Component
- In questo componente sono presenti il <form> per l'inserimento della latitudine e longitudine, che al click del <button> richiama funzione passLatLong() che grazie al modulo Router, per la gestione della navigazione tra componenti, passa i dati di latitudine e longitudine al componente DetailComponent

- home.component.ts
- home.component.html

### Defaults Component
- In questo componente, richiamato all'interno di home.component.html, c'è la visualizzazione di alcuni dati al'interno dell'oggetto predifinedLocality, che mostra alcune città, i cui valori di latitudine e longitudine, vengono passati, sempre attraverso la funzione passLatLong(), ma che invece di essere inseriti, vengono presi direttamente dall'oggetto, una volta cliccato sull'immagine o il titolo

- defaults.component.ts
- defaults.component.html

### Detail Component
- In questo componente, a cui si accede cliccando il <button> in home.component.html, vengono passati i dati di latitudine e longitudine attraverso la funzione passLatLong(), grazie al modulo ActivatedRoute. Qui viene fatto un piccolo controllo sul dato che sia compreso tra -90 e 90, nel caso della latitudine e tra -180 e 180, nel caso della longitudine, attraverso le funzioni    validValueLat() e validValueLong(); se non rispetterà questi criteri verrà visualizzato un reminder che riporterà al <form> in HomeComponent.
Sei i dati sono corretti verranno chiamate le due funzioni, printDetailSunset() e printDetailWeatherForecast(), che prenderanno il risultato della chiamata API e le inserirà una all'interno di un oggetto e l'altra all'interno di un array, entrambi tipizzati secondo il json della risposta. 
E' stata anche implementata la funzione convertTo24HourFormat() che converte il formata dell'ora, dato di default dall'API, nel formato di 12h, che lo converte nel formato da 24h, e cliccando sul <button> "Converti in:" cambia la visualizzazione dell'orario

- detail.component.ts
- detail.component.html

## Servizi

### Api service
Il servizio ApiService è responsabile di effettuare richieste HTTP a diverse API per ottenere dati relativi all'alba e al tramonto, nonché previsioni meteorologiche in base alle coordinate di latitudine e longitudine fornite.

- searchSunset(lat: number, long: number)
Questo metodo effettua una richiesta all'API "Sunrise and Sunset Times" utilizzando le coordinate specificate. Restituisce i risultati relativi all'alba e al tramonto come un'istanza di SunsetResults.

- searchWeatherForecast(lat: number, long: number)
Questo metodo effettua una richiesta all'API meteorologica utilizzando le coordinate specificate. Restituisce i dati della previsione meteorologica come un array di istanze di WeatherForecastResult.

### Meteo service
Il servizio MeteoService agisce come un intermediario tra i componenti dell'applicazione e l'ApiService, fornendo metodi per ottenere dettagli sull'alba, tramonto e previsioni meteorologiche.

- getSunsetDetail(lat: number, long: number)
Questo metodo chiama il metodo searchSunset() del ApiService per recuperare i dettagli sull'alba e il tramonto utilizzando le coordinate specificate.

- getWeatherForecastDetail(lat: number, long: number)
Questo metodo chiama il metodo searchWeatherForecast() del ApiService per recuperare i dettagli della previsione meteorologica utilizzando le coordinate specificate.
