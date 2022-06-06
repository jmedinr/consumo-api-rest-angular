import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

//rxjs
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  url: string = environment.apiHost;
  constructor(private http: HttpClient) {}

  /**
   * Manejo de errores cuando no se encuentra un pokemon
   * @param error
   * @returns
   */
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = 'Pokemon not found';
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: "Pokemon not found"`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  /**
   *
   * @param name  Obtiene la data de los pokemones desde la API
   * @returns
   */
  getPokemon(name: string) {
    return this.http
      .get(`${this.url}${name}`)
      .pipe(catchError(this.handleError));
  }
}
