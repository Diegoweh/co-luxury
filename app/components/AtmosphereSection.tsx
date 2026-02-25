'use client'

import { motion } from 'framer-motion'

export default function AtmosphereSection() {
  return (
    <motion.div
      className="bg-[var(--abismo)] text-center relative overflow-hidden"
      style={{ padding: '140px 60px' }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.8 }}
    >
      {/* Giant decorative quote mark */}
      <span className="atm-giant-quote" aria-hidden="true">
        &ldquo;
      </span>

      <p className="font-cormorant text-[clamp(28px,4vw,52px)] font-light italic text-[var(--arena)] max-w-[860px] mx-auto mb-10 leading-[1.3] relative">
        &ldquo;No existe un amanecer igual al del Pacífico cuando lo ves desde tu
        cama, con{' '}
        <em className="not-italic text-[var(--ocre-light)]">
          la arena todavía fría
        </em>{' '}
        y el café que ya llegó solo.&rdquo;
      </p>

      <p className="text-[11px] font-light tracking-[0.35em] uppercase text-[rgba(245,242,237,0.4)]">
        — Fragmento de experiencia de huésped
      </p>
    </motion.div>
  )
}
