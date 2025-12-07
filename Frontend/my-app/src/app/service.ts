import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface BackendDTO {
  universalSet?: string[];
  bitRepresentation1?: number;
  bitRepresentation2?: number;
  str?: string;
  universeMap?: Map<string, number>;
  len_Of_Universal_Set?: number;
}

@Injectable({
  providedIn: 'root',
})
export class Service {
  private apiUrl = 'http://localhost:8080'; // Adjust if your port is different

  constructor(private http: HttpClient) {}

  // POST /append
  

  // POST /union
  union(bitRep1: number, bitRep2: number): Observable<number> {
    const payload: BackendDTO = {
      bitRepresentation1: bitRep1,
      bitRepresentation2: bitRep2,
    };
    return this.http.post<number>(`${this.apiUrl}/union`, payload);
  }

  // POST /intersection
  intersection(bitRep1: number, bitRep2: number): Observable<number> {
    const payload: BackendDTO = {
      bitRepresentation1: bitRep1,
      bitRepresentation2: bitRep2,
    };
    return this.http.post<number>(`${this.apiUrl}/intersection`, payload);
  }

  // POST /difference
  difference(bitRep1: number, bitRep2: number): Observable<number> {
    const payload: BackendDTO = {
      bitRepresentation1: bitRep1,
      bitRepresentation2: bitRep2,
    };
    return this.http.post<number>(`${this.apiUrl}/difference`, payload);
  }

  // POST /complement
  complement(bitRep: number, lenU: number): Observable<number> {
    const payload: BackendDTO = {
      bitRepresentation1: bitRep,
      len_Of_Universal_Set: lenU,
    };
    // Note: I'm sending bitRepresentation1 for the set to be complemented
    return this.http.post<number>(`${this.apiUrl}/complement`, payload);
  }

  // POST /getCardinality
  getCardinality(bitRep: number, lenU: number): Observable<number> {
    const payload: BackendDTO = {
      bitRepresentation1: bitRep,
      len_Of_Universal_Set: lenU,
    };
    return this.http.post<number>(`${this.apiUrl}/getCardinality`, payload);
  }

  // POST /getElements
  getElements(bitRep: number, universalSet: string[]): Observable<string[]> {
    const payload: BackendDTO = {
      bitRepresentation1: bitRep,
      universalSet: universalSet,
    };
    return this.http.post<string[]>(`${this.apiUrl}/getElements`, payload);
  }
}
