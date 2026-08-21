import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Calendar, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Filosofia", href: "#filosofia" },
  { label: "Serviços", href: "#servicos" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Processo", href: "#processo" },
  { label: "Galeria", href: "#galeria" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Dúvidas", href: "#duvidas" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  useEffect(() => {
    console.log('OI NAVBAR DE NOVO, teste pra ver como ta saindo o commit')
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed left-0 right-0 z-50"
        style={{ top: "var(--banner-h, 0px)", transition: "top 0.4s ease" }}
      >
        <div
          className={`transition-all duration-500 ${
            scrolled
              ? "bg-[#FAF4F0]/90 backdrop-blur-xl border-b border-[#E8D9D2]/60 shadow-[0_4px_30px_rgba(45,27,35,0.06)]"
              : "bg-[#2D1B23]/30 backdrop-blur-sm"
          }`}
        >
          <nav className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="flex items-center justify-between h-[72px] sm:h-[84px]">
              {/* Logo */}
              <a
                href="#topo"
                className="group flex items-center gap-2.5 cursor-pointer"
                aria-label="Studio Vanessa Lopes - Início"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-full border border-[#B76E79]/50 text-[#D4877A] text-sm font-serif tracking-wider transition-all duration-300 group-hover:border-[#D4877A] group-hover:bg-[#B76E79]/15">
                  VL
                </span>
                <span className="hidden sm:flex flex-col leading-none">
                  <span
                    className={`font-serif text-lg tracking-wide transition-colors duration-300 ${
                      scrolled ? "text-[#2D1B23]" : "text-white"
                    }`}
                  >
                    Vanessa Lopes
                  </span>
                  <span
                    className={`text-[10px] uppercase tracking-[0.25em] mt-0.5 transition-colors duration-300 ${
                      scrolled ? "text-[#6B5560]" : "text-white/75"
                    }`}
                  >
                    Beauty Studio
                  </span>
                </span>
              </a>

              {/* Desktop nav */}
              <ul className="hidden lg:flex items-center gap-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={`relative px-3 py-2 text-sm transition-colors duration-300 cursor-pointer group hover:text-[#B76E79] ${
                        scrolled ? "text-[#2D1B23]/80" : "text-white/95"
                      }`}
                    >
                      {link.label}
                      <span className="absolute bottom-1 left-3 right-3 h-px bg-[#B76E79] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                    </a>
                  </li>
                ))}
              </ul>

              {/* CTA + mobile toggle */}
              <div className="flex items-center gap-3">
                <a
                  href="tel:+5512974120206"
                  className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#B76E79] text-white text-sm font-medium hover:bg-[#8C4A57] transition-all duration-300 hover:shadow-lg hover:shadow-[#B76E79]/25 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  Agendar
                </a>
                <button
                  onClick={() => setMenuOpen(true)}
                  className={`lg:hidden flex items-center justify-center w-10 h-10 cursor-pointer transition-colors duration-300 ${
                    scrolled ? "text-[#2D1B23]" : "text-white"
                  }`}
                  aria-label="Abrir menu"
                  aria-expanded={menuOpen}
                >
                  <Menu className="w-6 h-6" />
                </button>
              </div>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[70] lg:hidden"
          >
            <div
              className="absolute inset-0 bg-[#2D1B23]/40 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 34 }}
              className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-[#FAF4F0] flex flex-col"
            >
              <div className="flex items-center justify-between px-6 h-[72px] border-b border-[#E8D9D2]">
                <span className="font-serif text-[#2D1B23] text-lg">
                  Menu
                </span>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center w-10 h-10 text-[#2D1B23] cursor-pointer"
                  aria-label="Fechar menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <ul className="flex-1 overflow-y-auto px-6 py-6 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.06 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="block py-3.5 text-lg text-[#2D1B23] hover:text-[#B76E79] transition-colors duration-200 border-b border-[#E8D9D2]/50 cursor-pointer"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <div className="px-6 py-6 border-t border-[#E8D9D2] space-y-3">
                <a
                  href="tel:+5512974120206"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-[#B76E79] text-white font-medium cursor-pointer hover:bg-[#8C4A57] transition-colors"
                >
                  <Calendar className="w-5 h-5" />
                  Agendar horário
                </a>
                <a
                  href="tel:+5512974120206"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full border border-[#E8D9D2] text-[#2D1B23] font-medium cursor-pointer hover:border-[#B76E79] transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  (12) 97412-0206
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
