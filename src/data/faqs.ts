export interface FAQItem {
  question: string;
  answer: string;
}

// FAQs para la página de inicio / generales
export const generalFaqs: FAQItem[] = [
  {
    question: '¿Cuánto tiempo tarda el servicio de polarizado?',
    answer:
      'El tiempo depende del tipo de vehículo y el número de vidrios. Un sedan estándar con polarizado completo tarda entre 2 y 4 horas. Camionetas y SUVs pueden tardar entre 3 y 5 horas. Siempre te informamos el tiempo estimado antes de comenzar.',
  },
  {
    question: '¿El polarizado es legal en Colombia?',
    answer:
      'En Colombia el Código Nacional de Tránsito permite el uso de películas de control solar, pero hay restricciones de porcentaje de transmisión de luz (VLT). Las lunas delanteras deben permitir al menos el 70% de transmisión de luz. Para lunas traseras y laterales traseras hay más flexibilidad. Nosotros te asesoramos para elegir el porcentaje correcto y cumplir con la normativa vigente.',
  },
  {
    question: '¿Qué garantía tienen los servicios?',
    answer:
      'Todos nuestros servicios incluyen garantía por escrito. El polarizado nanocerámica tiene garantía de 5 años contra burbujas, peeling y decoloración. El polarizado HD tiene garantía de 3 años. Los sistemas de audio tienen garantía de 1 año en instalación y la del fabricante en los equipos.',
  },
  {
    question: '¿Atienden a domicilio?',
    answer:
      'Actualmente nuestros servicios se realizan exclusivamente en nuestro taller ubicado en el Barrio Caribe, Medellín (Cra. 64c #75a-15), donde contamos con la infraestructura y herramientas necesarias para garantizar un trabajo de alta calidad.',
  },
  {
    question: '¿Manejan todas las marcas y modelos de vehículos?',
    answer:
      'Sí. Trabajamos con todas las marcas y modelos: Chevrolet, Renault, Mazda, Toyota, Kia, Hyundai, Ford, Volkswagen, BMW, Mercedes-Benz, entre otros. También atendemos camionetas, SUVs, pick-ups y vehículos de trabajo.',
  },
];

// FAQs específicas para polarizados
export const polarizadosFaqs: FAQItem[] = [
  {
    question: '¿Cuál es la diferencia entre el polarizado nanocerámica y el HD?',
    answer:
      'El polarizado nanocerámica es nuestra opción premium. Usa tecnología de partículas cerámicas que bloquea hasta el 99% de los rayos UV, rechaza hasta el 60% del calor solar y tiene una durabilidad de más de 5 años. El polarizado HD es una excelente opción de calidad media-alta, bloquea el 99% de rayos UV, rechaza hasta el 40% del calor y tiene una vida útil de 3 a 5 años. Ambos son opciones profesionales; la elección depende de tu presupuesto y nivel de confort que buscas.',
  },
  {
    question: '¿La película de seguridad reemplaza el polarizado?',
    answer:
      'No son lo mismo. La película de seguridad está diseñada principalmente para mantener el vidrio unido en caso de impacto, reduciendo el riesgo de lesiones por fragmentos de vidrio. Tiene menos efecto en el bloqueo de calor y privacidad que el polarizado convencional. Sin embargo, es posible combinar ambas para obtener privacidad, control de calor Y seguridad.',
  },
  {
    question: '¿Cuánto tiempo debo esperar antes de limpiar las ventanas después del polarizado?',
    answer:
      'Recomendamos esperar entre 3 y 5 días antes de limpiar las ventanas interiores para que la película termine su proceso de curado. Evita usar limpiadores con amoniaco, ya que degradan la película. Usa paño de microfibra suave y limpiadores sin amoniaco.',
  },
  {
    question: '¿El polarizado nanocerámica afecta las señales de GPS, celular o peajes electrónicos?',
    answer:
      'No. A diferencia de las películas metalizadas antiguas, el polarizado nanocerámica no contiene metal y no interfiere con señales de GPS, celular, radio ni con los sistemas de peaje electrónico (Tag). Esta es una de sus grandes ventajas sobre otros tipos de película.',
  },
  {
    question: '¿Se puede polarizar solo algunas ventanas?',
    answer:
      'Sí, podemos polarizar solo las ventanas que necesites. Sin embargo, recomendamos hacerlo en todas las lunas para lograr una apariencia uniforme y maximizar la protección. Cotizamos por vidrio o por paquete completo del vehículo.',
  },
];

// FAQs específicas para sonido
export const sonidoFaqs: FAQItem[] = [
  {
    question: '¿Qué incluye una instalación de sonido básica?',
    answer:
      'Una instalación básica típicamente incluye un autoradio (cabeza o head unit) con Bluetooth y USB, más dos pares de parlantes de rango completo en puertas delanteras y traseras. Hacemos el cableado profesional y el enmascaramiento de las instalaciones para que quede limpio. También ofrecemos paquetes que incluyen amplificador y subwoofer.',
  },
  {
    question: '¿Trabajan con equipos del cliente o solo venden los propios?',
    answer:
      'Trabajamos en ambas modalidades. Puedes traer tu propio equipo (autoradio, parlantes, amplificador, subwoofer) y nosotros hacemos la instalación profesional. O puedes adquirir los equipos con nosotros y te instalamos todo. Manejamos marcas como Pioneer, Sony, JVC, Kenwood, Focal, JL Audio, Rockford Fosgate, entre otras.',
  },
  {
    question: '¿Cuánto tiempo dura una instalación de sonido completa?',
    answer:
      'Una instalación básica (autoradio + parlantes) toma entre 1 y 2 horas. Un sistema completo con amplificador y subwoofer puede tomar entre 3 y 5 horas dependiendo de la complejidad y el vehículo. Sistemas de sonido de alta gama o competencia pueden tomar más tiempo.',
  },
  {
    question: '¿Hacen instalaciones de sistemas eléctricos como vidrios eléctricos y radares?',
    answer:
      'Sí. Ofrecemos instalación de kit de vidrios eléctricos, sensores de parqueo traseros y delanteros (radares), cámaras de reversa, alarmas y seguros centrales. Todos los servicios eléctricos incluyen garantía de instalación.',
  },
  {
    question: '¿Puedo escuchar cómo sonaría el sistema antes de comprarlo?',
    answer:
      'En nuestro taller puedes consultar con nuestros asesores sobre las características de los equipos disponibles. Recomendamos visitar el taller para recibir una asesoría personalizada según tu vehículo, el espacio disponible y el tipo de música que más disfrutas.',
  },
];
