'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { rooms } from '../data/rooms'

const vp = { once: true, amount: 0.12 as const }

export default function RoomsSection() {
  return (
    <section
      id="habitaciones"
      className="bg-[var(--arena-dark)] px-5 py-20 sm:px-8 md:px-[60px] md:py-[120px]"
    >
      {/* Header */}
      <div className="text-center mb-12 md:mb-20">
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
          Cada habitación tiene balcón privado. Muchas dan al mar. Todas al
          mismo nivel de comodidad que Costa de Oro mantiene desde hace 50 años.
        </motion.p>
      </div>

      {/* Horizontal Scroll Cards */}
      <motion.div
        className="flex gap-5 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide -mx-5 px-5 sm:-mx-8 sm:px-8 md:-mx-[60px] md:px-[60px]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={vp}
        transition={{ duration: 0.8 }}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {rooms.map((room, i) => (
          <Link
            key={room.slug}
            href={`/habitaciones/${room.slug}`}
            className="group flex-shrink-0 snap-start w-[85vw] sm:w-[60vw] md:w-[400px] lg:w-[420px] no-underline"
            data-hoverable=""
          >
            <motion.div
              className="relative overflow-hidden bg-[var(--abismo)]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ aspectRatio: '3/4' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={room.images[0]}
                  alt={room.name}
                  className="w-full h-full object-cover transition-all duration-[800ms] ease-out group-hover:scale-[1.05]"
                  style={{ filter: 'saturate(0.85)' }}
                  loading="lazy"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--abismo)] via-transparent to-transparent opacity-80" />

                {/* Price badge */}
                <div className="absolute top-5 right-5 bg-[var(--abismo)]/80 backdrop-blur-sm px-4 py-2">
                  <span className="font-cormorant text-[20px] font-light text-[var(--arena)]">
                    {room.price}
                  </span>
                  <span className="text-[10px] font-[200] text-[var(--arena)]/60 ml-1">
                    MXN
                  </span>
                </div>

                {/* Bottom info on image */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-[10px] font-light tracking-[0.25em] uppercase text-[var(--ocre)] mb-2 block">
                    {room.size}
                  </span>
                  <h3 className="font-cormorant text-[26px] md:text-[30px] font-light text-[var(--arena)] leading-[1.1] mb-3">
                    {room.shortName}
                  </h3>
                  <div className="flex gap-3 flex-wrap mb-4">
                    {room.amenities.slice(0, 3).map((a) => (
                      <span
                        key={a}
                        className="text-[10px] font-light tracking-[0.15em] uppercase text-[var(--arena)]/70"
                      >
                        {a}
                      </span>
                    ))}
                  </div>
                  <p className="text-[12px] font-[200] text-[var(--arena)]/60 leading-[1.7] line-clamp-2">
                    {room.description}
                  </p>
                </div>
              </div>

              {/* CTA bar */}
              <div className="flex items-center justify-between px-6 py-4 bg-[var(--abismo)] transition-colors duration-300 group-hover:bg-[var(--abismo-light)]">
                <span className="text-[10px] font-normal tracking-[0.22em] uppercase text-[var(--arena)]/80">
                  Descubrir habitación
                </span>
                <span className="text-[var(--ocre)] text-sm transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.div>

      {/* View all link */}
      <motion.div
        className="text-center mt-12 md:mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={vp}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <Link
          href="/habitaciones/master-suite"
          className="text-[10px] font-normal tracking-[0.22em] uppercase py-3.5 px-8 border border-[var(--abismo)] bg-transparent text-[var(--abismo)] no-underline transition-all duration-300 hover:bg-[var(--abismo)] hover:text-[var(--arena)] inline-block"
          data-hoverable=""
        >
          Ver la Master Suite
        </Link>
      </motion.div>
    </section>
  )
}
