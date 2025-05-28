"use client";

import { useState } from "react";
import TerminalInput from "./TerminalInput";
import { commandMap } from "@/core/command/commands";
import message from "@/app/data/message.json";
import { ReactNode } from "react";

type HistoryEntry = {
  input: string;
  output: ReactNode;
};

const Terminal = () => {
  const { terminal, commands } = message;

  const initialMessage: HistoryEntry = {
    input: "",
    output: (
      <>
        <div>{terminal.welcome}</div>
        <div>{terminal.intro}</div>
        <ul className="list-disc ml-6">
          <li>{commands.help}</li>
          <li>{commands.about}</li>
          <li>{commands.projects}</li>
          <li>{commands.skills}</li>
          <li>{commands.contact}</li>
          <li>{commands.clear}</li>
        </ul>
      </>
    ),
  };

  const [history, setHistory] = useState<HistoryEntry[]>([initialMessage]);

  const handleCommand = (input: string) => {
    const command = input.toLowerCase();

    if (command === commands.clear) {
      setHistory([initialMessage]);
      return;
    }

    const commandOutput = commandMap[command] || commandMap.default;
    setHistory((prev) => [
      ...prev,
      {
        input,
        output: commandOutput(),
      },
    ]);
  };

  return (
    <div className="bg-black text-green-400 font-mono p-6 min-h-screen flex flex-col">
      <div className="flex-grow overflow-y-auto mb-4 space-y-1">
        {history.map(({ input, output }, i) => (
          <div key={i}>
            {input && (
              <div>
                <span className="text-green-600">$</span> {input}
              </div>
            )}
            <div>{output}</div>
          </div>
        ))}
      </div>

      <TerminalInput onSubmit={handleCommand} />
    </div>
  );
};

export default Terminal;
