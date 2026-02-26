'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    img: '/img/spa.webp',
    alt: 'Spa',
    tag: 'A 10 minutos del hotel',
    name: 'Gran Acuario Mazatlán',
    desc: 'El acuario más grande de México está a 10 minutos de tu habitación. Una experiencia que los niños no olvidan y que los adultos tampoco.',
    style: { gridColumn: '1 / 2', gridRow: '1 / 2' },
  },
  {
    img: '/img/restaurant.webp',
    alt: 'Gastronomía',
    tag: 'Cocina local · Vista al mar',
    name: 'Adobes · Restaurante',
    desc: 'Desayuno, comida y cena con vista al Pacífico. Cocina mexicana e internacional, con la sazón Sinaloa. El mar en el plato y enfrente.',
    style: { gridColumn: '2 / 4', gridRow: '1 / 2' },
  },
  {
    img: '/img/beach.webp',
    alt: 'Playa',
    tag: 'A pasos del hotel',
    name: 'El Malecón de Mazatlán',
    desc: '21 kilómetros de malecón. El más largo de México. Empieza frente al hotel y lleva hasta donde quieras ir: mercados, restaurantes, el Faro, el centro histórico.',
    style: { gridColumn: '1 / 3', gridRow: '2 / 3' },
  },
  {
    img: '/img/pool.webp',
    alt: 'Pool',
    tag: 'Acceso directo',
    name: 'Zona Dorada y Playa',
    desc: 'Sal de tu habitación y en segundos estás en la playa. Arena, sol y el Pacífico a temperatura perfecta. La alberca también te espera si prefieres quedarte.',
    style: { gridColumn: '3 / 4', gridRow: '2 / 3' },
  },
]

const vp = { once: true, amount: 0.12 as const }

export default function ExperiencesSection() {
  return (
    <section
      id="experiencias"
      className="bg-[var(--abismo)] text-[var(--arena)]"
      style={{ padding: '120px 60px' }}
    >
      {/* Header */}
      <motion.div
        className="flex justify-between items-end mb-[60px]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={vp}
        transition={{ duration: 0.8 }}
      >
        <div>
          <p className="flex items-center gap-4 text-[10px] font-light tracking-[0.4em] uppercase text-[var(--ocre)] mb-5">
            <span className="block w-7 h-px bg-[var(--ocre)]" />
            Zona Dorada · Primera línea
          </p>
          <h2 className="font-cormorant text-[clamp(38px,4vw,56px)] font-light leading-[1.05] max-w-[500px]">
            No itinerarios.
            <br />
            <em className="italic text-[var(--ocre-light)]">Recuerdos que duran.</em>
          </h2>
        </div>
        <a
          href="#"
          className="text-[11px] font-light tracking-[0.25em] uppercase text-[var(--ocre)] no-underline border-b border-[rgba(201,149,74,0.3)] pb-1 transition-colors duration-300 hover:border-[var(--ocre)]"
        >
          Ver todas las experiencias →
        </a>
      </motion.div>

      {/* Bento grid */}
      <motion.div
        className="grid gap-[3px]"
        style={{
          gridTemplateColumns: '1fr 1fr 1fr',
          gridTemplateRows: '380px 280px',
        }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={vp}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        {experiences.map(({ img, alt, tag, name, desc, style }) => (
          <div
            key={name}
            className="relative overflow-hidden bg-[#0d1921] group"
            style={style}
            data-hoverable=""
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img}
              alt={alt}
              className="w-full h-full object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.06]"
              style={{ filter: 'saturate(0.75) brightness(0.85)' }}
              loading="lazy"
            />
            {/* Overlay */}
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to top, rgba(28,43,58,0.9) 0%, transparent 55%)',
              }}
            />
            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-[400ms]">
              <span className="text-[9px] font-light tracking-[0.35em] uppercase text-[var(--ocre)] mb-2.5 block">
                {tag}
              </span>
              <div className="font-cormorant text-[26px] font-light text-[var(--arena)] leading-[1.2]">
                {name}
              </div>
              <p className="text-[13px] font-[200] text-[rgba(245,242,237,0.6)] mt-2.5 leading-[1.6] opacity-0 translate-y-2.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-[400ms] delay-100">
                {desc}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
