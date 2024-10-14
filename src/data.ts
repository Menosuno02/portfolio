import type { Badge, Project } from "./interfaces";

export const badges: Badge[] = [
	{ name: "HTML5", color: "blue" },
	{ name: "CSS3", color: "blue" },
	{ name: "Bootstrap", color: "blue" },
	{ name: "Tailwind", color: "blue" },
	{ name: "Javascript", color: "red" },
	{ name: "jQuery", color: "red" },
	{ name: "TypeScript", color: "red" },
	{ name: "Angular", color: "red" },
	{ name: "Vue", color: "red" },
	{ name: "React", color: "red" },
	{ name: "IONIC", color: "red" },
	{ name: "Java", color: "indigo" },
	{ name: "PHP", color: "indigo" },
	{ name: "Python", color: "indigo" },
	{ name: "Django", color: "indigo" },
	{ name: "C#", color: "green" },
	{ name: ".NET", color: "green" },
	{ name: "ASP.NET Core", color: "green" },
	{ name: "MySQL", color: "yellow" },
	{ name: "Oracle", color: "yellow" },
	{ name: "SQL Server", color: "yellow" },
	{ name: "PL/SQL", color: "yellow" },
	{ name: "T-SQL", color: "yellow" },
	{ name: "MongoDB", color: "yellow" },
	{ name: "Azure", color: "orange" },
	{ name: "AWS", color: "orange" },
	{ name: "Power Apps", color: "purple" },
	{ name: "Power Automate", color: "purple" },
	{ name: "Git", color: "pink" },
	{ name: "Github", color: "pink" },
	{ name: "Behat", color: "pink" },
	{ name: "Wordpress", color: "pink" },
	{ name: "Drupal", color: "pink" },
];

export const projects: Project[] = [
	{
		id: "tabe",
		title: "Tabe",
		github: "https://github.com/Menosuno02/tabe",
		web: "https://tabedeliveryapp.azurewebsites.net/",
		badges: [
			{ id: "csharp", badge: { name: "C#", color: "#512BD4" } },
			{ id: "dotnet", badge: { name: "ASP.NET Core", color: "#512BD4" } },
			{ id: "sqlserver", badge: { name: "SQL Server", color: "#CC2927" } },
			{ id: "tailwind", badge: { name: "Tailwind", color: "#0EA5E9" } },
			{ id: "jquery", badge: { name: "jQuery", color: "#0769AD" } },
			{ id: "azure", badge: { name: "Azure", color: "#0078D4" } },
			{ id: "aws", badge: { name: "AWS", color: "#FF9900" } },
		],
	},
	{
		id: "techriders",
		title: "Tech Riders",
		github: "https://github.com/Menosuno02/proyecto-tech-riders",
		web: "https://techriders.azurewebsites.net/",
		badges: [
			{ id: "angular", badge: { name: "Angular", color: "#0F0F11" } },
			{ id: "typescript", badge: { name: "TypeScript", color: "#3178C6" } },
			{ id: "bootstrap", badge: { name: "Bootstrap", color: "#7952B3" } },
			{ id: "csharp", badge: { name: "C#", color: "#512BD4" } },
			{ id: "dotnet", badge: { name: "ASP.NET Core", color: "#512BD4" } },
			{ id: "sqlserver", badge: { name: "SQL Server", color: "#CC2927" } },
			{ id: "azure", badge: { name: "Azure", color: "#0078D4" } },
		],
	},
	{
		id: "iceberg",
		title: "Iceberg",
		github: "https://github.com/Menosuno02/iceberg",
		web: "https://iceberg-social.herokuapp.com/",
		badges: [
			{ id: "python", badge: { name: "Python", color: "#3776AB" } },
			{ id: "django", badge: { name: "Django", color: "#092E20" } },
			{ id: "bootstrap", badge: { name: "Bootstrap", color: "#7952B3" } },
			{ id: "sqlite", badge: { name: "SQLite", color: "#003B57" } },
			{ id: "heroku", badge: { name: "Heroku", color: "#430098" } },
		],
	},
	{
		id: "tvue",
		title: "TVue",
		github: "https://github.com/Menosuno02/tvue-app",
		web: "https://tvue-app.vercel.app/",
		badges: [
			{ id: "vue", badge: { name: "Vue", color: "#4FC08D" } },
			{ id: "bootstrap", badge: { name: "Bootstrap", color: "#7952B3" } },
		],
	},
];

export const certificaciones: string[] = [
	"awsdeveloper.png",
	"azuredeveloper.png",
	"powerplatformdeveloper.png",
];

export function badgeClasses(color: string): string {
	return ` bg-${color}-900 text-${color}-300 border-${color}-500`;
}

export function badgeCustomColorClasses(color: string): string {
	return ` bg-[${color}] bg-opacity-10 text-white border-0`;
}
