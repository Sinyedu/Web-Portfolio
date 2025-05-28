import { ProjectData } from "./project";
import { SkillsData } from "./skills";
import { ContactData } from "./contact";

export type MessageData = {
  commands: Record<string, string>;
  aboutme: {
    intro: string;
    message: string;
    connect: string;
  };
  terminal: {
    welcome: string;
    intro: string;
    notFound: string;
  };
  projects: ProjectData;
  skills: SkillsData;
  contact: ContactData;
};
