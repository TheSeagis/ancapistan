'use client';

import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Welcome to Ancapistan
            </h1>
            <p className="text-xl mb-8">
              Your comprehensive resource for understanding Anarcho-Capitalism: a political philosophy advocating the elimination of the state in favor of individual sovereignty, private property, and free markets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/principles" 
                className="bg-black text-yellow-400 px-6 py-3 rounded-md font-medium text-lg hover:bg-gray-800 transition-colors inline-block text-center"
              >
                Explore Principles
              </Link>
              <Link 
                href="/resources" 
                className="bg-transparent border-2 border-black px-6 py-3 rounded-md font-medium text-lg hover:bg-black hover:text-yellow-400 transition-colors inline-block text-center"
              >
                View Resources
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Placeholder for an anarcho-capitalist flag or symbol */}
              <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                <div className="w-3/4 h-3/4 bg-yellow-400 rounded-full flex items-center justify-center">
                  <div className="text-6xl font-bold">Ⓐ</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ title, description, link }: { title: string; description: string; link: string }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link href={link} className="text-yellow-600 hover:text-yellow-800 font-medium">
        Learn more →
      </Link>
    </div>
  );
};

const FeaturedContent = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Explore Anarcho-Capitalism</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            title="Core Principles" 
            description="Discover the foundational principles of Anarcho-Capitalism including self-ownership, non-aggression, and private property rights."
            link="/principles"
          />
          <FeatureCard 
            title="Economic Theory" 
            description="Explore the Austrian School economics that forms the theoretical foundation of anarcho-capitalist thought."
            link="/theory/economic-foundations"
          />
          <FeatureCard 
            title="Key Thinkers" 
            description="Learn about influential figures like Murray Rothbard, David Friedman, and Ludwig von Mises who shaped anarcho-capitalist philosophy."
            link="/key-figures"
          />
          <FeatureCard 
            title="Practical Applications" 
            description="Examine how anarcho-capitalist principles could be applied to law, defense, banking, and other aspects of society."
            link="/applications"
          />
          <FeatureCard 
            title="Historical Context" 
            description="Understand the historical development of anarcho-capitalism and its intellectual origins."
            link="/history"
          />
          <FeatureCard 
            title="Critical Perspectives" 
            description="Engage with criticisms of anarcho-capitalism and the responses from its proponents."
            link="/criticisms"
          />
        </div>
      </div>
    </div>
  );
};

const QuoteSection = () => {
  return (
    <div className="bg-gray-900 text-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <svg className="w-12 h-12 mx-auto mb-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <blockquote className="text-2xl font-medium italic mb-6">
          "The libertarian creed rests upon one central axiom: that no man or group of men may aggress against the person or property of anyone else."
        </blockquote>
        <cite className="text-lg">— Murray Rothbard, <span className="font-light">For a New Liberty</span></cite>
      </div>
    </div>
  );
};

const LatestResources = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Latest Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Essential Reading List</h3>
              <p className="text-gray-600 mb-4">A curated collection of the most important books on anarcho-capitalist theory and practice.</p>
              <Link href="/resources/books" className="text-yellow-600 hover:text-yellow-800 font-medium">
                View reading list →
              </Link>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Video Lectures</h3>
              <p className="text-gray-600 mb-4">Watch educational videos explaining anarcho-capitalist concepts from leading thinkers.</p>
              <Link href="/resources/multimedia" className="text-yellow-600 hover:text-yellow-800 font-medium">
                Browse videos →
              </Link>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Study Guides</h3>
              <p className="text-gray-600 mb-4">Comprehensive guides to help you understand complex anarcho-capitalist ideas and theories.</p>
              <Link href="/resources/study-guides" className="text-yellow-600 hover:text-yellow-800 font-medium">
                Access guides →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CallToAction = () => {
  return (
    <div className="bg-yellow-400 text-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-6">Join the Discussion</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Connect with others interested in anarcho-capitalism, share ideas, and participate in our growing community.
        </p>
        <Link 
          href="/community" 
          className="bg-black text-yellow-400 px-8 py-4 rounded-md font-medium text-lg hover:bg-gray-800 transition-colors inline-block"
        >
          Explore Community
        </Link>
      </div>
    </div>
  );
};

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <FeaturedContent />
      <QuoteSection />
      <LatestResources />
      <CallToAction />
    </main>
  );
};

export default HomePage;
