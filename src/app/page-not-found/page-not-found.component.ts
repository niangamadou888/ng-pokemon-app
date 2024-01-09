/* Chapitre 6 : Les Routes */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
  
@Component({
    selector: 'page-404',
    standalone:true,
    template: `
    <div class='center'>
      <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png"/>
      <h1>Hey, cette page n'existe pas !</h1>
      <a (click)="goToPokemonList()" class="waves-effect waves-teal btn-flat">
        Retourner à l' accueil
      </a>
    </div>
  `
})
export class PageNotFoundComponent { 

  constructor(private router: Router) {}


  goToPokemonList(){
    this.router.navigate(['/pokemons']);
  }
 }