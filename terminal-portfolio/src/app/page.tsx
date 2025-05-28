import Terminal from "@/app/components/terminal/Terminal";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-green-400 font-mono flex items-center justify-center">
      <div className="w-full max-w-2xl">
        <Terminal />
      </div>
    </main>
  );
}
