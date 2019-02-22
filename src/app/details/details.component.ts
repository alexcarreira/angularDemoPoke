import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  pokemonDetail: any[] = [];

  constructor(private data: DataserviceService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    let pokeName = this.route.snapshot.params.name;
    if (pokeName) {
      this.data.getPokemonsDetails(pokeName)
        .subscribe((data: any) => {
            this.pokemonDetail = data;
        });
    }
  }
}
