import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Menu, X } from "lucide-react";

interface NavItem {
  id: string;
  label: string;
}

export default function MobileNav({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const close = useCallback((restoreFocus = true) => {
    setOpen(false);
    if (restoreFocus) {
      requestAnimationFrame(() => triggerRef.current?.focus());
    }
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusTimer = window.setTimeout(() => closeRef.current?.focus(), 40);

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    const desktop = window.matchMedia("(min-width: 900px)");
    function onViewportChange() {
      if (desktop.matches) close(false);
    }

    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onViewportChange);

    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onViewportChange);
    };
  }, [open, close]);

  const transition = {
    duration: reduceMotion ? 0 : 0.35,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className="icon-button mobile-nav__trigger"
        aria-label="Buka menu"
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen(true)}
      >
        <Menu size={18} aria-hidden="true" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            ref={panelRef}
            className="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Menu navigasi"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={transition}
          >
            <div className="mobile-nav__top">
              <a className="wordmark" href="/" onClick={() => close(false)}>
                <span>EL HAKIM</span>
                <span className="wordmark__mark" aria-hidden="true" />
              </a>
              <button
                ref={closeRef}
                type="button"
                className="icon-button"
                aria-label="Tutup menu"
                onClick={() => close()}
              >
                <X size={18} aria-hidden="true" />
              </button>
            </div>

            <nav className="mobile-nav__body" aria-label="Navigasi utama">
              <ul>
                {items.map((item, index) => (
                  <motion.li
                    key={item.id}
                    initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      ...transition,
                      delay: reduceMotion ? 0 : 0.08 + index * 0.05,
                    }}
                  >
                    <a href={`/#${item.id}`} onClick={() => close(false)}>
                      <span className="label">0{index + 1}</span>
                      <span>{item.label}</span>
                      <span aria-hidden="true">↗</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <div className="mobile-nav__foot">
              <p className="label">Portfolio — Edisi 01 / 2026</p>
              <a href="/#contact" className="label" onClick={() => close(false)}>
                Mulai percakapan
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
