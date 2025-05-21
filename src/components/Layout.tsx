import { type ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900 relative">
      <div className="py-2 flex justify-center select-none">
        <Header />
      </div>

      <div className="flex justify-center flex-wrap flex-col text-white select-none">
        {children}
      </div>

      <div className="py-8">
        <div className="absolute bottom-0 w-full mb-2">
          <Footer />
        </div>
      </div>
    </main>
  );
}
