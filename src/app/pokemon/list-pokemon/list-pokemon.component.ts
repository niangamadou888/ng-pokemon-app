import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pokemon } from '../pokemon';
import { PokemonTypeColorPipe } from "../pokemon-type-color.pipe";
import { BorderCardDirective } from '../border-card.directive';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { SearchPokemonComponent } from "../search-pokemon/search-pokemon.component";

@Component({
    selector: 'app-list-pokemon',
    standalone: true,
    templateUrl: './list-pokemon.component.html',
    imports: [CommonModule, BorderCardDirective, PokemonTypeColorPipe, SearchPokemonComponent]
})
export class ListPokemonComponent implements OnInit{
  pokemonList: Pokemon[];

  constructor(private router: Router,private pokemonService: PokemonService){}

  ngOnInit(){
    this.pokemonService.getPokemonList().subscribe(pokemonList=> this.pokemonList= pokemonList);
  }

  goToPokemon(pokemon: Pokemon){
    this.router.navigate(['/pokemon', pokemon.id]);
  }
}
