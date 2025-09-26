"use client";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const values = [
  {
    title: "Respect",
    description:
      "Toujours saluer les aînés, écouter les conseils, et reconnaître la place de chacun dans la communauté.",
  },
  {
    title: "Solidarité",
    description:
      "Être présent pour les autres, partager le peu que l’on a, et trouver sa force dans l’unité.",
  },
  {
    title: "Spiritualité",
    description:
      "Garder un lien profond avec les traditions et les croyances, qui guident mes choix et mes pas.",
  },
  {
    title: "Adaptabilité",
    description:
      "Même en changeant de milieu (village, ville, France), j’ai conservé l’essentiel de ces valeurs en moi.",
  },
];

interface Props {
  onClose: () => void;
}

export default function TransmissionNarration({ onClose }: Props) {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="absolute inset-0 bg-black/70 z-100 hover:cursor-pointer" onClick={onClose}></div>
      <motion.div
        className="bg-white rounded-2xl z-200 shadow-lg max-w-2xl w-full p-6 relative overflow-y-auto max-h-[90vh]"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        {/* Bouton fermer */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-red-500"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold text-emerald-700 mb-6">
          Transmission des valeurs
        </h2>

        <div className="grid gap-6">
          {values.map((val, index) => (
            <motion.div
              key={index}
              className="bg-amber-50 p-4 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-emerald-600">
                {val.title}
              </h3>
              <p className="text-gray-700 mt-1">{val.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
