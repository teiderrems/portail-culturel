import { MapPin } from "lucide-react";
import { useEffect, useState } from "react";

interface Props {}

function Cameroon(props: Props) {
  const {} = props;

  const sources = [
    {
      label: "Tout savoir sur le Cameroun : Une Histoire Riche et Méconnue",
      url: "https://youtu.be/K4KHFJ6hdnc?si=IWNrj2VT1DKMvL0N",
      description:
        "Découvrez l'histoire fascinante du Cameroun, un pays aux multiples facettes culturelles, historiques et géographiques. Cette vidéo explore les origines, les royaumes traditionnels, la colonisation, et l'indépendance du Cameroun à travers une narration riche et illustrée.",
    },
    {
      label:
        "Sur les pas des Dieux. Rituels bamiléké (Cameroun). Film réalisé par Philippe Charlier. 2022.",
      url: "https://youtu.be/WAcVzyx0JZU",
      description:
        "Un documentaire ethnographique captivant qui plonge le spectateur au cœur des rituels sacrés du peuple Bamiléké au Cameroun. Réalisé par Philippe Charlier en 2022, ce film explore les pratiques spirituelles, les masques cérémoniels et la cosmogonie de cette civilisation ancestrale.",
    },
    {
      label: "Nukwi Ne Abubte: Nkwen Celebrates Fo Angwafo III of Mankon 3",
      url: "https://youtu.be/bxhrRdydDB0",
      description:
        "Cette vidéo documente les célébrations en l'honneur de Fo Angwafo III, roi du royaume de Mankon. Elle met en lumière les danses traditionnelles, les chants, les costumes royaux et la grandeur des cérémonies culturelles du peuple Nkwen au Cameroun.",
    },
    {
      label: "Cameroun, la Route des chefferies au Cameroun",
      url: "https://youtu.be/Kxx1YF-0a2s",
      description:
        "Partez à la découverte de la Route des Chefferies, un itinéraire culturel unique au Cameroun qui relie les palais royaux et les sites historiques des différents royaumes traditionnels. Une immersion dans le patrimoine architectural, artistique et politique des chefferies camerounaises.",
    },
  ];
  // Extract video IDs from YouTube URLs
  const getVideoId = (url: string) => {
    const match = url.match(
      /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
    );
    return match ? match[1] : null;
  };

  // Generate thumbnail URL from video ID
  const getThumbnailUrl = (videoId: string) => {
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };

  // State to track which video is being previewed
  const [previewingVideo, setPreviewingVideo] = useState<string | null>(null);

  const handlePreviewClick = (videoId: string | null) => {
    setPreviewingVideo(videoId);
  };

  const closePreview = () => {
    setPreviewingVideo(null);
  };

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closePreview();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [previewingVideo]);

  return (
    <section
      id="cameroon"
      className="py-20 bg-emerald-50 "
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4 flex items-center justify-center gap-2">
            <MapPin className="text-emerald-600" /> Le Cameroun : l’Afrique en
            miniature
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Un pays de diversité linguistique, culinaire, musicale et sportive.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { label: "250+ langues", icon: "🗣️" },
            { label: "Makossa & Bikutsi", icon: "🎶" },
            { label: "Cuisine variée", icon: "🍲" },
            { label: "Passion du football", icon: "⚽" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-2">{item.icon}</div>
              <p className="font-medium text-gray-700">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-4 text-center">
          <img
            src="https://live.staticflickr.com/2099/1646625539_b79b9f2ae2_b.jpg"
            alt="Paysages du Cameroun"
            className="mx-auto rounded-xl shadow-lg  h-100"
          />
          <img
            src="https://th.bing.com/th/id/OIP.lFjDT9AMuluSi3pAAii-bQHaE7"
            alt="Paysages du Cameroun"
            className=" rounded-xl shadow-lg  h-100"
          />
          <img
            src="https://th.bing.com/th/id/OIP.Kt97ifgrSkMNlZNXYG2OsQHaE7"
            alt="Paysages du Cameroun"
            className="mx-auto rounded-xl shadow-lg  h-100"
          />
        </div>
        {/* <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold text-emerald-800 mb-4">
            Sources et références
          </h3>
          <ul className="list-disc list-inside text-gray-600 max-w-2xl mx-auto space-y-2">
            {sources.map((source, i) => (
              <li key={i}>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-600 hover:underline"
                >
                  {source.label}
                </a>
              </li>
            ))}
          </ul>
        </div> */}
        <section className="py-8 px-6">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">
              Quelques vidéos pour en savoir plus
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sources.map((source, index) => {
                const videoId = getVideoId(source.url);
                const thumbnailUrl = videoId
                  ? getThumbnailUrl(videoId)
                  : "https://placehold.co/400x225/4B5563/FFFFFF?text=Video+Unavailable";

                return (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="relative">
                      <img
                        src={thumbnailUrl}
                        alt={source.label}
                        className="w-full h-48 object-cover cursor-pointer"
                        onClick={() => handlePreviewClick(videoId)}
                      />
                      <div
                        className="absolute inset-0 flex items-center justify-center cursor-pointer"
                        onClick={() => handlePreviewClick(videoId)}
                      >
                        <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                          <svg
                            className="w-8 h-8 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.286l7.5-3.75a1.5 1.5 0 000-2.672L6.3 2.84z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-semibold mb-2">
                        {source.label}
                      </h3>
                      <p className="text-gray-600 mb-4">{source.description}</p>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-red-600 self-end hover:bg-red-700 text-white font-medium py-1 px-3 rounded text-sm"
                      >
                        Voir sur YouTube
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Video Preview Modal */}
        {previewingVideo && (
          <div className="fixed inset-0 bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="absolute inset-0 bg-gray-400/50  z-100 hover:cursor-pointer" onClick={closePreview} ></div>
            <div className="bg-white rounded-lg max-w-4xl w-full z-200 max-h-[90vh] overflow-y-auto">
              {/* <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                <h3 className="text-xl font-bold">
                  Prévisualisation de la vidéo
                </h3>
              </div> */}
              <div className="p-4">
                <div className="aspect-video bg-black flex items-center justify-center">
                  <iframe
                    src={`https://www.youtube.com/embed/${previewingVideo}?autoplay=1`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-gray-600">
                    Pour une meilleure expérience, vous pouvez regarder la vidéo
                    directement sur YouTube.
                  </p>
                  <div className="mt-4 flex justify-end">
                    <a
                      href={`https://www.youtube.com/watch?v=${previewingVideo}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded"
                    >
                      Ouvrir sur YouTube
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Cameroon;
