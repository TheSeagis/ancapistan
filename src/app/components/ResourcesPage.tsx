'use client';

import React from 'react';
import Link from 'next/link';

const ResourcesPage = () => {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <div className="bg-yellow-400 text-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">Anarcho-Capitalism Resources</h1>
          <p className="text-xl max-w-3xl">
            A curated collection of books, articles, websites, and multimedia resources for learning about Anarcho-Capitalism.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-100 p-6 rounded-lg sticky top-24">
              <h2 className="text-xl font-semibold mb-4">Resource Categories</h2>
              <nav className="space-y-2">
                <a href="#books" className="block hover:text-yellow-600">Books</a>
                <a href="#articles" className="block hover:text-yellow-600">Articles</a>
                <a href="#websites" className="block hover:text-yellow-600">Websites</a>
                <a href="#multimedia" className="block hover:text-yellow-600">Multimedia</a>
                <a href="#academic" className="block hover:text-yellow-600">Academic Resources</a>
                <a href="#study-guides" className="block hover:text-yellow-600">Study Guides</a>
              </nav>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-2 space-y-12">
            <section id="books">
              <h2 className="text-3xl font-bold mb-6">Essential Books</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Foundational Works</h3>
                  <ul className="space-y-4">
                    <li>
                      <p className="font-medium">For a New Liberty: The Libertarian Manifesto (1973)</p>
                      <p className="text-gray-600">by Murray Rothbard</p>
                      <p className="mt-1">A comprehensive overview of anarcho-capitalist philosophy covering theoretical foundations and practical applications.</p>
                    </li>
                    <li>
                      <p className="font-medium">The Machinery of Freedom (1973)</p>
                      <p className="text-gray-600">by David Friedman</p>
                      <p className="mt-1">A pragmatic approach to anarcho-capitalism focusing on how private legal systems could work.</p>
                    </li>
                    <li>
                      <p className="font-medium">The Ethics of Liberty (1982)</p>
                      <p className="text-gray-600">by Murray Rothbard</p>
                      <p className="mt-1">A natural law approach to libertarian ethics and philosophical foundation for anarcho-capitalist principles.</p>
                    </li>
                    <li>
                      <p className="font-medium">Man, Economy, and State (1962)</p>
                      <p className="text-gray-600">by Murray Rothbard</p>
                      <p className="mt-1">A comprehensive treatise on Austrian economics providing the economic foundation for anarcho-capitalist ideas.</p>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Contemporary Works</h3>
                  <ul className="space-y-4">
                    <li>
                      <p className="font-medium">The Problem of Political Authority (2013)</p>
                      <p className="text-gray-600">by Michael Huemer</p>
                      <p className="mt-1">A philosophical examination of state authority that challenges the moral legitimacy of government.</p>
                    </li>
                    <li>
                      <p className="font-medium">Chaos Theory (2002)</p>
                      <p className="text-gray-600">by Robert P. Murphy</p>
                      <p className="mt-1">A modern defense of anarcho-capitalism addressing common objections.</p>
                    </li>
                    <li>
                      <p className="font-medium">Democracy: The God That Failed (2001)</p>
                      <p className="text-gray-600">by Hans-Hermann Hoppe</p>
                      <p className="mt-1">A critique of democracy from an anarcho-capitalist perspective with analysis of time preference and property rights.</p>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Historical Influences</h3>
                  <ul className="space-y-4">
                    <li>
                      <p className="font-medium">Human Action (1949)</p>
                      <p className="text-gray-600">by Ludwig von Mises</p>
                      <p className="mt-1">A foundational work in Austrian economics and critique of socialist economic planning.</p>
                    </li>
                    <li>
                      <p className="font-medium">The Production of Security (1849)</p>
                      <p className="text-gray-600">by Gustave de Molinari</p>
                      <p className="mt-1">The first explicit argument for privatization of security services and early market anarchist work.</p>
                    </li>
                    <li>
                      <p className="font-medium">No Treason: The Constitution of No Authority (1867)</p>
                      <p className="text-gray-600">by Lysander Spooner</p>
                      <p className="mt-1">An individualist anarchist critique of government authority that challenges the legitimacy of constitutional government.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="articles">
              <h2 className="text-3xl font-bold mb-6">Articles</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Introductory Articles</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-yellow-600 hover:text-yellow-800">What Is Anarcho-Capitalism? - Mises Institute</a></li>
                    <li><a href="#" className="text-yellow-600 hover:text-yellow-800">The Anatomy of Escape - David Friedman</a></li>
                    <li><a href="#" className="text-yellow-600 hover:text-yellow-800">Anarcho-Capitalism: An Annotated Bibliography - Roderick T. Long</a></li>
                    <li><a href="#" className="text-yellow-600 hover:text-yellow-800">Police, Courts, and Laws—on the Market - David Friedman</a></li>
                    <li><a href="#" className="text-yellow-600 hover:text-yellow-800">The Myth of the Rule of Law - John Hasnas</a></li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Advanced Articles</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-yellow-600 hover:text-yellow-800">Law as a Private Good - Bryan Caplan</a></li>
                    <li><a href="#" className="text-yellow-600 hover:text-yellow-800">Anarchism and Austrian Economics - Peter Leeson</a></li>
                    <li><a href="#" className="text-yellow-600 hover:text-yellow-800">The Economics of Non-State Legal Systems - David Friedman</a></li>
                    <li><a href="#" className="text-yellow-600 hover:text-yellow-800">Toward a Theory of Legal Naturalism - Roy Childs</a></li>
                    <li><a href="#" className="text-yellow-600 hover:text-yellow-800">National Defense on the Free Market - Murray Rothbard</a></li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="websites">
              <h2 className="text-3xl font-bold mb-6">Websites</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Educational Resources</h3>
                  <ul className="space-y-4">
                    <li>
                      <p className="font-medium"><a href="https://mises.org" className="text-yellow-600 hover:text-yellow-800">Mises Institute (mises.org)</a></p>
                      <p className="mt-1">Extensive library of anarcho-capitalist and Austrian economics resources including free books, articles, and lectures.</p>
                    </li>
                    <li>
                      <p className="font-medium"><a href="https://fee.org" className="text-yellow-600 hover:text-yellow-800">Foundation for Economic Education (fee.org)</a></p>
                      <p className="mt-1">Educational resources on free-market economics with accessible articles for beginners.</p>
                    </li>
                    <li>
                      <p className="font-medium"><a href="https://libertarianism.org" className="text-yellow-600 hover:text-yellow-800">Libertarianism.org</a></p>
                      <p className="mt-1">Educational resource on libertarian ideas including anarcho-capitalist perspectives with historical and philosophical content.</p>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Community Platforms</h3>
                  <ul className="space-y-4">
                    <li>
                      <p className="font-medium"><a href="https://liberty.me" className="text-yellow-600 hover:text-yellow-800">Liberty.me</a></p>
                      <p className="mt-1">Community platform for libertarian and anarcho-capitalist discussion with blogs, forums, and resources.</p>
                    </li>
                    <li>
                      <p className="font-medium"><a href="https://c4ss.org" className="text-yellow-600 hover:text-yellow-800">Center for a Stateless Society (c4ss.org)</a></p>
                      <p className="mt-1">Left-market anarchist perspective providing interesting contrast to right-leaning anarcho-capitalism.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="multimedia">
              <h2 className="text-3xl font-bold mb-6">Multimedia Resources</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Podcasts</h3>
                  <ul className="space-y-4">
                    <li>
                      <p className="font-medium">The Tom Woods Show</p>
                      <p className="mt-1">Podcast covering libertarian and anarcho-capitalist topics with interviews of key thinkers.</p>
                    </li>
                    <li>
                      <p className="font-medium">The Bob Murphy Show</p>
                      <p className="mt-1">Podcast by anarcho-capitalist economist Robert P. Murphy featuring economic and philosophical discussions.</p>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Video Channels</h3>
                  <ul className="space-y-4">
                    <li>
                      <p className="font-medium">Mises Institute YouTube Channel</p>
                      <p className="mt-1">Lectures, interviews, and educational content featuring prominent anarcho-capitalist thinkers.</p>
                    </li>
                    <li>
                      <p className="font-medium">Reason TV</p>
                      <p className="mt-1">Video content on libertarian topics including some anarcho-capitalist perspectives.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="academic">
              <h2 className="text-3xl font-bold mb-6">Academic Resources</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Journals</h3>
                  <ul className="space-y-4">
                    <li>
                      <p className="font-medium">The Journal of Libertarian Studies</p>
                      <p className="mt-1">Academic journal founded by Murray Rothbard with scholarly articles on anarcho-capitalism and libertarianism.</p>
                    </li>
                    <li>
                      <p className="font-medium">The Quarterly Journal of Austrian Economics</p>
                      <p className="mt-1">Academic journal on Austrian economics with technical economic analysis relevant to anarcho-capitalism.</p>
                    </li>
                    <li>
                      <p className="font-medium">The Independent Review</p>
                      <p className="mt-1">Interdisciplinary journal examining political economy including anarcho-capitalist perspectives.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="study-guides">
              <h2 className="text-3xl font-bold mb-6">Study Guides</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Reading Lists by Topic</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-yellow-600 hover:text-yellow-800">Beginner's Guide to Anarcho-Capitalism</a></li>
                    <li><a href="#" className="text-yellow-600 hover:text-yellow-800">Austrian Economics Reading List</a></li>
                    <li><a href="#" className="text-yellow-600 hover:text-yellow-800">Private Law and Defense Resources</a></li>
                    <li><a href="#" className="text-yellow-600 hover:text-yellow-800">Historical Examples of Anarcho-Capitalism</a></li>
                    <li><a href="#" className="text-yellow-600 hover:text-yellow-800">Responses to Common Criticisms</a></li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Online Courses</h3>
                  <ul className="space-y-4">
                    <li>
                      <p className="font-medium">Liberty Classroom</p>
                      <p className="mt-1">Online courses on history, economics, and philosophy created by Tom Woods.</p>
                    </li>
                    <li>
                      <p className="font-medium">Mises University</p>
                      <p className="mt-1">Annual instructional program in Austrian economics with many lectures available online.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ResourcesPage;
