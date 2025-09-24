interface Props {
    cultureItems: Array<{
        title: string;
        subtitle: string;
        images: Array<{
            src: string;
            caption: string;
        }>;
    }>;
    currentItemIndex: number;
    currentImageIndex: number;
    setCurrentImageIndex: (index: number) => void;
    closeCarousel: () => void;
    prevImage: () => void;
    nextImage: () => void;
}

function ModalCarousel(props: Props) {
  const {
    cultureItems,
    currentItemIndex,
    currentImageIndex,
    setCurrentImageIndex,
    closeCarousel,
    prevImage,
    nextImage
  } = props;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-gray-600/25 z-100" onClick={closeCarousel}></div>
      <div className="relative w-full max-w-4xl z-200">

        <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
          <div className="bg-emerald-800 text-white p-4 text-center">
            <h3 className="text-xl font-bold">
              {cultureItems[currentItemIndex].title}
            </h3>
            <p className="text-emerald-200 text-sm">
              {cultureItems[currentItemIndex].subtitle}
            </p>
          </div>

          <div className="h-80 md:h-96 relative overflow-hidden">
            <img
              src={
                cultureItems[currentItemIndex].images[currentImageIndex]?.src ||
                ""
              }
              alt="Culture detail"
              className="w-full h-full"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 text-sm opacity-0 group-hover:opacity-100 hover:opacity-100 transition-opacity">
              {
                cultureItems[currentItemIndex].images[currentImageIndex]
                  ?.caption
              }
            </div>
          </div>

          <div className="p-4 flex justify-between items-center">
            <button
              onClick={prevImage}
              className="px-4 py-2 bg-emerald-100 text-emerald-800 rounded hover:bg-emerald-200"
            >
              Précédent
            </button>

            <div className="flex space-x-2">
              {cultureItems[currentItemIndex].images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`w-3 h-3 rounded-full ${
                    idx === currentImageIndex ? "bg-emerald-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextImage}
              className="px-4 py-2 bg-emerald-100 text-emerald-800 rounded hover:bg-emerald-200"
            >
              Suivant
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalCarousel;
