import { Injectable } from '@angular/core';



export interface Funccode {//Faaslevel API
  name: string,
  language: string,
}


@Injectable({
  providedIn: 'root'
})
export class FunccodeService {

  constructor() { }
}
