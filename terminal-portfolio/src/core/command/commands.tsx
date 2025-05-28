import { ReactNode } from "react";
import message from "@/app/data/message.json"; // assuming this is your JSON file path

export type CommandOutput = ReactNode;
const terminal = message.commands;
export const commandMap: Record<string, () => CommandOutput> = {
  help: () => (
    <>
      <div>Available commands:</div>
      <ul className="list-disc ml-4">
        <li>{terminal.about}</li>
        <li>{terminal.clear}</li>
        <li>{terminal.help}</li>
      </ul>
    </>
  ),
  about: () => {
    const aboutme = message.aboutme;
    return (
      <div className="space-y-1">
        <div>{aboutme.intro}</div>
        <div>{aboutme.message}</div>
        <div>{aboutme.connect}</div>
      </div>
    );
  },
  clear: () => <div className="text-green-400"></div>,
  default: () => (
    <div className="text-red-400">
      Command not found. Type 'help' for a list of commands.
    </div>
  ),
};
