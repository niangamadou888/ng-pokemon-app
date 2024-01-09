import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonModule } from './pokemon/pokemon.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: 'app.component.html',
  imports: [
    HttpClientModule,
    RouterOutlet,
    PokemonModule,
    FormsModule,
    LoginComponent
  ]
})
export class AppComponent{}
