import { MapPin } from "lucide-react";

interface Props {}

function Cameroon(props: Props) {
  const {} = props;

  return (
    <section id="cameroon" className="py-20 bg-emerald-50">
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
      </div>
    </section>
  );
}

export default Cameroon;
