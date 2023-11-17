import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosCompartilhadosEditarRestauranteService {

  private readonly STORAGE_KEY = 'restauranteId';

  private idRestaurante: number | null = null;

  constructor() {
    this.idRestaurante = this.getIdFromStorage();
  }

  setId(id: number): void {
    this.idRestaurante = id;
    sessionStorage.setItem(this.STORAGE_KEY, id.toString());
  }

  getId(): number | null {
    return this.idRestaurante;
  }

  private getIdFromStorage(): number | null {
    const idString = sessionStorage.getItem(this.STORAGE_KEY);
    return idString ? parseInt(idString, 10) : null;
  }
}
