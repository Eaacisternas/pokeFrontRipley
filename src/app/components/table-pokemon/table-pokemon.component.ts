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

  ngOnInit(): void {
    // this.getPokemons();
  }
  // getPokemons() {
  //   let pokemonData;
  //   for (let i = 1; i <= 150; i++) {
  //     this.pokeService.getPokemons(i).subscribe(
  //       (res) => {
  //         let types: any[] = [];
  //         res.type;
  //         for (let tipo = 0; tipo < res.types.length; tipo++) {
  //           types.push(' ' + res.types[tipo].type.name + ' ');
  //         }
  //         pokemonData = {
  //           id: i,
  //           image: res.sprites.front_default,
  //           name: res.name,
  //           type: types,
  //           weight: res.weight + 'Kg',
  //         };
  //         this.data.push(pokemonData);
  //         this.datasource = new MatTableDataSource<any>(this.data);
  //         this.datasource.paginator = this.paginator;
  //         console.log(pokemonData);
  //       },
  //       (err) => {
  //         console.log(err);
  //       }
  //     );
  //   }
  // }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.datasource.filter = filterValue.trim().toLowerCase();

    if (this.datasource.paginator) {
      this.datasource.paginator.firstPage();
    }
  }

  toppings = new FormControl('');

  toppingList: string[] = [
    'Generación 1',
    'Generación 2',
    'Generación 3',
    'Generación 4',
    'Generación 5',
    'Generación 6',
    'Generación 7',
    'Generación 8',
  ];
}
