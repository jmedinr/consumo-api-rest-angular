import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  angForm: FormGroup;

  constructor(private pokemonService: PokemonService, fb: FormBuilder) {
    this.pokemonName = "";
    this.urlImage = "";
    this.pokemonAbility = "";
    this.angForm = fb.group({
      name: ['', Validators.required ]
    });
   }

  pokemonName: string;
  urlImage: string;
  pokemonAbility: string;

  ngOnInit(): void {
  }

  searchPokemon() {
    this.pokemonService.getPokemon(this.pokemonName).subscribe((data:any) => {
      this.urlImage = data.sprites.front_default;
      this.pokemonAbility = data.abilities.map((ability: { ability: { name: any; }; }) => ability.ability.name).join(", ");
    });
    this.pokemonName = "";
  };

}
