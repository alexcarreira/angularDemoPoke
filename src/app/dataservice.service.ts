import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private http: HttpClient) { }

  getPokemons() {
    return this.http.get('https://pokeapi.co/api/v2/pokemon');
  }

  getPokemon(url) {
    return this.http.get(url);
  }

  getPokemonsDetails(name:string) {
    return this.http.get('https://pokeapi.co/api/v2/pokemon/' + name);
  }

  getItems() {
    return this.http.get('https://pokeapi.co/api/v2/item');
  }

  getItem(url) {
    return this.http.get(url);
  }
}
