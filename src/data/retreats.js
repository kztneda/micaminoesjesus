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

export const retreats = [
  {
    id: 'levantate-hombre', category: 'Retiro', title: 'Levántate y Sé Hombre', basadoEn: null,
    conceptoCentral: 'El rescate de la masculinidad en un mundo que la tiene confundida.',
    image: levantateHombre,
    bloques: [
      { title: 'El modelo de Cristo', text: 'Redefinir la hombría mirando al hombre perfecto: lo suficientemente recio para volcar mesas a latigazos, lo suficientemente fuerte para arrodillarse a lavar pies.' },
      { title: 'Tomar el timón', text: 'Un taller sin rodeos sobre asumir la responsabilidad y el liderazgo servicial en la familia, forjar amistades de hierro, dignificar el trabajo y vivir una fe que no se acobarda.' },
    ],
    verses: null, chipsLabel: null, chips: null,
  },
  {
    id: 'samuel', category: 'Retiro', title: 'Samuel', basadoEn: 'los dos libros de Samuel',
    conceptoCentral: 'Afinar la frecuencia para escuchar tu llamado específico.',
    image: samuel,
    bloques: [
      { title: '"Habla, Señor"', text: 'Cortar con el ruido ("Escucha, Señor, que tu siervo está hablando") para pasar a la verdadera disposición de Samuel.' },
      { title: 'La brújula vocacional', text: 'Una guía práctica, espiritual y sin misticismos baratos para el discernimiento. No hay caminos genéricos; aquí vienes a descubrir para qué terreno estás diseñado.' },
    ],
    verses: null, chipsLabel: 'Caminos vocacionales', chips: ['Laical', 'Religiosa', 'Sacerdotal', 'Matrimonial'],
  },
  {
    id: 'tengo-sed', category: 'Retiro', title: 'Tengo Sed', basadoEn: 'la sed que Dios tiene del amor de su criatura',
    conceptoCentral: 'La escandalosa sed que Dios tiene por ti.',
    image: tengoSed,
    bloques: [
      { title: 'El Creador mendigando', text: 'Es la paradoja más grande del cristianismo: el Dios que creó los océanos está sediento del amor de su criatura. No quiere solo tu obediencia; te desea a ti.' },
      { title: 'Basta de tomar de charcos', text: 'Usando la analogía de la Samaritana en el pozo de Sicar, este retiro confronta nuestra manía de buscar satisfacción en relaciones, éxito o validación, cuando nuestra "deshidratación existencial" solo se cura con el Agua Viva.' },
      { title: 'El pozo de Jacob', text: 'Así como esa agua sostuvo a Israel en el desierto, la gracia de Cristo es el único recurso inagotable para no desfallecer en la vida diaria.' },
    ],
    verses: ['Juan 4:1-42'], chipsLabel: null, chips: null,
  },
  {
    id: 'ultimo-rey', category: 'Retiro', title: 'El Último Rey', basadoEn: 'el Apocalipsis',
    conceptoCentral: 'El apocalipsis personal y la urgencia de la conversión.',
    image: ultimoRey,
    bloques: [
      { title: 'Quitar el velo', text: 'Apocalipsis significa "revelación". Es hora de quitarle el velo a tu fe tibia. Un llamado frontal, profundo y sin anestesia a la conversión individual.' },
      { title: 'El cuarto de guerra', text: 'Redescubrir la confesión y la penitencia no como un tribunal de culpa, sino como la sala de reconciliación donde te alineas con el Rey.' },
      { title: 'Efecto dominó', text: 'Tu santidad no es un proyecto privado. Entender que tu "sí" a Cristo es la pieza clave para la salvación de las personas que te rodean. Si tú te hundes, te llevas a otros.' },
    ],
    verses: null, chipsLabel: null, chips: null,
  },
  {
    id: 'shema', category: 'Retiro', title: 'Shemá Bar · Adoración en movimiento', basadoEn: 'David, Asaf, Hemán y Jedutún, Miriam hermana de Moisés, los hijos de Coré y los levitas',
    conceptoCentral: 'La adoración no es un pasatiempo dominical; es una posición de combate.',
    image: shema,
    bloques: [
      { title: 'El ADN del levita', text: 'Basado en los grandes adoradores (David, Asaf, Hemán, Jedutún), entenderemos que el talento musical, vocal y dancístico no es para lucirse, es munición pesada y ofrenda directa al cielo.' },
      { title: 'Teología en la práctica', text: 'Aterrizaremos las encíclicas Musicae Sacrae y Sacrosanctum Concilium para que dejen de ser documentos empolvados y se conviertan en la partitura de nuestro ministerio.' },
      { title: 'El peso del coro', text: 'Si el coro no ora, solo hace ruido. Comprenderemos la función ministerial real: llevar a una asamblea entera a la presencia de Dios.' },
    ],
    verses: null, chipsLabel: 'Figuras bíblicas', chips: ['David', 'Asaf', 'Hemán', 'Jedutún', 'Miriam, hermana de Moisés', 'Los hijos de Coré', 'Levitas'],
  },
  {
    id: 'fuiste-mujer', category: 'Retiro', title: 'Fuiste Hecha Mujer', basadoEn: 'más de 7 mujeres de la Biblia',
    conceptoCentral: 'El genio femenino como obra maestra y pilar de la creación.',
    image: fuisteMujer,
    bloques: [
      { title: 'Más que un complemento', text: 'Repasar la historia de las mujeres clave en la Biblia para derribar el mito de que la mujer es un "plan B". Eres la pieza integral que le da sentido a la vida misma.' },
      { title: 'Fuerza y resiliencia divina', text: 'Notar cómo Dios ha usado la intuición, la fortaleza y la capacidad de amar de la mujer para cambiar el rumbo de la historia de la salvación, y cómo espera hacer lo mismo contigo hoy.' },
    ],
    verses: null, chipsLabel: null, chips: null,
  },
  {
    id: 'golgota', category: 'Taller', title: 'Gólgota', basadoEn: 'la Pasión, Muerte y Resurrección de Cristo',
    conceptoCentral: 'La redención del fracaso humano a través de un amor brutal e ineludible.',
    image: golgota,
    bloques: [
      { title: 'El giro de trama (Felix Culpa)', text: 'Sí, Eva por andar de "inventada" nos costó el Edén, pero provocó la mayor historia de rescate: nos trajo a Cristo. El Gólgota no es solo un dato histórico, es la tumba de Adán (la vieja naturaleza) y la cuna del hombre nuevo.' },
      { title: 'Tú eres un Gólgota', text: 'Todos tenemos una zona de desastre, áreas de pecado y fracaso. El retiro te lleva a entender que exactamente ahí, donde huele a muerte, es donde Dios planta la cruz para que brote la vida.' },
      { title: 'La anatomía del sacrificio', text: 'No es un amor romántico de película; es el poema crudo de Isaías 53. Es entender el dolor de la separación que causa nuestro pecado y mirar de frente el precio que Dios pagó para reconciliarnos. No hay gracia barata.' },
    ],
    verses: ['Mateo 27:33', 'Isaías 52:13 – 53:12'], chipsLabel: null, chips: null,
  },
  {
    id: 'esclava-senor', category: 'Taller', title: 'Esclava del Señor', basadoEn: 'María, madre de Jesús',
    conceptoCentral: 'La fuerza arrolladora de la obediencia.',
    image: esclavaSenor,
    bloques: [
      { title: 'El "Aquí estoy" original', text: 'Ser "esclava" o siervo de Dios no es ser un tapete; es la muestra más grande de libertad y fortaleza. Es entregar el control absoluto a Quien sabe hacer las cosas mejor.' },
      { title: 'Servicio que incomoda', text: 'Profundizar en lo que implica un ministerio real. Entregarse al prójimo de una forma que desorganice tu vida para bien, imitando el servicio incondicional de María.' },
    ],
    verses: ['Lucas 1:38'], chipsLabel: null, chips: null,
  },
  {
    id: 'ruth', category: 'Taller', title: 'Ruth', basadoEn: 'el libro de Ruth',
    conceptoCentral: 'La audacia de la lealtad y el salto de fe hacia lo desconocido.',
    image: ruth,
    bloques: [
      { title: 'Dejar la zona de confort', text: 'Ruth dejó su tierra y sus dioses por lealtad a Noemí. Este taller es un llamado a la fidelidad radical cuando la vida se pone difícil ("A donde tú vayas, yo iré").' },
      { title: 'Recoger las sobras con dignidad', text: 'Encontrar la redención y la gracia de Dios en el trabajo humilde y diario, confiando en que Él orquesta los "encuentros casuales" (como el de Booz) para nuestro rescate.' },
    ],
    verses: null, chipsLabel: null, chips: null,
  },
  {
    id: 'sabios-oriente', category: 'Taller', title: 'Sabios del Oriente', basadoEn: 'los Reyes Magos',
    conceptoCentral: 'La sabiduría de dar lo mejor que tienes en la vida ordinaria.',
    image: sabiosOriente,
    bloques: [
      { title: 'Los dones en el 2026', text: 'Ya no traemos oro, incienso y mirra; traemos nuestro tiempo, nuestra atención y nuestros recursos. Asimilar qué significa realmente ofrendar al prójimo hasta que cueste.' },
      { title: 'La estrella en el asfalto', text: 'Dejar de esperar zarzas ardientes y aprender a reconocer a Dios disfrazado en la monotonía de la vida diaria y en la necesidad del otro.' },
    ],
    verses: ['Mateo 2:1-12'], chipsLabel: null, chips: null,
  },
];

export const getRetreatById = (id) => retreats.find((r) => r.id === id);
export const retiros = retreats.filter((r) => r.category === 'Retiro');
export const talleres = retreats.filter((r) => r.category === 'Taller');
