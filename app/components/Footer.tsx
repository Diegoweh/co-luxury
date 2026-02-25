import Image from 'next/image'
import Link from 'next/link'

const hotelLinks = [
  'Nuestra historia',
  'Suites & Villas',
  'Gastronomía',
  'Spa & Bienestar',
  'Eventos privados',
]

const planLinks = [
  'Disponibilidad',
  'Privilegios de temporada',
  'Experiencias',
  'Grupos & Bodas',
  'Cómo llegar',
]

const contactLinks = [
  'reservas@costadeoro.mx',
  '+52 669 000 0000',
  'Av. del Mar 2000, Mazatlán',
  'WhatsApp Concierge',
  'Instagram',
]

export default function Footer() {
  return (
    <footer
      id="contacto"
      className="bg-[var(--abismo)] border-t border-[rgba(201,149,74,0.15)] px-5 pt-14 pb-8 sm:px-8 md:px-[60px] md:pt-20 md:pb-10"
    >
      {/* Top grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 md:gap-[60px] pb-10 md:pb-[60px] border-b border-[rgba(245,242,237,0.07)]"
      >
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="font-cormorant text-[28px] font-light tracking-[0.08em] text-[var(--arena)] mb-4 md:mb-5 flex items-center gap-3">
            {/* Logo */}
            <Link href="#">
              <Image
                src="/costa-logo.webp"
                alt="Costa de Oro Logo"
                width={220}
                height={64}
                sizes="(max-width: 768px) 150px, 220px"
                className="h-9 w-auto object-contain md:h-10"
              />
            </Link>
          </div>
          <p className="text-[13px] font-[200] text-[rgba(245,242,237,0.45)] leading-[1.8] max-w-[320px]">
            Hotel Boutique frente al Pacífico. Mazatlán, Sinaloa, México. Donde
            el lujo silencioso tiene dirección.
          </p>
        </div>

        {/* El hotel */}
        <div>
          <h4 className="text-[10px] font-normal tracking-[0.3em] uppercase text-[var(--ocre)] mb-6">
            El hotel
          </h4>
          <ul className="flex flex-col gap-3 list-none m-0 p-0">
            {hotelLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-[13px] font-[200] text-[rgba(245,242,237,0.5)] no-underline transition-colors duration-300 hover:text-[var(--arena)] tracking-[0.02em]"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Planear */}
        <div>
          <h4 className="text-[10px] font-normal tracking-[0.3em] uppercase text-[var(--ocre)] mb-6">
            Planear
          </h4>
          <ul className="flex flex-col gap-3 list-none m-0 p-0">
            {planLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-[13px] font-[200] text-[rgba(245,242,237,0.5)] no-underline transition-colors duration-300 hover:text-[var(--arena)] tracking-[0.02em]"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="text-[10px] font-normal tracking-[0.3em] uppercase text-[var(--ocre)] mb-6">
            Contacto
          </h4>
          <ul className="flex flex-col gap-3 list-none m-0 p-0">
            {contactLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-[13px] font-[200] text-[rgba(245,242,237,0.5)] no-underline transition-colors duration-300 hover:text-[var(--arena)] tracking-[0.02em]"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center pt-6 md:pt-8">
        <p className="text-[11px] font-[200] text-[rgba(245,242,237,0.3)] tracking-[0.04em] leading-relaxed">
          © 2026 Hotel Costa de Oro · Todos los derechos reservados · Mazatlán, México
        </p>
        <p className="text-[10px] font-light tracking-[0.16em] md:tracking-[0.2em] uppercase text-[rgba(201,149,74,0.5)]">
          Diseño por Proyecta Agency · Mazatlán
        </p>
      </div>
    </footer>
  )
}
