'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    quote:
      'No quería que terminara. Llegué de negocios y me fui convertido en otra persona. El Pacífico hace eso cuando lo tienes tan cerca.',
    author: 'Rodrigo M. — Ciudad de México',
    delay: 0.1,
  },
  {
    quote:
      'El desayuno con vista al mar el primer día cambió mi forma de entender el lujo. No es el precio. Es la atención a lo que no se ve.',
    author: 'Fernanda A. — Guadalajara',
    delay: 0.2,
  },
  {
    quote:
      'Celebramos nuestro aniversario aquí. El equipo del hotel convirtió una cena en un recuerdo que nuestros hijos van a escuchar toda la vida.',
    author: 'Carlos & Sofía — Monterrey',
    delay: 0.3,
  },
]

const vp = { once: true, amount: 0.12 as const }

export default function TestimonialsSection() {
  return (
    <section
      className="bg-[var(--arena)] text-center"
      style={{ padding: '120px 60px' }}
    >
      {/* Ornament */}
      <div className="flex items-center gap-5 mx-auto mb-[60px] max-w-[300px] text-[var(--ocre)]">
        <span className="flex-1 h-px bg-[rgba(201,149,74,0.3)]" />
        <span className="text-xs">✦</span>
        <span className="flex-1 h-px bg-[rgba(201,149,74,0.3)]" />
      </div>

      <motion.p
        className="flex justify-center items-center gap-4 text-[10px] font-light tracking-[0.4em] uppercase text-[var(--ocre)] mb-0"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={vp}
        transition={{ duration: 0.8 }}
      >
        <span className="block w-7 h-px bg-[var(--ocre)]" />
        Lo que dicen quienes ya vivieron el Costa de Oro
        <span className="block w-7 h-px bg-[var(--ocre)]" />
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[60px] mt-[72px]">
        {testimonials.map(({ quote, author, delay }) => (
          <motion.div
            key={author}
            className="test-card-top relative bg-white p-12 text-left"
            style={{ paddingLeft: '36px', paddingRight: '36px' }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.8, delay }}
          >
            <div className="text-[var(--ocre)] tracking-[4px] text-[12px] mb-6">
              ★★★★★
            </div>
            <p className="font-cormorant text-[18px] font-light italic leading-[1.7] text-[var(--abismo)] mb-8">
              &ldquo;{quote}&rdquo;
            </p>
            <p className="text-[10px] font-normal tracking-[0.3em] uppercase text-[var(--text-muted)]">
              {author}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
