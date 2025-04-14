export default function HomePage() {
  return (
    <div className="min-h-screen bg-ancap-black text-white">
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-ancap-gold mb-4">Anarcho-Capitalism: Liberty, Property, and Voluntary Exchange</h1>
        
        <p className="mb-8 text-lg">
          Explore the philosophy that envisions a society based on voluntary relationships and free markets without state intervention.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <a href="/principles" className="block p-6 bg-gray-900 border-l-4 border-ancap-gold rounded-lg hover:bg-gray-800 transition">
            <h2 className="text-2xl font-bold text-ancap-gold mb-2">Core Principles</h2>
            <p>Discover the foundational ideas that define anarcho-capitalist thought.</p>
          </a>
          
          <a href="/resources" className="block p-6 bg-gray-900 border-l-4 border-ancap-gold rounded-lg hover:bg-gray-800 transition">
            <h2 className="text-2xl font-bold text-ancap-gold mb-2">Explore Resources</h2>
            <p>Find books, articles, and other materials to deepen your understanding.</p>
          </a>
        </div>
        
        <h2 className="text-3xl font-bold text-ancap-gold mb-4">What is Anarcho-Capitalism?</h2>
        
        <p className="mb-4">
          Anarcho-capitalism is a political philosophy that advocates for the elimination of the state in favor of individual sovereignty, private property, and free markets. It combines anarchism's rejection of the state with capitalism's emphasis on private property and voluntary exchange.
        </p>
        
        <p className="mb-4">
          Unlike other forms of anarchism that oppose capitalism, anarcho-capitalism sees free markets as the foundation of a free society. It envisions a world where all goods and services—including law, security, and infrastructure—are provided through voluntary market transactions rather than government coercion.
        </p>
        
        <p className="mb-8">
          This comprehensive resource explores the principles, history, key figures, economic theories, practical applications, and criticisms of anarcho-capitalism, providing a balanced and in-depth understanding of this influential philosophy.
        </p>
        
        <h2 className="text-3xl font-bold text-ancap-gold mb-4">Core Tenets of Anarcho-Capitalism</h2>
        
        <div className="ml-6 mb-8">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">1. Self-Ownership</h3>
            <p>Each individual has exclusive control over their own body and life.</p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">2. Non-Aggression Principle</h3>
            <p>Initiation of physical force against persons or property, threat of such, or fraud upon persons or their property is inherently illegitimate.</p>
          </div>
          
          {/* Add more tenets as needed */}
        </div>
      </div>
    </div>
  );
}
