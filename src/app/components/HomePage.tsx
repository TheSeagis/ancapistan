'use client';

import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-black text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-yellow-900 opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-yellow-400">Anarcho-Capitalism:</span> Liberty, Property, and Voluntary Exchange
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Explore the philosophy that envisions a society based on voluntary relationships and free markets without state intervention.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/principles" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-yellow-400 hover:bg-yellow-500 transition-colors">
                Core Principles
              </Link>
              <Link href="/resources" className="inline-flex items-center justify-center px-6 py-3 border border-yellow-400 text-base font-medium rounded-md text-yellow-400 bg-transparent hover:bg-yellow-900 hover:bg-opacity-20 transition-colors">
                Explore Resources
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">What is Anarcho-Capitalism?</h2>
            <p className="text-lg mb-4">
              Anarcho-capitalism is a political philosophy that advocates for the elimination of the state in favor of individual sovereignty, private property, and free markets. It combines anarchism's rejection of the state with capitalism's emphasis on private property and voluntary exchange.
            </p>
            <p className="text-lg mb-4">
              Unlike other forms of anarchism that oppose capitalism, anarcho-capitalism sees free markets as the foundation of a free society. It envisions a world where all goods and services—including law, security, and infrastructure—are provided through voluntary market transactions rather than government coercion.
            </p>
            <p className="text-lg">
              This comprehensive resource explores the principles, history, key figures, economic theories, practical applications, and criticisms of anarcho-capitalism, providing a balanced and in-depth understanding of this influential philosophy.
            </p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Core Tenets of Anarcho-Capitalism</h3>
            <ul className="space-y-4">
              <li className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-yellow-400 text-black">
                    1
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium">Self-Ownership</h4>
                  <p className="mt-1">Each individual has exclusive control over their own body and life.</p>
                </div>
              </li>
              <li className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-yellow-400 text-black">
                    2
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium">Non-Aggression Principle</h4>
                  <p className="mt-1">Initiation of force against persons or property is inherently illegitimate.</p>
                </div>
              </li>
              <li className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-yellow-400 text-black">
                    3
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium">Private Property Rights</h4>
                  <p className="mt-1">Individuals have the right to acquire, use, and dispose of property through voluntary exchange.</p>
                </div>
              </li>
              <li className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-yellow-400 text-black">
                    4
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium">Free Market Exchange</h4>
                  <p className="mt-1">All goods and services, including law and security, should be provided through voluntary market transactions.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Key Figures Section */}
      <div className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Key Figures in Anarcho-Capitalism</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Explore the influential thinkers who developed and shaped anarcho-capitalist philosophy throughout history.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Murray Rothbard</h3>
              <p className="text-gray-600 mb-4">1926-1995</p>
              <p className="mb-4">
                Often considered the founder of modern anarcho-capitalism, Rothbard synthesized Austrian economics, natural law theory, and individualist anarchism into a comprehensive philosophical system.
              </p>
              <Link href="/key-figures#rothbard" className="text-yellow-600 hover:text-yellow-800 font-medium">
                Learn more →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">David Friedman</h3>
              <p className="text-gray-600 mb-4">1945-present</p>
              <p className="mb-4">
                Son of economist Milton Friedman, David developed a consequentialist approach to anarcho-capitalism focused on the practical functioning of market-based legal and defense systems.
              </p>
              <Link href="/key-figures#friedman" className="text-yellow-600 hover:text-yellow-800 font-medium">
                Learn more →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Ludwig von Mises</h3>
              <p className="text-gray-600 mb-4">1881-1973</p>
              <p className="mb-4">
                While not an anarcho-capitalist himself, Mises's economic theories, particularly his critique of socialist calculation, provided the foundation for anarcho-capitalist economic thought.
              </p>
              <Link href="/key-figures#mises" className="text-yellow-600 hover:text-yellow-800 font-medium">
                Learn more →
              </Link>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link href="/key-figures" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-yellow-400 hover:bg-yellow-500 transition-colors">
              View All Key Figures
            </Link>
          </div>
        </div>
      </div>

      {/* Explore Topics Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Explore Anarcho-Capitalist Topics</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Dive deep into the various aspects of anarcho-capitalist theory, history, and applications.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link href="/theory/economic-foundations" className="group">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-yellow-400">
              <h3 className="text-xl font-semibold mb-3 group-hover:text-yellow-600 transition-colors">Economic Theories</h3>
              <p className="text-gray-600">
                Explore the Austrian School economics that underpins anarcho-capitalist thought, including subjective value theory, economic calculation, and the critique of central planning.
              </p>
            </div>
          </Link>
          <Link href="/history" className="group">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-yellow-400">
              <h3 className="text-xl font-semibold mb-3 group-hover:text-yellow-600 transition-colors">Historical Context</h3>
              <p className="text-gray-600">
                Trace the intellectual origins and development of anarcho-capitalist thought from classical liberalism through individualist anarchism to modern formulations.
              </p>
            </div>
          </Link>
          <Link href="/applications" className="group">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-yellow-400">
              <h3 className="text-xl font-semibold mb-3 group-hover:text-yellow-600 transition-colors">Practical Applications</h3>
              <p className="text-gray-600">
                Discover how anarcho-capitalist principles could be applied to create functioning stateless societies, with private legal systems, defense, and infrastructure.
              </p>
            </div>
          </Link>
          <Link href="/criticisms" className="group">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-yellow-400">
              <h3 className="text-xl font-semibold mb-3 group-hover:text-yellow-600 transition-colors">Criticisms & Responses</h3>
              <p className="text-gray-600">
                Examine the major critiques of anarcho-capitalism from various perspectives and the responses offered by anarcho-capitalist thinkers.
              </p>
            </div>
          </Link>
          <Link href="/resources/books" className="group">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-yellow-400">
              <h3 className="text-xl font-semibold mb-3 group-hover:text-yellow-600 transition-colors">Essential Reading</h3>
              <p className="text-gray-600">
                Find recommended books, articles, and other resources for deepening your understanding of anarcho-capitalist philosophy.
              </p>
            </div>
          </Link>
          <Link href="/faq" className="group">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-yellow-400">
              <h3 className="text-xl font-semibold mb-3 group-hover:text-yellow-600 transition-colors">Frequently Asked Questions</h3>
              <p className="text-gray-600">
                Get answers to common questions about anarcho-capitalism, addressing misconceptions and clarifying key concepts.
              </p>
            </div>
          </Link>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Explore Anarcho-Capitalism?</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Whether you're new to these ideas or looking to deepen your understanding, Ancapistan.com provides comprehensive resources for your journey.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/principles" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-yellow-400 hover:bg-yellow-500 transition-colors">
                Start with Core Principles
              </Link>
              <Link href="/resources" className="inline-flex items-center justify-center px-6 py-3 border border-yellow-400 text-base font-medium rounded-md text-yellow-400 bg-transparent hover:bg-yellow-900 hover:bg-opacity-20 transition-colors">
                Browse Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
