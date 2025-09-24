import  { useState, useEffect } from 'react';
import { ChevronDown, MapPin, Users, Music, Globe, Sparkles, X } from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [carouselOpen, setCarouselOpen] = useState(false);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const cultureItems = [
    {
      title: "Danses traditionnelles",
      subtitle: "Chaque geste raconte une histoire ancestrale",
      images: [
        {
          src: "https://th.bing.com/th/id/OIP.SJnj8XI_B6yPV5PkcMwuYQHaEi",
          caption: "Danse Bamiléké (Ouest Cameroun) – Masques royaux et tambours sacrés lors de cérémonies."
        },
        {
          src: "https://savoirfairekang.com/wp-content/uploads/2024/07/Danses-Patrimoniales-Ekang-SFE-2048x1072.webp",
          caption: "Danse Ekang – Rite initiatique des peuples du Sud, mêlant chant, percussion et transe."
        }
      ]
    },
    {
      title: "Habits traditionnels",
      subtitle: "Tissus porteurs d’identité et de prestige",
      images: [
        {
          src: "https://tse1.mm.bing.net/th/id/OIP.2-cfhflehbqiEzzeD-Y1UwHaH7",
          caption: "Tissu Ndop (Bamiléké) – Motifs symboliques transmis par les reines-mères."
        },
        {
          src: "https://back2culture.cm/wp-content/uploads/2025/03/La-dote-chez-les-Mboudas.jpg",
          caption: "Pagne Kaba (Nord) – Porté par les chefs et dignitaires lors des grandes assemblées."
        }
      ]
    },
    {
      title: "Plats typiques de l’Ouest du Cameroun",
      subtitle: "Saveurs riches, partage et convivialité",
      images: [
        {
          src: "https://www.africanbites.com/wp-content/uploads/2012/11/IMG_5428.jpg",
          caption: "Ndolé – Plat national à base de feuilles amères, arachides et poisson fumé."
        },
        {
          src: "https://th.bing.com/th/id/OIP.BdvwJT3Wwd2-thRpUzk2XgHaDz",
          caption: "Achu – Pâte de taro servie avec une sauce jaune au poivre, spécialité Bamiléké."
        },
        {
          src: "data:image/webp;base64,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",
          caption: "Bobolo – Bâton de manioc fermenté, accompagnement incontournable des sauces."
        }
      ]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'identity', 'culture', 'cameroon', 'intercultural', 'conclusion'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id:string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const openCarousel = (itemIndex:number) => {
    setCurrentItemIndex(itemIndex);
    setCurrentImageIndex(0);
    setCarouselOpen(true);
  };

  const closeCarousel = () => {
    setCarouselOpen(false);
  };

  const nextImage = () => {
    const total = cultureItems[currentItemIndex].images.length;
    setCurrentImageIndex((prev) => (prev + 1) % total);
  };

  const prevImage = () => {
    const total = cultureItems[currentItemIndex].images.length;
    setCurrentImageIndex((prev) => (prev - 1 + total) % total);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!carouselOpen) return;
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') closeCarousel();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [carouselOpen, currentItemIndex, currentImageIndex]);

  return (
    <div className="font-sans text-gray-800 min-h-screen min-w-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold text-emerald-800">Mon portrait culturel</h1>
          <div className="hidden md:flex space-x-6">
            {[
              { id: 'home', label: 'Accueil' },
              { id: 'identity', label: 'Identité' },
              { id: 'culture', label: 'Culture' },
              { id: 'cameroon', label: 'Cameroun' },
              { id: 'intercultural', label: 'Interculturel' },
              { id: 'conclusion', label: 'Conclusion' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-colors ${
                  activeSection === item.id ? 'text-emerald-700' : 'text-gray-600 hover:text-emerald-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Home Section */}
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

      {/* Identity Section */}
      <section id="identity" className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4 flex items-center justify-center gap-2">
              <Users className="text-emerald-600" /> Mon identité personnelle
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Comment la socialisation familiale et communautaire a façonné qui je suis.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                title: "Enfance au Cameroun",
                content: "Né dans une famille soudée, j’ai grandi entouré de mes grands-parents, piliers de sagesse et de traditions.",
                image: "/enfance.png"
              },
              {
                title: "Transmission des valeurs",
                content: "Respect, solidarité, spiritualité — ces valeurs m’ont été transmises à travers les contes, les cérémonies et le quotidien.",
                image: "/transmission_valeur.png"
              }
            ].map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center gap-6 bg-white p-6 rounded-xl shadow-md">
                <img src={item.image} alt={item.title} className="w-full md:w-1/3 h-48 rounded-lg" />
                <div className="md:w-2/3 text-center md:text-left">
                  <h3 className="text-xl font-semibold text-emerald-700">{item.title}</h3>
                  <p className="mt-2 text-gray-700">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section id="culture" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4 flex items-center justify-center gap-2">
              <Music className="text-emerald-600" /> Ma culture
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Danses, musiques, cérémonies, habits et plats typiques : la richesse vivante de mes racines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {cultureItems.map((item, i) => (
              <div
                key={i}
                onClick={() => openCarousel(i)}
                className="group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <img src={item.images[0].src} alt={item.title} className="w-full h-64" />
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

      {/* Cameroon Section */}
      <section id="cameroon" className="py-20 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4 flex items-center justify-center gap-2">
              <MapPin className="text-emerald-600" /> Le Cameroun : l’Afrique en miniature
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
              <div key={i} className="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow">
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

      {/* Intercultural Section */}
      <section id="intercultural" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4 flex items-center justify-center gap-2">
              <Globe className="text-emerald-600" /> Mon ouverture interculturelle
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Construire une identité biculturelle entre le Cameroun et la France.
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
              <h3 className="text-xl font-bold text-blue-700 mb-4 text-center">Ma culture d’origine</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Communication indirecte et respectueuse</li>
                <li>• Famille élargie comme pilier social</li>
                <li>• Temps flexible, relationnel</li>
                <li>• Nourriture partagée, conviviale</li>
              </ul>
            </div>
            <div className="bg-rose-50 p-6 rounded-xl border border-rose-200">
              <h3 className="text-xl font-bold text-rose-700 mb-4 text-center">Culture française</h3>
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

      {/* Conclusion */}
      <section id="conclusion" className="py-20 bg-gradient-to-br from-emerald-700 to-emerald-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <Sparkles className="w-16 h-16 mx-auto text-yellow-300" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Conclusion</h2>
          <blockquote className="text-xl md:text-2xl italic max-w-3xl mx-auto mb-8 leading-relaxed">
            « Mon identité est un pont entre deux mondes — enrichi par mes racines, ouvert au dialogue des cultures. »
          </blockquote>
        </div> 
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center">
        <p>© {new Date().getFullYear()} Fono Colince – Mon portrait culturel</p>
      </footer>

      {/* Carousel Modal */}
      {carouselOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={closeCarousel}
              className="absolute -top-12 right-0 bg-black/50 rounded-full p-2 hover:bg-black"
            >
              <X size={24} />
            </button>

            <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
              <div className="bg-emerald-800 text-white p-4 text-center">
                <h3 className="text-xl font-bold">{cultureItems[currentItemIndex].title}</h3>
                <p className="text-emerald-200 text-sm">{cultureItems[currentItemIndex].subtitle}</p>
              </div>

              <div className="h-80 md:h-96 relative overflow-hidden">
                <img
                  src={cultureItems[currentItemIndex].images[currentImageIndex]?.src || ''}
                  alt="Culture detail"
                  className="w-full h-full"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 text-sm opacity-0 group-hover:opacity-100 hover:opacity-100 transition-opacity">
                  {cultureItems[currentItemIndex].images[currentImageIndex]?.caption}
                </div>
              </div>

              <div className="p-4 flex justify-between items-center">
                <button
                  onClick={prevImage}
                  className="px-4 py-2 bg-emerald-100 text-emerald-800 rounded hover:bg-emerald-200"
                >
                  Précédent
                </button>

                <div className="flex space-x-2">
                  {cultureItems[currentItemIndex].images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`w-3 h-3 rounded-full ${
                        idx === currentImageIndex ? 'bg-emerald-600' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextImage}
                  className="px-4 py-2 bg-emerald-100 text-emerald-800 rounded hover:bg-emerald-200"
                >
                  Suivant
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;