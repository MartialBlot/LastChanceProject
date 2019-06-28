import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameplayService {

  public heart1 = new BehaviorSubject<boolean>(false);
  public heart2 = false;
  public heart3 = false;

  constructor() { }
}
