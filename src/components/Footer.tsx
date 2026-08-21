import { Phone, Globe, MapPin, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#1A0F15] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <span className="flex items-center justify-center w-10 h-10 rounded-full border border-[#D4877A]/40 text-[#D4877A] text-sm font-serif tracking-wider">
                VL
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-serif text-white text-lg tracking-wide">
                  Studio Vanessa Lopes
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-white/40 mt-0.5">
                  Beauty Studio
                </span>
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-md">
              Um espaço onde a beleza é tratada com calma, escuta e intenção.
              Em São José dos Campos, cuidando de você com atenção individual
              e resultados que valorizam a sua essência.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white/90 text-sm font-medium uppercase tracking-[0.2em] mb-4">
              Navegação
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: "Filosofia", href: "#filosofia" },
                { label: "Serviços", href: "#servicos" },
                { label: "Experiência", href: "#experiencia" },
                { label: "Processo", href: "#processo" },
                { label: "Galeria", href: "#galeria" },
                { label: "Avaliações", href: "#avaliacoes" },
                { label: "Dúvidas", href: "#duvidas" },
                { label: "Contato", href: "#contato" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/50 text-sm hover:text-[#D4877A] transition-colors duration-200 cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white/90 text-sm font-medium uppercase tracking-[0.2em] mb-4">
              Contato
            </h3>
            <ul className="space-y-3.5">
              <li>
                <a
                  href="tel:+5512974120206"
                  className="flex items-start gap-2.5 text-white/50 text-sm hover:text-[#D4877A] transition-colors cursor-pointer"
                >
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>(12) 97412-0206</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/138512816875645"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-white/50 text-sm hover:text-[#D4877A] transition-colors cursor-pointer"
                >
                  <Globe className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Facebook</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-white/50 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>São José dos Campos, SP</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Studio Vanessa Lopes. Proposta
            conceitual não oficial. Conteúdo e dados podem ser fictícios.
          </p>
          <a
            href="#topo"
            className="group inline-flex items-center gap-2 text-white/50 text-xs hover:text-[#D4877A] transition-colors cursor-pointer"
          >
            Voltar ao topo
            <span className="flex items-center justify-center w-7 h-7 rounded-full border border-white/15 group-hover:border-[#D4877A]/40 transition-colors">
              <ArrowUp className="w-3.5 h-3.5" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
