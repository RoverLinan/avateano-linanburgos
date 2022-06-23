import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  @Output() disparadorPage: EventEmitter<number> = new EventEmitter();
  constructor() { }
}
