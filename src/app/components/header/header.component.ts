import {Component, Output} from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  collapsed = true;
  // @ts-ignore
  @Output() featureSelected = new EventEmitter<string>();
  constructor() {}

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
}
