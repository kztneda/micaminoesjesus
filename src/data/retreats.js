import golgota from '../assets/images/retiro-golgota.webp';
import tengoSed from '../assets/images/retiro-tengo-sed.webp';
import shema from '../assets/images/retiro-shema.webp';
import fuisteMujer from '../assets/images/retiro-fuiste-mujer.webp';
import esclavaSenor from '../assets/images/retiro-esclava-senor.webp';
import ruth from '../assets/images/retiro-ruth.webp';
import sabiosOriente from '../assets/images/retiro-sabios-oriente.webp';
import ultimoRey from '../assets/images/retiro-ultimo-rey.webp';
import samuel from '../assets/images/retiro-samuel.webp';
import levantateHombre from '../assets/images/retiro-levantate-hombre.webp';
import sanson from '../assets/images/retiro-sanson.jpg';
import tobias from '../assets/images/retiro-tobias.jpg';
import jonatan from '../assets/images/retiro-jonatan.jpg';
import joseNazaret from '../assets/images/retiro-jose-nazaret.jpg';
import josue from '../assets/images/retiro-josue.jpg';
import eva from '../assets/images/retiro-eva.jpg';
import betania from '../assets/images/retiro-betania.jpg';
import sicar from '../assets/images/retiro-sicar.jpg';
import judit from '../assets/images/retiro-judit.jpg';
import emmanuel from '../assets/images/retiro-emmanuel.jpg';
import dosHermanos from '../assets/images/retiro-dos-hermanos.jpg';
import barrabas from '../assets/images/retiro-barrabas.jpg';
import caminoBelen from '../assets/images/adoracion-camino-belen.jpg';
import cenaculo from '../assets/images/adoracion-cenaculo.jpg';
import mesharetPredicadores from '../assets/images/MESHARET-PREDICADORES.jpg';
import mesharetIntercesion from '../assets/images/MESHARET-INTERCESION.jpg';
import mesharetHospitalidad from '../assets/images/MESHARET-HOSPITALIDAD.jpg';
import mesharetMonaguillos from '../assets/images/MESHARET-MONAGUILLOS.jpg';
import mesharetCatequistas from '../assets/images/MESHARET-CATEQUISTAS.jpg';
import mesharetBetsalel from '../assets/images/MESHARET-BETSALEL.jpg';
import ozEmaus from '../assets/images/OZ-EMAUS.jpg';
import ozPedro from '../assets/images/OZ-PEDRO.jpg';
import ozJuan from '../assets/images/OZ-JUAN.jpg';
import ozZaqueo from '../assets/images/OZ-ZAQUEO.jpg';
import ozBartimeo from '../assets/images/OZ-BARTIMEO.jpg';
import ozCaminoDamasco from '../assets/images/OZ-CAMINODAMASCO.jpg';
import ozJovenRico from '../assets/images/OZ-JOVENRICO.jpg';
import ozTomas from '../assets/images/OZ-TOMAS.jpg';
import ozGetsemani from '../assets/images/OZ-GETSEMANI.jpg';
import ozPentecostes from '../assets/images/OZ-PENTECOSTES.jpg';
import jaimJesucristoNuestraEsperanza from '../assets/images/JAIM-JESUCRISTONUESTRAESPERANZA.jpg';
import simjaBarcaDePedro from '../assets/images/SIMJA-BARCADEPEDRO.jpg';
import simjaArcaDeNoe from '../assets/images/SIMJA-ARCADENOE.jpg';
import simjaBuenPastor from '../assets/images/SIMJA-BUENPASTOR.jpg';
import simjaCincoPanes from '../assets/images/SIMJA-CINCOPANES.jpg';
import simjaZaqueo from '../assets/images/SIMJA-ZAQUEO.jpg';

export const SEQUENCES = {
  'derej-gibor': { name: 'Derej Gibor', subtitle: 'Camino del Guerrero', audience: 'Hombres', total: 6 },
  'derej-kavod': { name: 'Derej Kavod', subtitle: 'Camino de Dignidad', audience: 'Mujeres', total: 6 },
};

// Clasificación por tiempo litúrgico. `season` es el tiempo principal de cada
// retiro/taller/adoración; `seasonSecondary` (opcional) marca otros tiempos a
// los que también aplica. Es una propuesta editorial, no una regla fija: ajústala
// libremente si algún ítem debería vivir en otro tiempo.
export const SEASONS = {
  ordinario: { name: 'Tiempo Ordinario' },
  adviento: { name: 'Adviento' },
  cuaresma: { name: 'Cuaresma' },
  pascua: { name: 'Pascua' },
  pentecostes: { name: 'Pentecostés' },
};

// Los 6 Dérej (caminos) de la arquitectura formativa de MCJ. `esquema` describe
// cómo se navega el contenido: 'secuencial' (pasos numerados obligatorios),
// 'catalogo' (sin orden forzoso), 'catalogo_sugerido' (progresión sugerida, no
// obligatoria) o 'estaciones' (formato no lineal, aún sin contenido publicado).
export const DEREJ = {
  guibor: { name: 'Dérej Guibor', subtitle: 'Camino del Guerrero', audience: 'Hombres', esquema: 'secuencial', pasoTotal: 6 },
  kavod: { name: 'Dérej Kavod', subtitle: 'Camino de Dignidad', audience: 'Mujeres', esquema: 'secuencial', pasoTotal: 6 },
  mesharet: { name: 'Dérej Mesharét', subtitle: 'Camino del Servidor', audience: 'Servidores y ministerios', esquema: 'catalogo', pasoTotal: null },
  simja: { name: 'Dérej Simjá', subtitle: 'Camino de la Alegría', audience: 'Niños hasta 12 años', esquema: 'estaciones', pasoTotal: null },
  oz: { name: 'Dérej Oz', subtitle: 'Camino de la Fortaleza', audience: 'Jóvenes 13-30 años', esquema: 'catalogo_sugerido', pasoTotal: null },
  jaim: { name: 'Dérej Jaím', subtitle: 'Camino de Vida', audience: 'Comunidad general', esquema: 'catalogo', pasoTotal: null },
};

export const TIPOS = ['taller', 'retiro', 'hora_santa', 'vivencial', 'experiencial', 'estaciones'];
export const TIPO_LABELS = {
  taller: 'Taller',
  retiro: 'Retiro',
  hora_santa: 'Adoración',
  vivencial: 'Vivencial',
  experiencial: 'Experiencial',
  estaciones: 'Estaciones',
};
// Abreviatura compacta para mostrar la categoría sin píldora en listas densas.
export const TIPO_ABBR = {
  taller: 'T',
  retiro: 'R',
  hora_santa: 'HS',
  vivencial: 'V',
  experiencial: 'E',
  estaciones: 'Est',
};

// Corte oficial de edad de Dérej Simjá (arquitectura §5.1). 'ambos' = actividad
// adaptable a los dos cortes sin cambios estructurales.
export const CORTES_SIMJA = {
  kinder: { name: 'Kínder', rango: '4-6 años' },
  primaria: { name: 'Primaria', rango: '7-12 años' },
  ambos: { name: 'Kínder y Primaria', rango: 'Adaptable' },
};
const TIPO_FROM_CATEGORY = {
  Retiro: 'retiro',
  Taller: 'taller',
  Adoración: 'hora_santa',
};

export const ESTADOS = ['publicado', 'proximamente'];

// Contenido doctrinal profundo (Fase 1): todos opcionales, con default vacío.
// Se rellenan cuando el equipo redacta el material completo de cada entrada.
const DEEP_CONTENT_DEFAULTS = {
  temas: [], // [{ titulo, evocacion, actividadIntroductoria, contenido, actividadesAdicionales, simbolos: [], reflexion }]
  // Forma alterna compacta (tarjeta "Pedagogía Vivencial"): [{ titulo, resumen, puntos: [p1, p2] }]
  cronograma: [], // [{ bloque, duracionMinutos }]
  fichaTecnica: [], // [{ icon, label, value, desc }] — se calcula por tipo en buildFichaTecnica(), salvo que la entrada la fije explícitamente.
};

// Ficha técnica: misma lógica de logística para todas las actividades del mismo
// tipo (duración sugerida y capacidad recomendada varían por tipo; el requisito
// de espacio es igual para todas). Editorial, no una regla operativa estricta.
// `icon` referencia un ícono de FICHA_ICONS en ProyectoDetalle.jsx.
const FICHA_DURACION = {
  retiro: {
    value: '2 a 3 días',
    desc: 'Formato de fin de semana o campamento: viernes/sábado por la tarde a domingo, con jornadas completas de dinámicas, oración y descanso entre cada momento.',
  },
  taller: {
    value: '4 a 6 horas',
    desc: 'Sesión intensiva de una sola jornada (mañana o tarde), con tiempo suficiente para la enseñanza, la dinámica vivencial y el cierre de oración.',
  },
  hora_santa: {
    value: '1 a 3 horas',
    desc: 'Adoración eucarística con tiempo de silencio, prédica breve, cantos y oración comunitaria ante el Santísimo.',
  },
};
const FICHA_CAPACIDAD = {
  retiro: {
    value: '25 a 80 personas',
    desc: 'Garantiza el trabajo en grupos pequeños (escuadrones o mesas) y un clima de confianza para la confesión y el testimonio personal.',
  },
  taller: {
    value: '15 a 40 personas',
    desc: 'Permite el acompañamiento cercano de los facilitadores durante las dinámicas y el trabajo en subgrupos.',
  },
  hora_santa: {
    value: '30 a 120 personas',
    desc: 'Formato de asamblea abierta; se ajusta al aforo real de la capilla o templo donde se celebre.',
  },
};
const FICHA_ESPACIO = {
  value: 'Salón & Templo / Capilla',
  desc: 'Capilla con Sagrario habilitado para vigilia nocturna y salón de usos múltiples con sillas móviles para las dinámicas.',
};

function buildFichaTecnica(tipo) {
  if (!tipo || !FICHA_DURACION[tipo]) return [];
  return [
    { icon: 'clock', label: 'Duración Sugerida', ...FICHA_DURACION[tipo] },
    { icon: 'people', label: 'Capacidad Recomendada', ...FICHA_CAPACIDAD[tipo] },
    { icon: 'building', label: 'Requisitos de Espacio', ...FICHA_ESPACIO },
  ];
}

// Rellena campos derivados (derej/paso/pasoTotal/tipo/temporadaLiturgica/estado) y
// el contenido doctrinal profundo con defaults vacíos, SIN tocar los campos legacy
// (category, sequence, sequenceStep, season, bloques...). Cualquier valor puesto
// explícitamente en la entrada (ej. derej/codigo/estado) siempre gana sobre el derivado.
function withDerivedFields(entry) {
  const derivedDerej =
    entry.sequence === 'derej-gibor' ? 'guibor' :
    entry.sequence === 'derej-kavod' ? 'kavod' :
    null;
  const merged = {
    ...DEEP_CONTENT_DEFAULTS,
    derej: derivedDerej,
    paso: entry.sequenceStep ?? null,
    pasoTotal: entry.sequence ? SEQUENCES[entry.sequence].total : null,
    tipo: TIPO_FROM_CATEGORY[entry.category] ?? null,
    temporadaLiturgica: entry.season ?? null,
    estado: 'publicado',
    codigo: null,
    ...entry,
  };
  if (!merged.fichaTecnica || !merged.fichaTecnica.length) {
    merged.fichaTecnica = buildFichaTecnica(merged.tipo);
  }
  return merged;
}

