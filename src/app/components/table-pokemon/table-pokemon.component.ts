import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
  selector: 'app-table-pokemon',
  templateUrl: './table-pokemon.component.html',
  styleUrls: ['./table-pokemon.component.css'],
})
export class TablePokemonComponent implements OnInit {
  displayedColumns: string[] = ['id', 'image', 'name', 'type', 'weight'];
  data: any[] = [];
  datasource = new MatTableDataSource<any>(this.data);
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  pokemons = [];
  constructor(private pokeService: PokedexService) {}
  cargaTabla = false
  ngOnInit(): void {
  }

  getPokemons() {
    let pokemonData;

    this.pokeService.getPokemons().subscribe((res)=>{
      for (let pokemons = 0; pokemons < res.length; pokemons++){
        let types: any[] = [];
           for (let tipo = 0; tipo < res[pokemons].types.length; tipo++) {
             types.push(res[pokemons].types[tipo].type.name);
           }
           pokemonData = {
            id: res[pokemons].order,
            image: res[pokemons].sprites.front_default,
            name: res[pokemons].name,
            types: types,
            weight: res[pokemons].weight + 'Kg',
          };
          this.data.push(pokemonData);
          this.datasource = new MatTableDataSource<any>(this.data);
          this.datasource.paginator = this.paginator;
      }
    })
    this.cargaTabla = true
  }
  processPokemons(){
    this.pokeService.processPokemons().subscribe((res)=>{
      console.log(res)
    },
    (err)=>{
      console.log(err)
    })
  }
}
