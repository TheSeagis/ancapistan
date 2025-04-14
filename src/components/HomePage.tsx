// src/components/HomePage.tsx
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <div className="relative h-96 w-full">
        <Image 
          src="/hero-image.jpg" 
          alt="Anarcho-Capitalism" 
          fill 
          style={{objectFit: 'cover'}}
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="text-center p-4">
            <h1 className="text-5xl font-bold text-yellow-400 mb-4">Ancapistan</h1>
            <p className="text-xl max-w-2xl mx-auto">Exploring the principles, history, and applications of Anarcho-Capitalism</p>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-6xl mx-auto p-6">
        <div className="grid md:grid-cols-2 gap-8 my-12">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-yellow-400">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Core Principles</h2>
            <p className="mb-4">Anarcho-capitalism is a political philosophy that advocates for the elimination of the state in favor of individual sovereignty, private property, and free markets.</p>
            <div className="mt-4 text-right">
              <a href="/principles" className="text-yellow-400 hover:underline">Learn more →</a>
            </div>
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image 
              src="/principles-image.jpg" 
              alt="Anarcho-Capitalist Principles" 
              fill 
              style={{objectFit: 'cover'}}
            />
          </div>
        </div>

        {/* Additional sections would follow the same pattern */}
      </div>
    </div>
  );
}
