# DemoAngular7 - Instruções

## Passos tutorial Angular 7:
 
  - Instalar NodeJS
  - Instalar Angular CLI: npm install -g @angular/cli
  - Novo projeto: ng new [nome do projeto]
  - Abrir projeto: ng serve -o
  - Falar do app component
  - ng generate component nav
  - ng g c about
  - ng g c contact
  - ng g c home
  - Limpar app.component.html e colocar novo selector
  - Copiar html, scss e ts para o nav.component
  - Copiar scss para styles.scss
  - Falar de app-routing: { path: '', component: HomeComponent } (home, about, contact)
  - Copiar html, scss e ts para home.component
  - ng generate service data
  - Adicionar HttpClientModule from @angular/common/http ao app.module
  - Adicionar HttpClient data.service
  - Utilizar API pokemon https://pokeapi.co/
  - Adicionar método get pokemons ao data service
  - Adicionar chamada ao data service pelo home page
  - Copiar html e scss para home component
  
  ### Forms:
  
  - Importar ReactiveFormsModule from @angular/forms no app.module
  - Copiar html, scss e ts para contact.component
  
  ### Build:
  
  - ng build
  - ng build --prod
  - http server -o
  
  ### Run
  - ng serve
