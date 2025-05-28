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
        <div className="mb-2 text-lg font-bold text-green-300">
          {terminal.welcome}
        </div>
        <div className="mb-4 text-green-400">{terminal.intro}</div>
        <ul className="list-disc ml-8 space-y-1 text-green-400">
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
    <div className="bg-black text-green-400 font-mono p-6 min-h-screen flex flex-col max-w-4xl mx-auto shadow-lg rounded-lg border border-green-700">
      <div
        className="flex-grow overflow-y-auto mb-6 space-y-3 p-4 bg-black bg-opacity-80 rounded-md
          scrollbar-thin scrollbar-thumb-green-700 scrollbar-track-green-900"
      >
        {history.map(({ input, output }, i) => (
          <div key={i} className="select-text">
            {input && (
              <div className="mb-1 flex items-center text-green-500">
                <span className="mr-2 font-bold">$</span> <span>{input}</span>
              </div>
            )}
            <div className="whitespace-pre-wrap">{output}</div>
            <hr className="border-green-700 my-2 opacity-50" />
          </div>
        ))}
      </div>

      <TerminalInput
        onSubmit={handleCommand}
        className="bg-black bg-opacity-70 border border-green-700 rounded-md text-green-400 placeholder-green-600
          focus:outline-none focus:ring-2 focus:ring-green-500 px-4 py-2 w-full"
      />
    </div>
  );
};

export default Terminal;
