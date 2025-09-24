import { Sparkles } from "lucide-react";

interface Props {}

function Conclusion(props: Props) {
  const {} = props;

  return (
    <section
      id="conclusion"
      className="py-20 bg-gradient-to-br from-emerald-700 to-emerald-900 text-white"
    >
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8">
          <Sparkles className="w-16 h-16 mx-auto text-yellow-300" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Conclusion</h2>
        <blockquote className="text-xl md:text-2xl italic max-w-3xl mx-auto mb-8 leading-relaxed">
          « Mon identité est un pont entre deux mondes — enrichi par mes
          racines, ouvert au dialogue des cultures. »
        </blockquote>
      </div>
    </section>
  );
}

export default Conclusion;
