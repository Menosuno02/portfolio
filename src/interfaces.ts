export interface Project {
	id: string;
	title: string;
	github: string;
	web: string;
	badges: CustomColorBadge[];
}

export interface Badge {
	name: string;
	color: string;
}

export interface CustomColorBadge {
	id: string;
	badge: Badge;
}
