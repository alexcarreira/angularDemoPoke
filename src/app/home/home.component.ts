import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  h1Style: boolean = false;
  pokemons: any[] = [];

  constructor(private data: DataserviceService) { }

  ngOnInit() {
    this.data.getPokemons().subscribe((data: any) => {
      data.results.forEach(poke => {
        this.data.getPokemon(poke.url).subscribe((details: any) => {
          this.pokemons.push({ name: poke.name, photo: details.sprites.front_default });
        });
      });
    });
  }

  changeMyColor() {
    this.h1Style = !this.h1Style;
  }

}
