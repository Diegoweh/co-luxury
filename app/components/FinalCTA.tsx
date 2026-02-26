'use client'

import { motion } from 'framer-motion'

const vp = { once: true, amount: 0.12 as const }

export default function FinalCTA() {
  return (
    <div
      className="text-center relative"
      style={{
        background: `
          linear-gradient(rgba(28,43,58,0.72), rgba(28,43,58,0.72)),
          url('/img/cta.webp') center/cover
        `,
        padding: '160px 60px',
      }}
    >
      {/* Ornament */}
      <div className="flex items-center gap-5 mx-auto mb-[52px] max-w-[300px] text-[var(--ocre)]">
        <span className="flex-1 h-px bg-[rgba(201,149,74,0.3)]" />
        <span className="text-xs text-[rgba(201,149,74,0.6)]">✦</span>
        <span className="flex-1 h-px bg-[rgba(201,149,74,0.3)]" />
      </div>

      <motion.h2
        className="font-cormorant text-[clamp(44px,6vw,84px)] font-light text-[var(--arena)] mb-6 leading-none"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={vp}
        transition={{ duration: 0.8 }}
      >
        Tu estancia en
        <br />
        <em className="italic text-[var(--ocre-light)]">Mazatlán</em>
        <br />
        empieza aquí.
      </motion.h2>

      <motion.p
        className="text-[14px] font-[200] text-[rgba(245,242,237,0.7)] max-w-[500px] mx-auto mb-[52px] leading-[1.8] tracking-[0.02em]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={vp}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        Reserva directamente con nosotros y obtén la mejor tarifa. Llevamos 50 años cuidando cada estancia.
      </motion.p>

      <motion.div
        className="flex gap-6 justify-center items-center flex-wrap"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={vp}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <a
          href="#reservar"
          className="relative overflow-hidden inline-block text-[11px] font-normal tracking-[0.25em] uppercase py-[22px] px-14 bg-[var(--ocre)] text-white no-underline group"
        >
          <span className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-[400ms] ease-out" />
          <span className="relative z-[1] group-hover:text-[var(--abismo)] transition-colors duration-[400ms]">
            Ver disponibilidad
          </span>
        </a>

        <a
          href="#"
          className="text-[11px] font-light tracking-[0.25em] uppercase py-[22px] px-11 border border-[rgba(245,242,237,0.4)] text-[rgba(245,242,237,0.85)] no-underline transition-all duration-300 hover:border-[var(--ocre)] hover:text-[var(--ocre)]"
        >
          Escríbenos por WhatsApp
        </a>
      </motion.div>
    </div>
  )
}
