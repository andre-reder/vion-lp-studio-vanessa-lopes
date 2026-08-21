import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Coffee, Music, Sun, Wind } from "lucide-react";
import { useRef } from "react";

const atmosphere = [
  {
    icon: Sun,
    title: "Luz natural",
    text: "Ambiente banhado por luz natural que valoriza cada detalhe e permite ver o resultado com fidelidade.",
  },
  {
    icon: Coffee,
    title: "Recepção acolhedora",
    text: "Café, água e aquecedor à disposição. Você chega e já sente que pode desacelerar.",
  },
  {
    icon: Music,
    title: "Trilha sonora suave",
    text: "Uma curadoria de sons que acompanha o ritmo do cuidado, sem distrações.",
  },
  {
    icon: Wind,
    title: "Espaço respirável",
    text: "Ambiente arejado, limpo e pensado para o seu conforto em cada etapa da visita.",
  },
];

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section
      ref={ref}
      id="experiencia"
      className="relative py-24 sm:py-32 lg:py-40 bg-[#FAF4F0] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-[#2D1B23]/15">
              <motion.img
                src="https://images.pexels.com/photos/4288272/pexels-photo-4288272.jpeg?auto=compress&cs=tinysrgb&h=900&w=720"
                alt="Ambiente intimista com luz natural — mulher à janela"
                className="w-full h-full object-cover"
                loading="lazy"
                style={prefersReducedMotion ? {} : { y: imageY, scale: 1.15 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D1B23]/30 to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-6 -right-4 sm:-right-8 bg-white rounded-2xl shadow-xl p-5 max-w-[220px] border border-[#E8D9D2] break-words"
            >
              <p className="font-serif text-[#2D1B23] text-3xl leading-none">
                Atendimento
              </p>
              <p className="text-[#B76E79] text-sm mt-1 font-medium">
                exclusivamente por hora marcada
              </p>
              <p className="text-[#6B5560] text-xs mt-2 leading-relaxed">
                Sem fila, sem pressa. Só você e o cuidado.
              </p>
            </motion.div>
          </motion.div>

          {/* Text side */}
          <motion.div
            style={prefersReducedMotion ? {} : { y: textY }}
            className="order-1 lg:order-2"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="h-px w-12 bg-[#B76E79]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[#B76E79] font-medium">
                A experiência
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-[#2D1B23] text-3xl sm:text-4xl lg:text-5xl leading-[1.15] tracking-tight"
            >
              Um espaço feito para
              <span className="italic text-[#B76E79]"> você desacelerar</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-6 space-y-4 text-[#4A3340] text-base sm:text-lg leading-relaxed"
            >
              <p>
                Mais do que um estúdio de beleza, este é um refúgio. Um lugar
                onde o tempo parece desacelerar e onde cada detalhe — da luz
                que entra pela janela ao aroma do ambiente — foi pensado para
                que você se sinta acolhida desde o primeiro passo.
              </p>
              <p>
                Aqui não há rotina de linha de montagem. O atendimento é
                individual, por hora marcada, para que cada visita tenha o
                tempo e a atenção que você merece.
              </p>
            </motion.div>

            {/* Atmosphere items */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10% 0px" }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1 } },
              }}
              className="mt-10 grid sm:grid-cols-2 gap-5"
            >
              {atmosphere.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.5 },
                      },
                    }}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#F4D4C8]/50 flex items-center justify-center text-[#B76E79]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-medium text-[#2D1B23] text-sm mb-1">
                        {item.title}
                      </h3>
                      <p className="text-[#6B5560] text-xs leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
