// import React from "react";
// import ReactPlayer from "react-player/youtube";
// import { useAudioControls } from "../context/AudioControlContext";

// const YOUTUBE_VIDEO_URL = "https://www.youtube.com/watch?time_continue=14&v=rqTZ4u9lGtc&embeds_referring_euri=https%3A%2F%2Flinktr.ee%2F&embeds_referring_origin=https%3A%2F%2Flinktr.ee";

// //const YOUTUBE_VIDEO_URL2 = "https://www.youtube.com/watch?v=m9la-P4p2U8";

// // const YOUTUBE_VIDEO_URL3 = "https://www.youtube.com/watch?v=WNhpDYUYquE";

// // const YOUTUBE_VIDEO_URL4 = "https://www.youtube.com/watch?v=JZOJlyreMxY";





// const YouTubeSpotlight: React.FC = () => {
//   const { pauseBackground, resumeBackground } = useAudioControls();

//   return (
//     <section className="px-4 sm:px-6 py-8 sm:py-12 md:py-16 bg-black">
//       <div className="max-w-5xl mx-auto">
//         <header className="mb-6 text-center">
//           <p className="uppercase tracking-[0.3em] text-xs text-violet-400">
//             Reel destacado
//           </p>
//           <h2 className="text-3xl font-semibold text-white mt-2">
//             Escena en foco
//           </h2>
//           <p className="text-gray-400 mt-2">
//             Disfrutá este reel exclusivo a pantalla completa.
//           </p>
//         </header>
//         <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-violet-500/20">
//           <ReactPlayer
//             url={YOUTUBE_VIDEO_URL}
//             width="100%"
//             height="100%"
//             controls
//             playing={false}
//             onPlay={pauseBackground}
//             onPause={resumeBackground}
//             onEnded={resumeBackground}
//             className="react-player"
//           />
        
//         </div>
//       </div>
//     </section>
//   );
// };

// export default YouTubeSpotlight;


import React from "react";
import ReactPlayer from "react-player/youtube";
import { useAudioControls } from "../context/AudioControlContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Array con todas las URLs de videos
const YOUTUBE_VIDEOS = [
  "https://www.youtube.com/watch?time_continue=14&v=rqTZ4u9lGtc&embeds_referring_euri=https%3A%2F%2Flinktr.ee%2F&embeds_referring_origin=https%3A%2F%2Flinktr.ee",
  "https://www.youtube.com/watch?v=m9la-P4p2U8",
  "https://www.youtube.com/watch?v=WNhpDYUYquE",
  "https://www.youtube.com/watch?v=JZOJlyreMxY",
  // Agrega más URLs aquí si lo necesitas
];

const YouTubeCarousel: React.FC = () => {
  const { pauseBackground, resumeBackground } = useAudioControls();

  return (
    <section className="px-4 sm:px-6 py-8 sm:py-12 md:py-16 bg-black">
      <div className="max-w-5xl mx-auto">
        <header className="mb-8 text-center">
          <p className="uppercase tracking-[0.3em] text-xs text-violet-400">
            Reel destacado
          </p>
          <h2 className="text-3xl font-semibold text-white mt-2">
            Escenas en foco
          </h2>
          <p className="text-gray-400 mt-2">
            Disfrutá estos reels exclusivos - Deslizá para ver más
          </p>
        </header>
        
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-violet-500/20">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="w-full"
          >
            {YOUTUBE_VIDEOS.map((url, index) => (
              <SwiperSlide key={index}>
                <div className="relative aspect-video bg-black">
                  <ReactPlayer
                    url={url}
                    width="100%"
                    height="100%"
                    controls
                    playing={false}
                    onPlay={pauseBackground}
                    onPause={resumeBackground}
                    onEnded={resumeBackground}
                    className="react-player"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        
        {/* Indicador de video actual */}
        <div className="mt-4 text-center text-gray-400 text-sm">
          Video {YOUTUBE_VIDEOS.length > 1 ? `1 de ${YOUTUBE_VIDEOS.length}` : 'único'}
        </div>
      </div>
    </section>
  );
};

export default YouTubeCarousel;