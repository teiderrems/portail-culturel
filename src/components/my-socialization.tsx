
import { Sparkle } from "lucide-react";
import { useState } from "react";

interface Step {
  stage: string;
  context: string;
  norms: string[];
  values: string[];
  practices: string[];
  changes: string[];
}

const steps: Step[] = [
  {
    stage: "Socialisation primaire",
    context: "Enfance au village : ancrage culturel fort, vie traditionnelle.",
    norms: [
      "Respect strict des aînés",
      "Participation obligatoire aux rites du village"
    ],
    values: ["Solidarité communautaire", "Respect des traditions"],
    practices: [
      "Repas partagés en famille",
      "Danses et fêtes traditionnelles",
      "Usage quotidien de la langue locale"
    ],
    changes: ["Identité fortement enracinée dans la culture locale"]
  },
  {
    stage: "Socialisation secondaire (Cameroun)",
    context:
      "Adolescence et jeunesse à Douala : immersion dans un milieu urbain et multiculturel.",
    norms: ["Adaptation aux codes urbains", "Échanges avec d’autres ethnies"],
    values: ["Ouverture à la diversité", "Recherche de réussite scolaire"],
    practices: [
      "Découverte de nouvelles cuisines et musiques",
      "Usage du français comme langue principale",
      "Participation à des cercles d’amis multiculturels"
    ],
    changes: [
      "Continuité : respect et solidarité conservés",
      "Rupture : plus grande ouverture aux différences culturelles"
    ]
  },
  {
    stage: "Socialisation secondaire (France)",
    context:
      "Études en France : confrontation à un nouvel environnement social et culturel.",
    norms: [
      "Ponctualité stricte aux cours et rendez-vous",
      "Respect des lois et procédures administratives"
    ],
    values: ["Autonomie", "Responsabilité individuelle", "Liberté personnelle"],
    practices: [
      "Usage quasi exclusif du français",
      "Adaptation aux habitudes européennes",
      "Maintien des traditions camerounaises avec la diaspora"
    ],
    changes: [
      "Continuité : respect des aînés, attachement à la famille",
      "Rupture : découverte de l’individualisme et d’une société plus formelle"
    ]
  }
];

export default function MySocialization() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="socialization" className=" py-20 bg-gray-200/50 ">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800/50 mb-4 flex items-center justify-center gap-2">
        <Sparkle />Mon parcours de socialisation
      </h1>

      <div className="space-y-6 max-w-4xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`border-0 rounded-2xl focus:rounded-none focus:border-0 shadow-md overflow-hidden transition ${
              activeIndex === index ? "bg-white" : "bg-gray-50"
            }`}
          >
            <button
              className="w-full text-left px-4 py-3 flex justify-between items-center bg-gray-100 hover:bg-gray-200"
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
            >
              <span className="font-semibold">{step.stage}</span>
              <span>{activeIndex === index ? "−" : "+"}</span>
            </button>

            {activeIndex === index && (
              <div className="p-4 text-gray-700 space-y-3">
                <p className="italic text-gray-600">{step.context}</p>

                <div>
                  <h3 className="font-medium">Normes :</h3>
                  <ul className="list-disc list-inside">
                    {step.norms.map((n, i) => (
                      <li key={i}>{n}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium">Valeurs :</h3>
                  <ul className="list-disc list-inside">
                    {step.values.map((v, i) => (
                      <li key={i}>{v}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium">Pratiques :</h3>
                  <ul className="list-disc list-inside">
                    {step.practices.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium">Continuité / Rupture :</h3>
                  <ul className="list-disc list-inside">
                    {step.changes.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
