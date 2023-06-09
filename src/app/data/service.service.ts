import { Injectable } from '@angular/core';
import { Badge, Project } from 'src/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  badges: Badge[] = [{ name: "HTML5", color: "blue" }, { name: "CSS3", color: "blue" }, { name: "SCSS/Sass", color: "blue" }, { name: "Bootstrap", color: "blue" }, { name: "Tailwind", color: "blue" }
    , { name: "Javascript", color: "green" }, { name: "jQuery", color: "green" }, { name: "TypeScript", color: "green" }, { name: "Angular", color: "green" }, { name: "Vue", color: "green" }
    , { name: "Java", color: "red" }, { name: "Python", color: "red" }, { name: "Django", color: "red" }, { name: "C#", color: "red" }, { name: ".NET", color: "red" }, { name: "ASP.NET Core", color: "red" }, { name: "PHP", color: "red" }
    , { name: "MySQL", color: "yellow" }, { name: "Oracle", color: "yellow" }, { name: "SQLite", color: "yellow" }, { name: "PL/SQL", color: "yellow" }, { name: "MongoDB", color: "yellow" }
    , { name: "IONIC", color: "indigo" }, { name: "Git", color: "pink" }, { name: "Github", color: "pink" }, { name: "Behat", color: "pink" }
    , { name: "Wordpress", color: "purple" }, { name: "Drupal", color: "purple" }, { name: "Mockflow", color: "purple" }];

  projects: Project[] = [{
    id: "iceberg",
    title: "Iceberg",
    desc: "Social network part of my final project of the Web App Dev. cycle. An accessible UI + the basic features of any social network",
    github: "https://github.com/Menosuno02/iceberg",
    web: "https://iceberg-social.herokuapp.com/",
    img: "../assets/iceberg.png",
    icon: "../assets/icebergfavicon.ico",
    badges: [{ name: "Python", color: "red" }, { name: "Django", color: "red" }, { name: "Bootstrap", color: "blue" }, { name: "SQLite", color: "yellow" }],
  }, {
    id: "tvue",
    title: "TVue",
    desc: "Web application created with Vue to search, filter and display the data of TV series using The Movie DB API",
    github: "https://github.com/Menosuno02/tvue-app",
    web: "https://tvue-app.vercel.app/",
    img: "../assets/tvue.png",
    icon: "../assets/tvuefavicon.ico",
    badges: [{ name: "Vue", color: "green" }, { name: "Bootstrap", color: "blue" }],
  }];
}
