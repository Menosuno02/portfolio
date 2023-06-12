import { Component } from '@angular/core';
import { ServiceService } from './data/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public service: ServiceService) { }

  selected = 'about';

  badgeClasses(color: string): string {
    return `text-xs font-medium px-2.5 py-0.5 rounded bg-${color}-900 text-${color}-300 border border-${color}-500`;
  }

  updateContent(option: string) {
    this.selected = option;
  }
}
