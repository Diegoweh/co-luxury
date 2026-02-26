'use client'

import { motion } from 'framer-motion'

const rooms = [
  {
    img: '/img/room.webp',
    name: 'Deluxe Vista Jardín',
    meta: ['Balcón privado', 'Cama king', 'A/C', 'Vista jardín'],
    desc: 'Vista a los jardines del hotel con toda la comodidad que necesitas para descansar de verdad. Balcón privado, aire acondicionado, cama king y el sonido del hotel a tu favor.',
    price: '$4,500',
    cta: 'Asegurar mi noche',
    featured: true,
  },
  {
    img: '/img/room-2.webp',
    name: 'Suite Deluxe Ocean Front',
    meta: ['Vista al mar', 'Balcón privado','Cama king', 'A/C'],
    desc: 'Despierta con el Pacífico frente a ti. Vista directa al mar desde tu cama y tu balcón. La habitación que reservan quienes ya saben que esa vista lo cambia todo.',
    price: '$6,500',
    cta: 'Reservar',
    featured: false,
  },
  {
    img: '/img/room-3.webp',
    name: 'Master Suite',
    meta: ['vista al mar', 'Sala independiente', 'Balcón', 'Cama king'],
    desc: 'El espacio más amplio del hotel. Para quienes celebran algo grande o simplemente quieren más de todo: más metros, más vistas, más servicio.',
    price: '$9,500',
    cta: 'Solicitar cotización',
    featured: false,
  },
]

const vp = { once: true, amount: 0.12 as const }

export default function RoomsSection() {
  return (
    <section
      id="habitaciones"
      className="bg-[var(--arena-dark)] px-5 py-20 sm:px-8 md:px-[60px] md:py-[120px]"
    >
      {/* Header */}
      <div className="text-center mb-12 md:mb-20">
        {/* Ornament */}
        <div className="flex items-center gap-5 mx-auto mb-9 md:mb-[60px] max-w-[240px] md:max-w-[300px] text-[var(--ocre)]">
          <span className="flex-1 h-px bg-[rgba(201,149,74,0.3)]" />
          <span className="text-xs">✦</span>
          <span className="flex-1 h-px bg-[rgba(201,149,74,0.3)]" />
        </div>

        <motion.h2
          className="font-cormorant text-[clamp(31px,9vw,58px)] font-light leading-[1.08] text-[var(--abismo)]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.8 }}
        >
          Tu habitación con vista al Pacífico 
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          <em className="italic text-[var(--ocre)]">te espera</em>
        </motion.h2>

        <motion.p
          className="text-[13px] md:text-[14px] font-[200] text-[var(--text-muted)] mt-4 max-w-[520px] mx-auto leading-[1.8] tracking-[0.02em]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Cada habitación tiene balcón privado. Muchas dan al mar. Todas al mismo nivel de comodidad que Costa de Oro mantiene desde hace 50 años.
        </motion.p>
      </div>

      {/* Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-[2px]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={vp}
        transition={{ duration: 0.8 }}
      >
        {rooms.map(({ img, name, meta, desc, price, cta, featured }) => (
          <div
            key={name}
            className={`relative bg-[var(--abismo)] overflow-hidden group ${featured ? 'md:col-span-2' : ''}`}
            data-hoverable=""
          >
            {/* Image */}
            <div
              className="overflow-hidden"
              style={{ aspectRatio: featured ? '16/9' : '16/10' }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img}
                alt={name}
                className="w-full h-full object-cover transition-all duration-[800ms] ease-out group-hover:scale-[1.04]"
                style={{ filter: 'saturate(0.8)' }}
                loading="lazy"
              />
            </div>

            {/* Info */}
            <div className="p-5 sm:p-6 md:p-8 bg-[var(--arena)]">
              <h3 className="font-cormorant text-[24px] md:text-[26px] font-light text-[var(--abismo)] mb-2.5 leading-[1.1]">
                {name}
              </h3>
              <div className="flex gap-x-4 gap-y-2 md:gap-6 mb-4 flex-wrap">
                {meta.map((m) => (
                  <span
                    key={m}
                    className="text-[10px] font-light tracking-[0.2em] uppercase text-[var(--text-muted)]"
                  >
                    {m}
                  </span>
                ))}
              </div>
              <p className="text-[13px] font-[200] text-[var(--text-muted)] leading-[1.75] mb-6 md:mb-7">
                {desc}
              </p>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                <div className="font-cormorant text-[30px] md:text-[32px] font-light text-[var(--abismo)]">
                  <sub className="text-[13px] font-[200] text-[var(--text-muted)] font-sans align-baseline">
                    Desde
                  </sub>
                  {price}{' '}
                  <sub className="text-[13px] font-[200] text-[var(--text-muted)] font-sans align-baseline">
                    MXN / noche
                  </sub>
                </div>
                <a
                  href="#reservar"
                  className="text-[10px] font-normal tracking-[0.22em] uppercase py-3.5 px-6 sm:px-7 border border-[var(--abismo)] bg-transparent text-[var(--abismo)] no-underline transition-all duration-300 hover:bg-[var(--abismo)] hover:text-[var(--arena)] text-center w-full sm:w-auto"
                >
                  {cta}
                </a>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
