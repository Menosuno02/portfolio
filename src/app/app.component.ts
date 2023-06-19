import { Component } from '@angular/core';
import { ServiceService } from './data/service.service';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public service: ServiceService, private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  selected = 'about';

  badgeClasses(color: string): string {
    return `text-xs font-medium px-2.5 py-0.5 rounded bg-${color}-900 text-${color}-300 border border-${color}-500`;
  }

  updateContent(option: string) {
    this.selected = option;
  }

  useLanguage(language: string): void {
    this.translate.use(language);
  }
}
