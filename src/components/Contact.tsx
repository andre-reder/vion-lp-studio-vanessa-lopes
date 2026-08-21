import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Calendar, Clock, Globe, MapPin, MessageCircle, Phone } from "lucide-react";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section
      ref={ref}
      id="contato"
      className="relative pt-24 sm:pt-32 lg:pt-40 pb-32 sm:pb-40 lg:pb-52 bg-[#2D1B23] overflow-hidden"
    >
      {/* Background image with overlay */}
      <motion.div
        className="absolute inset-0 z-0"
        style={prefersReducedMotion ? {} : { y: bgY }}
      >
        <img
          src="https://images.pexels.com/photos/4288272/pexels-photo-4288272.jpeg?auto=compress&cs=tinysrgb&h=1000&w=1600"
          alt=""
          className="w-full h-full object-cover opacity-20"
          loading="lazy"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2D1B23] via-[#2D1B23]/90 to-[#2D1B23]" />
      </motion.div>

      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#B76E79]/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <span className="h-px w-12 bg-[#D4877A]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#D4877A] font-medium">
              Vamos conversar
            </span>
            <span className="h-px w-12 bg-[#D4877A]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] tracking-tight"
          >
            Sua próxima visita
            <br />
            <span className="italic text-[#D4877A]">começa aqui</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 text-white/70 text-base sm:text-lg max-w-xl mx-auto leading-relaxed"
          >
            Entre em contato para agendar, tirar dúvidas ou simplesmente
            conhecer melhor o estúdio. Será um prazer receber você.
          </motion.p>
        </div>

        {/* Contact cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid sm:grid-cols-2 gap-5 mb-12"
        >
          {/* Phone */}
          <motion.a
            href="tel:+5512974120206"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            whileHover={{ y: -4 }}
            className="group flex items-center gap-5 p-6 rounded-2xl bg-white/[0.05] border border-white/10 hover:border-[#D4877A]/40 transition-colors duration-400 cursor-pointer"
          >
            <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#D4877A]/15 flex items-center justify-center text-[#D4877A] group-hover:bg-[#D4877A] group-hover:text-white transition-colors duration-400">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <p className="text-white/50 text-xs uppercase tracking-[0.2em] mb-1">
                Telefone & WhatsApp
              </p>
              <p className="text-white text-lg font-medium">
                (12) 97412-0206
              </p>
              <p className="text-white/40 text-sm mt-1">
                Toque para ligar ou chamar
              </p>
            </div>
          </motion.a>

          {/* Facebook */}
          <motion.a
            href="https://www.facebook.com/138512816875645"
            target="_blank"
            rel="noopener noreferrer"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            whileHover={{ y: -4 }}
            className="group flex items-center gap-5 p-6 rounded-2xl bg-white/[0.05] border border-white/10 hover:border-[#D4877A]/40 transition-colors duration-400 cursor-pointer"
          >
            <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#D4877A]/15 flex items-center justify-center text-[#D4877A] group-hover:bg-[#D4877A] group-hover:text-white transition-colors duration-400">
              <Globe className="w-6 h-6" />
            </div>
            <div>
              <p className="text-white/50 text-xs uppercase tracking-[0.2em] mb-1">
                Facebook
              </p>
              <p className="text-white text-lg font-medium">
                Studio Vanessa Lopes
              </p>
              <p className="text-white/40 text-sm mt-1">
                Acompanhe novidades por lá
              </p>
            </div>
          </motion.a>

          {/* Location */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            className="group flex items-center gap-5 p-6 rounded-2xl bg-white/[0.05] border border-white/10"
          >
            <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#D4877A]/15 flex items-center justify-center text-[#D4877A]">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <p className="text-white/50 text-xs uppercase tracking-[0.2em] mb-1">
                Onde estamos
              </p>
              <p className="text-white text-lg font-medium">
                São José dos Campos
              </p>
              <p className="text-white/40 text-sm mt-1">
                Endereço confirmado no agendamento
              </p>
            </div>
          </motion.div>

          {/* Hours */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            className="group flex items-center gap-5 p-6 rounded-2xl bg-white/[0.05] border border-white/10"
          >
            <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#D4877A]/15 flex items-center justify-center text-[#D4877A]">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <p className="text-white/50 text-xs uppercase tracking-[0.2em] mb-1">
                Atendimento
              </p>
              <p className="text-white text-lg font-medium">
                Por hora marcada
              </p>
              <p className="text-white/40 text-sm mt-1">
                Agende seu horário com antecedência
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Main CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="tel:+5512974120206"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#B76E79] text-white font-medium text-base sm:text-lg hover:bg-[#D4877A] transition-all duration-300 hover:shadow-2xl hover:shadow-[#B76E79]/30 cursor-pointer w-full sm:w-auto justify-center"
          >
            <Calendar className="w-5 h-5" />
            Agendar agora
          </a>
          <a
            href="https://wa.me/5512974120206"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-[#D4877A]/60 text-white font-medium text-base sm:text-lg hover:bg-[#D4877A]/20 hover:border-[#D4877A] transition-all duration-300 cursor-pointer w-full sm:w-auto justify-center"
          >
            <MessageCircle className="w-5 h-5" />
            Chamar no WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
