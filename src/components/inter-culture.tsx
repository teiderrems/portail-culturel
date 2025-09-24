import { Globe } from "lucide-react";

interface Props {}

function InterCultural(props: Props) {
  const {} = props;

  return (
    <section id="intercultural" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4 flex items-center justify-center gap-2">
            <Globe className="text-emerald-600" /> Mon ouverture interculturalInterculturallle
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Construire une identité biculturelle entre le Cameroun et la France.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
            <h3 className="text-xl font-bold text-blue-700 mb-4 text-center">
              Ma culture d’origine
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Communication indirecte et respectueuse</li>
              <li>• Famille élargie comme pilier social</li>
              <li>• Temps flexible, relationnel</li>
              <li>• Nourriture partagée, conviviale</li>
            </ul>
          </div>
          <div className="bg-rose-50 p-6 rounded-xl border border-rose-200">
            <h3 className="text-xl font-bold text-rose-700 mb-4 text-center">
              Culture française
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Communication directe et claire</li>
              <li>• Indépendance individuelle valorisée</li>
              <li>• Ponctualité et organisation</li>
              <li>• Repas structurés, gastronomie raffinée</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80"
            alt="Vie étudiante en France"
            className="mx-auto rounded-xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
}

export default InterCultural;
