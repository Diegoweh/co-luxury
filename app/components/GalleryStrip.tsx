const strips = [
  {
    src: '/img/img-1.webp',
    alt: 'Sunset',
    label: 'Atardecer',
  },
  {
    src: '/img/img-2.webp',
    alt: 'Interior',
    label: 'Interiores',
  },
  {
    src: '/img/img-3.webp',
    alt: 'Pool',
    label: 'Piscina',
  },
  {
    src: '/img/img-4.webp',
    alt: 'Gastronomía',
    label: 'Gastronomía',
  },
  {
    src: '/img/img-5.webp',
    alt: 'Spa',
    label: 'Bienestar',
  },
]

export default function GalleryStrip() {
  return (
    <div className="flex gap-[3px] h-96 overflow-hidden">
      {strips.map(({ src, alt, label }) => (
        <div key={label} className="gallery-strip-item">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={alt} className="strip-img" loading="lazy" />
          <span className="strip-label font-cormorant">{label}</span>
        </div>
      ))}
    </div>
  )
}
