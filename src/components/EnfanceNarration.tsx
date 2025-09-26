"use client";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const steps = [
  {
    title: "Enfance au village",
    description:
      "J’ai grandi dans mon village, entouré d’un ancrage culturel unique : traditions, histoires racontées par les anciens, solidarité quotidienne.",
  },
  {
    title: "Découverte du milieu urbain",
    description:
      "Plus tard, j’ai poursuivi mon parcours à Douala. Là, j’ai découvert la multiculturalité : plusieurs langues, plusieurs coutumes, et un brassage qui a élargi ma vision du monde.",
  },
  {
    title: "Arrivée en France",
    description:
      "En France, un nouveau chapitre a commencé. Même si le cadre change, certains éléments de ma culture d’origine sont restés vivants en moi et continuent de m’accompagner.",
  },
];

interface Props {
  onClose: () => void;
}

export default function EnfanceNarration({ onClose }: Props) {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="absolute inset-0 bg-black/70 z-100 hover:cursor-pointer" onClick={onClose}></div>
      <motion.div
        className="bg-white rounded-2xl z-200 shadow-lg max-w-2xl w-full p-6 relative overflow-y-auto max-h-[90vh]"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
      >
        {/* Bouton fermer */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-red-500"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold text-emerald-700 mb-6">
          Mon parcours de socialisation
        </h2>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="border-l-4 border-emerald-500 pl-4"
            >
              <h3 className="text-xl font-semibold text-emerald-600">
                {step.title}
              </h3>
              <p className="text-gray-700 mt-2">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
