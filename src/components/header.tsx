interface Props {
    activeSection: string;
    scrollToSection: (sectionId: string) => void;
}

function Header(props: Props) {
    const { activeSection, scrollToSection } = props;

    return (
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
    )
}

export default Header
