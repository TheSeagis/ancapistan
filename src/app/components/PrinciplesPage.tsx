'use client';

import React from 'react';
import Link from 'next/link';

const PrinciplesPage = () => {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <div className="bg-yellow-400 text-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">Core Principles of Anarcho-Capitalism</h1>
          <p className="text-xl max-w-3xl">
            Anarcho-capitalism is built upon several foundational principles that form the basis of this political and economic philosophy.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-100 p-6 rounded-lg sticky top-24">
              <h2 className="text-xl font-semibold mb-4">On This Page</h2>
              <nav className="space-y-2">
                <a href="#self-ownership" className="block hover:text-yellow-600">Self-Ownership</a>
                <a href="#non-aggression" className="block hover:text-yellow-600">Non-Aggression Principle</a>
                <a href="#property-rights" className="block hover:text-yellow-600">Private Property Rights</a>
                <a href="#voluntary-exchange" className="block hover:text-yellow-600">Voluntary Exchange</a>
                <a href="#market-society" className="block hover:text-yellow-600">Market-Based Society</a>
                <a href="#state-abolition" className="block hover:text-yellow-600">Abolition of the State</a>
                <a href="#contractual-society" className="block hover:text-yellow-600">Contractual Society</a>
              </nav>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-2 space-y-12">
            <section id="self-ownership">
              <h2 className="text-3xl font-bold mb-4">Self-Ownership</h2>
              <p className="mb-4">
                The principle of self-ownership is the cornerstone of anarcho-capitalist philosophy. It asserts that each individual has exclusive jurisdiction over their own body and life.
              </p>
              <p className="mb-4">
                This means that every person has the right to control their own body, labor, and the fruits of their labor without external interference. No other individual or group, including the state, has legitimate authority over an individual without their consent.
              </p>
              <p>
                From this principle, anarcho-capitalists derive the concept of natural rights and the moral foundation for their opposition to coercion and force.
              </p>
            </section>

            <section id="non-aggression">
              <h2 className="text-3xl font-bold mb-4">Non-Aggression Principle (NAP)</h2>
              <p className="mb-4">
                The Non-Aggression Principle (NAP) is a moral stance which asserts that aggression is inherently illegitimate. Aggression is defined as the initiation of physical force against persons or property, the threat of such, or fraud upon persons or their property.
              </p>
              <p className="mb-4">
                According to the NAP, any form of coercion, including taxation, military conscription, and regulation of non-aggressive behaviors, is morally wrong.
              </p>
              <p>
                The only legitimate use of force is in self-defense or in defense of one's property against aggression. This principle forms the ethical framework for anarcho-capitalist legal theory.
              </p>
            </section>

            <section id="property-rights">
              <h2 className="text-3xl font-bold mb-4">Private Property Rights</h2>
              <p className="mb-4">
                Anarcho-capitalism places strong emphasis on private property rights as an extension of self-ownership. When individuals mix their labor with unowned resources, they establish legitimate ownership over those resources.
              </p>
              <p className="mb-4">
                These property rights are absolute and include the right to use, transfer, or dispose of property as the owner sees fit, provided they do not violate the NAP.
              </p>
              <p>
                Unlike some other forms of anarchism, anarcho-capitalism supports private ownership of capital goods and the means of production, believing that property rights lead to the most efficient allocation of resources.
              </p>
            </section>

            <section id="voluntary-exchange">
              <h2 className="text-3xl font-bold mb-4">Voluntary Exchange</h2>
              <p className="mb-4">
                Anarcho-capitalism advocates for a society based entirely on voluntary interactions and exchanges. All human relationships should be consensual, with no coercion or force involved.
              </p>
              <p className="mb-4">
                This principle applies to economic transactions, social relationships, and all other forms of human interaction. Contracts freely entered into by consenting parties form the basis of social organization.
              </p>
              <p>
                Anarcho-capitalists argue that voluntary exchange benefits all parties involved, as individuals would not agree to exchanges unless they expected to gain from them.
              </p>
            </section>

            <section id="market-society">
              <h2 className="text-3xl font-bold mb-4">Market-Based Society</h2>
              <p className="mb-4">
                Anarcho-capitalism envisions a society where all goods and services, including those traditionally provided by governments (such as law enforcement, courts, and defense), would be provided through market mechanisms.
              </p>
              <p className="mb-4">
                Competition between private providers would ensure quality, efficiency, and innovation in all sectors. Prices would emerge naturally through supply and demand, providing information about relative scarcity and consumer preferences.
              </p>
              <p>
                This principle is based on the economic theories of the Austrian School, particularly the work of Ludwig von Mises and F.A. Hayek on the knowledge problem and the impossibility of rational economic calculation under socialism.
              </p>
            </section>

            <section id="state-abolition">
              <h2 className="text-3xl font-bold mb-4">Abolition of the State</h2>
              <p className="mb-4">
                Anarcho-capitalism calls for the complete elimination of the state, which is viewed as an inherently coercive institution that violates the principles of self-ownership and non-aggression.
              </p>
              <p className="mb-4">
                According to anarcho-capitalists, the state's defining characteristics—taxation, territorial monopoly on force, and compulsory jurisdiction—are fundamentally incompatible with individual liberty and voluntary exchange.
              </p>
              <p>
                Murray Rothbard, a key figure in anarcho-capitalist thought, argued that the state is "the organization of robbery systematized and writ large" and that its elimination would lead to greater freedom and prosperity.
              </p>
            </section>

            <section id="contractual-society">
              <h2 className="text-3xl font-bold mb-4">Contractual Society</h2>
              <p className="mb-4">
                In place of state governance, anarcho-capitalism proposes a "contractual society" where all social relationships and institutions are based on voluntary agreements between individuals.
              </p>
              <p className="mb-4">
                These agreements would be constrained by a previously adopted and mutually agreed-upon legal code, which would encompass the libertarian axioms of self-ownership and non-aggression.
              </p>
              <p className="mb-4">
                Dispute resolution would be handled by private arbitration services competing in an open market, with enforcement provided by private defense agencies or insurance companies.
              </p>
              <p>
                This vision of society emphasizes individual choice, decentralization, and the emergence of spontaneous order through voluntary cooperation rather than central planning.
              </p>
            </section>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-2xl font-bold mb-4">Further Reading</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/theory/economic-foundations" className="text-yellow-600 hover:text-yellow-800">
                    Economic Foundations of Anarcho-Capitalism
                  </Link>
                </li>
                <li>
                  <Link href="/key-figures/murray-rothbard" className="text-yellow-600 hover:text-yellow-800">
                    Murray Rothbard and the Development of Anarcho-Capitalist Thought
                  </Link>
                </li>
                <li>
                  <Link href="/criticisms/philosophical-objections" className="text-yellow-600 hover:text-yellow-800">
                    Criticisms and Objections to Anarcho-Capitalist Principles
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PrinciplesPage;
