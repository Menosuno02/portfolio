import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  front: string[] = ["HTML5", "CSS3", "SCSS/Sass", "Bootstrap", "Tailwind"];
  front2: string[] = ["JavaScript", "jQuery", "TypeScript", "Angular", "Vue"];
  back: string[] = ["Java", "Python", "Django", "C#", ".NET", "ASP.NET Core", "PHP"];
  db: string[] = ["MySQL", "Oracle", "SQLite", "PL/SQL", "MongoDB"];
  mobiles: string[] = ["IONIC"];
  other: string[] = ["Git", "GitHub", "Docker", "Behat"];
  design: string[] = ["Wordpress", "Drupal", "Mockflow"];
}
