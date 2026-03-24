export interface Testimonial {
  name: string;
  city: string;
  service: string;
  rating: number;
  comment: string;
  date?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Andrés Montoya',
    city: 'Medellín, Antioquia',
    service: 'Polarizado Nanocerámica',
    rating: 5,
    comment:
      'Excelente trabajo. Le puse el polarizado nanocerámica a mi Mazda 3 y la diferencia es brutal. El calor adentro del carro disminuyó muchísimo. El equipo es muy profesional y el acabado quedó perfecto, sin burbujas ni arrugas.',
    date: 'Febrero 2025',
  },
  {
    name: 'Valentina Ríos',
    city: 'Bello, Antioquia',
    service: 'Sonido',
    rating: 5,
    comment:
      'Le instalaron un sistema de sonido completo a mi Kia Picanto y quedé encantada. Muy buena asesoría desde el principio, me explicaron todo y me dieron varias opciones según mi presupuesto. El sonido quedó increíble.',
    date: 'Enero 2025',
  },
  {
    name: 'Carlos Zapata',
    city: 'Medellín, Antioquia',
    service: 'Polarizado HD',
    rating: 5,
    comment:
      'Rápidos, puntuales y muy limpios con el trabajo. Fui con mi Toyota Hilux y en pocas horas estaba listo. El polarizado HD quedó con una transparencia perfecta por dentro y oscuro por fuera. 100% recomendado.',
    date: 'Diciembre 2024',
  },
  {
    name: 'Luisa Fernández',
    city: 'Itagüí, Antioquia',
    service: 'Película de Seguridad',
    rating: 5,
    comment:
      'Contraté la película de seguridad para mi Chevrolet Spark. Me explicaron muy bien los beneficios y cómo protege el vidrio en caso de golpe. El servicio fue impecable y el precio muy justo. Volvería sin dudarlo.',
    date: 'Noviembre 2024',
  },
  {
    name: 'Sebastián Gil',
    city: 'Envigado, Antioquia',
    service: 'Sonido',
    rating: 5,
    comment:
      'El mejor servicio de sonido que he encontrado en Medellín. Le pusieron subwoofer, amplificador y parlantes nuevos a mi carro y la instalación quedó organizada y limpia. Sin improvisaciones, todo muy profesional.',
    date: 'Octubre 2024',
  },
  {
    name: 'María José Cárdenas',
    city: 'Sabaneta, Antioquia',
    service: 'Polarizado Nanocerámica',
    rating: 5,
    comment:
      'Muy satisfecha con el polarizado nanocerámica. La garantía por escrito me dio mucha confianza. El taller es ordenado y los muchachos son muy amables y explican todo con paciencia. Mi Renault Sandero quedó hermoso.',
    date: 'Septiembre 2024',
  },
];
