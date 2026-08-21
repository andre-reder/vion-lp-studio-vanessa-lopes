import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Como faço para agendar?",
    a: "O agendamento é feito pelo telefone (12) 97412-0206 ou pelas nossas redes sociais. Conversemos sobre o serviço desejado, a disponibilidade e a melhor data para você. Recomendamos agendar com antecedência, especialmente para datas comemorativas.",
  },
  {
    q: "O atendimento é por hora marcada?",
    a: "Sim. Todo o atendimento é exclusivamente por hora marcada, para garantir que cada cliente receba atenção integral, sem fila e sem pressa. Isso permite que o cuidado aconteça no seu ritmo.",
  },
  {
    q: "Quais formas de pagamento são aceitas?",
    a: "Aceitamos dinheiro, cartões de débito e crédito, e Pix. Para pacotes ou dias de beleza completos, podemos conversar sobre condições especiais de pagamento.",
  },
  {
    q: "Preciso levar alguma referência?",
    a: "Não é obrigatório, mas ajuda muito. Se você tiver fotos do que gosta — ou do que não gosta — traga. A consulta inicial é justamente para alinhar expectativas e encontrar o que combina com você.",
  },
  {
    q: "Faz atendimento para eventos e noivas?",
    a: "Sim. Oferecemos serviços especiais para eventos, casamentos e datas importantes. Para noivas, recomendamos um teste prévio para definirmos juntos o penteado e a maquiagem ideais para o seu dia.",
  },
  {
    q: "Há estacionamento próximo?",
    a: "O estúdio fica em São José dos Campos. Recomendamos verificar as opções de estacionamento na rua ou nas proximidades antes de vir. Ao agendar, podemos indicar as melhores alternativas da região.",
  },
  {
    q: "Posso remarcar ou cancelar?",
    a: "Claro. Entendemos que imprevistos acontecem. Pedimos apenas que avise com o máximo de antecedência possível, para que possamos oferecer o horário a outra pessoa que esteja aguardando.",
  },
  {
    q: "Quanto tempo dura cada visita?",
    a: "Depende do serviço. Cortes simples costumam ser mais rápidos, enquanto coloração, tratamentos ou dias de beleza completos levam mais tempo. Na hora do agendamento, informamos uma estimativa para você se programar.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="duvidas"
      className="relative py-24 sm:py-32 lg:py-40 bg-[#FDF8F5] overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <span className="h-px w-12 bg-[#B76E79]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#B76E79] font-medium">
              Dúvidas frequentes
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
            Tudo o que você pode
            <span className="italic text-[#B76E79]"> querer saber</span>
          </motion.h2>
        </div>

        {/* FAQ list */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="space-y-3"
        >
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5 },
                  },
                }}
                className={`rounded-2xl border transition-colors duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-white border-[#B76E79]/30 shadow-lg shadow-[#B76E79]/5"
                    : "bg-white/60 border-[#E8D9D2] hover:border-[#B76E79]/20"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-5 text-left cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-[#2D1B23] text-base sm:text-lg leading-snug">
                    {faq.q}
                  </span>
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                      isOpen
                        ? "bg-[#B76E79] text-white"
                        : "bg-[#F4D4C8]/50 text-[#B76E79]"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 sm:px-6 pb-5 text-[#6B5560] text-sm sm:text-base leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <p className="text-[#6B5560] text-sm sm:text-base mb-4">
            Ainda tem dúvidas? Estamos a uma mensagem de distância.
          </p>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 text-[#B76E79] font-medium hover:text-[#8C4A57] transition-colors cursor-pointer"
          >
            Falar com o estúdio
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
