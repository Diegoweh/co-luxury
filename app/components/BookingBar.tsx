'use client'

export default function BookingBar() {
  return (
    <div
      id="reservar"
      className="bg-[var(--abismo)] flex items-stretch"
      style={{ padding: '0 60px' }}
    >
      {/* Llegada */}
      <div className="flex-1 py-7 px-8 border-r border-[rgba(245,242,237,0.08)] flex flex-col gap-1.5">
        <label className="text-[9px] font-light tracking-[0.35em] uppercase text-[var(--ocre)]">
          Llegada
        </label>
        <input
          type="text"
          placeholder="DD / MM / AAAA"
          className="bg-transparent border-none outline-none font-cormorant text-[18px] font-light text-[var(--arena)] placeholder:text-[rgba(245,242,237,0.35)]"
        />
      </div>

      {/* Salida */}
      <div className="flex-1 py-7 px-8 border-r border-[rgba(245,242,237,0.08)] flex flex-col gap-1.5">
        <label className="text-[9px] font-light tracking-[0.35em] uppercase text-[var(--ocre)]">
          Salida
        </label>
        <input
          type="text"
          placeholder="DD / MM / AAAA"
          className="bg-transparent border-none outline-none font-cormorant text-[18px] font-light text-[var(--arena)] placeholder:text-[rgba(245,242,237,0.35)]"
        />
      </div>

      {/* Huéspedes */}
      <div className="flex-1 py-7 px-8 border-r border-[rgba(245,242,237,0.08)] flex flex-col gap-1.5">
        <label className="text-[9px] font-light tracking-[0.35em] uppercase text-[var(--ocre)]">
          Huéspedes
        </label>
        <select className="booking-select">
          <option>2 adultos</option>
          <option>1 adulto</option>
          <option>2 adultos · 1 niño</option>
          <option>2 adultos · 2 niños</option>
        </select>
      </div>

      {/* Código */}
      <div className="flex-1 py-7 px-8 border-r border-[rgba(245,242,237,0.08)] flex flex-col gap-1.5">
        <label className="text-[9px] font-light tracking-[0.35em] uppercase text-[var(--ocre)]">
          Código de privilegio
        </label>
        <input
          type="text"
          placeholder="Opcional"
          className="bg-transparent border-none outline-none font-cormorant text-[18px] font-light text-[var(--arena)] placeholder:text-[rgba(245,242,237,0.35)]"
        />
      </div>

      {/* Submit */}
      <button className="py-7 px-12 bg-[var(--ocre)] border-none text-[10px] font-normal tracking-[0.3em] uppercase text-white whitespace-nowrap transition-colors duration-300 hover:bg-[var(--abismo-light)]">
        Explorar
        <br />
        disponibilidad
      </button>
    </div>
  )
}
