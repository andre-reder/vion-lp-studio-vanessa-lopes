import { motion } from "framer-motion";
import { Camera } from "lucide-react";

const galleryItems = [
  {
    label: "Luz & textura",
    desc: "O ambiente como parte do cuidado",
    span: "lg:col-span-2 lg:row-span-2",
    aspect: "aspect-[4/5] lg:aspect-auto",
  },
  {
    label: "Detalhe & acabamento",
    desc: "O resultado que se vê de perto",
    span: "",
    aspect: "aspect-square",
  },
  {
    label: "Momento de pausa",
    desc: "O ritual do autocuidado",
    span: "",
    aspect: "aspect-square",
  },
  {
    label: "Natural & autoral",
    desc: "Beleza que não disfarça — revela",
    span: "lg:col-span-2",
    aspect: "aspect-[16/9] lg:aspect-[2/1]",
  },
];

export default function Gallery() {
  return (
    <section
      id="galeria"
      className="relative py-24 sm:py-32 lg:py-40 bg-[#FAF4F0] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="h-px w-12 bg-[#B76E79]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[#B76E79] font-medium">
                Galeria
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-[#2D1B23] text-3xl sm:text-4xl lg:text-5xl leading-[1.15] tracking-tight"
            >
              A atmosfera que
              <span className="italic text-[#B76E79]"> nos define</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[#6B5560] text-sm sm:text-base max-w-sm"
          >
            Mais do que resultados, registramos a experiência. Cada imagem é um
            convite para sentir o ambiente antes de chegar.
          </motion.p>
        </div>

        {/* Gallery grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 lg:auto-rows-[260px]"
        >
          {galleryItems.map((item, i) => (
            <motion.figure
              key={i}
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              whileHover={{ y: -4 }}
              className={`group relative overflow-hidden rounded-2xl shadow-lg shadow-[#2D1B23]/10 cursor-pointer ${item.span} ${item.aspect}`}
            >
              <img
                src="https://images.pexels.com/photos/4288272/pexels-photo-4288272.jpeg?auto=compress&cs=tinysrgb&h=800&w=800"
                alt={`${item.label} — ${item.desc}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                style={{
                  filter: `hue-rotate(${i * 8}deg) saturate(${0.85 + i * 0.05}) brightness(${0.9 + i * 0.04})`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D1B23]/80 via-[#2D1B23]/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-400" />

              <figcaption className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <div className="flex items-center gap-2 mb-1 opacity-80">
                  <Camera className="w-3.5 h-3.5" />
                  <span className="text-[10px] uppercase tracking-[0.2em]">
                    {item.label}
                  </span>
                </div>
                <p className="text-sm font-serif leading-snug">
                  {item.desc}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>

      {/* Credit — separate sibling, outside the grid container */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 mt-16">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-[#6B5560]/60 text-xs max-w-2xl w-full mx-auto"
        >
          Fotografias de Bianca Salgado / Pexels — utilizadas como referência
          atmosférica para esta proposta conceitual.
        </motion.p>
      </div>
    </section>
  );
}
