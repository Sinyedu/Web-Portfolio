"use client";

import { useState } from "react";
import TerminalInput from "./TerminalInput";
import type { CommandOutput } from "@/core/command/commands";
import { commandMap } from "@/core/command/commands";

type HistoryEntry = {
  input: string;
  output: CommandOutput;
};

const Terminal = () => {
  const [history, setHistory] = useState<HistoryEntry[]>([
    {
      input: "",
      output: (
        <>
          <div>Hello! Welcome to my professional/personal portfolio!</div>
          <div>Here are some commands you can use to navigate through:</div>
          <ul className="list-disc ml-6">
            <li>about</li>
            <li>clear</li>
          </ul>
        </>
      ),
    },
  ]);

  const handleCommand = (input: string) => {
    const command = input.toLowerCase();

    if (command === "clear") {
      // Clear terminal history except welcome message
      setHistory([
        {
          input: "",
          output: (
            <>
              <div>Hello! Welcome to my professional/personal portfolio!</div>
              <div>Here are some commands you can use to navigate through:</div>
              <ul className="list-disc ml-6">
                <li>help</li>
                <li>about</li>
                <li>clear</li>
              </ul>
            </>
          ),
        },
      ]);
      return;
    }

    const commandOutput = commandMap[command];
    setHistory((prev) => [
      ...prev,
      {
        input,
        output: commandOutput ? (
          commandOutput()
        ) : (
          <div>Command not found: {input}</div>
        ),
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
