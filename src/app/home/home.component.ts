import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  h1Style: boolean = false;
  clicked: boolean = false;
  pokemons: any[] = [];
  items: any[] = [];

  constructor(private data: DataserviceService) { }

  ngOnInit() {
    this.data.getPokemons().subscribe((data: any) => {
      data.results.forEach(poke => {
        this.data.getPokemon(poke.url).subscribe((details: any) => {
          this.pokemons.push({ name: poke.name, photo: details.sprites.front_default, clicked: false });
        });
      });
    });
    this.data.getItems().subscribe((data: any) => {
      data.results.forEach(item => {
        this.data.getItem(item.url).subscribe((details: any) => {
          this.items.push({ name: item.name, photo: details.sprites.default, clicked: false });
        });
      });
    });
  }

  changeMyColor() {
    this.h1Style = !this.h1Style;
    this.clicked = true;
    setTimeout(() => {
      this.clicked = false;
    }, 700);
  }

  clickItem(item) {
    item.clicked = true;
    setTimeout(() => {
      item.clicked = false;
    }, 700);
  }

}
