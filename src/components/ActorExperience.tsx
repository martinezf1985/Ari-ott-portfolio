import React from "react";
import { useInView } from "react-intersection-observer";

interface ExperienceItem {
  id: number;
  date: string;
  title: string;
  detail: string;
}
const experienceData: ExperienceItem[] = [
  // 2025 - Cine/Publicidad
  { id: 1, date: "ENERO 1st, 2025", title: "PACTO DE CABALLEROS", detail: "Protagonico - Cortometraje." },
  { id: 2, date: "FEBRERO 1st, 2025", title: "ICBC", detail: "Rol Secundario - Publicidad." },
  { id: 3, date: "MARZO 1st, 2025", title: "HUDSON", detail: "Protagonico - Publicidad." },
  
  // 2025 - Teatro
  { id: 4, date: "ABRIL 1st, 2025", title: "CORTESÍA DE CUPIDO 2da TEMPORADA", detail: "Participación actoral en segunda temporada de la obra teatral." },
  
  // 2025 - Formación
  { id: 5, date: "MAYO 1st, 2025", title: "ACTUACIÓN FRENTE A CÁMARA", detail: "Formación en actuación frente a cámara en Filmantropia con Nazareno Lavorato." },
  { id: 6, date: "JUNIO 1st, 2025", title: "CURSO DE NEUTRO", detail: "Curso de neutralidad vocal con Carla Scatarelli, Sagai." },
  
  // 2024 - Cine/Publicidad
  { id: 7, date: "JULIO 1st, 2024", title: "LOS VENEZZIA", detail: "Película." },
  { id: 8, date: "AGOSTO 1st, 2024", title: "MALTRATADA", detail: "Película - Dir. Daniel Silveira, Avanza Producciones." },
  { id: 9, date: "SEPTIEMBRE 1st, 2024", title: "MERCADITO SOBERANO", detail: "Protagonico - Cortometraje." },
  { id: 10, date: "OCTUBRE 1st, 2024", title: "TE ESTAMOS BUSCANDO", detail: "Película, Director Carlos Sorín." },
  
  // 2024 - Teatro
  { id: 11, date: "NOVIEMBRE 1st, 2024", title: "DESTINO MALIBU", detail: "Participación actoral en obra teatral, Dirección Leandro Ramallo." },
  { id: 12, date: "DICIEMBRE 1st, 2024", title: "HABITACIÓN 103", detail: "Participación actoral en obra teatral, Dirección Luciana Barbo." },
  { id: 13, date: "ENERO 1st, 2024", title: "CORTESÍA DE CUPIDO", detail: "Participación actoral en obra teatral, Dirección Sebastián Pilesi." },
  
  // 2024 - Formación
  { id: 14, date: "FEBRERO 1st, 2024", title: "CURSO DE AUTOGESTIÓN AUDIOVISUAL", detail: "Curso de autogestión de proyectos audiovisuales con Nicolás Sorrivas, Sagai." },
  
  // 2023 - Cine/Publicidad
  { id: 15, date: "MARZO 1st, 2023", title: "CORBATAS Y PORTALIGAS", detail: "Película." },
  { id: 16, date: "ABRIL 1st, 2023", title: "LA NOCHE DE ANOCHE", detail: "Cortometraje." },
  { id: 17, date: "MAYO 1st, 2023", title: "AYRTON SENNA", detail: "Serie Netflix." },
  { id: 18, date: "JUNIO 1st, 2023", title: "ARREDO", detail: "Publicidad." },
  { id: 19, date: "JULIO 1st, 2023", title: "COLONIA EXPRESS", detail: "Publicidad." },
  { id: 20, date: "AGOSTO 1st, 2023", title: "BOSHC ARGENTINA", detail: "Video institucional." },
  
  // 2023 - Teatro
  { id: 21, date: "SEPTIEMBRE 1st, 2023", title: "X EL PADRE", detail: "Participación actoral en obra teatral, Dirección Gustavo Luppi." },
  
  // 2023 - Formación
  { id: 22, date: "OCTUBRE 1st, 2023", title: "ACTUACIÓN FRENTE A CÁMARA", detail: "Segundo año de formación en actuación frente a cámara con Gustavo Luppi y Nazareno Lavorato." },
  { id: 23, date: "NOVIEMBRE 1st, 2023", title: "EL TRABAJO DEL ACTOR", detail: "Curso anual 'El trabajo del Actor' con Gustavo Luppi y Nazareno Lavorato." },
  { id: 24, date: "DICIEMBRE 1st, 2023", title: "MONÓLOGOS", detail: "Curso de verano, Monólogos con Gustavo Luppi y Nazareno Lavorato." },
  
  // 2022 - Cine/Publicidad
  { id: 25, date: "ENERO 1st, 2022", title: "LAYS", detail: "Publicidad, Chile." },
  { id: 26, date: "FEBRERO 1st, 2022", title: "DEKALB (BAYER)", detail: "Publicidad." },
  
  // 2022 - Teatro
  { id: 27, date: "MARZO 1st, 2022", title: "NO HAY QUE LLORAR", detail: "Participación actoral en obra de Tito Cossa, Director Alejandro Coletti." },
  
  // 2022 - Formación
  { id: 28, date: "ABRIL 1st, 2022", title: "ACTUACIÓN FRENTE A CÁMARA", detail: "Curso de actuación frente a cámara para TV y cine con Gustavo Luppi y Nazareno Lavorato." },
  
  // 2020 - Teatro
  { id: 29, date: "ENERO 1st, 2020", title: "UN POCO MÁS SALVAJE", detail: "Producción y actuación junto a Leticia Bredice." },
  
  // 2018 - Teatro
  { id: 30, date: "FEBRERO 1st, 2018", title: "QUE NOCHE DE CASAMIENTO", detail: "Participación actoral en segunda temporada, Paseo la Plaza." },
  
  // 2017 - Cine/Publicidad
  { id: 31, date: "MARZO 1st, 2017", title: "QUIERO VIVIR A TU LADO", detail: "Bolo, canal 13." },
  
  // 2017-2019 - Formación
  { id: 32, date: "ABRIL 1st, 2017", title: "ESCUELA DE TEATRO EL MÉTODO KAIRÓS", detail: "Formación actoral de 2017 a 2019 con Francisco Ruiz Barlet, Matías Purichelli, Sofía Gonzales Gil y Andrés Passeri, entre otros profesores." },
  { id: 33, date: "MAYO 1st, 2017", title: "ACTUACIÓN FRENTE A CÁMARA", detail: "Curso de actuación frente a cámara con Natalia Monteferrario y Sabrina Kizner." },
  
  // 2016 - Cine/Publicidad
  { id: 34, date: "JUNIO 1st, 2016", title: "CHEVROLET", detail: "Publicidad, Director Ariel Winograd." },
  
  // 2015 - Formación
  { id: 35, date: "JULIO 1st, 2015", title: "CURSOS DE INTERPRETACIÓN", detail: "Curso de interpretación, emocionalidad y alcance de la palabra hablada con Constanza Marino. Curso de actuación frente a cámara con Pablo Ini." },
  
  // 2011-2014 - Formación
  { id: 36, date: "AGOSTO 1st, 2011", title: "UPEBE - UNIVERSIDAD POPULAR DE BELGRANO", detail: "Formación actoral de 2011 a 2014 con los maestros Carlos de Urquiza y Daniel Fernández." },
];


