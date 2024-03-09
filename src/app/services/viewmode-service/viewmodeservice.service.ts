import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewModeService {
  private viewModeSubject = new BehaviorSubject<boolean>(true); 
  viewMode$ = this.viewModeSubject.asObservable();

  toggleViewMode(viewMode: boolean) {
    this.viewModeSubject.next(viewMode);
  }
}