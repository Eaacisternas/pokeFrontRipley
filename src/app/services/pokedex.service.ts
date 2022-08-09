import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PokedexService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}
  getPokemons(index: Number|undefined){
    return this.http.get<any>(this.baseUrl + '/pokemon/'+index);
  }
}
