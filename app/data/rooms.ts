export interface Room {
  slug: string
  name: string
  shortName: string
  price: string
  priceNum: number
  description: string
  longDescription: string
  images: string[]
  amenities: string[]
  capacity: string
  beds: string
  size: string
}

export const rooms: Room[] = [
  {
    slug: 'vista-jardin',
    name: 'Habitación Vista al Jardín',
    shortName: 'Vista al Jardín',
    price: '$1,594',
    priceNum: 1594,
    description:
      'Ubicada en un edificio rodeado de jardines y cascadas, a unos cuantos pasos de la alberca y playa.',
    longDescription:
      'Ubicada en un edificio rodeado de jardines y cascadas, a unos cuantos pasos de la alberca y playa. Esta confortable habitación ofrece 2 camas matrimoniales y un baño completo.',
    images: ['/img/vista-jardin/vista-jardin-1.webp'],
    amenities: ['Vista jardín', 'Baño completo', 'A/C', 'Wi-Fi'],
    capacity: '4 huéspedes',
    beds: '2 camas matrimoniales',
    size: 'Estándar',
  },
  {
    slug: 'deluxe-jardin',
    name: 'Habitación Deluxe Jardín',
    shortName: 'Deluxe Jardín',
    price: '$1,722',
    priceNum: 1722,
    description:
      'Experimenta el lujo y comodidad con un estilo moderno y fresco.',
    longDescription:
      'Experimenta el lujo y comodidad con un estilo moderno y fresco, donde podrás descansar en esta habitación con dos camas matrimoniales y un baño completo.',
    images: [
      '/img/deluxe-jardin/deluxe-jardin-1.webp',
      '/img/deluxe-jardin/deluxe-jardin-2.webp',
    ],
    amenities: ['Estilo moderno', 'Baño completo', 'A/C', 'Wi-Fi'],
    capacity: '4 huéspedes',
    beds: '2 camas matrimoniales',
    size: 'Deluxe',
  },
  {
    slug: 'estudio-queen',
    name: 'Estudio Queen',
    shortName: 'Estudio Queen',
    price: '$1,881',
    priceNum: 1881,
    description:
      'Siente la brisa del mar desde nuestra acogedora habitación con balcón vista al mar.',
    longDescription:
      'Siente la brisa del mar desde nuestra acogedora habitación que ofrece dos camas Queen size, cocineta, un baño privado y balcón vista al mar.',
    images: [
      '/img/estudio-queen/estudio-queen-1.webp',
      '/img/estudio-queen/estudio-queen-2.webp',
    ],
    amenities: ['Vista al mar', 'Balcón', 'Cocineta', 'Baño privado', 'A/C', 'Wi-Fi'],
    capacity: '4 huéspedes',
    beds: '2 camas Queen size',
    size: 'Estudio',
  },
  {
    slug: 'estudio-king',
    name: 'Estudio King',
    shortName: 'Estudio King',
    price: '$1,881',
    priceNum: 1881,
    description:
      'Disfruta de un bello atardecer desde el balcón de esta habitación con vista al mar.',
    longDescription:
      'Disfruta de un bello atardecer desde el balcón de esta habitación, que ofrece 1 cama King size, cocineta y balcón vista al mar. Con capacidad para dos personas.',
    images: [
      '/img/estudio-king/estudio-king-1.webp',
      '/img/estudio-king/estudio-king-2.webp',
    ],
    amenities: ['Vista al mar', 'Balcón', 'Cocineta', 'A/C', 'Wi-Fi'],
    capacity: '2 huéspedes',
    beds: '1 cama King size',
    size: 'Estudio',
  },
  {
    slug: 'frente-al-mar',
    name: 'Suite Frente al Mar',
    shortName: 'Frente al Mar',
    price: '$2,232',
    priceNum: 2232,
    description:
      'Vive los más hermosos atardeceres desde el balcón de nuestra clásica habitación.',
    longDescription:
      'Vive los más hermosos atardeceres desde el balcón de nuestra clásica habitación, que te ofrece un dormitorio privado con dos camas matrimoniales, sala de estar con sofá cama doble, baño completo y cocineta.',
    images: [
      '/img/frente-al-mar/frente-al-mar-1.webp',
      '/img/frente-al-mar/frente-al-mar-2.webp',
    ],
    amenities: [
      'Vista al mar',
      'Balcón',
      'Sala de estar',
      'Sofá cama',
      'Cocineta',
      'Baño completo',
      'A/C',
      'Wi-Fi',
    ],
    capacity: '6 huéspedes',
    beds: '2 camas matrimoniales + sofá cama doble',
    size: 'Suite',
  },
  {
    slug: 'cocineta-vista-mar',
    name: 'Suite con Cocineta y Vista al Mar',
    shortName: 'Cocineta Vista al Mar',
    price: '$2,519',
    priceNum: 2519,
    description:
      'Descansa con el suave sonido del mar en nuestra habitación familiar.',
    longDescription:
      'Descansa con el suave sonido del mar en nuestra habitación familiar la cual cuenta con un dormitorio con dos camas matrimoniales y un baño completo, sala de estar con dos sofás cama, comedor y cocineta equipada.',
    images: [
      '/img/cocineta-vista-mar/cocineta-vista-mar-1.webp',
      '/img/cocineta-vista-mar/cocineta-vista-mar-2.webp',
    ],
    amenities: [
      'Vista al mar',
      'Cocineta equipada',
      'Comedor',
      'Sala de estar',
      '2 sofás cama',
      'Baño completo',
      'A/C',
      'Wi-Fi',
    ],
    capacity: '6 huéspedes',
    beds: '2 camas matrimoniales + 2 sofás cama',
    size: 'Suite',
  },
  {
    slug: 'master-suite',
    name: 'Master Suite',
    shortName: 'Master Suite',
    price: '$3,986',
    priceNum: 3986,
    description:
      'Desde su balcón disfruta de la espectacular vista al mar en nuestra habitación familiar con amplios espacios.',
    longDescription:
      'Desde su balcón disfruta de la espectacular vista al mar en nuestra habitación familiar con amplios espacios. Cuenta con dos dormitorios, uno de ellos con cama king size y el otro con dos camas matrimoniales, sala de estar con sofá cama doble, comedor, dos baños completos, cocineta equipada.',
    images: [
      '/img/master-suite/master-suite-1.webp',
      '/img/master-suite/master-suite-2.webp',
    ],
    amenities: [
      'Vista al mar',
      'Balcón',
      '2 dormitorios',
      'Sala de estar',
      'Comedor',
      'Cocineta equipada',
      '2 baños completos',
      'Sofá cama doble',
      'A/C',
      'Wi-Fi',
    ],
    capacity: '8 huéspedes',
    beds: '1 cama King + 2 matrimoniales + sofá cama',
    size: 'Master Suite',
  },
]

export function getRoomBySlug(slug: string): Room | undefined {
  return rooms.find((r) => r.slug === slug)
}
