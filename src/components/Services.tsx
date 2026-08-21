import { motion } from "framer-motion";
import {
    Eye,
    Flower2,
    Heart,
    Palette,
    Scissors,
    Sparkles,
    Sun,
    Zap,
} from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Cortes Autorais",
    text: "Cortes pensados a partir do seu formato facial, textura do cabelo e estilo de vida. Uma transformação que combina com você — não com a última moda.",
    tag: "Por agendamento",
  },
  {
    icon: Palette,
    title: "Coloração & Mechas",
    text: "Tonalidades personalizadas que valorizam a sua pele e o seu olhar. Do sutil ao ousado, sempre com produtos de qualidade e cuidado com a fibra capilar.",
    tag: "Consultoria inclusa",
  },
  {
    icon: Sparkles,
    title: "Tratamentos & Hidratação",
    text: "Protocolos de reconstrução, nutrição e hidratação profunda para devolver vida, brilho e movimento aos fios. Cada tratamento é montado após diagnóstico.",
    tag: "Sob medida",
  },
  {
    icon: Sun,
    title: "Penteado & Finalização",
    text: "Penteados para ocasiões especiais e finalizações do dia a dia que duram. Da elegância clássica ao natural despojado, sempre com acabamento impecável.",
    tag: "Eventos & dia a dia",
  },
  {
    icon: Flower2,
    title: "Sobrancelhas",
    text: "Design de sobrancelhas que harmoniza com o seu olhar e o formato do rosto. Henna, bucha ou pinça — o método é escolhido conforme a sua necessidade.",
    tag: "Design & cor",
  },
  {
    icon: Eye,
    title: "Maquiagem",
    text: "Maquiagem para eventos, noivas ou para a sua vontade de se sentir especial. Técnicas que valorizam sem disfarçar — a sua beleza, potencializada.",
    tag: "Social & noivas",
  },
  {
    icon: Heart,
    title: "Cuidados Faciais",
    text: "Limpeza de pele e tratamentos faciais que preparam, renovam e iluminam. Um ritual de autocuidado que vai além da estética — é bem-estar visível.",
    tag: "Ritual completo",
  },
  {
    icon: Zap,
    title: "Day de Beleza",
    text: "A experiência completa: cabelo, maquiagem e sobrancelhas em uma única visita. Ideal para eventos importantes ou para aquele dia em que você decide se presentear.",
    tag: "Experiência integral",
  },
];

export default function Services() {
  return (
    <section
      id="servicos"
      className="relative py-24 sm:py-32 lg:py-40 bg-[#2D1B23] overflow-hidden"
    >
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="h-px w-12 bg-[#D4877A]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#D4877A] font-medium">
              O que oferecemos
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-[1.15] tracking-tight"
          >
            Serviços pensados para cada
            <span className="italic text-[#D4877A]"> momento seu</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 text-white/70 text-base sm:text-lg leading-relaxed"
          >
            Do corte que muda tudo ao day de beleza completo, cada serviço é
            conduzido com técnica, conversa e cuidado. Veja o que podemos fazer
            por você — e como podemos adaptar à sua necessidade.
          </motion.p>
        </div>

        {/* Services grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="group relative p-6 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#D4877A]/40 hover:bg-white/[0.07] transition-colors duration-400 cursor-default overflow-hidden flex flex-col"
              >
                {/* Hover glow */}
                <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[#D4877A]/0 group-hover:bg-[#D4877A]/10 blur-2xl transition-all duration-500" />

                <div className="relative flex flex-col h-full">
                  <div className="w-12 h-12 rounded-xl bg-[#D4877A]/15 flex items-center justify-center text-[#D4877A] mb-5 group-hover:bg-[#D4877A] group-hover:text-white transition-colors duration-400">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-serif text-white text-xl mb-3 leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-white/60 text-sm leading-relaxed mb-6 flex-1">
                    {service.text}
                  </p>

                  <span className="inline-block self-start text-[11px] uppercase tracking-[0.15em] text-[#D4877A]/80 border border-[#D4877A]/20 rounded-full px-3 py-1">
                    {service.tag}
                  </span>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 text-center text-white/50 text-sm max-w-2xl w-full mx-auto px-4"
        >
          Não encontrou o que procurava? Entre em contato — adaptamos cada
          serviço à sua necessidade e podemos combinar pacotes personalizados.
        </motion.p>
      </div>
    </section>
  );
}
