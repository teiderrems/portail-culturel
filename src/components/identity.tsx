"use client";
import { useState } from "react";
import { Users } from "lucide-react";
import EnfanceNarration from "./EnfanceNarration";
import TransmissionNarration from "./TransmissionNarration";

interface Props {}

function Identity(props: Props) {
  const {} = props;

  const [showEnfance, setShowEnfance] = useState(false);
  const [showTransmission, setShowTransmission] = useState(false);

  return (
    <section id="identity" className="py-20 bg-amber-50 ">
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
          {/* Carte Enfance */}
          <button
            onClick={() => setShowEnfance(true)}
            className="w-full flex flex-col md:flex-row items-center gap-6 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <img
              src="/enfance.png"
              alt="Enfance au Cameroun"
              className="w-full md:w-1/3 h-48 rounded-lg"
            />
            <div className="md:w-2/3 text-center md:text-left">
              <h3 className="text-xl font-semibold text-emerald-700">
                Enfance au Cameroun
              </h3>
              <p className="mt-2 text-gray-700">
                Né dans une famille soudée, j’ai grandi entouré de mes
                grands-parents, piliers de sagesse et de traditions.
              </p>
            </div>
          </button>

          {/* Carte Transmission */}
          <button
            onClick={() => setShowTransmission(true)}
            className="w-full flex flex-col md:flex-row items-center gap-6 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <img
              src="/transmission_valeur.png"
              alt="Transmission des valeurs"
              className="w-full md:w-1/3 h-48 rounded-lg"
            />
            <div className="md:w-2/3 text-center md:text-left">
              <h3 className="text-xl font-semibold text-emerald-700">
                Transmission des valeurs
              </h3>
              <p className="mt-2 text-gray-700">
                Respect, solidarité, spiritualité — ces valeurs m’ont été
                transmises à travers les contes, les cérémonies et le quotidien.
              </p>
            </div>
          </button>
        </div>
      </div>

      {/* Popups */}
      {showEnfance && <EnfanceNarration onClose={() => setShowEnfance(false)} />}
      {showTransmission && (
        <TransmissionNarration onClose={() => setShowTransmission(false)} />
      )}
    </section>
  );
}

export default Identity;
