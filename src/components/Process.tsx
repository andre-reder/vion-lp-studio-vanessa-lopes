import { motion } from "framer-motion";
import { Phone, MessageSquare, Sparkles, Smile } from "lucide-react";

const steps = [
  {
    icon: Phone,
    number: "01",
    title: "Primeiro contato",
    text: "Você nos chama pelo telefone ou pelas redes sociais. Conversemos sobre o que você procura, dúvidas e a melhor data para a sua visita.",
  },
  {
    icon: MessageSquare,
    number: "02",
    title: "Consulta & escuta",
    text: "No dia do atendimento, começamos com uma conversa. Entendemos seu estilo, suas referências e o que faz sentido para o seu dia a dia antes de qualquer procedimento.",
  },
  {
    icon: Sparkles,
    number: "03",
    title: "O cuidado",
    text: "Combinado o que será feito, é hora de relaxar. O procedimento acontece com calma, técnica e atenção a cada detalhe — sem pressa, com você no centro.",
  },
  {
    icon: Smile,
    number: "04",
    title: "Resultado & orientações",
    text: "Você se vê ao espelho, sai renovada e leva orientações de manutenção para que o resultado dure mais. E, claro, combinamos a sua próxima visita.",
  },
];

export default function Process() {
  return (
    <section
      id="processo"
      className="relative py-24 sm:py-32 lg:py-40 bg-[#FDF8F5] overflow-hidden"
    >
      {/* Decorative line */}
      <div className="absolute left-1/2 top-0 w-px h-24 bg-gradient-to-b from-transparent to-[#B76E79]/30" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <span className="h-px w-12 bg-[#B76E79]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#B76E79] font-medium">
              Como funciona
            </span>
            <span className="h-px w-12 bg-[#B76E79]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-[#2D1B23] text-3xl sm:text-4xl lg:text-5xl leading-[1.15] tracking-tight"
          >
            Da primeira mensagem ao
            <span className="italic text-[#B76E79]"> espelho</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 text-[#6B5560] text-base sm:text-lg leading-relaxed"
          >
            Um caminho simples e transparente, pensado para que você saiba
            exatamente o que esperar em cada etapa.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line - desktop */}
          <div className="hidden lg:block absolute top-[88px] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[#B76E79]/30 to-transparent" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10% 0px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6"
          >
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                  className="relative text-center group"
                >
                  {/* Icon circle */}
                  <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-white border-2 border-[#E8D9D2] text-[#B76E79] mb-6 group-hover:border-[#B76E79] group-hover:shadow-lg group-hover:shadow-[#B76E79]/15 transition-all duration-400 z-10">
                    <Icon className="w-7 h-7" />
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[#B76E79] text-white text-xs font-medium flex items-center justify-center">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="font-serif text-[#2D1B23] text-xl mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[#6B5560] text-sm leading-relaxed max-w-xs mx-auto">
                    {step.text}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-24 text-center"
        >
          <a
            href="#contato"
            className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-[#B76E79] text-white font-medium hover:bg-[#8C4A57] transition-all duration-300 hover:shadow-xl hover:shadow-[#B76E79]/25 cursor-pointer"
          >
            <Phone className="w-5 h-5" />
            Começar pelo primeiro contato
          </a>
        </motion.div>
      </div>
    </section>
  );
}
