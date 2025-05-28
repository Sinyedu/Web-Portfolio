import { ReactNode } from "react";
import message from "@/app/data/message.json";
import { ProjectData } from "@/core/types/project";
import { SkillsData } from "@/core/types/skills";
import { ContactData } from "@/core/types/contact";

export type CommandOutput = ReactNode;

const { commands: cmd, aboutme, terminal, projects, skills, contact } = message;

// Cast to types for safety and autocompletion
const projectData = projects as ProjectData;
const skillsData = skills as SkillsData;
const contactData = contact as ContactData;

export const commandMap: Record<string, () => CommandOutput> = {
  [cmd.help]: () => (
    <>
      <div>Available commands:</div>
      <ul className="list-disc ml-4">
        <li>{cmd.about}</li>
        <li>{cmd.help}</li>
        <li>{cmd.projects}</li>
        <li>{cmd.skills}</li>
        <li>{cmd.contact}</li>
        <li>{cmd.clear}</li>
      </ul>
    </>
  ),

  [cmd.about]: () => (
    <div className="space-y-1">
      <div>{aboutme.intro}</div>
      <div>{aboutme.message}</div>
      <div>{aboutme.connect}</div>
    </div>
  ),

  [cmd.projects]: () => (
    <div className="space-y-2">
      {projectData.list.map((project, i) => (
        <details key={i} className="bg-neutral-900 rounded-md p-2">
          <summary className="cursor-pointer text-green-300 font-semibold">
            {project.name}
          </summary>
          <div className="mt-2 text-sm text-green-200">
            <p>{project.description}</p>
            {project.link && project.link.length > 0 && (
              <p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-green-400"
                >
                  View project
                </a>
              </p>
            )}
            {project.tech && project.tech.length > 0 && (
              <p>
                <strong>Tech:</strong> {project.tech.join(", ")}
              </p>
            )}
          </div>
        </details>
      ))}
    </div>
  ),

  [cmd.skills]: () => (
    <div className="space-y-1">
      <div>Here are some of my skills:</div>
      <ul className="list-disc ml-4">
        {(skillsData.list ?? []).map((skill, i) => (
          <li key={i}>{skill}</li>
        ))}
      </ul>
    </div>
  ),

  [cmd.contact]: () => (
    <div className="space-y-1">
      <div>{contactData.message}</div>
      <div>
        Email:{" "}
        <a href={`mailto:${contactData.email}`} className="underline">
          {contactData.email}
        </a>
      </div>
      <div>
        GitHub:{" "}
        <a
          href={contactData.github}
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {contactData.github}
        </a>
      </div>
      <div>
        LinkedIn:{" "}
        <a
          href={contactData.linkedin}
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {contactData.linkedin}
        </a>
      </div>
    </div>
  ),

  [cmd.clear]: () => <></>,

  default: () => <div className="text-red-400">{terminal.notFound}</div>,
};
