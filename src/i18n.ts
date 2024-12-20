import { derived, writable } from "svelte/store";

type Translations = {
  [locale: string]: {
    [key: string]: string;
  };
};

type Vars = {
  [key: string]: string;
};

const localTranslations: Translations = {
  en: {
    "about.certs": "Certifications",
    "about.skills": "Skills / Competences",
    "about.p1": "Hi! I'm Alejo",
    "about.p2":
      "I am a full stack developer from Madrid, more specialized in web applications",
    "about.p3":
      "I started programming in secondary school playing around with Scratch and JavaScript, and years later here we are",
    "about.p4":
      "I love experimenting with new front-end technologies, although I like to work more on the back-end",
    "about.p5": "This portfolio is made to test the JavaScript framework ",
    "data.birthday": "Birthday",
    "data.company": "Company",
    "data.dev": "Full Stack Web Developer",
    "data.location": "Location",
    "data.value.birthday": "December 26 2002",
    "data.value.location": "Madrid, Spain",
    "ee.education.1.date": "2021 - 2023",
    "ee.education.1.desc": "Higher Grade Training Cycle",
    "ee.education.1.desc2": "Average mark: 10 (honours + 8 honorable mentions)",
    "ee.education.1.title": "Web Applications Development Technician",
    "ee.education.2.date": "2023 - 2024",
    "ee.education.2.desc":
      "Scolarship. Participated in the Tech Riders initiative as a Young Rider. Winning group project to be implemented on the Tech Riders site",
    "ee.education.2.desc2": "Average mark: 9.97",
    "ee.education.2.title":
      "Master's degree in Full Stack Web Development + MultiCloud",
    "ee.experience.1.date": "March 2023 - June 2023",
    "ee.experience.1.desc":
      "Training in Drupal, PHP, JavaScript, HTML, SCSS, Docker, Behat or Matomo, projects such as an internal intranet and small tasks for the Ministry of Consumption. Application of agile methodologies and tools such as Notion and Trello. Dailies with the work group and weekly meetings with clients",
    "ee.experience.1.title": "Full Stack Developer",
    "ee.experience.2.date": "August 2024 - November 2024",
    "ee.experience.2.desc":
      "Application for programming challenges. Developed in ASP.NET Core, React, Azure, SQL Server and Docker; and built with Clean Architecture and CQRS pattern. Training and use of technologies and techniques such as .NET Aspire, Redux, Azure Container Apps, MSAL, Microsoft Graph, AutoMapper, MediatR or Unit Testing (MSTest, xUnit). Daily meetings and use of Azure DevOps",
    "ee.experience.2.title": "Cloud Solutions Developer",
    "ee.title1": "Experience",
    "ee.title2": "Education",
    "navbar.about": "About",
    "navbar.ee": "Education & experience",
    "navbar.projects": "Projects",
    "projects.iceberg.desc":
      "Social network part of my final project of the Web App Dev. cycle. An accessible UI + the basic features of any social network",
    "projects.title": "Projects",
    "projects.tabe.desc":
      "App that emulates how a food delivery web works. Migrated to both Azure and AWS (the latter as a group project)",
    "projects.techriders.desc":
      "Winning group frontend project to be implemented, developed together with my colleagues Ana and Samuel. Allows teachers to request talks to be given by TechRiders. Backend developed by the whole class",
    "projects.tvue.desc":
      "Web application created with Vue to search, filter and display the data of TV series using The Movie DB API",
  },
  es: {
    "about.certs": "Certificaciones",
    "about.skills": "Habilidades / Competencias",
    "about.p1": "¡Buenas! Soy Alejo",
    "about.p2":
      "Soy un desarrollador full stack de Madrid, más especializado en aplicaciones web",
    "about.p3":
      "Empecé a programar en la ESO trasteando con Scratch y JavaScript, y años después aquí estamos",
    "about.p4":
      "Me encanta experimentar con nuevas tecnologías de front-end, aunque me gusta más trabajar en back-end",
    "about.p5":
      "Este portfolio está hecho para probar el framework de JavaScript ",
    "data.birthday": "Cumpleaños",
    "data.company": "Compañía",
    "data.dev": "Desarrollador Web Full Stack",
    "data.location": "Ubicación",
    "data.value.birthday": "26 Diciembre 2002",
    "data.value.location": "Madrid, España",
    "ee.education.1.date": "2021 - 2023",
    "ee.education.1.desc": "Ciclo FP de Grado Superior",
    "ee.education.1.desc2":
      "Nota media: 10 (matrícula de honor + 8 menciones honoríficas)",
    "ee.education.1.title":
      "Técnico Superior en Desarrollo de Aplicaciones Web",
    "ee.education.2.date": "2023 - 2024",
    "ee.education.2.desc":
      "Máster becado. Participé en Tech Riders como Young Rider. Proyecto grupal ganador para implementarse en la página de Tech Riders",
    "ee.education.2.desc2": "Nota media: 9.97",
    "ee.education.2.title": "Máster en Desarrollo Web Full Stack + MultiCloud",
    "ee.experience.1.date": "Marzo 2023 - Junio 2023",
    "ee.experience.1.desc":
      "Formación en Drupal, PHP, JavaScript, HTML, SCSS, Docker, Behat o Matomo, proyectos como una intranet interna y pequeñas tareas para el Ministerio de Consumo. Aplicación de metodologías ágiles y de herramientas como Notion y Trello. Dailies con el grupo de trabajo y reuniones semanales con los clientes",
    "ee.experience.1.title": "Desarrollador Full Stack",
    "ee.experience.2.date": "Agosto 2024 - Noviembre 2024",
    "ee.experience.2.desc":
      "Aplicación para retos de programación. Desarrollada en ASP.NET Core, React, Azure, SQL Server y Docker; y construida con la arquitectura Clean Architecture y el patrón CQRS. Formación y uso de tecnologías y técnicas como .NET Aspire, Redux, Azure Container Apps, MSAL, Microsoft Graph, AutoMapper, MediatR o Unit Testing (MSTest, xUnit). Reuniones diarias y empleo de Azure DevOps",
    "ee.experience.2.title": "Cloud Solutions Developer",
    "ee.title1": "Experiencia laboral",
    "ee.title2": "Educación",
    "navbar.about": "Sobre mí",
    "navbar.ee": "Educación y experiencia",
    "navbar.projects": "Proyectos",
    "projects.iceberg.desc":
      "Red social parte de mi proyecto final del ciclo FP de DAW. Una interfaz de usuario accesible + las características básicas de cualquier red social",
    "projects.title": "Proyectos",
    "projects.tabe.desc":
      "App que emula el funcionamiento de una página para pedir comida a domicilio. Migrado tanto a Azure como a AWS (este último como un proyecto grupal)",
    "projects.techriders.desc":
      "Proyecto frontend grupal ganador para ser implementado, desarrollado junto a mis compañeros Ana y Samuel. Permite a profesores solicitar charlas para ser impartidas por los TechRiders. Backend desarrollado por toda la clase",
    "projects.tvue.desc":
      "Aplicación web creada con Vue para buscar, filtrar y mostrar los datos de series de TV usando The Movie DB API",
  },
};

export const locale = writable<string>("es");

const translationCache: { [key: string]: string } = {};

function translate(locale: string, key: string, vars: Vars): string {
  const cacheKey = `${locale}-${key}-${JSON.stringify(vars)}`;
  if (translationCache[cacheKey]) return translationCache[cacheKey];

  let text = localTranslations[locale]?.[key] || key;
  for (const k of Object.keys(vars)) {
    const regex = new RegExp(`{{${k}}}`, "g");
    text = text.replace(regex, vars[k]);
  }

  translationCache[cacheKey] = text;
  return text;
}

export const t = derived(
  locale,
  ($locale: string) =>
    (key: string, vars: Vars = {}): string =>
      translate($locale, key, vars)
);
