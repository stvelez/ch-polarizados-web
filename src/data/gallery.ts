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
    src: '/images/gallery/polarizado-nissan-frontier-01.jpg',
    alt: 'Polarizado Nissan Frontier - CH Polarizados Medellín',
    category: 'Polarizado',
  },
  {
    src: '/images/gallery/polarizado-nissan-frontier-02.jpg',
    alt: 'Polarizado Nissan Frontier vista frontal - CH Polarizados Medellín',
    category: 'Polarizado',
  },
  {
    src: '/images/gallery/polarizado-nissan-xtrail-01.jpg',
    alt: 'Polarizado Nissan X-Trail - CH Polarizados Medellín',
    category: 'Polarizado',
  },
  {
    src: '/images/gallery/polarizado-nissan-xtrail-02.jpg',
    alt: 'Polarizado Nissan X-Trail instalación - CH Polarizados Medellín',
    category: 'Polarizado',
  },
  {
    src: '/images/gallery/polarizado-toyota-4runner-01.jpg',
    alt: 'Polarizado Toyota 4Runner - CH Polarizados Medellín',
    category: 'Polarizado',
  },
  {
    src: '/images/gallery/polarizado-kia-sportage-01.jpg',
    alt: 'Polarizado Kia Sportage - CH Polarizados Medellín',
    category: 'Polarizado',
  },
  {
    src: '/images/gallery/polarizado-trabajo-01.jpg',
    alt: 'Trabajo de polarizado - CH Polarizados Medellín',
    category: 'Polarizado',
  },
  {
    src: '/images/gallery/polarizado-trabajo-02.jpg',
    alt: 'Trabajo de polarizado - CH Polarizados Medellín',
    category: 'Polarizado',
  },
  {
    src: '/images/gallery/polarizado-trabajo-03.jpg',
    alt: 'Trabajo de polarizado - CH Polarizados Medellín',
    category: 'Polarizado',
  },
  {
    src: '/images/gallery/polarizado-trabajo-04.jpg',
    alt: 'Trabajo de polarizado - CH Polarizados Medellín',
    category: 'Polarizado',
  },
];
