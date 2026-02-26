'use client'

import { motion } from 'framer-motion'

const reveal = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

const vp = { once: true, amount: 0.12 as const }

const stats = [
  { num: '289', label: 'Habitaciones' },
  { num: '50', label: 'años de historia' },
  { num: '200', label: 'metros de océano' },
]

export default function AboutSection() {
  return (
    <section
      id="sobre"
      className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-[100px] bg-[var(--arena)] px-5 py-20 sm:px-8 md:px-[60px] md:py-[120px]"
    >
      {/* Visual */}
      <motion.div
        className="relative order-1"
        style={{ aspectRatio: '4/5' }}
        initial="hidden"
        whileInView="visible"
        viewport={vp}
        variants={reveal}
        transition={{ duration: 0.8 }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/img/about-co.webp"
          alt="Costa de Oro Hotel"
          className="w-full h-full object-cover"
          style={{ filter: 'saturate(0.9)' }}
          loading="lazy"
        />
      </motion.div>

      {/* Text */}
      <div className="order-2 lg:pr-5">
        <motion.p
          className="flex items-center gap-4 text-[10px] font-light tracking-[0.4em] uppercase text-[var(--ocre)] mb-5"
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          variants={reveal}
          transition={{ duration: 0.8 }}
        >
          <span className="block w-7 h-px bg-[var(--ocre)]" />
          Nuestra filosofía
        </motion.p>

        <motion.h2
          className="font-cormorant text-[clamp(38px,4vw,58px)] font-light leading-[1.1] mb-8 tracking-[-0.01em]"
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          variants={reveal}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Cincuenta años frente al Pacífico 
          <br />
          <em className="italic text-[var(--ocre)]">y no nos hemos movido</em>
        </motion.h2>

        <motion.p
          className="text-[15px] font-[200] leading-[1.9] text-[var(--text-muted)] mb-12 tracking-[0.01em]"
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          variants={reveal}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Llevamos cincuenta años recibiendo familias, parejas y viajeros que regresan. Cuando el mar está a tus pies y el servicio es de verdad, no hay mucho más que explicar
        </motion.p>

        <motion.p
          className="text-[15px] font-[200] leading-[1.9] text-[var(--text-muted)] tracking-[0.01em]"
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          variants={reveal}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          A pasos del Malecón y a metros de la playa más conocida de Mazatlán. En la Zona Dorada, donde la ciudad empieza a respirar diferente
        </motion.p>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-3 gap-8 pt-10 mt-10 border-t border-[rgba(28,43,58,0.1)]"
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          variants={reveal}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {stats.map(({ num, label }) => (
            <div key={label}>
              <span className="font-cormorant text-[44px] font-light text-[var(--ocre)] leading-none block">
                {num}
              </span>
              <span className="text-[10px] font-light tracking-[0.25em] uppercase text-[var(--text-muted)] block mt-1.5">
                {label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
