import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.55, 0.75]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section
      ref={ref}
      id="topo"
      className="relative min-h-[calc(100svh-3rem)] flex items-center overflow-hidden bg-[#2D1B23] pt-20 sm:pt-24"
    >
      {/* Background image with parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={prefersReducedMotion ? {} : { y: imageY }}
      >
        <img
          src="https://images.pexels.com/photos/4288272/pexels-photo-4288272.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1800"
          alt="Mulher sentada diante de uma janela luminosa, em ambiente intimista e natural"
          className="w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-[#2D1B23] via-[#2D1B23]/60 to-[#2D1B23]/30"
          style={prefersReducedMotion ? { opacity: 0.65 } : { opacity: overlayOpacity }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2D1B23]/50 via-transparent to-transparent" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-20 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pb-16 sm:pb-20"
        style={prefersReducedMotion ? {} : { y: textY }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-3xl">
          <motion.h1
            variants={itemVariants}
            className="font-serif text-white text-[2rem] leading-[1.1] sm:text-4xl lg:text-5xl xl:text-6xl tracking-tight"
          >
            Beleza que nasce
            <br />
            <span className="italic text-[#D4877A]">do tempo que você</span>
            <br />
            dedica a si mesma.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-5 sm:mt-6 text-white/85 text-sm sm:text-base lg:text-lg max-w-xl leading-relaxed"
          >
            No Studio Vanessa Lopes, cada visita é uma pausa pensada para
            você se reconectar com sua essência. Cuidados autorais, ambiente
            acolhedor e resultados que valorizam quem você é.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <a
              href="#contato"
              className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-[#B76E79] text-white font-medium text-base hover:bg-[#D4877A] transition-all duration-300 hover:shadow-2xl hover:shadow-[#B76E79]/30 cursor-pointer"
            >
              Agendar minha experiência
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/50 text-white font-medium text-base hover:bg-white/20 hover:border-white/70 transition-all duration-300 cursor-pointer"
            >
              Conhecer serviços
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden sm:flex flex-col items-center gap-2"
      >
        <span className="text-white/60 text-[10px] uppercase tracking-[0.3em]">
          Role para descobrir
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-white/60 to-transparent"
        />
      </motion.div>

      {/* Photo credit */}
      <div className="absolute bottom-3 right-4 z-20 text-[10px] text-white/40">
        Foto: Bianca Salgado / Pexels
      </div>
    </section>
  );
}
