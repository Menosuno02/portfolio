import { Component } from '@angular/core';
import { Project } from 'src/interfaces';

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

  projects: Project[] = [{
    title: "Iceberg",
    desc: "Social network part of my final project of the Web App Dev. cycle. An accessible UI + the basic features of any social network",
    github: "https://github.com/Menosuno02/iceberg",
    web: "https://iceberg-social.herokuapp.com/",
    img: "../assets/iceberg.png"
  }, {
    title: "TVue",
    desc: "Web application created with Vue to search, filter and display the data of TV series using The Movie DB API",
    github: "https://github.com/Menosuno02/tvue-app",
    web: "https://tvue-app.vercel.app/",
    img: "../assets/tvue.png"
  }];
}
