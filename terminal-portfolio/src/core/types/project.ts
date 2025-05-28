export interface Project {
  name: string;
  description: string;
  link?: string;
  tech?: string[];
}

export interface ProjectData {
  list: Project[];
}
