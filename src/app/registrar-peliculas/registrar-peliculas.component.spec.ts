import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarPeliculasComponent } from './registrar-peliculas.component';

describe('RegistrarPeliculasComponent', () => {
  let component: RegistrarPeliculasComponent;
  let fixture: ComponentFixture<RegistrarPeliculasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarPeliculasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarPeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
