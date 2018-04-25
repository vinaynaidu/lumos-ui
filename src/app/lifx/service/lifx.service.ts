import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class LifxService {

  constructor() { }

  getAllBulbs(): Observable<any> {
    // TODO: Get list of bulbs
    return Observable.of([]);
  }

  getBulbStatus(): Observable<boolean> {
    // TODO: get bulb status for all bulbs
    return Observable.of(true);
  }

  getBulbStatusByBulb(bulbId: number): Observable<any> {
    // TODO: Get bulb status for one bulb
    return Observable.of({});
  }

  setBulbColour(): void {
    // TODO: Set bulb colour
  }

  setBulbStatus(isBulbSwitchedOn: boolean): void {
    // TODO: Power on / off bulb
  }

}
