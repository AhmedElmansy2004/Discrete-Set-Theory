import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Define an interface for the DTO payload to ensure type safety
export interface SetOperationDTO {
  universalSet?: string[];
  bitRepresentation1?: number;
  bitRepresentation2?: number;
  str?: string; // Used for the element to append
  universeMap?: { [key: string]: number };
  len_Of_Universal_Set?: number;
}

@Injectable({
  providedIn: 'root'
})
export class SetService {
  // Base URL for your Spring Boot API
  private apiUrl = 'http://localhost:8080'; // **Adjust the port if necessary**

  constructor(private http: HttpClient) { }

  initU(universalSet: string[]): Observable<string[]> {
    const dto: SetOperationDTO = { universalSet };
    return this.http.post<string[]>(`${this.apiUrl}/getUniversalSet`, dto);
  }

  append(
    str: string,
    bitRepresentation: number,
    universeMap: { [key: string]: number }
  ): Observable<number> {
    const dto: SetOperationDTO = { str, bitRepresentation1: bitRepresentation, universeMap };
    return this.http.post<number>(`${this.apiUrl}/append`, dto);
  }

  union(bitRepresentation1: number, bitRepresentation2: number): Observable<number> {
    const dto: SetOperationDTO = { bitRepresentation1, bitRepresentation2 };
    return this.http.post<number>(`${this.apiUrl}/union`, dto);
  }

  intersection(bitRepresentation1: number, bitRepresentation2: number): Observable<number> {
    const dto: SetOperationDTO = { bitRepresentation1, bitRepresentation2 };
    return this.http.post<number>(`${this.apiUrl}/intersection`, dto);
  }

  complement(bitRepresentation: number, len_Of_Universal_Set: number): Observable<number> {
    const dto: SetOperationDTO = { bitRepresentation1: bitRepresentation, len_Of_Universal_Set };
    return this.http.post<number>(`${this.apiUrl}/complement`, dto);
  }

  difference(bitRepresentation1: number, bitRepresentation2: number): Observable<number> {
    const dto: SetOperationDTO = { bitRepresentation1, bitRepresentation2 };
    return this.http.post<number>(`${this.apiUrl}/difference`, dto);
  }

  getCardinality(bitRepresentation: number, len_Of_Universal_Set: number): Observable<number> {
    const dto: SetOperationDTO = { bitRepresentation1: bitRepresentation, len_Of_Universal_Set };
    return this.http.post<number>(`${this.apiUrl}/getCardinality`, dto);
  }

  getElements(bitRepresentation: number, universalSet: string[]): Observable<string[]> {
    const dto: SetOperationDTO = { bitRepresentation1: bitRepresentation, universalSet };
    return this.http.post<string[]>(`${this.apiUrl}/getElements`, dto);
  }
}
