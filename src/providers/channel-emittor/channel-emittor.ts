import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

/*
  Generated class for the ChannelEmittorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ChannelEmittorProvider {

  channel$ = new BehaviorSubject<any>('');
  frameWorkId$ = new BehaviorSubject<any>([]);
  constructor() {
  }

  getChannelId(value) {
    this.channel$.next(value);
  }

  getFrameWorkId(value) {
    this.frameWorkId$.next(value);
  }
}
