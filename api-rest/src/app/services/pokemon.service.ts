import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  url: string = environment.apiHost;
  constructor(private http : HttpClient) { }

  getPokemon(name: string) {
    return this.http.get(`${this.url}${name}`);
  }
}