const rawRetreats = [
  // --- Derej Gibor · Camino del Guerrero (secuencia para hombres) ---
  {
    id: 'levantate-hombre', category: 'Retiro', sequence: 'derej-gibor', sequenceStep: 1, sequenceTheme: null,
    codigo: 'GIBOR-01-LEVANTATE',
    season: 'ordinario', seasonSecondary: null,
    title: 'Levántate y Sé Hombre', basadoEn: null,
    conceptoCentral: 'El rescate de la masculinidad en un mundo que la tiene confundida.',
    image: levantateHombre,
    bloques: [
      { title: 'El modelo de Cristo', text: 'Redefinir la hombría mirando al hombre perfecto: lo suficientemente recio para volcar mesas a latigazos, lo suficientemente fuerte para arrodillarse a lavar pies.' },
      { title: 'Tomar el timón', text: 'Un taller sin rodeos sobre asumir la responsabilidad y el liderazgo servicial en la familia, forjar amistades de hierro, dignificar el trabajo y vivir una fe que no se acobarda.' },
    ],
    temas: [
      {
        titulo: 'Identidad y Masculinidad Verdadera',
        resumen: 'Confronta al varón con la máscara que el mundo le impone (fuerza sin heridas, éxito sin vulnerabilidad) y lo invita, a través del rito del espejo roto y el clavo en el madero, a descubrir su verdadero rostro a la luz de Cristo, el "hombre perfecto" capaz de volcar mesas y de arrodillarse a lavar pies.',
        puntos: [
          'La actividad introductoria busca confrontar al varón con las máscaras que usa para ocultar su vulnerabilidad y sus heridas ante el mundo.',
          'El rito final busca que cada hombre entregue conscientemente sus ataduras e identidad fragmentada, para recibir de Cristo un rostro restaurado y libre de máscaras.',
        ],
      },
      {
        titulo: 'El Hombre y la Familia',
        resumen: 'A partir de la imagen de una silla vacía y una rosa marchita, este tema confronta al varón con la huella —presente o ausente— de su padre terrenal y lo llama a sanar esa herida para asumir con madurez sus tres misiones en el hogar: protector, proveedor y guía espiritual, según el modelo silencioso de San José.',
        puntos: [
          'La actividad introductoria busca que cada varón reconozca la huella —presente o ausente— de su padre terrenal, y examine qué huella está dejando él mismo en su propia familia.',
          'El rito final busca sellar el compromiso de dejar atrás la ausencia o la dureza de corazón, y regresar al hogar como protector, proveedor y guía espiritual presente.',
        ],
      },
      {
        titulo: 'Hermandad Masculina',
        resumen: 'Este bloque rompe el mito del hombre autosuficiente que "no necesita ayuda", mostrando en las Escrituras —David y Jonatán, Elías y Eliseo, Jesús y Juan, entre otras— que la verdadera hombría se sostiene en la hermandad, y lo sella con un rito de nudos sobre una cuerda común.',
        puntos: [
          'La actividad introductoria busca que el varón experimente, de forma corporal, que la verdadera fortaleza no está en la autosuficiencia sino en dejarse sostener por sus hermanos.',
          'El rito final busca sellar el compromiso de perdonar a los hermanos de sangre e integrarse a una hermandad espiritual que vele por la santidad mutua.',
        ],
      },
      {
        titulo: 'El Altar de lo Cotidiano: Trabajo y Responsabilidad',
        resumen: 'Contrastando un cofre de monedas doradas con un yunque de trabajo, este tema desenmascara la pereza y la idolatría profesional como dos huidas cobardes de la responsabilidad, y propone el trabajo diario —el taller, la oficina, el campo— como un altar de servicio y co-creación con Dios.',
        puntos: [
          'La actividad introductoria busca que el varón experimente que todo trabajo digno implica esfuerzo, tal como Dios mismo "se ensució las manos" al formar al hombre.',
          'El rito final busca consagrar el esfuerzo diario como ofrenda a Dios, y no como una fuga cobarde de las responsabilidades familiares.',
        ],
      },
      {
        titulo: 'El Guerrero Espiritual en el Siglo XXI',
        resumen: 'Frente al ruido digital y las mentiras del mundo ("la fe es de cobardes", "sé tu propio dios"), este cierre presenta la oración como el verdadero campo de batalla del hombre contemporáneo y envía a cada varón como guerrero espiritual, custodio de su hogar, su trabajo y su fe.',
        puntos: [
          'La actividad introductoria busca exponer las mentiras que el mundo repite al varón sobre la fe y la espiritualidad, para que decida arrancarlas de su vida.',
          'El rito final busca consagrar al varón como guerrero espiritual, enviado a custodiar con la oración su hogar, su trabajo y su fe.',
        ],
      },
    ],
    chipsLabel: null, chips: null,
  },
  {
    id: 'sanson', category: 'Retiro', sequence: 'derej-gibor', sequenceStep: 2, sequenceTheme: 'Identidad y masculinidad',
    codigo: 'GIBOR-02-SANSON', estado: 'proximamente',
    season: 'ordinario', seasonSecondary: null,
    title: 'Sansón', basadoEn: 'Sansón, juez de Israel',
    conceptoCentral: 'La fuerza no es el músculo: es saber a quién perteneces.',
    image: sanson,
    bloques: [
      { title: 'El secreto no está en el pelo', text: 'Sansón tenía la fuerza de un ejército y la disciplina de un niño. Este retiro confronta el mito de que la masculinidad se mide en bíceps, cuando en realidad se mide en dominio propio.' },
      { title: 'Dalila tiene muchos nombres', text: 'Todo hombre tiene su "Dalila": la debilidad que sabe exactamente dónde presionar. Identificar qué te desgasta la fuerza en silencio, antes de que te corte el cabello.' },
      { title: 'De las ruinas al templo', text: 'Aun después de perderlo todo, Dios usó la última fuerza de Sansón para un propósito mayor. Ninguna caída es definitiva si vuelves a apoyarte en las columnas correctas.' },
    ],
    chipsLabel: null, chips: null,
  },
  {
    id: 'tobias', category: 'Retiro', sequence: 'derej-gibor', sequenceStep: 3, sequenceTheme: 'Familia',
    codigo: 'GIBOR-03-TOBIAS', estado: 'proximamente',
    season: 'ordinario', seasonSecondary: null,
    title: 'Tobías', basadoEn: 'el libro de Tobías',
    conceptoCentral: 'La familia no se hereda perfecta, se construye con fe en el camino.',
    image: tobias,
    bloques: [
      { title: 'Un padre que confía a ciegas', text: 'Tobit envía a su hijo a un viaje incierto confiando en un ángel disfrazado. Hablar de la fe que un padre transmite sin necesidad de controlarlo todo.' },
      { title: 'El ángel que camina contigo', text: 'Rafael acompaña a Tobías paso a paso: la certeza de que Dios manda compañía para las decisiones familiares grandes, como el matrimonio, el sustento o la sanación.' },
      { title: 'Sara, Ragüel y el matrimonio con propósito', text: 'El matrimonio de Tobías y Sara nace de oración, no de impulso. Construir un hogar con esa misma intención, desde el primer paso.' },
    ],
    chipsLabel: null, chips: null,
  },
  {
    id: 'jonatan', category: 'Retiro', sequence: 'derej-gibor', sequenceStep: 4, sequenceTheme: 'Amistad y Hermandad',
    codigo: 'GIBOR-04-JONATAN', estado: 'proximamente',
    season: 'ordinario', seasonSecondary: null,
    title: 'Jonatán', basadoEn: 'Jonatán, hijo de Saúl',
    conceptoCentral: 'La amistad real se mide en lo que estás dispuesto a perder por el otro.',
    image: jonatan,
    bloques: [
      { title: 'Un pacto sin envidia', text: 'Jonatán, heredero al trono, ama a David sabiendo que Dios lo eligió a él en su lugar. Hablar de la hermandad que no compite.' },
      { title: 'Amistad de riesgo', text: 'Jonatán arriesga la relación con su padre y su propia seguridad para proteger a David: la amistad que cuesta algo real, no la que solo es cómoda.' },
      { title: 'El pacto que sobrevive a la muerte', text: 'Jonatán pide a David que cuide a su familia después de morir. Construir amistades que trascienden la conveniencia del momento.' },
    ],
    chipsLabel: null, chips: null,
  },
  {
    id: 'jose-nazaret', category: 'Retiro', sequence: 'derej-gibor', sequenceStep: 5, sequenceTheme: 'Trabajo y Responsabilidad',
    codigo: 'GIBOR-05-JOSENAZARET', estado: 'proximamente',
    season: 'ordinario', seasonSecondary: ['adviento'],
    title: 'José de Nazaret', basadoEn: 'San José, esposo de María',
    conceptoCentral: 'La verdadera hombría se demuestra en el silencio de quien sostiene sin pedir reconocimiento.',
    image: joseNazaret,
    bloques: [
      { title: 'El justo que no huye', text: 'José descubre un embarazo que no comprende y, en vez de huir, se queda a proteger. Hablar de la responsabilidad que no depende de tener todas las respuestas.' },
      { title: 'El taller como altar', text: 'Su trabajo de carpintero educó al mismo Hijo de Dios. Dignificar el trabajo ordinario como lugar de santidad y provisión.' },
      { title: 'Proteger sin protagonismo', text: 'José nunca habla en el Evangelio, pero cada decisión suya cambia la historia. Ser el hombre que sostiene la casa sin necesitar el centro del escenario.' },
    ],
    chipsLabel: null, chips: null,
  },
  {
    id: 'josue', category: 'Retiro', sequence: 'derej-gibor', sequenceStep: 6, sequenceTheme: 'Hombre espiritual Siglo XXI',
    codigo: 'GIBOR-06-JOSUE', estado: 'proximamente',
    season: 'ordinario', seasonSecondary: null,
    title: 'Josué', basadoEn: 'el libro de Josué',
    conceptoCentral: 'Heredar la promesa no es suerte: es esfuerzo, valentía y obediencia sin atajos.',
    image: josue,
    bloques: [
      { title: 'De asistente a líder', text: 'Josué pasa 40 años como segundo de Moisés antes de cruzar el Jordán. Hablar del tiempo de formación silenciosa antes del liderazgo.' },
      { title: '"Esfuérzate y sé valiente"', text: 'La orden que Dios repite tres veces al inicio del libro. La valentía como mandato, no como sentimiento opcional.' },
      { title: 'Escoger a quién servir hoy', text: '"Escojan hoy a quién han de servir": el hombre espiritual del siglo XXI decide su fe activamente, no por herencia cultural.' },
    ],
    chipsLabel: null, chips: null,
  },

  // --- Derej Kavod · Camino de Dignidad (secuencia para mujeres) ---
  {
    id: 'fuiste-mujer', category: 'Retiro', sequence: 'derej-kavod', sequenceStep: 1, sequenceTheme: null,
    codigo: 'KAVOD-01-FUISTEMUJER', estado: 'proximamente',
    season: 'ordinario', seasonSecondary: null,
    title: 'Fuiste Hecha Mujer', basadoEn: 'más de 7 mujeres de la Biblia',
    conceptoCentral: 'El genio femenino como obra maestra y pilar de la creación.',
    image: fuisteMujer,
    bloques: [
      { title: 'Más que un complemento', text: 'Repasar la historia de las mujeres clave en la Biblia para derribar el mito de que la mujer es un "plan B". Eres la pieza integral que le da sentido a la vida misma.' },
      { title: 'Fuerza y resiliencia divina', text: 'Notar cómo Dios ha usado la intuición, la fortaleza y la capacidad de amar de la mujer para cambiar el rumbo de la historia de la salvación, y cómo espera hacer lo mismo contigo hoy.' },
    ],
    chipsLabel: null, chips: null,
  },
  {
    id: 'eva', category: 'Retiro', sequence: 'derej-kavod', sequenceStep: 2, sequenceTheme: 'Identidad y dignidad',
    codigo: 'KAVOD-02-EVA', estado: 'proximamente',
    season: 'ordinario', seasonSecondary: ['cuaresma'],
    title: 'Eva', basadoEn: 'Eva, la primera mujer',
    conceptoCentral: 'Antes de la caída, hubo una obra maestra: entender tu dignidad original.',
    image: eva,
    bloques: [
      { title: 'Formada, no improvisada', text: 'Eva no es un accesorio de Adán; es la culminación de la creación. Recuperar la dignidad que antecede a cualquier herida o mentira recibida.' },
      { title: 'La mentira más antigua', text: 'La serpiente no ataca el cuerpo, ataca la identidad: "¿de verdad dijo Dios...?". Reconocer cómo esa misma mentira sigue operando hoy.' },
      { title: 'De la vergüenza a la promesa', text: 'Aun en la caída, Dios no abandona: promete descendencia que aplastará al mal. Tu historia con heridas no es el final de tu identidad.' },
    ],
    chipsLabel: null, chips: null,
  },
  {
    id: 'betania', category: 'Retiro', sequence: 'derej-kavod', sequenceStep: 5, sequenceTheme: 'Trabajo y vocación',
    codigo: 'KAVOD-05-BETANIA', estado: 'proximamente',
    season: 'ordinario', seasonSecondary: ['cuaresma'],
    title: 'Betania', basadoEn: 'Marta y María, hermanas de Lázaro',
    conceptoCentral: 'Servir con las manos y creer con el corazón no son caminos distintos.',
    image: betania,
    bloques: [
      { title: 'La que se mueve por amor', text: 'Marta no es "la que no entendió"; es la que abre su casa, organiza y sirve. Dignificar el trabajo, la logística y el servicio como vocación, no como distracción.' },
      { title: '"Sí creo" antes del milagro', text: 'En la resurrección de Lázaro es Marta quien hace la confesión de fe más clara del Evangelio: "Yo creo que tú eres el Cristo". El trabajo no compite con la fe: la sostiene.' },
      { title: 'Ordenar la casa sin perder el centro', text: 'Aprender de su corrección en Lucas 10 sin borrar su fortaleza en Juan 11: el equilibrio entre hacer y estar.' },
    ],
    chipsLabel: null, chips: null,
  },
  {
    id: 'sicar', category: 'Retiro', sequence: 'derej-kavod', sequenceStep: 4, sequenceTheme: 'Amor y afectividad',
    codigo: 'KAVOD-04-SICAR', estado: 'proximamente',
    season: 'cuaresma', seasonSecondary: null,
    title: 'Sicar', basadoEn: 'la mujer samaritana en el pozo de Sicar',
    conceptoCentral: 'Dejar de buscar en pozos equivocados el amor que solo Dios puede saciar.',
    image: sicar,
    bloques: [
      { title: 'Cinco pozos y una sed real', text: 'La Samaritana ha buscado amor en cinco relaciones fallidas. Nombrar los "pozos" donde hemos buscado afecto sin encontrar saciedad.' },
      { title: 'Vista, no juzgada', text: 'Jesús conoce toda su historia y no la usa para condenarla, sino para revelarse. La afectividad sana empieza cuando te sientes verdaderamente vista.' },
      { title: 'De la vergüenza al anuncio', text: 'La misma mujer que escondía su historia se convierte en la primera evangelizadora de Samaria. Tu historia afectiva puede ser también tu misión.' },
    ],
    chipsLabel: null, chips: null,
  },
  {
    id: 'rut', category: 'Retiro', sequence: 'derej-kavod', sequenceStep: 3, sequenceTheme: 'Familia',
    codigo: 'KAVOD-03-RUT', estado: 'proximamente',
    season: 'ordinario', seasonSecondary: null,
    title: 'Rut', basadoEn: 'el libro de Rut',
    conceptoCentral: 'La audacia de la lealtad y el salto de fe hacia lo desconocido.',
    image: ruth,
    bloques: [
      { title: 'Dejar la zona de confort', text: 'Rut dejó su tierra y sus dioses por lealtad a Noemí. Este retiro es un llamado a la fidelidad radical cuando la vida se pone difícil: "A donde tú vayas, yo iré".' },
      { title: 'Recoger las sobras con dignidad', text: 'Encontrar la redención y la gracia de Dios en el trabajo humilde y diario, confiando en que Él orquesta los "encuentros casuales" (como el de Booz) para nuestro rescate.' },
    ],
    chipsLabel: null, chips: null,
  },
  {
    id: 'judit', category: 'Retiro', sequence: 'derej-kavod', sequenceStep: 6, sequenceTheme: 'Amistad, sororidad y misión',
    codigo: 'KAVOD-06-JUDIT', estado: 'proximamente',
    season: 'ordinario', seasonSecondary: null,
    title: 'Judit', basadoEn: 'Judit, heroína de Israel',
    conceptoCentral: 'La valentía de una mujer decidida puede rescatar a todo un pueblo.',
    image: judit,
    bloques: [
      { title: 'Sororidad antes de la batalla', text: 'Judit no actúa sola: se apoya en su sierva Abrá y en las mujeres de su casa antes de enfrentar al enemigo. La misión grande nace de la comunidad pequeña y leal.' },
      { title: 'Los dones puestos al servicio de la misión', text: 'Judit usa cada uno de sus dones sin vergüenza, con un propósito claro: proteger a los suyos. Dignificar los talentos propios como herramientas de misión.' },
      { title: 'Una mujer, una ciudad salvada', text: 'Su valentía silenciosa cambia el destino de Israel sin necesitar ejército propio. Entender la fuerza discreta y decidida como una forma legítima de liderazgo.' },
    ],
    chipsLabel: null, chips: null,
  },

  // --- Retiros individuales (fuera de secuencia) — reclasificados en Dérej Jaím ---
  {
    id: 'samuel', category: 'Retiro', sequence: null, sequenceStep: null, sequenceTheme: null,
    derej: 'jaim', codigo: 'JAIM-SAMUEL', estado: 'proximamente',
    season: 'ordinario', seasonSecondary: null,
    title: 'Samuel', basadoEn: 'los dos libros de Samuel',
    conceptoCentral: 'Afinar la frecuencia para escuchar tu llamado específico.',
    image: samuel,
    bloques: [
      { title: '"Habla, Señor"', text: 'Cortar con el ruido ("Escucha, Señor, que tu siervo está hablando") para pasar a la verdadera disposición de Samuel.' },
      { title: 'La brújula vocacional', text: 'Una guía práctica, espiritual y sin misticismos baratos para el discernimiento. No hay caminos genéricos; aquí vienes a descubrir para qué terreno estás diseñado.' },
    ],
    chipsLabel: 'Caminos vocacionales', chips: ['Laical', 'Religiosa', 'Sacerdotal', 'Matrimonial'],
  },
  {
    id: 'tengo-sed', category: 'Retiro', sequence: null, sequenceStep: null, sequenceTheme: null,
    derej: 'jaim', codigo: 'JAIM-TENGOSED', estado: 'proximamente',
    season: 'cuaresma', seasonSecondary: null,
    title: 'Tengo Sed', basadoEn: 'la sed que Dios tiene del amor de su criatura',
    conceptoCentral: 'La escandalosa sed que Dios tiene por ti.',
    image: tengoSed,
    bloques: [
      { title: 'El Creador mendigando', text: 'Es la paradoja más grande del cristianismo: el Dios que creó los océanos está sediento del amor de su criatura. No quiere solo tu obediencia; te desea a ti.' },
      { title: 'Basta de tomar de charcos', text: 'Usando la analogía de la Samaritana en el pozo de Sicar, este retiro confronta nuestra manía de buscar satisfacción en relaciones, éxito o validación, cuando nuestra "deshidratación existencial" solo se cura con el Agua Viva.' },
      { title: 'El pozo de Jacob', text: 'Así como esa agua sostuvo a Israel en el desierto, la gracia de Cristo es el único recurso inagotable para no desfallecer en la vida diaria.' },
    ],
    chipsLabel: null, chips: null,
  },
  {
    id: 'ultimo-rey', category: 'Retiro', sequence: null, sequenceStep: null, sequenceTheme: null,
    derej: 'jaim', codigo: 'JAIM-ULTIMOREY', estado: 'proximamente',
    season: 'ordinario', seasonSecondary: ['adviento'],
    title: 'El Último Rey', basadoEn: 'el Apocalipsis',
    conceptoCentral: 'El apocalipsis personal y la urgencia de la conversión.',
    image: ultimoRey,
    bloques: [
      { title: 'Quitar el velo', text: 'Apocalipsis significa "revelación". Es hora de quitarle el velo a tu fe tibia. Un llamado frontal, profundo y sin anestesia a la conversión individual.' },
      { title: 'El cuarto de guerra', text: 'Redescubrir la confesión y la penitencia no como un tribunal de culpa, sino como la sala de reconciliación donde te alineas con el Rey.' },
      { title: 'Efecto dominó', text: 'Tu santidad no es un proyecto privado. Entender que tu "sí" a Cristo es la pieza clave para la salvación de las personas que te rodean. Si tú te hundes, te llevas a otros.' },
    ],
    chipsLabel: null, chips: null,
  },
  {
    id: 'shema', category: 'Retiro', sequence: null, sequenceStep: null, sequenceTheme: null,
    derej: 'mesharet', codigo: 'MESHARET-SHEMABAR', estado: 'proximamente',
    season: 'ordinario', seasonSecondary: null,
    title: 'Shemá Bar · Adoración en movimiento', basadoEn: 'David, Asaf, Hemán y Jedutún, Miriam hermana de Moisés, los hijos de Coré y los levitas',
    conceptoCentral: 'La adoración no es un pasatiempo dominical; es una posición de combate.',
    image: shema,
    bloques: [
      { title: 'El ADN del levita', text: 'Basado en los grandes adoradores (David, Asaf, Hemán, Jedutún), entenderemos que el talento musical, vocal y dancístico no es para lucirse, es munición pesada y ofrenda directa al cielo.' },
      { title: 'Teología en la práctica', text: 'Aterrizaremos las encíclicas Musicae Sacrae y Sacrosanctum Concilium para que dejen de ser documentos empolvados y se conviertan en la partitura de nuestro ministerio.' },
      { title: 'El peso del coro', text: 'Si el coro no ora, solo hace ruido. Comprenderemos la función ministerial real: llevar a una asamblea entera a la presencia de Dios.' },
    ],
    chipsLabel: 'Figuras bíblicas', chips: ['David', 'Asaf', 'Hemán', 'Jedutún', 'Miriam, hermana de Moisés', 'Los hijos de Coré', 'Levitas'],
  },
  {
    id: 'emmanuel', category: 'Retiro', sequence: null, sequenceStep: null, sequenceTheme: null,
    derej: 'jaim', codigo: 'JAIM-EMMANUEL', estado: 'proximamente',
    season: 'adviento', seasonSecondary: null,
    title: 'Emmanuel', basadoEn: 'las profecías mesiánicas del Antiguo Testamento',
    conceptoCentral: 'La promesa más antigua de la humanidad estaba a punto de cumplirse: Dios mismo vendría a rescatarnos.',
    image: emmanuel,
    bloques: [
      { title: 'La promesa en medio de la ruina', text: 'Desde el Génesis, Dios promete un descendiente que aplastará el mal. Recorrer cómo esa promesa se sostiene generación tras generación aun en medio del fracaso humano.' },
      { title: 'La profecía que se atrevió a nombrar el lugar', text: 'Isaías y Miqueas anuncian con siglos de anticipación el nombre, el linaje y hasta el pueblo del Mesías. Dios no improvisa: cumple lo que promete, en sus tiempos.' },
      { title: '"Dios con nosotros"', text: 'Emmanuel no es solo un nombre, es una dirección: Dios ya no observa desde lejos, decide habitar contigo. Vivir el Adviento como la espera activa de esa cercanía.' },
    ],
    chipsLabel: null, chips: null,
  },
  {
    id: 'dos-hermanos', category: 'Retiro', sequence: null, sequenceStep: null, sequenceTheme: null,
    derej: 'jaim', codigo: 'JAIM-DOSHERMANOS', estado: 'proximamente',
    season: 'ordinario', seasonSecondary: ['cuaresma'],
    title: 'Dos Hermanos', basadoEn: 'la dualidad de las decisiones, la voluntad y las acciones en distintos pares de hermanos de la Escritura',
    conceptoCentral: 'Dos hermanos, el mismo origen, el mismo llamado: lo que cambia el destino es la decisión, no la sangre.',
    image: dosHermanos,
    bloques: [
      { title: 'Caín y Abel: la ofrenda que delata el corazón', text: 'Ambos ofrecen algo a Dios, pero solo uno ofrece con el corazón entero. Confrontar la diferencia entre cumplir un rito y entregar de verdad lo mejor que tienes.' },
      { title: 'José y Benjamín: crecer más allá de ser "el favorito"', text: 'Los dos hijos amados de Jacob no se definen por el cariño que reciben, sino por la fidelidad que construyen cuando nadie los está mirando ni favoreciendo.' },
      { title: 'El Hijo Pródigo y el Hijo Mayor: dos formas de estar lejos del Padre', text: 'Uno se pierde en el pecado evidente; el otro se pierde en la obediencia amargada que nunca entra a la fiesta. Ambos necesitan la misma gracia.' },
      { title: 'Esaú y Jacob: lo que vale una bendición', text: 'Uno vende su primogenitura por un plato de comida; el otro la obtiene con engaño. Ninguno gana limpio: aprender que atajos y desprecios tienen consecuencias que duran generaciones.' },
      { title: 'Los hijos de la parábola (Mt 21): entre el decir y el hacer', text: 'Uno dice que sí y no va a la viña; el otro dice que no y termina yendo. Jesús mide la obediencia real, no la respuesta que suena bien.' },
    ],
    chipsLabel: 'Parejas de hermanos',
    chips: ['Caín y Abel', 'José y Benjamín', 'Hijo Pródigo e Hijo Mayor', 'Esaú y Jacob', 'Los hijos de la parábola (Mt 21)'],
  },
  {
    id: 'barrabas', category: 'Retiro', sequence: null, sequenceStep: null, sequenceTheme: null,
    derej: 'jaim', codigo: 'JAIM-BARRABAS', estado: 'proximamente',
    season: 'cuaresma', seasonSecondary: null,
    title: 'Barrabás', basadoEn: 'Barrabás, el ladrón y asesino que el pueblo decidió liberar en lugar de Jesús',
    conceptoCentral: 'Preferimos casi cualquier cosa antes que a Jesús; y aun así, Él sigue dispuesto a tomar nuestro lugar.',
    image: barrabas,
    bloques: [
      { title: 'El sentido de la Cuaresma', text: 'Este relato es la síntesis cruda de la Cuaresma: un inocente condenado, un culpable liberado. Entender los 40 días como el tiempo para mirar de frente ese intercambio.' },
      { title: 'Salvado por el que toma tu condena', text: 'Jesús no es solo ejemplo, es sustituto: carga la sentencia que era nuestra para que la libertad de Barrabás pudiera ser también la nuestra.' },
      { title: '"Suéltanos a Barrabás"', text: 'La multitud tenía a la Justicia frente a sus ojos y prefirió al criminal. Reconocer cuántas veces seguimos eligiendo cualquier cosa antes que a Cristo.' },
      { title: 'Cuando señalamos con el dedo', text: 'No hicieron falta clavos para condenarlo: bastaron gritos, indiferencia y actitudes cotidianas. Examinar cómo seguimos gritando "¡crucifícalo!" sin darnos cuenta, con gestos de todos los días.' },
      { title: 'Los mismos ojos de amor', text: 'Ni en el momento de ser cambiado por un asesino, Jesús deja de mirar con amor. Esa mirada sigue dispuesta a dar la vida por ti, hoy mismo.' },
    ],
    chipsLabel: null, chips: null,
  },

  // --- Talleres — reclasificados en Dérej Jaím ---
  {
    id: 'golgota', category: 'Taller', sequence: null, sequenceStep: null, sequenceTheme: null,
    derej: 'jaim', codigo: 'JAIM-GOLGOTA', estado: 'proximamente',
    season: 'cuaresma', seasonSecondary: ['pascua'],
    title: 'Gólgota', basadoEn: 'la Pasión, Muerte y Resurrección de Cristo',
    conceptoCentral: 'La redención del fracaso humano a través de un amor brutal e ineludible.',
    image: golgota,
    bloques: [
      { title: 'El giro de trama (Felix Culpa)', text: 'Sí, Eva por andar de "inventada" nos costó el Edén, pero provocó la mayor historia de rescate: nos trajo a Cristo. El Gólgota no es solo un dato histórico, es la tumba de Adán (la vieja naturaleza) y la cuna del hombre nuevo.' },
      { title: 'Tú eres un Gólgota', text: 'Todos tenemos una zona de desastre, áreas de pecado y fracaso. El retiro te lleva a entender que exactamente ahí, donde huele a muerte, es donde Dios planta la cruz para que brote la vida.' },
      { title: 'La anatomía del sacrificio', text: 'No es un amor romántico de película; es el poema crudo de Isaías 53. Es entender el dolor de la separación que causa nuestro pecado y mirar de frente el precio que Dios pagó para reconciliarnos. No hay gracia barata.' },
    ],
    chipsLabel: null, chips: null,
  },
  {
    id: 'esclava-senor', category: 'Taller', sequence: null, sequenceStep: null, sequenceTheme: null,
    derej: 'mesharet', codigo: 'MESHARET-ESCLAVASENOR', estado: 'proximamente',
    season: 'adviento', seasonSecondary: null,
    title: 'Esclava del Señor', basadoEn: 'María, madre de Jesús',
    conceptoCentral: 'La fuerza arrolladora de la obediencia.',
    image: esclavaSenor,
    bloques: [
      { title: 'El "Aquí estoy" original', text: 'Ser "esclava" o siervo de Dios no es ser un tapete; es la muestra más grande de libertad y fortaleza. Es entregar el control absoluto a Quien sabe hacer las cosas mejor.' },
      { title: 'Servicio que incomoda', text: 'Profundizar en lo que implica un ministerio real. Entregarse al prójimo de una forma que desorganice tu vida para bien, imitando el servicio incondicional de María.' },
    ],
    chipsLabel: null, chips: null,
  },
  {
    id: 'sabios-oriente', category: 'Taller', sequence: null, sequenceStep: null, sequenceTheme: null,
    derej: 'mesharet', codigo: 'MESHARET-SABIOSORIENTE', estado: 'proximamente',
    season: 'adviento', seasonSecondary: null,
    title: 'Sabios del Oriente', basadoEn: 'los Reyes Magos',
    conceptoCentral: 'La sabiduría de dar lo mejor que tienes en la vida ordinaria.',
    image: sabiosOriente,
    bloques: [
      { title: 'Los dones en el 2026', text: 'Ya no traemos oro, incienso y mirra; traemos nuestro tiempo, nuestra atención y nuestros recursos. Asimilar qué significa realmente ofrendar al prójimo hasta que cueste.' },
      { title: 'La estrella en el asfalto', text: 'Dejar de esperar zarzas ardientes y aprender a reconocer a Dios disfrazado en la monotonía de la vida diaria y en la necesidad del otro.' },
    ],
    chipsLabel: null, chips: null,
  },

  // --- Adoraciones Eucarísticas — reclasificadas en Dérej Jaím ---
  {
    id: 'camino-belen', category: 'Adoración', sequence: null, sequenceStep: null, sequenceTheme: null,
    derej: 'jaim', codigo: 'JAIM-CAMINOBELEN',
    season: 'adviento', seasonSecondary: null,
    title: 'Camino a Belén', basadoEn: 'el camino de los pastores y los Reyes Magos hacia Belén',
    conceptoCentral: 'Antes de llegar al pesebre, hay que atreverse a caminar en la oscuridad guiados por una promesa.',
    image: caminoBelen,
    bloques: [
      { title: 'La misma estrella, otro desierto', text: 'Como los magos, avanzamos por tramos donde no se ve el destino completo, solo el siguiente paso iluminado. Una noche de adoración para volver a ponerse en camino hacia Cristo presente en la Eucaristía.' },
      { title: 'Silencio antes del Gloria', text: 'Antes del anuncio a los pastores, hubo noche, frío y espera. Aprender a habitar la espera del Adviento sin llenarla de ruido.' },
      { title: 'Llegar con las manos vacías', text: 'Ni los pastores ni los magos llegaron con méritos, llegaron con hambre de encontrarlo. Adorar sin necesitar tener algo que ofrecer primero.' },
    ],
    chipsLabel: null, chips: null,
  },
  {
    id: 'cenaculo', category: 'Adoración', sequence: null, sequenceStep: null, sequenceTheme: null,
    derej: 'jaim', codigo: 'JAIM-CENACULO', estado: 'proximamente',
    season: 'pascua', seasonSecondary: ['cuaresma'],
    title: 'Cenáculo', basadoEn: 'la institución de la Eucaristía en la Última Cena',
    conceptoCentral: 'La noche en que Cristo decidió quedarse para siempre en pan y vino.',
    image: cenaculo,
    bloques: [
      { title: 'La despedida que no fue despedida', text: 'En la Última Cena, Jesús no se aleja: inventa una forma de quedarse. Adorar la Eucaristía como la respuesta de Dios a no dejarnos solos.' },
      { title: '"Hagan esto en memoria mía"', text: 'No fue una sugerencia, fue un mandato que se repite en cada misa desde entonces. Entender la adoración como continuación de esa misma noche.' },
      { title: 'Del cenáculo al sagrario', text: 'La misma presencia que compartió mesa con los apóstoles está hoy en el sagrario, disponible y esperando. Aprender a entrar al cenáculo cada vez que entramos a la capilla.' },
    ],
    chipsLabel: null, chips: null,
  },

  // --- Dérej Mesharét · Camino del Servidor (catálogo redactado) ---
  {
    id: 'carbon-encendido', category: 'Taller', sequence: null, sequenceStep: null, sequenceTheme: null,
    derej: 'mesharet', codigo: 'MESHARET-PREDICADORES', estado: 'proximamente',
    season: 'ordinario', seasonSecondary: null,
    title: 'El Carbón Encendido · Formación de Predicadores', basadoEn: 'el profeta Isaías (Is 6:1-8)',
    conceptoCentral: 'Nadie tiene derecho a hablar en nombre de Dios por mérito propio: primero hay que dejarse purificar.',
    image: mesharetPredicadores,
    bloques: [
      { title: 'Labios impuros', text: 'Isaías se sabe de "labios impuros" en medio de un pueblo de labios impuros, y aun así es enviado a hablar. Reconocer que ningún predicador se para en el ambón porque lo merece, sino porque fue llamado.' },
      { title: 'El carbón que quema para sanar', text: 'Un serafín toca sus labios con un carbón encendido antes de que pueda decir una sola palabra. Entender la purificación —confesión, oración, vida limpia— como el paso obligado antes de anunciar, no un trámite opcional.' },
      { title: '"Aquí estoy, envíame"', text: 'Solo después de ser tocado por el fuego, Isaías se ofrece voluntario. Descubrir que la disposición a predicar nace de haber sido purificado primero, no de tener las mejores palabras.' },
    ],
    chipsLabel: null, chips: null,
  },
  {
    id: 'brazos-no-se-cansan', category: 'Taller', sequence: null, sequenceStep: null, sequenceTheme: null,
    derej: 'mesharet', codigo: 'MESHARET-INTERCESION', estado: 'proximamente',
    season: 'ordinario', seasonSecondary: null,
    title: 'Los Brazos que no se Cansan · Intercesión y Oración', basadoEn: 'Moisés, Aarón y Hur (Éx 17:8-13)',
    conceptoCentral: 'Interceder no es orar en solitario: es sostener los brazos de otro hasta que la batalla termine.',
    image: mesharetIntercesion,
    bloques: [
      { title: 'Los brazos que se cansan', text: 'Mientras Josué pelea en el valle, Moisés ora con los brazos en alto en la montaña — y sus brazos, como los de cualquiera, se cansan. Aceptar que ningún intercesor aguanta solo para siempre.' },
      { title: 'Aarón y Hur no oraron por él, lo sostuvieron', text: 'La solución no fue relevar a Moisés ni orar en su lugar: fue sostener físicamente sus brazos hasta la puesta del sol. Entender la intercesión de ministerio como sostener a otro, no sustituirlo.' },
      { title: 'Mientras haya brazos en alto, hay victoria', text: 'La batalla se ganaba o perdía según los brazos de Moisés estuvieran arriba o abajo. Vivir la certeza de que la oración sostenida en comunidad —no aislada— sí cambia lo que pasa en el valle.' },
    ],
    chipsLabel: null, chips: null,
  },
  {
    id: 'altar-puerta-abierta', category: 'Taller', sequence: null, sequenceStep: null, sequenceTheme: null,
    derej: 'mesharet', codigo: 'MESHARET-HOSPITALIDAD', estado: 'proximamente',
    season: 'ordinario', seasonSecondary: null,
    title: 'El Altar de la Puerta Abierta · Hospitalidad', basadoEn: 'Abraham y los tres visitantes (Gn 18:1-8)',
    conceptoCentral: 'La persona que recibes en la puerta puede ser Cristo disfrazado de desconocido.',
    image: mesharetHospitalidad,
    bloques: [
      { title: 'Urgencia, no obligación', text: 'Abraham corre al encuentro de tres desconocidos, no camina hacia ellos. Aprender que la hospitalidad real se nota en la urgencia con la que recibimos, no en el mínimo cumplido por cortesía.' },
      { title: 'Dar lo mejor, no lo que sobra', text: 'Manda preparar el mejor becerro y el pan más fino para gente que ni siquiera conocía. Entender el servicio de recepción como una ofrenda de lo mejor que tienes, no de las sobras.' },
      { title: 'Sin saber a quién recibía', text: 'Abraham no sabía que recibía a Dios mismo; solo supo recibir bien. Descubrir que la hospitalidad no depende de reconocer primero al huésped importante: es un acto de fe antes que de simpatía.' },
    ],
    chipsLabel: null, chips: null,
  },
  {
    id: 'casa-de-mi-padre', category: 'Taller', sequence: null, sequenceStep: null, sequenceTheme: null,
    derej: 'mesharet', codigo: 'MESHARET-MONAGUILLOS', estado: 'proximamente',
    season: 'ordinario', seasonSecondary: null,
    title: 'En la Casa de mi Padre · Monaguillos', basadoEn: 'el Niño Jesús en el Templo (Lc 2:41-49)',
    conceptoCentral: 'El altar no es una tarea que se cumple: es la casa donde uno se siente en casa.',
    image: mesharetMonaguillos,
    bloques: [
      { title: '"¿No sabían que debía estar en la casa de mi Padre?"', text: 'A sus doce años, Jesús no se queda en el Templo por obligación ni por accidente: se queda porque ahí está en casa. Ayudar a que cada monaguillo sienta el altar como propio desde niño, no como un deber que se le asigna.' },
      { title: 'Servir sin dejar de ser niño', text: 'Jesús no deja de ser niño por estar entre los maestros; simplemente descubre temprano dónde pertenece. El servicio en el altar no exige madurar antes de tiempo: exige presencia y asombro.' },
    ],
    chipsLabel: null, chips: null,
  },
  {
    id: 'lo-que-oiste-de-mi', category: 'Taller', sequence: null, sequenceStep: null, sequenceTheme: null,
    derej: 'mesharet', codigo: 'MESHARET-CATEQUISTAS', estado: 'proximamente',
    season: 'ordinario', seasonSecondary: null,
    title: 'Lo que Oíste de Mí, Encomiéndalo · Catequistas', basadoEn: 'Pablo y Timoteo (2 Tim 2:1-2)',
    conceptoCentral: 'Enseñar la fe no es dar opinión propia: es custodiar y entregar fielmente lo que se recibió.',
    image: mesharetCatequistas,
    bloques: [
      { title: 'Una cadena, no una invención', text: 'Pablo no le pide a Timoteo que invente doctrina nueva, sino que transmita lo que oyó de él a otros que a su vez sabrán enseñar a otros. Entender la catequesis como eslabón de una cadena viva, no como espacio para la opinión personal.' },
      { title: 'Custodiar antes de entregar', text: 'Solo se puede encomendar con fidelidad lo que primero se guardó con cuidado. Vivir la formación del catequista como un proceso de custodiar el depósito de la fe antes de enseñarlo.' },
      { title: 'Hombres fieles capaces de enseñar a otros', text: 'El objetivo final no es que Timoteo enseñe bien, sino que forme a quienes también sabrán enseñar. Descubrir que un buen catequista multiplica catequistas, no solo transmite contenidos.' },
    ],
    chipsLabel: null, chips: null,
  },
  {
    id: 'manos-llenas-espiritu', category: 'Taller', sequence: null, sequenceStep: null, sequenceTheme: null,
    derej: 'mesharet', codigo: 'MESHARET-BETSALEL', estado: 'proximamente',
    season: 'ordinario', seasonSecondary: null,
    title: 'Manos Llenas del Espíritu · Betsalel', basadoEn: 'Betsalel (Éx 31:1-11)',
    conceptoCentral: 'El trabajo técnico hecho con excelencia también es ministerio ungido, no apoyo secundario.',
    image: mesharetBetsalel,
    bloques: [
      { title: 'Lleno del Espíritu para tallar y construir', text: 'Dios no llena a Betsalel del Espíritu para profetizar, sino para diseñar, tallar y construir el Tabernáculo con sus propias manos. Reconocer que el talento técnico y artístico también es un don que Dios llena de sí mismo.' },
      { title: 'El servidor que nadie ve', text: 'Sonido, decoración, logística, diseño gráfico: el trabajo detrás de cámaras rara vez recibe aplausos, pero sostiene todo lo visible. Dar a estos servidores un lugar bíblico propio, no un rol "de apoyo".' },
      { title: 'Excelencia como acto de adoración', text: 'Betsalel no improvisó ni entregó lo mínimo: puso su mejor técnica al servicio del encuentro con Dios. Entender que hacer bien el trabajo técnico, con cuidado y detalle, también es una forma de adorar.' },
    ],
    chipsLabel: null, chips: null,
  },

  // --- Dérej Simjá · Camino de la Alegría (niños, formato Estaciones) ---
  // Primer lote (arquitectura §5.2): corte oficial Kínder (4-6) / Primaria (7-12).
  // Stub 'proximamente' — falta el documento formal completo (esquema de la §7:
  // Informativo/Generales/Contenido con Estaciones detalladas/Anexos) e imagen hero.
  {
    id: 'barca-de-pedro', category: null, sequence: null, sequenceStep: null, sequenceTheme: null,
    derej: 'simja', paso: null, codigo: 'SIMJA-BARCADEPEDRO', estado: 'proximamente', tipo: 'estaciones', temporadaLiturgica: null,
    season: 'ordinario', seasonSecondary: null, corte: 'primaria',
    title: 'La Barca de Pedro', basadoEn: 'la pesca milagrosa de Pedro (Lc 5:1-11)',
    conceptoCentral: 'Aunque no encuentres nada por tus propias fuerzas, si confías en Jesús la red se llena.',
    image: simjaBarcaDePedro,
    bloques: [
      { title: 'Un pececito cuenta la historia', text: 'Un pececito narrador que "vivió" la pesca milagrosa guía a los niños en primera persona: Pedro pescó toda la noche sin sacar nada, hasta que hizo caso a Jesús y tiró la red una vez más.' },
      { title: 'Redes, peces y una barca de cartón', text: 'Estación física de pesca con red y peces de tela dentro de una "barca" armada en el salón, manualidad de un pez con un mensaje adentro, y cuento dramatizado del milagro, cerrando con un encuentro breve ante Jesús Eucaristía ("Ven y sígueme").' },
      { title: 'Puente con Dérej Oz', text: 'El mismo pasaje se retoma después, más profundo, en el taller OZ-Pedro para jóvenes: el niño que vive esta historia en Simjá puede reencontrarla al crecer.' },
    ],
    chipsLabel: null, chips: null,
  },
  {
    id: 'arca-de-noe', category: null, sequence: null, sequenceStep: null, sequenceTheme: null,
    derej: 'simja', paso: null, codigo: 'SIMJA-ARCADENOE', estado: 'proximamente', tipo: 'estaciones', temporadaLiturgica: null,
    season: 'ordinario', seasonSecondary: null, corte: 'kinder',
    title: 'El Arca de Noé: Refugio Seguro', basadoEn: 'Noé y la promesa del arcoíris (Gn 6-9, versión simplificada)',
    conceptoCentral: 'Dios cuida de mí y cumple sus promesas.',
    image: simjaArcaDeNoe,
    bloques: [
      { title: 'Una paloma trae la rama de olivo', text: 'Una paloma guía a los niños de kínder por la historia sin entrar en juicio ni abstracciones sobre el pecado: solo el cuidado de Dios y la promesa concreta del arcoíris.' },
      { title: 'Animalitos de dos en dos y un arcoíris de manos', text: 'Clasificar animalitos de peluche "de dos en dos", pintura de manos formando un arcoíris, canto con movimientos, y cierre con una oración sencilla de agradecimiento.' },
    ],
    chipsLabel: null, chips: null,
  },
  {
    id: 'buen-pastor-ovejita-perdida', category: null, sequence: null, sequenceStep: null, sequenceTheme: null,
    derej: 'simja', paso: null, codigo: 'SIMJA-BUENPASTOR', estado: 'proximamente', tipo: 'estaciones', temporadaLiturgica: null,
    season: 'ordinario', seasonSecondary: null, corte: 'ambos',
    title: 'El Buen Pastor y la Ovejita Perdida', basadoEn: 'la parábola de la oveja perdida (Lc 15:3-7)',
    conceptoCentral: 'La Iglesia nunca deja de buscar a nadie.',
    image: simjaBuenPastor,
    bloques: [
      { title: 'Talia, la ovejita que se pierde', text: 'Talia se aleja del rebaño y es buscada sin descanso — la imagen que un niño entiende sin ninguna traducción conceptual: el miedo de perderse y la alegría de ser encontrado.' },
      { title: 'Buscar, tejer y ser cargado', text: 'Juego de "buscar la oveja perdida" escondida en el espacio, manualidad de una ovejita de algodón, dramatización con títeres del pastor buscando, y cierre donde cada niño "es cargado" simbólicamente sobre los hombros del pastor.' },
      { title: 'Un gancho para el que se siente lejos', text: 'Ideal también con niños que vienen de familias alejadas de la fe o en procesos de primera comunión: nadie es demasiado pequeño ni está demasiado lejos para que lo busquen.' },
    ],
    chipsLabel: null, chips: null,
  },
  {
    id: 'cinco-panes-dos-peces', category: null, sequence: null, sequenceStep: null, sequenceTheme: null,
    derej: 'simja', paso: null, codigo: 'SIMJA-CINCOPANES', estado: 'proximamente', tipo: 'estaciones', temporadaLiturgica: null,
    season: 'ordinario', seasonSecondary: null, corte: 'primaria',
    title: 'Los Cinco Panes y Dos Peces', basadoEn: 'la multiplicación de los panes (Jn 6:1-13)',
    conceptoCentral: 'Lo poco que tengo, puesto en manos de Jesús, alcanza para todos.',
    image: simjaCincoPanes,
    bloques: [
      { title: 'El niño que compartió su almuerzo', text: 'Es la única historia bíblica donde el protagonista es literalmente un niño: quien participa se identifica de forma directa con él, no solo lo observa.' },
      { title: 'Canasta de pan y reparto real', text: 'Manualidad de una "canasta de panes", juego de repartir algo (dulces, estampas) entre todo el grupo, cuento dramatizado, y cierre con reparto real de un pan bendecido.' },
    ],
    chipsLabel: null, chips: null,
  },
  {
    id: 'zaqueo-simja', category: null, sequence: null, sequenceStep: null, sequenceTheme: null,
    derej: 'simja', paso: null, codigo: 'SIMJA-ZAQUEO', estado: 'proximamente', tipo: 'estaciones', temporadaLiturgica: null,
    season: 'ordinario', seasonSecondary: null, corte: 'primaria',
    title: 'Zaqueo se Sube al Árbol', basadoEn: 'Zaqueo, el publicano de Jericó (Lc 19:1-10)',
    conceptoCentral: 'Aunque seas pequeño y nadie te vea, Jesús te busca y te llama por tu nombre.',
    image: simjaZaqueo,
    bloques: [
      { title: '"Yo era chiquito, como ustedes"', text: 'Zaqueo se narra en primera persona por su estatura, la misma que conecta literalmente con la de un niño que a menudo se siente "el chiquito" en su familia o grupo.' },
      { title: 'Trepar para ver mejor', text: 'Trepar con seguridad a una estructura tipo "árbol" para "ver mejor", manualidad de un árbol con el nombre propio en una hoja, y cierre donde el facilitador llama a cada niño por su nombre.' },
      { title: 'Puente con Dérej Oz', text: 'La misma figura ya tiene su propio taller en OZ-Zaqueo para jóvenes ("no hace falta que te vean para que Cristo te llame por tu nombre") — misma coherencia vertical que ya conecta Simjá y Oz a través de Pedro.' },
    ],
    chipsLabel: null, chips: null,
  },

  // --- Dérej Oz · Camino de la Fortaleza ---
  // Progresión sugerida en 5 bloques (catalogo_sugerido, no obligatorio):
  //   Bloque 1 Encuentro con Cristo:      1 Zaqueo · 2 Bartimeo · 3 Camino a Damasco
  //   Bloque 2 Discipulado/Amistad con Él: 4 Pedro · 5 Juan · 6 Joven Rico · 7 Tomás
  //   Bloque 3 Oración personal/comunitaria: 8 Emaús
  //   Bloque 4 Pasión/Cruz:                9 Getsemaní
  //   Bloque 5 Misión/Envío:               10 Pentecostés
  // Emaús/Pedro/Juan conservan su contenido íntegro (documento fuente); solo cambia `paso`.
  {
    id: 'emaus', category: null, sequence: null, sequenceStep: null, sequenceTheme: null,
    derej: 'oz', paso: 8, codigo: 'OZ-EMAUS', estado: 'publicado', tipo: 'taller', temporadaLiturgica: null,
    season: 'pascua', seasonSecondary: null,
    title: 'Emaús', basadoEn: 'los discípulos de Emaús',
    conceptoCentral: 'La oración no es un monólogo: es el camino en que Jesús nos alcanza, camina con nosotros y se nos revela partiendo el pan.',
    image: ozEmaus,
    bloques: [
      { title: 'Un acercamiento amistoso a la oración', text: 'Un taller práctico para descubrir tres formas concretas de orar —petición, acción de gracias e intercesión— y sembrar una relación constante con Dios.' },
      { title: 'Para quien empieza o retoma el camino', text: 'Pensado para jóvenes que no han profundizado en su fe o que han puesto en pausa su caminar con Cristo, con al menos un sacramental recibido.' },
    ],
    temas: [
      {
        titulo: 'Camino de Emaús',
        resumen: 'A partir del relato de los discípulos de Emaús, este tema muestra que no reconocer a Jesús no depende de los ojos sino del corazón cerrado, y que basta abrirse al diálogo y al partir del pan para descubrir su presencia real.',
        puntos: [
          'La actividad introductoria busca que los jóvenes experimenten, sin poder ver, que reconocer al otro —y a Jesús— depende de algo más que la vista.',
          'El tema busca llevar a cada joven a reconocer que la oración no es un monólogo, sino un encuentro real que, una vez vivido, impulsa a compartirlo con otros.',
        ],
        evocacion: 'Lc 24:13-16 — dos discípulos caminan hacia Emaús discutiendo lo sucedido; Jesús se les acerca y camina con ellos, pero "tenían los ojos incapacitados para reconocerlo".',
        actividadIntroductoria: 'Actividad previa "Encuentra a tu equipo": en círculo concéntrico, los chicos se vendan los ojos, dan un paso a la derecha y deben identificar con quién conversan sin preguntar directamente quién es, en rondas de dos minutos, cambiando de pareja tres veces.',
        contenido: 'Se medita el pasaje de Emaús en cuatro partes (Lc 24:13-16, 17-24, 28-32, 33-35), estableciendo un paralelismo entre la actividad vendados y la ceguera de los discípulos: no reconocer a Jesús no depende solo de la vista, sino de los oídos y el cuerpo cerrados a sentir su presencia. Jesús pregunta no porque ignore lo sucedido, sino porque le interesa que se lo cuenten personalmente. Al partirse el pan "se les abrieron los ojos", y de inmediato salen a anunciarlo — la oración no es un monólogo, es un encuentro real que se comparte.',
        actividadesAdicionales: null,
        simbolos: ['Vendas o rectángulos de tela (la ceguera que se convierte en encuentro)'],
        reflexion: '"¿No sentíamos arder nuestro corazón mientras nos hablaba por el camino?" — el ardor del corazón como señal de una presencia real, aunque no se vea ni se escuche con los sentidos.',
      },
      {
        titulo: 'Alianza Nueva — Analogía',
        resumen: 'Mediante la analogía del llanto a solas que termina en consuelo, este tema ayuda a los jóvenes a reconocer sus propias dificultades para orar y a descubrir que la necesidad de ser consolado es, en sí misma, una forma de oración.',
        puntos: [
          'La dinámica de las premisas busca que cada joven identifique con honestidad sus propias barreras para orar: no saber qué decir, sentir que Dios no responde, distraerse.',
          'La actividad del globo busca que cada joven entregue simbólicamente esa dificultad, confiando en que su oración —por sencilla que sea— será escuchada.',
        ],
        evocacion: 'Momento de conectar lo vivido por los peregrinos de Emaús con la propia experiencia de dolor, sufrimiento o soledad de cada joven.',
        actividadIntroductoria: null,
        contenido: 'Analogía de llorar a solas en la habitación con la puerta cerrada: el llanto que parece no tener respuesta, hasta que —sin darnos cuenta— el corazón se calma y ese calor que queda no es dolor sino consuelo. Ese consuelo es Jesús, que se acerca incluso cuando más solos pensamos estar (Mt 6:6). La necesidad tan natural de ser consolado es ya, en sí misma, una oración.',
        actividadesAdicionales: 'Actividades reflexivas: los chicos cierran los ojos y levantan la mano si se identifican con 8 premisas sobre su experiencia de oración (les cuesta iniciar/terminar, no saben qué decir, se disocian, sienten que no responde, etc.). Después escriben en post-its lo que el tema les exhorta a expresar, los meten en un globo dorado y lo inflan.',
        simbolos: ['Globo dorado con post-its dentro (la oración que se guarda y se entrega)', 'Post-its y plumas'],
        reflexion: '"Cada latido de tu corazón es un te amo de Dios" — cuando no se siente nada al orar, basta con sentir el propio corazón para saber que Él está presente y acompaña.',
      },
      {
        titulo: 'Eucaristía de Emaús',
        resumen: 'Este cierre invita a los jóvenes a vivir la oración como un diálogo real con Dios a través de la Palabra, entregando lo vivido en el taller y comprometiéndose a sostener la nueva alianza formada con Cristo.',
        puntos: [
          'La dinámica de abrir la Biblia al azar busca que cada joven experimente la oración como una conversación viva, donde Dios responde de forma concreta y personal.',
          'El cierre en grupo busca sellar el compromiso de que la nueva relación con Cristo iniciada en el taller permanezca y se sostenga en el tiempo.',
        ],
        evocacion: 'De pie y en círculo, se invoca al Espíritu Santo como quien impulsa a orar, no solo a hablar en soledad.',
        actividadIntroductoria: 'Al centro se coloca una caja grande de regalo dorada; cada joven entrega su oración (el globo) confiando en que será escuchada. Quienes quieran profundizar pueden acercarse a un grupo de intercesores.',
        contenido: 'Se preparan biblias para cada participante, quienes al querer una respuesta dicen "Habla Padre que tu hijo/hija te escucha" y abren la Biblia donde su corazón les dicte, leyendo el pasaje que más les llame la atención — vivencia de la oración como diálogo real, no monólogo.',
        actividadesAdicionales: 'Compartir en grupo la experiencia del taller y cerrar con oración final de acción de gracias, pidiendo que la nueva alianza formada con Cristo perdure.',
        simbolos: ['Caja grande de regalo dorada (la entrega de la oración)', 'Biblias abiertas al azar (la Palabra como respuesta viva)'],
        reflexion: 'Retomando a San Agustín: "Nuestro corazón está inquieto mientras no descanse en ti" — la oración es tener una relación con Jesús, no un monólogo.',
      },
    ],
    cronograma: [],
    chipsLabel: null, chips: null,
  },
  {
    id: 'pedro', category: null, sequence: null, sequenceStep: null, sequenceTheme: null,
    derej: 'oz', paso: 4, codigo: 'OZ-PEDRO', estado: 'publicado', tipo: 'taller', temporadaLiturgica: null,
    season: 'pascua', seasonSecondary: ['cuaresma'],
    title: 'Pedro, el discípulo firme', basadoEn: 'Simón Pedro, apóstol',
    conceptoCentral: 'La fuerza no está en no caer, sino en dejarse llamar de nuevo cada vez que se cae.',
    image: ozPedro,
    bloques: [
      { title: 'El camino de Simón a Pedro', text: 'Recorre el antes, el durante y el después de ser renombrado Pedro, como espejo de seguimiento para los temperamentos jóvenes y las inseguridades en la fe.' },
      { title: 'Para quien se siente lejos', text: 'Pensado para jóvenes que buscan profundizar su fe, especialmente quienes se sienten solos, no escuchados por Dios, o que se han alejado de Él.' },
    ],
    temas: [
      {
        titulo: 'Encuentro',
        resumen: 'A partir de la pesca milagrosa, este tema muestra que el encuentro real con Jesús no espera a que estemos exitosos o preparados, sino que llega en medio del fracaso cotidiano.',
        puntos: [
          'La dinámica de identificar al equipo por la voz busca que los jóvenes experimenten que reconocer a Jesús va más allá de lo evidente a los sentidos.',
          'El tema busca que cada joven reconozca que sus propios fracasos no son un obstáculo para el encuentro con Cristo, sino el lugar donde Él se hace presente.',
        ],
        evocacion: 'Lc 5:1-5 — Jesús enseña a las multitudes desde la barca de Simón y le pide echar las redes en la parte más profunda, después de una noche entera sin pescar nada.',
        actividadIntroductoria: 'Dinámica "Encuentra a tu equipo": en equipos de máximo 4, uno vendado debe identificar a su equipo guiándose solo por los sonidos y gritos que hacen para orientarlo.',
        contenido: 'Pedro era un pescador de unos 20 años con responsabilidades familiares y religiosas. Había fracasado toda la noche en su oficio, y aun así, cuando un desconocido le pide volver a intentarlo, Simón —incrédulo— obedece "porque tú lo pides". El encuentro con Jesús ocurre precisamente en medio del fracaso cotidiano, no fuera de él.',
        actividadesAdicionales: null,
        simbolos: ['La venda de ojos (identificar por la voz, no por la vista — como reconocer a Jesús más allá de lo evidente)'],
        reflexion: 'El encuentro real con Jesús no espera a que estemos exitosos o preparados: llega en medio de la noche sin pesca.',
      },
      {
        titulo: 'Llamado',
        resumen: 'Este tema muestra que Jesús conoce por completo la historia de cada joven y, aun así, lo llama y lo transforma, dándole una nueva identidad y misión.',
        puntos: [
          'La dinámica del dibujo transmitido busca que los jóvenes noten cómo una historia se distorsiona al pasar de mano en mano, para contrastarla con la historia que Dios sí transforma para bien.',
          'El tema busca que cada joven se reconozca llamado y renombrado por Dios más allá de su pasado, con la certeza de que todo pecador tiene un futuro.',
        ],
        evocacion: 'Lc 5:6-11 y Mt 16:13-19 — la pesca milagrosa hunde las barcas; Simón cae a los pies de Jesús reconociéndose pecador, y Jesús responde: "No temas, desde ahora serás pescador de hombres." Más tarde, ante la confesión "Tú eres el Cristo", Jesús le renombra Pedro.',
        actividadIntroductoria: 'Dinámica "Teléfono descompuesto gráfico": en fila, sin voltear, se transmite un dibujo simple dibujándolo con el dedo en la espalda del compañero de enfrente, hasta llegar al primero de la fila, quien lo reproduce en papel.',
        contenido: 'Jesús conoce el pasado, presente y futuro de Simón y aun así lo llama y lo transforma: "tú eres Pedro y sobre esta piedra edificaré mi iglesia, y las fuerzas del infierno no prevalecerán sobre ella." Todo santo tiene un pasado, y todo pecador un futuro.',
        actividadesAdicionales: null,
        simbolos: ['El dibujo que se transforma (a veces se distorsiona) al pasar de mano en mano, como la propia historia que Dios transforma'],
        reflexion: 'Todo santo tiene un pasado, y todo pecador un futuro.',
      },
      {
        titulo: 'Pasión y Muerte',
        resumen: 'Este tema confronta a los jóvenes con la negación y el miedo de Pedro, para mostrar que reconocer la propia fragilidad no es una derrota, sino el punto exacto donde Jesús sigue mirando con amor.',
        puntos: [
          'La dinámica del paliacate busca que los jóvenes experimenten de forma lúdica la fragilidad y la posibilidad de la caída que todos comparten.',
          'El tema busca que cada joven identifique sus propias negaciones o cobardías sin sentir que eso cierra la puerta a la mirada amorosa de Jesús.',
        ],
        evocacion: 'Mt 16:21-27 y Mc 14:27-31 — Pedro reprende a Jesús por anunciar su propia pasión ("¡Quítate de delante de mí, Satanás!") y más tarde promete no negarlo jamás, aunque Jesús predice sus tres negaciones.',
        actividadIntroductoria: 'Dinámica "Vidas individuales": cada joven lleva un paliacate atorado en el pantalón; el objetivo es quitarle el paliacate a los demás sin perder el propio. Quien lo pierde, queda eliminado.',
        contenido: 'Jesús reconoce la dureza que aún vive en el corazón de Pedro. Tras la negación, el peso de haberle fallado y el recuerdo de la mirada de Jesús queman a Pedro. El miedo invade a los discípulos y se esconden; Pedro reconoce su humanidad y su falla, pero su corazón herido duda de la resurrección anunciada.',
        actividadesAdicionales: null,
        simbolos: ['El paliacate que se pierde (la fragilidad y la caída que todos compartimos)'],
        reflexion: 'Reconocer la propia fragilidad —como Pedro— no es el final: es el punto exacto donde Jesús sigue mirando con amor.',
      },
      {
        titulo: 'Resurrección',
        resumen: 'A través de las tres preguntas que Jesús hace a Pedro junto al lago, este tema muestra cómo el amor de Cristo sana y restaura lo que la propia debilidad rompió.',
        puntos: [
          'La vivencia sensorial de la Pasión busca que los jóvenes se conecten corporalmente con el sufrimiento de Cristo antes de recibir el anuncio de su resurrección.',
          'El tema busca que cada joven reciba, como Pedro, la restauración del amor de Jesús frente a sus propias caídas, sin compararse con el camino de los demás.',
        ],
        evocacion: 'Jn 21:15-22 — junto al lago, Jesús pregunta tres veces a Simón Pedro "¿me amas?", y tres veces lo confirma en la misión de apacentar sus ovejas.',
        actividadIntroductoria: 'Dinámica "Pasión vivencial": con los ojos vendados y música de fondo, los jóvenes caminan descalzos sobre piedras, se arrodillan, reciben una corona de espinas, sienten golpes simulados de flagelación y presión en las manos como los clavos, cerrando con un momento de oración ante un crucifijo.',
        contenido: 'Pedro, escondido por miedo, se llena de gozo al saber a Jesús resucitado. Las tres preguntas de Jesús ("¿me amas?") sanan las tres negaciones. Cuando Pedro se compara con Juan, Jesús lo devuelve a lo esencial: "A ti qué te importa, ¡sígueme!"',
        actividadesAdicionales: null,
        simbolos: ['Corona de espinas, golpes simulados, presión en las manos (la Pasión revivida en el cuerpo)', 'Crucifijo para la oración final'],
        reflexion: 'Las tres preguntas de amor deshacen las tres negaciones — el amor de Jesús restaura lo que la propia debilidad rompió.',
      },
      {
        titulo: 'Envío',
        resumen: 'Este cierre cristaliza la misión concreta que Jesús confía a Pedro —apacentar, pastorear y anunciar— como horizonte al que cada joven también es enviado tras su propio proceso de encuentro y conversión.',
        puntos: [
          'El tema busca que los jóvenes comprendan que el llamado de Jesús no termina en el perdón recibido, sino que se traduce en una misión concreta a la que se es enviado.',
          'Busca infundir la certeza de que, como a Pedro, Dios sostiene con su gracia a quien decide seguir adelante después de la caída.',
        ],
        evocacion: null,
        actividadIntroductoria: null,
        contenido: 'Pedro recibe encomiendas concretas de Jesús: ser pescador de hombres, apacentar los corderos, pastorear las ovejas, extender la Palabra. Para Pedro la misión apenas comienza; se hace firme y avanza con la gracia de Dios mientras dirige el inicio de la Iglesia. (El documento fuente no especifica texto base ni dinámica para este tema — figura como "N/A" en el original.)',
        actividadesAdicionales: null,
        simbolos: [],
        reflexion: null,
      },
    ],
    cronograma: [],
    chipsLabel: null, chips: null,
  },
  {
    id: 'juan', category: null, sequence: null, sequenceStep: null, sequenceTheme: null,
    derej: 'oz', paso: 5, codigo: 'OZ-JUAN', estado: 'publicado', tipo: 'taller', temporadaLiturgica: null,
    season: 'pascua', seasonSecondary: ['cuaresma'],
    title: 'Juan, el discípulo amado', basadoEn: 'el apóstol Juan',
    conceptoCentral: 'Quedarse hasta el final, al pie de la cruz, es la medida más honda de la amistad con Cristo.',
    image: ozJuan,
    bloques: [
      { title: 'El camino del discípulo amado', text: 'Recorre el antes, el durante y el después de ser conocido como "el amado", como espejo de seguimiento para los temperamentos jóvenes y las inseguridades en la fe.' },
      { title: 'Para quien se siente lejos', text: 'Pensado para jóvenes que buscan profundizar su fe, especialmente quienes se sienten solos, no escuchados por Dios, o que se han alejado de Él.' },
    ],
    temas: [
      {
        titulo: 'Encuentro',
        resumen: 'A partir del primer encuentro de los discípulos con Jesús ("Venid y veréis"), este tema invita a los jóvenes a identificar su propio encuentro personal con Cristo como un momento fundacional y memorable.',
        puntos: [
          'La dinámica de anotar y buscar coincidencias en la hora busca que los jóvenes valoren lo específico y memorable de un encuentro real, como preparación para pensar en el propio encuentro con Cristo.',
          'El tema busca que cada joven reconozca e identifique la "hora" concreta de su propio encuentro con Jesús, tan real como una cita en el calendario.',
        ],
        evocacion: 'Jn 1:35-39 — Juan Bautista señala a Jesús como "el Cordero de Dios"; dos discípulos lo siguen y le preguntan dónde se hospeda. Jesús responde: "Venid y veréis", y se quedan con Él "porque era como la hora décima."',
        actividadIntroductoria: 'Dinámica "Coincidir": cada joven escribe una hora específica; durante un minuto buscan entre ellos a quién puso la misma hora. Quienes coinciden comparten la experiencia; quienes no, comparten qué se siente no haber coincidido.',
        contenido: 'El encuentro con Jesucristo es fundacional: deja una huella tan profunda que, años después, no se olvida ni la hora ni el día en que sucedió. Como decía Benedicto XVI, no se comienza a ser cristiano por una decisión ética o una gran idea, sino por el encuentro con una Persona que da un nuevo horizonte a la vida.',
        actividadesAdicionales: null,
        simbolos: ['La hora exacta anotada (la fecha del propio encuentro con Cristo, memorable como la "hora décima" de Juan)'],
        reflexion: 'Recordar la hora y el día del propio encuentro con Cristo, tan real como una cita en el calendario.',
      },
      {
        titulo: 'Llamado',
        resumen: 'Este tema muestra que el llamado de Jesús no se agota en un encuentro puntual, sino que invita a una relación permanente y cercana, de verdadera amistad.',
        puntos: [
          'La dinámica del juego busca, de forma lúdica, introducir la idea de ser "hechos pescadores de hombres", como les sucedió a Jacobo y Juan.',
          'El tema busca que cada joven entienda que seguir a Jesús implica dejarlo todo para quedarse con Él de forma permanente, no solo visitarlo ocasionalmente.',
        ],
        evocacion: 'Lc 5:1-11 y Mt 4:21-22 — tras la pesca milagrosa, Jacobo y Juan, socios de Simón, dejan al instante la barca y a su padre Zebedeo para seguir a Jesús.',
        actividadIntroductoria: 'Dinámica "Pescas milagrosas": en parejas, se retan a piedra-papel-tijera contra otras parejas; la pareja que pierde se convierte en "pescados". Gana quien más parejas haya convertido.',
        contenido: 'No bastaba con encontrarse un día con Jesús: Él quería que Juan se quedara para siempre. Citando a Benedicto XVI: no basta con seguir y escuchar exteriormente, hay que vivir con Él y como Él, en una relación de gran familiaridad, "porque a vosotros os he llamado amigos" (Jn 15:13,15).',
        actividadesAdicionales: null,
        simbolos: ['El juego de convertir en "pescados" (ser hechos pescadores de hombres, como Jacobo y Juan)'],
        reflexion: 'Seguir a Jesús no es un encuentro puntual, es dejarlo todo para quedarse con Él el resto de la vida.',
      },
      {
        titulo: 'Pasión y muerte',
        resumen: 'A partir de la fidelidad de Juan, que permanece al pie de la cruz cuando otros huyen, este tema invita a los jóvenes a medir su propia amistad con Cristo por la capacidad de quedarse, no de huir.',
        puntos: [
          'La dinámica de proteger la moneda de chocolate busca que los jóvenes experimenten, de forma física, lo que significa custodiar algo valioso que se les ha confiado.',
          'La oración al pie de la cruz busca que cada joven se comprometa a acompañar a Cristo también en los momentos difíciles, y no solo en los favorables.',
        ],
        evocacion: 'Jn 13:21-27, Jn 18:15 y Jn 19:25-27 — Juan, recostado en el pecho de Jesús, pregunta por el traidor; entra con Él al patio del sumo sacerdote; y al pie de la cruz recibe a María como madre: "¡He ahí tu madre!"',
        actividadIntroductoria: 'Dinámica "Te confío mi tesoro": cada joven recibe una moneda de chocolate que debe conservar sin que se derrita mientras enfrenta retos físicos. Gana quien la conserve intacta.',
        contenido: 'La amistad de Juan con Jesús fue tan profunda que pudo saber quién lo traicionaría, entrar con Él al juicio, recibir el tesoro de resguardar a María como su propia madre, y ser testigo de la sangre y el agua que brotaron de su costado.',
        actividadesAdicionales: 'Oración al pie de una cruz, con María al lado, acompañada de un canto sugerido.',
        simbolos: ['La moneda de chocolate que se protege de derretirse (custodiar lo que Cristo confía, como Juan custodió a María)'],
        reflexion: 'Juan permanece hasta el final cuando otros huyen: la fidelidad de "el discípulo amado" se mide en quedarse, no en huir.',
      },
      {
        titulo: 'Resurrección',
        resumen: 'Este tema presenta la fe de Juan ante el sepulcro vacío —"vio y creyó"— como modelo de una fe que no necesita pruebas adicionales, sino que nace del amor ya vivido con Cristo.',
        puntos: [
          'La búsqueda de los huevos de Pascua busca que los jóvenes vivan, de forma lúdica, la experiencia de descubrir algo oculto que ya estaba ahí, como la tumba vacía.',
          'El tema busca que cada joven reconozca que su propia fe puede nacer del amor ya experimentado con Cristo, sin necesitar más pruebas o explicaciones.',
        ],
        evocacion: 'Jn 20:1-9 — Juan corre al sepulcro, llega primero que Pedro, ve las envolturas de lino y "vio y creyó".',
        actividadIntroductoria: 'Dinámica "Descubrir la tumba vacía": búsqueda de huevos de Pascua escondidos previamente en el patio.',
        contenido: 'Juan fue, según la reflexión, el primero en decir en su corazón lo que luego proclamaría Christus Vivit: "¡Vive Cristo, esperanza nuestra!" Él está en ti, está contigo y nunca se va, incluso cuando la tristeza, los rencores o los fracasos hacen sentir viejo.',
        actividadesAdicionales: null,
        simbolos: ['Los huevos de Pascua escondidos y hallados (la tumba vacía que se descubre, no se impone)'],
        reflexion: 'Ver y creer sin necesitar pruebas adicionales — la fe de Juan nace de la evidencia amorosa, no de la explicación.',
      },
      {
        titulo: 'Envío',
        resumen: 'Este cierre envía a los jóvenes, como a los discípulos tras la resurrección, a salir con el Espíritu Santo a invitar a otros al encuentro con Jesús vivo.',
        puntos: [
          'La Adoración Eucarística busca disponer el corazón de los jóvenes para recibir el envío del Espíritu Santo antes de salir a la misión.',
          'El tema busca que cada joven se comprometa a dar testimonio activo de su amistad con Jesús, invitando a alguien más al encuentro con Él.',
        ],
        evocacion: 'Jn 20:19-22, Jn 21:1-7 y Jn 21:20-24 — Jesús resucitado se presenta en medio de los discípulos, sopla sobre ellos el Espíritu Santo y los envía como el Padre lo envió a Él.',
        actividadIntroductoria: 'A partir de la experiencia de la tumba vacía, se guía una Adoración Eucarística: oración con ojos cerrados, exposición de Jesús Eucaristía, invocación del envío del Espíritu Santo, e invitación a salir a invitar a alguien al encuentro con Jesús.',
        contenido: 'Se cierra pidiendo a Jesús Resucitado que envíe su Espíritu sobre los jóvenes, y se les invita a salir del lugar de oración para invitar a alguien al encuentro con Cristo, terminando con el resguardo de Jesús Eucaristía.',
        actividadesAdicionales: null,
        simbolos: ['Jesús Eucaristía expuesto (la presencia que envía y acompaña la misión)'],
        reflexion: 'Como Juan, ir y dar testimonio de la amistad con Jesús vivo.',
      },
    ],
    cronograma: [],
    chipsLabel: null, chips: null,
  },

  // --- Dérej Oz · entradas nuevas (stub "próximamente", sin documento fuente aún) ---
  // Bloque 1 — Encuentro con Cristo
  {
    id: 'zaqueo', category: null, sequence: null, sequenceStep: null, sequenceTheme: null,
    derej: 'oz', paso: 1, codigo: 'OZ-ZAQUEO', estado: 'proximamente', tipo: 'taller', temporadaLiturgica: null,
    season: 'ordinario', seasonSecondary: null,
    title: 'Zaqueo', basadoEn: 'Zaqueo, el publicano de Jericó',
    conceptoCentral: 'No hace falta que te vean para que Cristo te llame por tu nombre.',
    image: ozZaqueo,
    bloques: [
      { title: 'Subirse al árbol sin ser visto', text: 'Zaqueo era bajito, rechazado por todos y curioso: se subió a un árbol solo para ver pasar a Jesús, sin esperar nada a cambio. El primer paso hacia Cristo no exige compromiso, solo un poco de curiosidad.' },
      { title: 'Llamado por nombre, frente a todos', text: 'Jesús no espera que baje solo ni en secreto: lo llama en voz alta, delante de la misma gente que lo señalaba como traidor. Ser visto por Dios en público desarma la vergüenza del propio pasado.' },
    ],
    chipsLabel: null, chips: null,
  },
  {
    id: 'bartimeo', category: null, sequence: null, sequenceStep: null, sequenceTheme: null,
    derej: 'oz', paso: 2, codigo: 'OZ-BARTIMEO', estado: 'proximamente', tipo: 'taller', temporadaLiturgica: null,
    season: 'ordinario', seasonSecondary: null,
    title: 'Bartimeo', basadoEn: 'Bartimeo, el ciego de Jericó',
    conceptoCentral: 'El grito que no se calla, aunque la multitud mande callar.',
    image: ozBartimeo,
    bloques: [
      { title: '"¡Cállate!" — y él gritó más fuerte', text: 'Bartimeo grita pidiendo compasión y la multitud lo manda callar. Aun así insiste. La fe a veces exige gritar la propia necesidad pese al "qué dirán" del grupo, la familia o las redes.' },
      { title: '"¿Qué quieres que haga por ti?"', text: 'Jesús se detiene y pregunta lo obvio, porque quiere que Bartimeo lo diga con sus propias palabras. Es la misma pregunta que puede hacerse hoy, de frente, en una oración de petición personal.' },
    ],
    chipsLabel: null, chips: null,
  },
  {
    id: 'camino-damasco', category: null, sequence: null, sequenceStep: null, sequenceTheme: null,
    derej: 'oz', paso: 3, codigo: 'OZ-CAMINODAMASCO', estado: 'proximamente', tipo: 'retiro', temporadaLiturgica: null,
    season: 'ordinario', seasonSecondary: null,
    title: 'Camino a Damasco', basadoEn: 'la conversión de Saulo camino a Damasco',
    conceptoCentral: 'La conversión más radical de la Biblia, para quien viene de frente en contra.',
    image: ozCaminoDamasco,
    bloques: [
      { title: 'Perseguir de frente, no por indiferencia', text: 'Saulo no era un indiferente: iba armado contra los cristianos. A veces el camino de vuelta empieza no en la tibieza, sino en el rechazo abierto y el pasado del que se avergüenza.' },
      { title: 'Tres días de ceguera', text: 'Cae, queda ciego y depende por completo de otros para llegar a la ciudad. Antes de ver de nuevo, tiene que aceptar no ver nada.' },
      { title: 'Una venda que alguien más retira', text: 'Ananías, con miedo, le impone las manos y la ceguera cae "como escamas". Nadie se convierte del todo solo: hace falta alguien dispuesto a acercarse al que antes daba miedo.' },
    ],
    chipsLabel: null, chips: null,
  },

  // Bloque 2 — Discipulado / Amistad con Él (Pedro paso 4 y Juan paso 5 ya están arriba, con contenido íntegro)
  {
    id: 'joven-rico', category: null, sequence: null, sequenceStep: null, sequenceTheme: null,
    derej: 'oz', paso: 6, codigo: 'OZ-JOVENRICO', estado: 'proximamente', tipo: 'taller', temporadaLiturgica: null,
    season: 'ordinario', seasonSecondary: null,
    title: 'El joven rico', basadoEn: 'el joven rico que se acercó a Jesús',
    conceptoCentral: 'Cumplir todo y aun así irse triste porque hay una cosa que no se suelta.',
    image: ozJovenRico,
    bloques: [
      { title: 'Cumplir todo, correctamente', text: 'El joven guarda los mandamientos desde su juventud: va a misa, es buena onda, hace lo que se espera de él. Y aun así algo le falta.' },
      { title: '"Lo miró y lo amó" — antes de pedirle nada', text: 'Jesús no lo regaña por lo que le falta; primero lo mira con amor. Solo después le pide soltar lo que no puede soltar: un celular, una imagen, una relación, un ídolo silencioso.' },
    ],
    chipsLabel: null, chips: null,
  },
  {
    id: 'tomas', category: null, sequence: null, sequenceStep: null, sequenceTheme: null,
    derej: 'oz', paso: 7, codigo: 'OZ-TOMAS', estado: 'proximamente', tipo: 'taller', temporadaLiturgica: null,
    season: 'ordinario', seasonSecondary: null,
    title: 'Tomás', basadoEn: 'el apóstol Tomás',
    conceptoCentral: 'La duda no se castiga: se invita a tocar la herida.',
    image: ozTomas,
    bloques: [
      { title: 'Dudar no es traicionar', text: 'Tomás no cree en el relato de los demás apóstoles y lo dice sin rodeos. Hoy dudar de la fe es la norma entre los jóvenes, no la excepción — y no por eso se deja de ser discípulo.' },
      { title: 'Pon tu dedo aquí', text: 'Jesús no lo excluye por dudar: vuelve solo para él y le ofrece tocar la herida. La duda honesta, dicha en voz alta, puede ser el lugar exacto donde Cristo se hace presente.' },
    ],
    chipsLabel: null, chips: null,
  },

  // Bloque 3 — Oración personal y comunitaria (Emaús paso 8 ya está arriba, con contenido íntegro)

  // Bloque 4 — Pasión / Cruz
  {
    id: 'getsemani', category: null, sequence: null, sequenceStep: null, sequenceTheme: null,
    derej: 'oz', paso: 9, codigo: 'OZ-GETSEMANI', estado: 'proximamente', tipo: 'hora_santa', temporadaLiturgica: null,
    season: 'cuaresma', seasonSecondary: null,
    title: 'Getsemaní', basadoEn: 'la agonía de Jesús en el huerto de Getsemaní',
    conceptoCentral: 'Acompañar el sufrimiento de Cristo, no solo recibir de Él.',
    image: ozGetsemani,
    bloques: [
      { title: '"Quédense aquí y velen conmigo"', text: 'Jesús pide compañía en su hora más oscura, no soluciones. Acompañar a alguien que sufre —empezando por Cristo mismo— a veces es solo eso: quedarse despierto.' },
      { title: 'Se durmieron', text: 'Los discípulos, agotados, se quedan dormidos justo cuando más se les necesita. Es el retrato honesto de la pereza espiritual: querer acompañar y, aun así, fallar.' },
    ],
    chipsLabel: null, chips: null,
  },

  // Bloque 5 — Misión / Envío
  {
    id: 'pentecostes', category: null, sequence: null, sequenceStep: null, sequenceTheme: null,
    derej: 'oz', paso: 10, codigo: 'OZ-PENTECOSTES', estado: 'proximamente', tipo: 'hora_santa', temporadaLiturgica: null,
    season: 'pentecostes', seasonSecondary: null,
    title: 'Pentecostés', basadoEn: 'la venida del Espíritu Santo sobre los apóstoles en el Cenáculo',
    conceptoCentral: 'El fuego que se recibe no se guarda: se manda a compartir.',
    image: ozPentecostes,
    bloques: [
      { title: 'Un viento que llena toda la casa', text: 'Los apóstoles esperaban encerrados, con miedo, hasta que el Espíritu llega como viento y fuego y los saca de ese cuarto para siempre. Cierra el recorrido de Oz: todo lo recibido en el camino apunta hacia afuera.' },
      { title: 'De vela en vela', text: 'El fuego de Pentecostés no se queda en un apóstol: se reparte. Un rito de fuego real, pasado de mano en mano, puede sellar el cierre de un campamento, una confirmación o el inicio del año pastoral.' },
    ],
    chipsLabel: null, chips: null,
  },

  // --- Dérej Jaím · contenido construido desde documento fuente: AE - Jesucristo Nuestra Esperanza ---
  {
    id: 'jesucristo-nuestra-esperanza', category: null, sequence: null, sequenceStep: null, sequenceTheme: null,
    derej: 'jaim', codigo: 'JAIM-JESUCRISTONUESTRAESPERANZA', estado: 'publicado', tipo: 'hora_santa', temporadaLiturgica: 'ordinario',
    season: 'ordinario', seasonSecondary: null,
    title: 'Jesucristo Nuestra Esperanza', basadoEn: 'Jesús como Puerta, Camino y Esperanza (Jn 10, Col 1, Heb 6 y 10)',
    conceptoCentral: 'Jesús es la Puerta que nunca se cierra, el Camino que guía y la Esperanza que no defrauda.',
    image: jaimJesucristoNuestraEsperanza,
    bloques: [
      { title: 'Descanso, fortaleza y dirección', text: 'Una Adoración Eucarística para reconocer a Jesús como nuestra única esperanza, renovando la confianza en su promesa de salvación.' },
      { title: 'Para toda la congregación', text: 'Dirigida a la congregación sin distinción de edad ni género, celebrada particularmente a fin de año para enfatizar el mensaje de la esperanza.' },
    ],
    temas: [
      {
        titulo: 'Frente a la puerta',
        resumen: 'A partir de la imagen de la puerta que nadie puede cerrar (Ap 3:7-8), este tema invita a la congregación a reconocer en Jesús una entrada que siempre permanece abierta, incluso cuando la vida ha cerrado otras puertas.',
        puntos: [
          'El canto y la oración inicial buscan disponer el corazón de los presentes para adorar y acoger la presencia de Jesús como puerta abierta.',
          'El momento de oración personal ante la estructura de la puerta busca que cada persona confronte las puertas que la vida le ha cerrado, y las entregue confiando en la puerta que Jesús ofrece.',
        ],
        evocacion: 'Ap 3:7-8 — "Te he puesto delante una puerta abierta que nadie puede cerrar."',
        actividadIntroductoria: 'Canto inicial "El Rey de la Gloria" (Hakuna Group Music) y oración inicial de entrada, seguida del canto de alabanza.',
        contenido: 'Jesús es la puerta que espera, abierta, sin que nadie pueda cerrarla — incluso para quien aún no lo conoce (Jn 10:7-9). Contrasta con las puertas que la vida cierra en la cara: esta nunca se cierra.',
        actividadesAdicionales: 'Canto de acompañamiento "Entra" (MNM RCCES) durante la oración personal ante la puerta.',
        simbolos: ['Estructura que simula unas puertas abiertas, con la frase "Yo soy la Esperanza" en la parte alta'],
        reflexion: '¿Cuántas veces nos han cerrado puertas? Esta puerta, en cambio, siempre ofrece la entrada.',
      },
      {
        titulo: 'Jesús es también el camino',
        resumen: 'Este tema presenta a Jesús no solo como destino sino como guía activo del camino, invitando a confiar en cada paso que Él va marcando.',
        puntos: [
          'La escritura en el post-it busca que cada persona nombre concretamente una necesidad o deseo propio antes de presentarlo ante Jesús.',
          'El tema busca llevar a la congregación a descansar y confiar en los pasos que Jesús va marcando, en lugar de exigir ver el camino completo de antemano.',
        ],
        evocacion: 'Heb 10:19-20 — el camino nuevo y vivo inaugurado por la sangre de Jesús.',
        actividadIntroductoria: null,
        contenido: 'Confiar en Jesús como camino implica no solo caminar hacia Él, sino también descansar y confiar en los pasos que Él va marcando (Is 30:21). Es guía, no solo destino.',
        actividadesAdicionales: 'Exhortación: se invita a la congregación a pensar en algo que necesitaron o desearon alguna vez, y a escribirlo en un post-it.',
        simbolos: ['Post-its con lo que cada persona necesita o desea'],
        reflexion: null,
      },
      {
        titulo: '¿Dónde está la Esperanza?',
        resumen: 'Este tema confronta a la congregación con la insuficiencia de las propias fuerzas, para reconocer que la esperanza verdadera solo se sostiene en Cristo.',
        puntos: [
          'La invitación a caminar físicamente hacia la puerta busca que cada persona exprese, con su cuerpo, el acto de acercarse a la esperanza que solo Cristo ofrece.',
          'El tema busca que la congregación reconozca sus propios límites y descubra que en Él se encuentra todo lo necesario para alcanzar la plenitud.',
        ],
        evocacion: 'Col 1:27 — "Cristo para ustedes, esperanza de gloria."',
        actividadIntroductoria: null,
        contenido: 'La verdadera esperanza está en el camino y en la puerta: por nuestras propias fuerzas no podemos, siempre necesitamos las suyas (Rom 5:5,11). Él se convierte en todo lo que necesitamos para llegar a su plenitud.',
        actividadesAdicionales: 'Exhortación a caminar hacia la puerta para contemplar la esperanza. Alabanza de acompañamiento "Quiero conocer a Jesús" (Generación 12).',
        simbolos: [],
        reflexion: null,
      },
      {
        titulo: 'He aquí nuestra esperanza',
        resumen: 'Retomando la imagen del ancla firme y segura (Heb 6:18-20), este tema afirma que, a los pies de la puerta de salvación y en el camino de la verdad, ya no hay nada que temer.',
        puntos: [
          'El momento de alabanza busca sostener en la congregación un clima de confianza y adoración mientras se profundiza en la certeza de la esperanza cristiana.',
          'El tema busca afianzar en cada persona la convicción de que, en Cristo, todo temor y toda imposibilidad quedan resueltos.',
        ],
        evocacion: 'Heb 6:18-20 — el ancla firme y segura que penetra más allá de la cortina del Templo, donde Jesús entró como precursor y sumo sacerdote perpetuo.',
        actividadIntroductoria: null,
        contenido: 'A los pies de la puerta de salvación y en el camino de la verdad ya no hay nada que temer ni nada imposible: todo es encontrado y resuelto en Él.',
        actividadesAdicionales: 'Alabanza de acompañamiento "El rostro de mi amado" (Monte Santo y Belén Losa).',
        simbolos: [],
        reflexion: null,
      },
      {
        titulo: 'Contemplación',
        resumen: 'Este cierre invita a contemplar a Jesucristo mismo como la esperanza viva que se hace presente en toda necesidad, persecución o tormenta, devolviendo siempre al camino a quien se desvía.',
        puntos: [
          'Completar el post-it con la frase "Con Jesucristo" busca que cada persona una explícitamente su necesidad o deseo personal a la certeza de la presencia de Cristo.',
          'El cierre busca dejar en la congregación la seguridad de que, aunque se desvíen del camino, el amor de Jesús siempre los trae de vuelta.',
        ],
        evocacion: null,
        actividadIntroductoria: null,
        contenido: 'Jesucristo mismo es la esperanza que vive y está frente a nosotros — el aliento necesario para seguir, que se entrega para satisfacer la necesidad, la persecución y la tormenta, haciéndose calma, paz, firmeza y plenitud.',
        actividadesAdicionales: 'Exhortación: en el mismo post-it, se pide añadir "Con Jesucristo" a lo ya escrito. Alabanza de acompañamiento "Yahweh se manifestará" (Oasis).',
        simbolos: ['El post-it completado con lo escrito más "Con Jesucristo"'],
        reflexion: 'Aunque nos desviemos, Él con amor nos vuelve a traer de vuelta.',
      },
    ],
    cronograma: [],
    chipsLabel: null, chips: null,
  },
];

export const retreats = rawRetreats.map(withDerivedFields);

export const getRetreatById = (id) => retreats.find((r) => r.id === id);

// Retiros individuales (fuera de cualquier secuencia)
export const retiros = retreats.filter((r) => r.category === 'Retiro' && !r.sequence);
export const talleres = retreats.filter((r) => r.category === 'Taller');
export const adoraciones = retreats.filter((r) => r.category === 'Adoración');

const bySequence = (key) =>
  retreats
    .filter((r) => r.sequence === key)
    .sort((a, b) => a.sequenceStep - b.sequenceStep);

export const derejGibor = bySequence('derej-gibor');
export const derejKavod = bySequence('derej-kavod');

const byDerej = (key) =>
  retreats
    .filter((r) => r.derej === key)
    .sort((a, b) => (a.paso ?? 0) - (b.paso ?? 0));

export const derejMesharet = byDerej('mesharet');
export const derejSimja = byDerej('simja');
export const derejOz = byDerej('oz');
export const derejJaim = byDerej('jaim');
