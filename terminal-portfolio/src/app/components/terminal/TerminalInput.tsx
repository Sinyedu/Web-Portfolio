"use client";

import { useState } from "react";

type Props = {
  onSubmit: (input: string) => void;
  className?: string;
};

const TerminalInput = ({ onSubmit }: Props) => {
  const [input, setInput] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && input.trim() !== "") {
      e.preventDefault();
      onSubmit(input.trim());
      setInput("");
    }
  };

  return (
    <div
      className="flex items-center border border-green-700 rounded-md px-3 py-2
                 bg-black bg-opacity-80 text-green-400 font-mono text-lg
                 focus-within:ring-2 focus-within:ring-green-500"
    >
      <span className="mr-3 text-green-600 font-bold select-none">$</span>
      <input
        aria-label="Terminal input"
        type="text"
        className="bg-transparent outline-none flex-1
                   placeholder-green-600 caret-green-400"
        placeholder="Type a command..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        autoFocus
        spellCheck={false}
      />
    </div>
  );
};

export default TerminalInput;
