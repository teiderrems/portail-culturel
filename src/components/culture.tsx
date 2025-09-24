import { Music } from "lucide-react";  

interface Props {
    cultureItems?: Array<{
        title: string;
        subtitle: string;
        images: Array<{
            src: string;
            caption: string;
        }>;
    }>;
    openCarousel: (startIndex: number) => void;
}

function Culture(props: Props) {
  const { cultureItems,openCarousel } = props;
  

  return (
    <section id="culture" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4 flex items-center justify-center gap-2">
            <Music className="text-emerald-600" /> Ma culture
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Danses, musiques, cérémonies, habits et plats typiques : la richesse
            vivante de mes racines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {cultureItems?.map((item, i) => (
            <div
              key={i}
              onClick={() => openCarousel(i)}
              className="group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={item.images[0].src}
                alt={item.title}
                className="w-full h-64"
              />
              <div className="bg-emerald-100 p-4 text-center">
                <h3 className="font-bold text-emerald-800 group-hover:text-emerald-600 transition-colors">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Culture;
