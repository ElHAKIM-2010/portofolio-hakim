import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);

  useEffect(() => {
    setTheme(
      document.documentElement.dataset.theme === "dark" ? "dark" : "light",
    );
  }, []);

  function toggle() {
    const current =
      document.documentElement.dataset.theme === "dark" ? "dark" : "light";
    const next = current === "dark" ? "light" : "dark";

    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Tema tetap berubah untuk sesi ini meski penyimpanan diblokir.
    }
    setTheme(next);
  }

  const label =
    theme === null
      ? "Ganti tema"
      : theme === "dark"
        ? "Aktifkan tema terang"
        : "Aktifkan tema gelap";

  return (
    <button
      type="button"
      className="icon-button theme-toggle"
      onClick={toggle}
      aria-label={label}
      title={label}
    >
      <Sun className="theme-toggle__icon theme-toggle__icon--sun" size={17} aria-hidden="true" />
      <Moon className="theme-toggle__icon theme-toggle__icon--moon" size={17} aria-hidden="true" />
    </button>
  );
}
