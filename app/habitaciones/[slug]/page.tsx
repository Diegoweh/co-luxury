'use client'

import { use, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { rooms, getRoomBySlug } from '../../data/rooms'
import { notFound } from 'next/navigation'

export default function RoomPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = use(params)
  const room = getRoomBySlug(slug)

  if (!room) notFound()

  const currentIndex = rooms.findIndex((r) => r.slug === slug)
  const prevRoom = currentIndex > 0 ? rooms[currentIndex - 1] : null
  const nextRoom = currentIndex < rooms.length - 1 ? rooms[currentIndex + 1] : null

  return <RoomDetail room={room} prevRoom={prevRoom} nextRoom={nextRoom} />
}

function RoomDetail({
  room,
  prevRoom,
  nextRoom,
}: {
  room: (typeof rooms)[number]
  prevRoom: (typeof rooms)[number] | null
  nextRoom: (typeof rooms)[number] | null
}) {
  const [activeImg, setActiveImg] = useState(0)

  return (
    <main className="bg-[var(--arena)] min-h-screen">
      {/* Top nav bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 bg-[var(--abismo)]/90 backdrop-blur-md">
        <Link
          href="/#habitaciones"
          className="flex items-center gap-3 text-[var(--arena)] no-underline group"
          data-hoverable=""
        >
          <span className="text-sm transition-transform duration-300 group-hover:-translate-x-1">
            ←
          </span>
          <span className="text-[10px] font-light tracking-[0.2em] uppercase">
            Todas las habitaciones
          </span>
        </Link>
        <Link
          href="/#reservar"
          className="text-[10px] font-normal tracking-[0.22em] uppercase py-2.5 px-6 border border-[var(--ocre)] text-[var(--ocre)] no-underline transition-all duration-300 hover:bg-[var(--ocre)] hover:text-[var(--abismo)]"
          data-hoverable=""
        >
          Reservar ahora
        </Link>
      </nav>

      {/* Hero Image */}
      <section className="relative h-[70vh] md:h-[85vh] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={room.images[activeImg]}
            src={room.images[activeImg]}
            alt={room.name}
            className="w-full h-full object-cover"
            style={{ filter: 'saturate(0.85)' }}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          />
        </AnimatePresence>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--abismo)] via-[var(--abismo)]/30 to-transparent" />

        {/* Hero content */}
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-16 pb-12 md:pb-20">
          <motion.span
            className="text-[10px] font-light tracking-[0.3em] uppercase text-[var(--ocre)] mb-3 block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {room.size} · {room.capacity}
          </motion.span>
          <motion.h1
            className="font-cormorant text-[clamp(36px,8vw,72px)] font-light leading-[1.05] text-[var(--arena)] mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {room.name}
          </motion.h1>
          <motion.div
            className="flex items-baseline gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <span className="text-[13px] font-[200] text-[var(--arena)]/60">
              Desde
            </span>
            <span className="font-cormorant text-[36px] md:text-[42px] font-light text-[var(--arena)]">
              {room.price}
            </span>
            <span className="text-[13px] font-[200] text-[var(--arena)]/60">
              MXN / noche
            </span>
          </motion.div>
        </div>

        {/* Image thumbnails */}
        {room.images.length > 1 && (
          <div className="absolute bottom-6 right-6 md:bottom-12 md:right-16 flex gap-2">
            {room.images.map((img, i) => (
              <button
                key={img}
                onClick={() => setActiveImg(i)}
                className={`w-16 h-12 md:w-20 md:h-14 overflow-hidden border-2 transition-all duration-300 ${
                  i === activeImg
                    ? 'border-[var(--ocre)] opacity-100'
                    : 'border-transparent opacity-50 hover:opacity-80'
                }`}
                data-hoverable=""
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img}
                  alt={`${room.name} ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </section>

      {/* Content */}
      <section className="px-6 md:px-16 lg:px-24 py-16 md:py-24 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-20">
          {/* Left - Description */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-cormorant text-[28px] md:text-[36px] font-light text-[var(--abismo)] leading-[1.2] mb-6">
              Sobre esta habitación
            </h2>
            <p className="text-[14px] md:text-[15px] font-[200] text-[var(--text-muted)] leading-[1.9] mb-8">
              {room.longDescription}
            </p>

            {/* Room details */}
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-[rgba(201,149,74,0.2)]">
              <div>
                <span className="text-[10px] font-light tracking-[0.2em] uppercase text-[var(--ocre)] block mb-2">
                  Camas
                </span>
                <span className="text-[14px] font-[300] text-[var(--abismo)]">
                  {room.beds}
                </span>
              </div>
              <div>
                <span className="text-[10px] font-light tracking-[0.2em] uppercase text-[var(--ocre)] block mb-2">
                  Capacidad
                </span>
                <span className="text-[14px] font-[300] text-[var(--abismo)]">
                  {room.capacity}
                </span>
              </div>
              <div>
                <span className="text-[10px] font-light tracking-[0.2em] uppercase text-[var(--ocre)] block mb-2">
                  Categoría
                </span>
                <span className="text-[14px] font-[300] text-[var(--abismo)]">
                  {room.size}
                </span>
              </div>
              <div>
                <span className="text-[10px] font-light tracking-[0.2em] uppercase text-[var(--ocre)] block mb-2">
                  Desde
                </span>
                <span className="text-[14px] font-[300] text-[var(--abismo)]">
                  {room.price} MXN
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right - Amenities */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="bg-[var(--abismo)] p-8 md:p-10">
              <h3 className="font-cormorant text-[22px] md:text-[24px] font-light text-[var(--arena)] mb-6">
                Amenidades
              </h3>
              <ul className="space-y-4">
                {room.amenities.map((a) => (
                  <li
                    key={a}
                    className="flex items-center gap-3 text-[13px] font-[200] text-[var(--arena)]/80"
                  >
                    <span className="w-1 h-1 bg-[var(--ocre)] rounded-full flex-shrink-0" />
                    {a}
                  </li>
                ))}
              </ul>

              <div className="mt-10 pt-8 border-t border-[rgba(245,242,237,0.1)]">
                <div className="mb-4">
                  <span className="text-[13px] font-[200] text-[var(--arena)]/50">
                    Desde
                  </span>
                  <span className="font-cormorant text-[36px] font-light text-[var(--arena)] block">
                    {room.price}{' '}
                    <span className="text-[14px] font-[200] text-[var(--arena)]/50 font-sans">
                      MXN / noche
                    </span>
                  </span>
                  <span className="text-[11px] font-[200] text-[var(--arena)]/40">
                    Impuestos incluidos
                  </span>
                </div>
                <a
                  href="#reservar"
                  className="block text-center text-[10px] font-normal tracking-[0.22em] uppercase py-4 px-6 bg-[var(--ocre)] text-[var(--abismo)] no-underline transition-all duration-300 hover:bg-[var(--ocre-light)]"
                  data-hoverable=""
                >
                  Reservar esta habitación
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Gallery (if multiple images) */}
      {room.images.length > 1 && (
        <section className="px-6 md:px-16 lg:px-24 pb-16 md:pb-24 max-w-[1200px] mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7 }}
          >
            {room.images.map((img, i) => (
              <div
                key={img}
                className="overflow-hidden group"
                style={{ aspectRatio: '16/10' }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img}
                  alt={`${room.name} - ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  style={{ filter: 'saturate(0.85)' }}
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>
        </section>
      )}

      {/* Prev/Next navigation */}
      <section className="border-t border-[rgba(201,149,74,0.15)]">
        <div className="grid grid-cols-2">
          {prevRoom ? (
            <Link
              href={`/habitaciones/${prevRoom.slug}`}
              className="group flex flex-col items-start px-6 md:px-16 py-10 md:py-14 no-underline transition-colors duration-300 hover:bg-[var(--arena-dark)]"
              data-hoverable=""
            >
              <span className="text-[10px] font-light tracking-[0.2em] uppercase text-[var(--text-muted)] mb-2">
                ← Anterior
              </span>
              <span className="font-cormorant text-[20px] md:text-[24px] font-light text-[var(--abismo)]">
                {prevRoom.shortName}
              </span>
            </Link>
          ) : (
            <div />
          )}
          {nextRoom ? (
            <Link
              href={`/habitaciones/${nextRoom.slug}`}
              className="group flex flex-col items-end text-right px-6 md:px-16 py-10 md:py-14 no-underline transition-colors duration-300 hover:bg-[var(--arena-dark)] border-l border-[rgba(201,149,74,0.15)]"
              data-hoverable=""
            >
              <span className="text-[10px] font-light tracking-[0.2em] uppercase text-[var(--text-muted)] mb-2">
                Siguiente →
              </span>
              <span className="font-cormorant text-[20px] md:text-[24px] font-light text-[var(--abismo)]">
                {nextRoom.shortName}
              </span>
            </Link>
          ) : (
            <Link
              href="/#habitaciones"
              className="group flex flex-col items-end text-right px-6 md:px-16 py-10 md:py-14 no-underline transition-colors duration-300 hover:bg-[var(--arena-dark)] border-l border-[rgba(201,149,74,0.15)]"
              data-hoverable=""
            >
              <span className="text-[10px] font-light tracking-[0.2em] uppercase text-[var(--text-muted)] mb-2">
                Volver →
              </span>
              <span className="font-cormorant text-[20px] md:text-[24px] font-light text-[var(--abismo)]">
                Todas las habitaciones
              </span>
            </Link>
          )}
        </div>
      </section>
    </main>
  )
}
