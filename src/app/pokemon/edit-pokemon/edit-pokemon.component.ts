import { Observable } from 'rxjs';
import { PokemonService } from './../pokemon.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pokemon } from '../pokemon';
import { ActivatedRoute } from '@angular/router';
import { PokemonFormComponent } from '../pokemon-form/pokemon-form.component';

@Component({
  selector: 'app-edit-pokemon',
  standalone: true,
  imports: [CommonModule, PokemonFormComponent],
  template: `
  <h2 class="center">Editer {{ pokemon?.name }}</h2>
    <p *ngIf="pokemon" class="center">
      <img [src]="pokemon.picture" />
    </p>
    <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon">
  `,
  styles: ``
})
export class EditPokemonComponent implements OnInit{

  pokemon: Pokemon|undefined;

  constructor(private route: ActivatedRoute, private PokemonService: PokemonService) {}

  ngOnInit(){
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');

    if (pokemonId) {
      this.PokemonService.getPokemonById(+pokemonId).subscribe(pokemon => this.pokemon = pokemon);
    } else {
      this.pokemon = undefined;
    }
  }
}
