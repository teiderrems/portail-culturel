import { ChevronDown } from 'lucide-react';

interface Props {
    scrollToSection: (sectionId: string) => void;
}

function Home(props: Props) {
    const { scrollToSection } = props

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
        />
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="container mx-auto px-4 text-center  z-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Mon portrait culturel – Fono Colince</h1>
          <p className="text-xl md:text-2xl mb-8 italic">
            « La culture est l’âme d’un peuple. »
          </p>
          <button
            onClick={() => scrollToSection('identity')}
            className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-full font-semibold flex items-center mx-auto transition-all"
          >
            Découvrir mon parcours <ChevronDown className="ml-2" />
          </button>
        </div>
      </section>
    )
}

export default Home
