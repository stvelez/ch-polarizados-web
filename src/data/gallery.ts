export interface GalleryItem {
  src: string;
  alt: string;
  category: string;
}

/**
 * Galería de trabajos realizados.
 *
 * Para agregar fotos reales:
 * 1. Coloca la imagen en: /public/images/gallery/
 * 2. Agrega un objeto a este array con el path correcto.
 *
 * Ejemplo:
 * {
 *   src: '/images/gallery/mazda3-nanocermica-01.jpg',
 *   alt: 'Polarizado Nanocerámica Mazda 3 - CH Polarizados Medellín',
 *   category: 'Polarizado',
 * }
 *
 * Categorías disponibles: 'Polarizado' | 'Sonido' | 'Eléctrico'
 */
export const galleryItems: GalleryItem[] = [
  // ── Polarizados ──────────────────────────────────────────────────────────
  {
    src: '/images/gallery/polarizado-nanocermica-suv-01.jpg',
    alt: 'Polarizado Nanocerámica SUV - CH Polarizados Medellín',
    category: 'Polarizado',
  },
  {
    src: '/images/gallery/polarizado-hd-sedan-01.jpg',
    alt: 'Polarizado HD Sedan - CH Polarizados Medellín',
    category: 'Polarizado',
  },
  {
    src: '/images/gallery/polarizado-nanocermica-pickup-01.jpg',
    alt: 'Polarizado Nanocerámica Pick-up - CH Polarizados Medellín',
    category: 'Polarizado',
  },
  {
    src: '/images/gallery/pelicula-seguridad-01.jpg',
    alt: 'Película de Seguridad - CH Polarizados Medellín',
    category: 'Polarizado',
  },
  // ── Sonido ───────────────────────────────────────────────────────────────
  {
    src: '/images/gallery/sonido-subwoofer-01.jpg',
    alt: 'Instalación Subwoofer y Amplificador - CH Polarizados Medellín',
    category: 'Sonido',
  },
  {
    src: '/images/gallery/sonido-parlantes-01.jpg',
    alt: 'Instalación Parlantes Puertas - CH Polarizados Medellín',
    category: 'Sonido',
  },
  {
    src: '/images/gallery/sonido-autoradio-01.jpg',
    alt: 'Instalación Autoradio Táctil - CH Polarizados Medellín',
    category: 'Sonido',
  },
  // ── Eléctrico ─────────────────────────────────────────────────────────────
  {
    src: '/images/gallery/electrico-radar-01.jpg',
    alt: 'Instalación Sensores de Parqueo - CH Polarizados Medellín',
    category: 'Eléctrico',
  },
];
