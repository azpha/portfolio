import type { ReactNode } from "react";

export default function Section({
  children,
  id,
}: {
  children: ReactNode;
  id?: string;
}) {
  return (
    <section id={id}>
      <div className="bg-gradient-to-t from-zinc-900 via-zinc-800 to-zinc-800">
        {children}
      </div>
    </section>
  );
}
