import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { CanvasClient } from "@/components/CanvasClient";

export default function Home() {
  return (
    <main
      className="relative w-screen h-screen"
      style={{ background: "var(--nova-page-bg)" }}
    >
      <h1
        className="fixed top-4 left-4 z-[9999] text-2xl font-bold tracking-widest"
        style={{
          fontFamily: "var(--nova-heading-font)",
          color: "var(--nova-text)",
          textShadow: "2px 2px 0 var(--nova-shadow)",
        }}
      >
        NOVA.EXE
      </h1>
      <ThemeSwitcher />
      <CanvasClient />
    </main>
  );
}
