import { Users } from "lucide-react";

interface Props {}

function Identity(props: Props) {
  const {} = props;

  return (
    <section id="identity" className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4 flex items-center justify-center gap-2">
            <Users className="text-emerald-600" /> Mon identité personnelle
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Comment la socialisation familiale et communautaire a façonné qui je
            suis.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {[
            {
              title: "Enfance au Cameroun",
              content:
                "Né dans une famille soudée, j’ai grandi entouré de mes grands-parents, piliers de sagesse et de traditions.",
              image: "/enfance.png",
            },
            {
              title: "Transmission des valeurs",
              content:
                "Respect, solidarité, spiritualité — ces valeurs m’ont été transmises à travers les contes, les cérémonies et le quotidien.",
              image: "/transmission_valeur.png",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center gap-6 bg-white p-6 rounded-xl shadow-md"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full md:w-1/3 h-48 rounded-lg"
              />
              <div className="md:w-2/3 text-center md:text-left">
                <h3 className="text-xl font-semibold text-emerald-700">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-700">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Identity;
