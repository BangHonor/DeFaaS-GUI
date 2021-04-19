import { Injectable } from '@angular/core';


export interface Account {
  address: string;
  password: string;
  balanceOf: string;
}

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }
}
