import fs from 'node:fs/promises'
import path from 'node:path'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

type Activity = {
  title: string
  image: string
  alt: string
  paragraphs: string[]
}

const activityImages: Record<string, { image: string; alt: string }> = {
  'Gran Acuario Mazatlan': {
    image: '/img/mazatlan/gam.webp',
    alt: 'Gran Acuario Mazatlán',
  },
  'El Clavadista': {
    image: '/img/mazatlan/clavadista.webp',
    alt: 'Clavadista en Mazatlán',
  },
  'Centro Histórico': {
    image: '/img/mazatlan/centro-historico.webp',
    alt: 'Centro Histórico de Mazatlán',
  },
  'El Faro': {
    image: '/img/mazatlan/faro.webp',
    alt: 'Faro de Mazatlán',
  },
  'Pueblos Señoriales': {
    image: '/img/mazatlan/pueblos-senoriales.webp',
    alt: 'Pueblos señoriales cerca de Mazatlán',
  },
  'Observatorio 1873': {
    image: '/img/mazatlan/observatorio.webp',
    alt: 'Observatorio 1873 en Mazatlán',
  },
  'Parque Central Mazatlán': {
    image: '/img/mazatlan/parque-central.webp',
    alt: 'Parque Central Mazatlán',
  },
}

export const metadata: Metadata = {
  title: 'Mazatlán · Qué Hacer | Costa de Oro',
  description:
    'Explora actividades, miradores, historia y experiencias imperdibles en Mazatlán durante tu estancia en Costa de Oro.',
}

async function getMazatlanActivities(): Promise<Activity[]> {
  const filePath = path.join(process.cwd(), 'mazatlan-texts-section.txt')
  const raw = await fs.readFile(filePath, 'utf8')
  const lines = raw
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)

  const activities: Array<{ title: string; paragraphs: string[] }> = []
  let current: { title: string; paragraphs: string[] } | null = null

  for (const line of lines) {
    if (line in activityImages) {
      if (current) activities.push(current)
      current = { title: line, paragraphs: [] }
      continue
    }

    if (current) current.paragraphs.push(line)
  }

  if (current) activities.push(current)

  return activities.map((activity) => ({
    ...activity,
    ...activityImages[activity.title],
  }))
}

export default async function MazatlanPage() {
  const activities = await getMazatlanActivities()

  return (
    <>
      <Navbar />

      <main className="bg-[var(--arena)] text-[var(--abismo)]">
        <section className="px-6 pb-16 pt-32 sm:px-8 md:px-[60px] md:pb-24">
          <div className="mx-auto max-w-[1320px]">
            <div className="mb-12 max-w-[840px]">
              <p className="mb-5 flex items-center gap-4 text-[11px] font-light uppercase tracking-[0.35em] text-[var(--ocre)]">
                <span className="block h-px w-10 bg-[var(--ocre)]" />
                Guía Local · Mazatlán, Sinaloa
              </p>
              <h1 className="font-cormorant text-[clamp(42px,7vw,82px)] font-light leading-[0.95] tracking-[-0.02em]">
                Actividades para hacer en Mazatlán
              </h1>              
            </div>

            <section id="actividades">
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {activities.map((activity, index) => (
                  <article
                    key={activity.title}
                    className="overflow-hidden border border-[rgba(28,43,58,0.08)] bg-white shadow-[0_24px_60px_rgba(28,43,58,0.08)]"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-[var(--abismo)]">
                      <Image
                        src={activity.image}
                        alt={activity.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        priority={index < 3}
                      />
                    </div>

                    <div className="p-7 md:p-8">
                      <p className="text-[11px] uppercase tracking-[0.32em] text-[var(--ocre)]">
                        Parada {String(index + 1).padStart(2, '0')}
                      </p>
                      <h2 className="mt-4 font-cormorant text-[34px] font-light leading-[1.02] tracking-[-0.02em]">
                        {activity.title}
                      </h2>
                      <div className="mt-5 space-y-4">
                        {activity.paragraphs.map((paragraph) => (
                          <p
                            key={paragraph}
                            className="text-[15px] font-[300] leading-[1.85] text-[rgba(28,43,58,0.78)]"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </section>

        <section className="bg-[var(--abismo)] px-6 py-16 text-[var(--arena)] sm:px-8 md:px-[60px] md:py-24">
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end">
            <div>
              <p className="text-[10px] uppercase tracking-[0.34em] text-[var(--ocre)]">
                Planea tu estancia
              </p>
              <h2 className="mt-5 font-cormorant text-[clamp(36px,5vw,62px)] font-light leading-[1]">
                Quédate frente al mar
                <br />
                y sal a explorar lo mejor del puerto.
              </h2>
            </div>
            <div className="md:justify-self-end">
              <Link
                href="/#reservar"
                className="inline-flex items-center justify-center border border-[rgba(201,149,74,0.6)] px-8 py-4 text-[11px] uppercase tracking-[0.24em] text-[var(--ocre)] no-underline transition-all duration-300 hover:bg-[var(--ocre)] hover:text-white"
              >
                Reservar estancia
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
