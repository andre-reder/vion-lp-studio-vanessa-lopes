import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Mariana Alves",
    context: "Cliente desde o início",
    rating: 5,
    text: "O atendimento é impecável. Saí com o corte que eu queria há anos e ninguém tinha conseguido fazer. A Vanessa escuta de verdade e entende o que você precisa.",
  },
  {
    name: "Patrícia Mendonça",
    context: "Primeira visita",
    rating: 5,
    text: "Me senti acolhida desde o primeiro contato pelo telefone. O ambiente é tranquilo, sem aquela agitação de salão. Foi a primeira vez que não me senti apressada.",
  },
  {
    name: "Juliana Castro",
    context: "Day de beleza",
    rating: 5,
    text: "Fiz o day de beleza para um evento e foi a melhor decisão. Cabelo, maquiagem e sobrancelha em harmonia. Recebi elogios a noite inteira e me senti linda.",
  },
  {
    name: "Camila Rocha",
    context: "Coloração & tratamento",
    rating: 4,
    text: "Resultado muito bom da coloração, fios ficaram saudáveis. A consulta inicial ajudou a escolher o tom certo. Só achei que poderia ter terminado um pouco antes.",
  },
  {
    name: "Fernanda Lima",
    context: "Noiva",
    rating: 5,
    text: "Fiz maquiagem e penteado para o meu casamento. A Vanessa teve uma paciência enorme, testou opções comigo antes do dia. No dia, tudo durou perfeitamente.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="avaliacoes"
      className="relative py-24 sm:py-32 lg:py-40 bg-[#2D1B23] overflow-hidden"
    >
      {/* Decorative quote mark */}
      <div className="absolute top-20 right-10 lg:right-20 text-[#D4877A]/8 pointer-events-none select-none">
        <Quote className="w-40 h-40 lg:w-64 lg:h-64" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-2xl mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="h-px w-12 bg-[#D4877A]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#D4877A] font-medium">
              Quem confiou
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-white text-3xl sm:text-4xl lg:text-5xl leading-[1.15] tracking-tight"
          >
            Histórias de quem passou
            <span className="italic text-[#D4877A]"> por aqui</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 text-white/60 text-sm sm:text-base leading-relaxed"
          >
            As avaliações abaixo são exemplos representativos do que clientes
            deste segmento costumam relatar. São fictícias e servem para
            ilustrar a experiência típica do estúdio.
          </motion.p>
        </div>

        {/* Testimonials grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {testimonials.map((t, i) => (
            <motion.article
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              whileHover={{ y: -5 }}
              className={`p-6 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#D4877A]/30 transition-colors duration-400 ${
                i === 0 ? "lg:row-span-1" : ""
              }`}
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    className={`w-4 h-4 ${
                      idx < t.rating
                        ? "fill-[#D4877A] text-[#D4877A]"
                        : "text-white/20"
                    }`}
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-white/85 text-sm sm:text-base leading-relaxed mb-6">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4877A] to-[#8C4A57] flex items-center justify-center text-white font-serif text-sm flex-shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-white text-sm font-medium">{t.name}</p>
                  <p className="text-white/50 text-xs">{t.context}</p>
                </div>
              </div>
            </motion.article>
          ))}

          {/* CTA card */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            className="p-6 rounded-2xl bg-gradient-to-br from-[#B76E79] to-[#8C4A57] flex flex-col justify-center items-center text-center gap-6"
          >
            <p className="font-serif text-white text-xl leading-snug">
              Que tal a sua história ser a próxima?
            </p>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-[#B76E79] text-sm font-medium hover:bg-white/90 transition-colors cursor-pointer"
            >
              Agendar minha visita
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
