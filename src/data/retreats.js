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

export const retreats = [
  // --- Derej Gibor · Camino del Guerrero (secuencia para hombres) ---
  {
    id: 'levantate-hombre', category: 'Retiro', sequence: 'derej-gibor', sequenceStep: 1, sequenceTheme: null,
    season: 'ordinario', seasonSecondary: null,
    title: 'Levántate y Sé Hombre', basadoEn: null,
    conceptoCentral: 'El rescate de la masculinidad en un mundo que la tiene confundida.',
    image: levantateHombre,
    bloques: [
      { title: 'El modelo de Cristo', text: 'Redefinir la hombría mirando al hombre perfecto: lo suficientemente recio para volcar mesas a latigazos, lo suficientemente fuerte para arrodillarse a lavar pies.' },
      { title: 'Tomar el timón', text: 'Un taller sin rodeos sobre asumir la responsabilidad y el liderazgo servicial en la familia, forjar amistades de hierro, dignificar el trabajo y vivir una fe que no se acobarda.' },
    ],
    verses: null, chipsLabel: null, chips: null,
  },
  {
    id: 'sanson', category: 'Retiro', sequence: 'derej-gibor', sequenceStep: 2, sequenceTheme: 'Identidad y masculinidad',
    season: 'ordinario', seasonSecondary: null,
    title: 'Sansón', basadoEn: 'Sansón, juez de Israel',
    conceptoCentral: 'La fuerza no es el músculo: es saber a quién perteneces.',
    image: sanson,
    bloques: [
      { title: 'El secreto no está en el pelo', text: 'Sansón tenía la fuerza de un ejército y la disciplina de un niño. Este retiro confronta el mito de que la masculinidad se mide en bíceps, cuando en realidad se mide en dominio propio.' },
      { title: 'Dalila tiene muchos nombres', text: 'Todo hombre tiene su "Dalila": la debilidad que sabe exactamente dónde presionar. Identificar qué te desgasta la fuerza en silencio, antes de que te corte el cabello.' },
      { title: 'De las ruinas al templo', text: 'Aun después de perderlo todo, Dios usó la última fuerza de Sansón para un propósito mayor. Ninguna caída es definitiva si vuelves a apoyarte en las columnas correctas.' },
    ],
    verses: ['Jueces 13-16'], chipsLabel: null, chips: null,
  },
  {
    id: 'tobias', category: 'Retiro', sequence: 'derej-gibor', sequenceStep: 3, sequenceTheme: 'Familia',
    season: 'ordinario', seasonSecondary: null,
    title: 'Tobías', basadoEn: 'el libro de Tobías',
    conceptoCentral: 'La familia no se hereda perfecta, se construye con fe en el camino.',
    image: tobias,
    bloques: [
      { title: 'Un padre que confía a ciegas', text: 'Tobit envía a su hijo a un viaje incierto confiando en un ángel disfrazado. Hablar de la fe que un padre transmite sin necesidad de controlarlo todo.' },
      { title: 'El ángel que camina contigo', text: 'Rafael acompaña a Tobías paso a paso: la certeza de que Dios manda compañía para las decisiones familiares grandes, como el matrimonio, el sustento o la sanación.' },
      { title: 'Sara, Ragüel y el matrimonio con propósito', text: 'El matrimonio de Tobías y Sara nace de oración, no de impulso. Construir un hogar con esa misma intención, desde el primer paso.' },
    ],
    verses: ['Tobías 5-12'], chipsLabel: null, chips: null,
  },
  {
    id: 'jonatan', category: 'Retiro', sequence: 'derej-gibor', sequenceStep: 4, sequenceTheme: 'Amistad y Hermandad',
    season: 'ordinario', seasonSecondary: null,
    title: 'Jonatán', basadoEn: 'Jonatán, hijo de Saúl',
    conceptoCentral: 'La amistad real se mide en lo que estás dispuesto a perder por el otro.',
    image: jonatan,
    bloques: [
      { title: 'Un pacto sin envidia', text: 'Jonatán, heredero al trono, ama a David sabiendo que Dios lo eligió a él en su lugar. Hablar de la hermandad que no compite.' },
      { title: 'Amistad de riesgo', text: 'Jonatán arriesga la relación con su padre y su propia seguridad para proteger a David: la amistad que cuesta algo real, no la que solo es cómoda.' },
      { title: 'El pacto que sobrevive a la muerte', text: 'Jonatán pide a David que cuide a su familia después de morir. Construir amistades que trascienden la conveniencia del momento.' },
    ],
    verses: ['1 Samuel 18-20'], chipsLabel: null, chips: null,
  },
  {
    id: 'jose-nazaret', category: 'Retiro', sequence: 'derej-gibor', sequenceStep: 5, sequenceTheme: 'Trabajo y Responsabilidad',
    season: 'ordinario', seasonSecondary: ['adviento'],
    title: 'José de Nazaret', basadoEn: 'San José, esposo de María',
    conceptoCentral: 'La verdadera hombría se demuestra en el silencio de quien sostiene sin pedir reconocimiento.',
    image: joseNazaret,
    bloques: [
      { title: 'El justo que no huye', text: 'José descubre un embarazo que no comprende y, en vez de huir, se queda a proteger. Hablar de la responsabilidad que no depende de tener todas las respuestas.' },
      { title: 'El taller como altar', text: 'Su trabajo de carpintero educó al mismo Hijo de Dios. Dignificar el trabajo ordinario como lugar de santidad y provisión.' },
      { title: 'Proteger sin protagonismo', text: 'José nunca habla en el Evangelio, pero cada decisión suya cambia la historia. Ser el hombre que sostiene la casa sin necesitar el centro del escenario.' },
    ],
    verses: ['Mateo 1:18-25', 'Mateo 2:13-15'], chipsLabel: null, chips: null,
  },
  {
    id: 'josue', category: 'Retiro', sequence: 'derej-gibor', sequenceStep: 6, sequenceTheme: 'Hombre espiritual Siglo XXI',
    season: 'ordinario', seasonSecondary: null,
    title: 'Josué', basadoEn: 'el libro de Josué',
    conceptoCentral: 'Heredar la promesa no es suerte: es esfuerzo, valentía y obediencia sin atajos.',
    image: josue,
    bloques: [
      { title: 'De asistente a líder', text: 'Josué pasa 40 años como segundo de Moisés antes de cruzar el Jordán. Hablar del tiempo de formación silenciosa antes del liderazgo.' },
      { title: '"Esfuérzate y sé valiente"', text: 'La orden que Dios repite tres veces al inicio del libro. La valentía como mandato, no como sentimiento opcional.' },
      { title: 'Escoger a quién servir hoy', text: '"Escojan hoy a quién han de servir": el hombre espiritual del siglo XXI decide su fe activamente, no por herencia cultural.' },
    ],
    verses: ['Josué 1:1-9', 'Josué 24:14-15'], chipsLabel: null, chips: null,
  },

  // --- Derej Kavod · Camino de Dignidad (secuencia para mujeres) ---
  {
    id: 'fuiste-mujer', category: 'Retiro', sequence: 'derej-kavod', sequenceStep: 1, sequenceTheme: null,
    season: 'ordinario', seasonSecondary: null,
    title: 'Fuiste Hecha Mujer', basadoEn: 'más de 7 mujeres de la Biblia',
    conceptoCentral: 'El genio femenino como obra maestra y pilar de la creación.',
    image: fuisteMujer,
    bloques: [
      { title: 'Más que un complemento', text: 'Repasar la historia de las mujeres clave en la Biblia para derribar el mito de que la mujer es un "plan B". Eres la pieza integral que le da sentido a la vida misma.' },
      { title: 'Fuerza y resiliencia divina', text: 'Notar cómo Dios ha usado la intuición, la fortaleza y la capacidad de amar de la mujer para cambiar el rumbo de la historia de la salvación, y cómo espera hacer lo mismo contigo hoy.' },
    ],
    verses: null, chipsLabel: null, chips: null,
  },
  {
    id: 'eva', category: 'Retiro', sequence: 'derej-kavod', sequenceStep: 2, sequenceTheme: 'Identidad y dignidad',
    season: 'ordinario', seasonSecondary: ['cuaresma'],
    title: 'Eva', basadoEn: 'Eva, la primera mujer',
    conceptoCentral: 'Antes de la caída, hubo una obra maestra: entender tu dignidad original.',
    image: eva,
    bloques: [
      { title: 'Formada, no improvisada', text: 'Eva no es un accesorio de Adán; es la culminación de la creación. Recuperar la dignidad que antecede a cualquier herida o mentira recibida.' },
      { title: 'La mentira más antigua', text: 'La serpiente no ataca el cuerpo, ataca la identidad: "¿de verdad dijo Dios...?". Reconocer cómo esa misma mentira sigue operando hoy.' },
      { title: 'De la vergüenza a la promesa', text: 'Aun en la caída, Dios no abandona: promete descendencia que aplastará al mal. Tu historia con heridas no es el final de tu identidad.' },
    ],
    verses: ['Génesis 1:26-27', 'Génesis 3:1-15'], chipsLabel: null, chips: null,
  },
  {
    id: 'betania', category: 'Retiro', sequence: 'derej-kavod', sequenceStep: 3, sequenceTheme: 'Trabajo y vocación',
    season: 'ordinario', seasonSecondary: ['cuaresma'],
    title: 'Betania', basadoEn: 'Marta y María, hermanas de Lázaro',
    conceptoCentral: 'Servir con las manos y creer con el corazón no son caminos distintos.',
    image: betania,
    bloques: [
      { title: 'La que se mueve por amor', text: 'Marta no es "la que no entendió"; es la que abre su casa, organiza y sirve. Dignificar el trabajo, la logística y el servicio como vocación, no como distracción.' },
      { title: '"Sí creo" antes del milagro', text: 'En la resurrección de Lázaro es Marta quien hace la confesión de fe más clara del Evangelio: "Yo creo que tú eres el Cristo". El trabajo no compite con la fe: la sostiene.' },
      { title: 'Ordenar la casa sin perder el centro', text: 'Aprender de su corrección en Lucas 10 sin borrar su fortaleza en Juan 11: el equilibrio entre hacer y estar.' },
    ],
    verses: ['Lucas 10:38-42', 'Juan 11:17-27'], chipsLabel: null, chips: null,
  },
  {
    id: 'sicar', category: 'Retiro', sequence: 'derej-kavod', sequenceStep: 4, sequenceTheme: 'Amor y afectividad',
    season: 'cuaresma', seasonSecondary: null,
    title: 'Sicar', basadoEn: 'la mujer samaritana en el pozo de Sicar',
    conceptoCentral: 'Dejar de buscar en pozos equivocados el amor que solo Dios puede saciar.',
    image: sicar,
    bloques: [
      { title: 'Cinco pozos y una sed real', text: 'La Samaritana ha buscado amor en cinco relaciones fallidas. Nombrar los "pozos" donde hemos buscado afecto sin encontrar saciedad.' },
      { title: 'Vista, no juzgada', text: 'Jesús conoce toda su historia y no la usa para condenarla, sino para revelarse. La afectividad sana empieza cuando te sientes verdaderamente vista.' },
      { title: 'De la vergüenza al anuncio', text: 'La misma mujer que escondía su historia se convierte en la primera evangelizadora de Samaria. Tu historia afectiva puede ser también tu misión.' },
    ],
    verses: ['Juan 4:1-42'], chipsLabel: null, chips: null,
  },
  {
    id: 'rut', category: 'Retiro', sequence: 'derej-kavod', sequenceStep: 5, sequenceTheme: 'Familia',
    season: 'ordinario', seasonSecondary: null,
    title: 'Rut', basadoEn: 'el libro de Rut',
    conceptoCentral: 'La audacia de la lealtad y el salto de fe hacia lo desconocido.',
    image: ruth,
    bloques: [
      { title: 'Dejar la zona de confort', text: 'Rut dejó su tierra y sus dioses por lealtad a Noemí. Este retiro es un llamado a la fidelidad radical cuando la vida se pone difícil: "A donde tú vayas, yo iré".' },
      { title: 'Recoger las sobras con dignidad', text: 'Encontrar la redención y la gracia de Dios en el trabajo humilde y diario, confiando en que Él orquesta los "encuentros casuales" (como el de Booz) para nuestro rescate.' },
    ],
    verses: null, chipsLabel: null, chips: null,
  },
  {
    id: 'judit', category: 'Retiro', sequence: 'derej-kavod', sequenceStep: 6, sequenceTheme: 'Amistad, sororidad y misión',
    season: 'ordinario', seasonSecondary: null,
    title: 'Judit', basadoEn: 'Judit, heroína de Israel',
    conceptoCentral: 'La valentía de una mujer decidida puede rescatar a todo un pueblo.',
    image: judit,
    bloques: [
      { title: 'Sororidad antes de la batalla', text: 'Judit no actúa sola: se apoya en su sierva Abrá y en las mujeres de su casa antes de enfrentar al enemigo. La misión grande nace de la comunidad pequeña y leal.' },
      { title: 'Los dones puestos al servicio de la misión', text: 'Judit usa cada uno de sus dones sin vergüenza, con un propósito claro: proteger a los suyos. Dignificar los talentos propios como herramientas de misión.' },
      { title: 'Una mujer, una ciudad salvada', text: 'Su valentía silenciosa cambia el destino de Israel sin necesitar ejército propio. Entender la fuerza discreta y decidida como una forma legítima de liderazgo.' },
    ],
    verses: ['Judit 8-13'], chipsLabel: null, chips: null,
  },

  // --- Retiros individuales (fuera de secuencia) ---
  {
    id: 'samuel', category: 'Retiro', sequence: null, sequenceStep: null, sequenceTheme: null,
    season: 'ordinario', seasonSecondary: null,
    title: 'Samuel', basadoEn: 'los dos libros de Samuel',
    conceptoCentral: 'Afinar la frecuencia para escuchar tu llamado específico.',
    image: samuel,
    bloques: [
      { title: '"Habla, Señor"', text: 'Cortar con el ruido ("Escucha, Señor, que tu siervo está hablando") para pasar a la verdadera disposición de Samuel.' },
      { title: 'La brújula vocacional', text: 'Una guía práctica, espiritual y sin misticismos baratos para el discernimiento. No hay caminos genéricos; aquí vienes a descubrir para qué terreno estás diseñado.' },
    ],
    verses: null, chipsLabel: 'Caminos vocacionales', chips: ['Laical', 'Religiosa', 'Sacerdotal', 'Matrimonial'],
  },
  {
    id: 'tengo-sed', category: 'Retiro', sequence: null, sequenceStep: null, sequenceTheme: null,
    season: 'cuaresma', seasonSecondary: null,
    title: 'Tengo Sed', basadoEn: 'la sed que Dios tiene del amor de su criatura',
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
    id: 'ultimo-rey', category: 'Retiro', sequence: null, sequenceStep: null, sequenceTheme: null,
    season: 'ordinario', seasonSecondary: ['adviento'],
    title: 'El Último Rey', basadoEn: 'el Apocalipsis',
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
    id: 'shema', category: 'Retiro', sequence: null, sequenceStep: null, sequenceTheme: null,
    season: 'ordinario', seasonSecondary: null,
    title: 'Shemá Bar · Adoración en movimiento', basadoEn: 'David, Asaf, Hemán y Jedutún, Miriam hermana de Moisés, los hijos de Coré y los levitas',
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
    id: 'emmanuel', category: 'Retiro', sequence: null, sequenceStep: null, sequenceTheme: null,
    season: 'adviento', seasonSecondary: null,
    title: 'Emmanuel', basadoEn: 'las profecías mesiánicas del Antiguo Testamento',
    conceptoCentral: 'La promesa más antigua de la humanidad estaba a punto de cumplirse: Dios mismo vendría a rescatarnos.',
    image: emmanuel,
    bloques: [
      { title: 'La promesa en medio de la ruina', text: 'Desde el Génesis, Dios promete un descendiente que aplastará el mal. Recorrer cómo esa promesa se sostiene generación tras generación aun en medio del fracaso humano.' },
      { title: 'La profecía que se atrevió a nombrar el lugar', text: 'Isaías y Miqueas anuncian con siglos de anticipación el nombre, el linaje y hasta el pueblo del Mesías. Dios no improvisa: cumple lo que promete, en sus tiempos.' },
      { title: '"Dios con nosotros"', text: 'Emmanuel no es solo un nombre, es una dirección: Dios ya no observa desde lejos, decide habitar contigo. Vivir el Adviento como la espera activa de esa cercanía.' },
    ],
    verses: ['Isaías 7:14', 'Isaías 9:1-6', 'Miqueas 5:1'], chipsLabel: null, chips: null,
  },
  {
    id: 'dos-hermanos', category: 'Retiro', sequence: null, sequenceStep: null, sequenceTheme: null,
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
    verses: ['Génesis 4:1-16', 'Génesis 37', 'Lucas 15:11-32', 'Génesis 25:19-34', 'Mateo 21:28-32'],
    chipsLabel: 'Parejas de hermanos',
    chips: ['Caín y Abel', 'José y Benjamín', 'Hijo Pródigo e Hijo Mayor', 'Esaú y Jacob', 'Los hijos de la parábola (Mt 21)'],
  },
  {
    id: 'barrabas', category: 'Retiro', sequence: null, sequenceStep: null, sequenceTheme: null,
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
    verses: ['Mateo 27:15-26', 'Marcos 15:6-15', 'Lucas 23:18-25', 'Juan 18:39-40'],
    chipsLabel: null, chips: null,
  },

  // --- Talleres ---
  {
    id: 'golgota', category: 'Taller', sequence: null, sequenceStep: null, sequenceTheme: null,
    season: 'cuaresma', seasonSecondary: ['pascua'],
    title: 'Gólgota', basadoEn: 'la Pasión, Muerte y Resurrección de Cristo',
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
    id: 'esclava-senor', category: 'Taller', sequence: null, sequenceStep: null, sequenceTheme: null,
    season: 'adviento', seasonSecondary: null,
    title: 'Esclava del Señor', basadoEn: 'María, madre de Jesús',
    conceptoCentral: 'La fuerza arrolladora de la obediencia.',
    image: esclavaSenor,
    bloques: [
      { title: 'El "Aquí estoy" original', text: 'Ser "esclava" o siervo de Dios no es ser un tapete; es la muestra más grande de libertad y fortaleza. Es entregar el control absoluto a Quien sabe hacer las cosas mejor.' },
      { title: 'Servicio que incomoda', text: 'Profundizar en lo que implica un ministerio real. Entregarse al prójimo de una forma que desorganice tu vida para bien, imitando el servicio incondicional de María.' },
    ],
    verses: ['Lucas 1:38'], chipsLabel: null, chips: null,
  },
  {
    id: 'sabios-oriente', category: 'Taller', sequence: null, sequenceStep: null, sequenceTheme: null,
    season: 'adviento', seasonSecondary: null,
    title: 'Sabios del Oriente', basadoEn: 'los Reyes Magos',
    conceptoCentral: 'La sabiduría de dar lo mejor que tienes en la vida ordinaria.',
    image: sabiosOriente,
    bloques: [
      { title: 'Los dones en el 2026', text: 'Ya no traemos oro, incienso y mirra; traemos nuestro tiempo, nuestra atención y nuestros recursos. Asimilar qué significa realmente ofrendar al prójimo hasta que cueste.' },
      { title: 'La estrella en el asfalto', text: 'Dejar de esperar zarzas ardientes y aprender a reconocer a Dios disfrazado en la monotonía de la vida diaria y en la necesidad del otro.' },
    ],
    verses: ['Mateo 2:1-12'], chipsLabel: null, chips: null,
  },

  // --- Adoraciones Eucarísticas ---
  {
    id: 'camino-belen', category: 'Adoración', sequence: null, sequenceStep: null, sequenceTheme: null,
    season: 'adviento', seasonSecondary: null,
    title: 'Camino a Belén', basadoEn: 'el camino de los pastores y los Reyes Magos hacia Belén',
    conceptoCentral: 'Antes de llegar al pesebre, hay que atreverse a caminar en la oscuridad guiados por una promesa.',
    image: caminoBelen,
    bloques: [
      { title: 'La misma estrella, otro desierto', text: 'Como los magos, avanzamos por tramos donde no se ve el destino completo, solo el siguiente paso iluminado. Una noche de adoración para volver a ponerse en camino hacia Cristo presente en la Eucaristía.' },
      { title: 'Silencio antes del Gloria', text: 'Antes del anuncio a los pastores, hubo noche, frío y espera. Aprender a habitar la espera del Adviento sin llenarla de ruido.' },
      { title: 'Llegar con las manos vacías', text: 'Ni los pastores ni los magos llegaron con méritos, llegaron con hambre de encontrarlo. Adorar sin necesitar tener algo que ofrecer primero.' },
    ],
    verses: ['Lucas 2:8-20', 'Mateo 2:1-12'], chipsLabel: null, chips: null,
  },
  {
    id: 'cenaculo', category: 'Adoración', sequence: null, sequenceStep: null, sequenceTheme: null,
    season: 'pascua', seasonSecondary: ['cuaresma'],
    title: 'Cenáculo', basadoEn: 'la institución de la Eucaristía en la Última Cena',
    conceptoCentral: 'La noche en que Cristo decidió quedarse para siempre en pan y vino.',
    image: cenaculo,
    bloques: [
      { title: 'La despedida que no fue despedida', text: 'En la Última Cena, Jesús no se aleja: inventa una forma de quedarse. Adorar la Eucaristía como la respuesta de Dios a no dejarnos solos.' },
      { title: '"Hagan esto en memoria mía"', text: 'No fue una sugerencia, fue un mandato que se repite en cada misa desde entonces. Entender la adoración como continuación de esa misma noche.' },
      { title: 'Del cenáculo al sagrario', text: 'La misma presencia que compartió mesa con los apóstoles está hoy en el sagrario, disponible y esperando. Aprender a entrar al cenáculo cada vez que entramos a la capilla.' },
    ],
    verses: ['Lucas 22:14-20', '1 Corintios 11:23-25'], chipsLabel: null, chips: null,
  },
];

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
