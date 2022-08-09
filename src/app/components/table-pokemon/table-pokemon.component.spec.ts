import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePokemonComponent } from './table-pokemon.component';

describe('TablePokemonComponent', () => {
  let component: TablePokemonComponent;
  let fixture: ComponentFixture<TablePokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablePokemonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablePokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
