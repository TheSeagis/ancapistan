'use client';

import React from 'react';
import Link from 'next/link';

const FAQPage = () => {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <div className="bg-yellow-400 text-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl max-w-3xl">
            Common questions and answers about Anarcho-Capitalism, its principles, applications, and criticisms.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-100 p-6 rounded-lg sticky top-24">
              <h2 className="text-xl font-semibold mb-4">FAQ Categories</h2>
              <nav className="space-y-2">
                <a href="#basic" className="block hover:text-yellow-600">Basic Questions</a>
                <a href="#intermediate" className="block hover:text-yellow-600">Intermediate Questions</a>
                <a href="#advanced" className="block hover:text-yellow-600">Advanced Questions</a>
                <a href="#misconceptions" className="block hover:text-yellow-600">Common Misconceptions</a>
                <a href="#comparisons" className="block hover:text-yellow-600">Comparisons with Other Philosophies</a>
              </nav>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-2 space-y-12">
            <section id="basic">
              <h2 className="text-3xl font-bold mb-6">Basic Questions</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">What is Anarcho-Capitalism?</h3>
                  <p>
                    Anarcho-capitalism is a political philosophy that advocates the elimination of the state in favor of individual sovereignty, private property, and free markets. It combines anarchism's opposition to hierarchical political authority with capitalism's emphasis on private property and free exchange.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">How does Anarcho-Capitalism differ from other forms of anarchism?</h3>
                  <p>
                    While all forms of anarchism oppose the state, anarcho-capitalism differs from other anarchist schools (like anarcho-syndicalism or anarcho-communism) by embracing private property and market mechanisms. Traditional anarchists often oppose capitalism and seek communal ownership of the means of production, whereas anarcho-capitalists view private property and free markets as essential to freedom.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">What are the core principles of Anarcho-Capitalism?</h3>
                  <p>
                    The core principles include self-ownership (each person owns their own body and labor), the non-aggression principle (the initiation of force is illegitimate), private property rights, voluntary exchange, and the belief that all services traditionally provided by governments can be better provided by competitive markets.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Who are the key thinkers in Anarcho-Capitalism?</h3>
                  <p>
                    Key figures include Murray Rothbard (who coined the term "anarcho-capitalism"), David Friedman, Hans-Hermann Hoppe, and Walter Block. Their work builds on earlier thinkers like Ludwig von Mises, F.A. Hayek, Lysander Spooner, and Gustave de Molinari.
                  </p>
                </div>
              </div>
            </section>

            <section id="intermediate">
              <h2 className="text-3xl font-bold mb-6">Intermediate Questions</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">How would law and defense work without a state?</h3>
                  <p>
                    Anarcho-capitalists propose that law and defense would be provided by competing private agencies operating in a free market. Individuals would subscribe to private defense agencies and dispute resolution organizations of their choice. These agencies would have market incentives to be efficient, fair, and peaceful, as violence is costly and bad for business.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">What about public goods and the free-rider problem?</h3>
                  <p>
                    Anarcho-capitalists argue that most supposed "public goods" can actually be provided privately through various market mechanisms. For truly non-excludable goods, they suggest voluntary solutions like assurance contracts, bundling with private goods, or community organizations. They also point out that the state's solution to free-rider problems creates its own inefficiencies and moral hazards.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">How would environmental protection work in an anarcho-capitalist society?</h3>
                  <p>
                    Anarcho-capitalists propose stronger property rights and tort law as solutions to environmental problems. When resources are privately owned, owners have incentives to maintain their value. Pollution would be treated as a property rights violation, allowing affected parties to seek restitution through private courts. Some anarcho-capitalists also support contractual communities with environmental covenants.
                  </p>
                </div>
              </div>
            </section>

            <section id="advanced">
              <h2 className="text-3xl font-bold mb-6">Advanced Questions</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">How do anarcho-capitalists address the problem of national defense?</h3>
                  <p>
                    National defense is addressed through various theoretical approaches: (1) Defense insurance, where companies insure against foreign aggression and fund defensive capabilities; (2) Voluntary funding through assurance contracts; (3) Territorial defense agencies funded by property owners; (4) The argument that without states, there would be fewer wars in the first place. Some anarcho-capitalists acknowledge this as one of the more challenging issues for their philosophy.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">What is the anarcho-capitalist position on intellectual property?</h3>
                  <p>
                    There is disagreement among anarcho-capitalists about intellectual property. Some, following Murray Rothbard, reject patents and copyrights as artificial monopoly privileges that restrict the use of ideas and information, which are not scarce resources. Others argue that some form of intellectual property protection could emerge through contracts and private law. This remains an area of debate within anarcho-capitalist theory.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">How would an anarcho-capitalist society handle the transition from statism?</h3>
                  <p>
                    Anarcho-capitalists propose various transition strategies, including: (1) Gradual privatization of government services; (2) Development of parallel institutions that eventually replace state functions; (3) Secession and creation of private communities; (4) Agorism (building counter-economic institutions outside state control); (5) Education and cultural change to reduce public support for the state. Most emphasize peaceful, evolutionary change rather than violent revolution.
                  </p>
                </div>
              </div>
            </section>

            <section id="misconceptions">
              <h2 className="text-3xl font-bold mb-6">Common Misconceptions</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">"Anarcho-capitalism would lead to rule by corporations"</h3>
                  <p>
                    Anarcho-capitalists argue that corporations as they exist today are legal fictions created by the state that receive special privileges and limited liability. In an anarcho-capitalist society, businesses would be fully liable for their actions and would face competition without state protection. The concentration of corporate power that exists today is seen as a result of state intervention, not free markets.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">"Anarcho-capitalism would lead to chaos and violence"</h3>
                  <p>
                    Anarcho-capitalists contend that their system would actually reduce violence by removing the state's monopoly on force and replacing it with competitive security providers who have market incentives to be peaceful. They argue that most violence in history has been perpetrated by states, not private individuals, and that market mechanisms naturally discourage violence because it is costly and destructive to wealth.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">"Anarcho-capitalism has never been tried"</h3>
                  <p>
                    While no pure anarcho-capitalist society has existed in modern times, anarcho-capitalists point to historical examples that embodied some of their principles, such as medieval Iceland, parts of medieval Ireland, and various stateless societies throughout history. They also note that many industries currently dominated by government were once provided privately, and that many aspects of modern life (like internet governance) function without central state control.
                  </p>
                </div>
              </div>
            </section>

            <section id="comparisons">
              <h2 className="text-3xl font-bold mb-6">Comparisons with Other Philosophies</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Anarcho-Capitalism vs. Minarchism</h3>
                  <p>
                    Minarchism (minimal state libertarianism) advocates for a limited government that provides only courts, police, and national defense. Anarcho-capitalism goes further by arguing that even these functions can and should be privatized. The debate between the two often centers on whether a minimal state can remain limited or will inevitably grow, and whether private agencies can effectively provide defense and justice.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Anarcho-Capitalism vs. Left-Anarchism</h3>
                  <p>
                    Left-anarchism (including anarcho-communism and anarcho-syndicalism) shares anarcho-capitalism's opposition to the state but rejects capitalism and private property in favor of collective ownership and economic equality. The key disagreement is over property rights: anarcho-capitalists see private property as essential to freedom, while left-anarchists view it as a form of hierarchy and exploitation.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Anarcho-Capitalism vs. Classical Liberalism</h3>
                  <p>
                    Classical liberalism advocates for limited government, free markets, and individual rights. Anarcho-capitalism shares these values but takes them to their logical conclusion by rejecting the state entirely. Classical liberals argue that some minimal state is necessary to protect rights, while anarcho-capitalists contend that the state inevitably violates the very rights it claims to protect.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FAQPage;
