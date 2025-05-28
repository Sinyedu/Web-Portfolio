"use client";

import { useState } from "react";

type Props = {
  onSubmit: (input: string) => void;
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
    <div className="flex">
      <span className="mr-2">$</span>
      <input
        aria-label="Terminal input"
        type="text"
        className="bg-transparent outline-none text-green-400 flex-1"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        autoFocus
      />
    </div>
  );
};

export default TerminalInput;
