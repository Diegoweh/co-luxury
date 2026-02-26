export default function HeroSection() {
  return (
    <section
      className="relative h-screen min-h-[700px] overflow-hidden flex items-center"
      style={{ padding: 0 }}
    >
      {/* Background with zoom animation */}
      <div
        className="absolute inset-0 hero-bg-anim"
        style={{
          background: `
            linear-gradient(160deg, rgba(28,43,58,0.6) 0%, rgba(28,43,58,0.2) 40%, rgba(201,149,74,0.1) 100%),
            url('/headerRewards.webp') center/cover no-repeat
          `,
        }}
      />
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            'linear-gradient(90deg, rgba(10,18,28,0.68) 0%, rgba(10,18,28,0.54) 35%, rgba(10,18,28,0.28) 62%, rgba(10,18,28,0.2) 100%)',
        }}
      />

      {/* Content */}
      <div
        className="relative z-[2] max-w-[780px] hero-content-anim"
        style={{ padding: '0 60px' }}
      >
        <p className="flex items-center gap-4 text-[11px] font-light tracking-[0.35em] uppercase text-[var(--ocre)] mb-6">
          <span className="block w-10 h-px bg-[var(--ocre)] text-shadow-" />
          Zona Dorada · Mazatlán, México
        </p>

        <h1 className="font-cormorant text-[clamp(52px,7vw,96px)] font-light leading-none text-[var(--arena)] mb-8 tracking-[-0.01em]">
          Donde el horizonte
          <br />
          <em
            className="italic text-[var(--ocre-light)] block"
            style={{ textShadow: '0 2px 16px rgba(0,0,0,0.45)' }}
          >
            se convierte en
            <br />
            tu pared principal
          </em>
        </h1>

        <p
          className="text-[20px] font-[200] leading-[1.8] text-[rgba(245,242,237,0.9)] max-w-[480px] mb-[52px] tracking-[0.02em]"
          style={{ textShadow: '0 1px 12px rgba(0,0,0,0.5)' }}
        >
          Frente al Pacífico, en el corazón de la Zona Dorada. Mazatlán como solo lo vive quien se queda a dormir con el sonido de las olas
        </p>

        <div className="flex gap-5 items-center">
          <a
            href="#reservar"
            className="relative overflow-hidden inline-block text-[11px] font-normal tracking-[0.22em] uppercase py-[18px] px-11 bg-[var(--ocre)] text-white no-underline group"
          >
            <span className="absolute inset-0 bg-[var(--abismo)] -translate-x-full group-hover:translate-x-0 transition-transform duration-[400ms] ease-out" />
            <span className="relative z-[1]">Ver disponibilidad</span>
          </a>
          <a
            href="#experiencias"
            className="text-[11px] font-light tracking-[0.22em] uppercase text-[rgba(245,242,237,0.8)] no-underline py-[18px] border-b border-[rgba(245,242,237,0.25)] transition-colors duration-300 hover:text-[var(--ocre)] hover:border-[var(--ocre)]"
          >
            Conocer el hotel
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-12 z-[2] flex flex-col items-center gap-3 hero-scroll-anim"
        style={{ right: '60px' }}
      >
        <div
          className="w-px h-[60px] scroll-pulse-anim"
          style={{
            background: 'linear-gradient(to bottom, rgba(201,149,74,0.8), transparent)',
          }}
        />
        <span
          className="text-[9px] font-light tracking-[0.3em] uppercase text-[rgba(245,242,237,0.5)]"
          style={{ writingMode: 'vertical-rl' }}
        >
          Explorar
        </span>
      </div>
    </section>
  )
}
