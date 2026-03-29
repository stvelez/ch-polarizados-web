export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'cuanto-cuesta-polarizar-carro-medellin',
    title: '¿Cuánto cuesta polarizar un carro en Medellín? Precios 2026',
    description: 'Conoce los precios actualizados del polarizado de carros en Medellín. Comparamos polarizado básico, HD y nanocerámica para que elijas según tu presupuesto.',
    date: '2026-03-01',
    readTime: '5 min',
    category: 'Polarizado',
  },
  {
    slug: 'polarizado-nanoceramica-vs-hd-diferencias',
    title: 'Polarizado Nanocerámica vs HD: ¿Cuál elegir para tu carro?',
    description: 'Comparativa completa entre el polarizado nanocerámica y el polarizado HD. Diferencias en precio, calor, durabilidad y garantía para que tomes la mejor decisión.',
    date: '2026-02-15',
    readTime: '6 min',
    category: 'Polarizado',
  },
  {
    slug: 'es-legal-polarizar-carro-colombia',
    title: '¿Es legal polarizar el carro en Colombia? Normativa 2026',
    description: 'Todo lo que debes saber sobre la legalidad del polarizado en Colombia. Porcentajes permitidos por el Código Nacional de Tránsito y cómo evitar una multa.',
    date: '2026-02-01',
    readTime: '4 min',
    category: 'Información',
  },
  {
    slug: 'cuanto-dura-polarizado-carro-mantenimiento',
    title: '¿Cuánto dura el polarizado de un carro y cómo cuidarlo?',
    description: 'Vida útil del polarizado según el tipo de película, señales de que necesita cambio y consejos de mantenimiento para prolongar su duración al máximo.',
    date: '2026-01-20',
    readTime: '5 min',
    category: 'Mantenimiento',
  },
];
