import { Routes } from '@angular/router';
import { ListPokemonComponent } from './pokemon/list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './pokemon/detail-pokemon/detail-pokemon.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditPokemonComponent } from './pokemon/edit-pokemon/edit-pokemon.component';
import { AddPokemonComponent } from './pokemon/add-pokemon/add-pokemon.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: 'edit/pokemon/:id', component: EditPokemonComponent, canActivate: [AuthGuard] },
    { path: 'pokemons', component: ListPokemonComponent, canActivate: [AuthGuard] },
    { path: 'pokemon/add', component: AddPokemonComponent, canActivate: [AuthGuard] },
    { path: 'pokemon/:id', component: DetailPokemonComponent, canActivate: [AuthGuard] },  
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent},  
    { path: '**', component: PageNotFoundComponent }
];