const TimelineItem: React.FC<{ item: ExperienceItem; inverted: boolean }> = ({ item, inverted }) => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`relative pl-12 mb-10 transition-all duration-700 ease-out ${
        inView
          ? "opacity-100 translate-x-0"
          : inverted
          ? "opacity-0 -translate-x-[50px]"
          : "opacity-0 translate-x-[50px]"
      }`}
    >
      {/* Línea y círculo */}
      <div className="absolute left-0 top-0 h-full flex flex-col items-center">
        <div className="w-2 h-2 bg-violet-400 rounded-full"></div>
        <div className="flex-1 w-px bg-gray-700"></div>
      </div>
      <div className="bg-gray-900/50 rounded-xl p-6">
        <span className="text-sm text-gray-500">{item.date}</span>
        <h3 className="text-xl font-semibold text-violet-300 mt-1">{item.title}</h3>
        <p className="text-gray-300 mt-2 leading-relaxed whitespace-pre-wrap">{item.detail}</p>
      </div>
    </div>
  );
};

const ActorExperience: React.FC = () => {
  return (
    <div className="relative max-w-3xl mx-auto">
      {experienceData.map((item: ExperienceItem, idx: number) => (
        <TimelineItem key={item.id} item={item} inverted={idx % 2 === 0} />
      ))}
    </div>
  );
};

export default ActorExperience;
