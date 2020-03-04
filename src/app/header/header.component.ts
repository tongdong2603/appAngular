import {Component, Output} from '@angular/core';
import {EventEmitter} from 'events';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  collapsed = true;
  // @ts-ignore
  @Output('featureSelected ') featureSelected = new EventEmitter<string>();
  constructor() {}

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
}
