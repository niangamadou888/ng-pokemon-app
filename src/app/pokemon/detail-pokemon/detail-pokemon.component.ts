import { PokemonService } from './../pokemon.service';
import { POKEMONS } from '../mock-pockemon-list';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonTypeColorPipe } from "../pokemon-type-color.pipe";
import { LoaderComponent } from "../loader/loader.component";

@Component({
    selector: 'app-detail-pokemon',
    standalone: true,
    templateUrl: './detail-pokemon.component.html',
    imports: [CommonModule, PokemonTypeColorPipe, LoaderComponent]
})
export class DetailPokemonComponent implements OnInit{
  
  pokemonList: Pokemon[];
  pokemon: Pokemon|undefined;

  constructor(private route: ActivatedRoute, private router: Router, private PokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonList = POKEMONS;
      const pokemonId: string|null = this.route.snapshot.paramMap.get('id');
      if(pokemonId){
        this.PokemonService.getPokemonById(+pokemonId).subscribe(pokemon => this.pokemon = pokemon);
      } 
  }

  deletePokemon(pokemon: Pokemon){
    this.PokemonService.deletePokemonById(pokemon.id).subscribe(()=> this.goToPokemonList());
  }

  goToPokemonList(){
    this.router.navigate(['/pokemons']);
  }
  goToEditPokemon(pokemon: Pokemon){
    this.router.navigate(['/edit/pokemon', pokemon.id]);
  }
}
