import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Leaf, Heart, Eye } from "lucide-react";

const values = [
  {
    icon: Eye,
    title: "Olhar individual",
    text: "Cada pessoa chega com uma história, um formato, um desejo. Nada aqui é padronizado — o atendimento começa pela escuta e pelo olhar atento ao que você precisa.",
  },
  {
    icon: Heart,
    title: "Cuidado genuíno",
    text: "Beleza é também acolhimento. O ambiente foi pensado para que você desacelere, respire e saia reconectada — não apenas com sua imagem, mas consigo mesma.",
  },
  {
    icon: Leaf,
    title: "Respeito ao seu tempo",
    text: "Não há pressa nem rotina de linha de montagem. Cada procedimento respeita o seu ritmo, a sua pele e o momento que você está vivendo.",
  },
];

export default function Manifesto() {
  const ref = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const decorY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const decorRotate = useTransform(scrollYProgress, [0, 1], [0, 15]);

  return (
    <section
      ref={ref}
      id="filosofia"
      className="relative py-24 sm:py-32 lg:py-40 bg-[#FAF4F0] overflow-hidden"
    >
      {/* Decorative element */}
      <motion.div
        className="absolute -right-20 top-20 w-72 h-72 rounded-full bg-gradient-to-br from-[#F4D4C8]/40 to-transparent blur-3xl pointer-events-none"
        style={prefersReducedMotion ? {} : { y: decorY, rotate: decorRotate }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="h-px w-12 bg-[#B76E79]" />
          <span className="text-xs uppercase tracking-[0.3em] text-[#B76E79] font-medium">
            Nossa filosofia
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Main statement */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <h2 className="font-serif text-[#2D1B23] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-[1.15] tracking-tight">
              Acreditamos que beleza não é
              <span className="text-[#B76E79]"> um padrão a ser seguido</span>,
              mas uma essência a ser revelada.
            </h2>

            <div className="mt-8 space-y-5 text-[#4A3340] text-base sm:text-lg leading-relaxed max-w-2xl">
              <p>
                Em um mundo que acelera e padroniza, o Studio Vanessa Lopes
                propõe o contrário: um espaço onde o cuidado com a beleza
                acontece com calma, atenção e respeito à individualidade de
                cada pessoa.
              </p>
              <p>
                Aqui, o resultado não é uma cópia da última tendência — é a
                versão mais confiante e luminosa de você mesma, construída com
                técnica, sensibilidade e conversa. Cada procedimento é um
                diálogo entre o que você deseja e o que melhor combina com
                você.
              </p>
              <p>
                É beleza com intenção. É cuidado que se sente — e que fica.
              </p>
            </div>
          </motion.div>

          {/* Values */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10% 0px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
            className="lg:col-span-5 space-y-6 lg:pt-4"
          >
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  variants={{
                    hidden: { opacity: 0, x: 40 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                  className="group p-6 rounded-2xl bg-white border border-[#E8D9D2] hover:border-[#B76E79]/40 hover:shadow-xl hover:shadow-[#B76E79]/8 transition-all duration-400"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#F4D4C8]/50 flex items-center justify-center text-[#B76E79] group-hover:bg-[#B76E79] group-hover:text-white transition-colors duration-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-serif text-[#2D1B23] text-xl mb-2">
                        {value.title}
                      </h3>
                      <p className="text-[#6B5560] text-sm leading-relaxed">
                        {value.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
