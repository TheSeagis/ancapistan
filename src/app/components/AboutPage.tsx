'use client';

import React from 'react';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <div className="bg-yellow-400 text-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">About Ancapistan.com</h1>
          <p className="text-xl max-w-3xl">
            A comprehensive resource dedicated to exploring and explaining Anarcho-Capitalism in all its aspects.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-100 p-6 rounded-lg sticky top-24">
              <h2 className="text-xl font-semibold mb-4">About Us</h2>
              <nav className="space-y-2">
                <a href="#mission" className="block hover:text-yellow-600">Our Mission</a>
                <a href="#purpose" className="block hover:text-yellow-600">Purpose</a>
                <a href="#approach" className="block hover:text-yellow-600">Our Approach</a>
                <a href="#contact" className="block hover:text-yellow-600">Contact Information</a>
              </nav>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-2 space-y-12">
            <section id="mission">
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="mb-4">
                Ancapistan.com is dedicated to providing a comprehensive, accessible, and balanced resource for understanding Anarcho-Capitalism. Our mission is to create a definitive online destination for anyone interested in learning about this political and economic philosophy.
              </p>
              <p className="mb-4">
                We aim to present anarcho-capitalist ideas in their strongest form while also acknowledging criticisms and alternative perspectives. By doing so, we hope to foster informed discussion and deeper understanding of these important concepts.
              </p>
              <p>
                Whether you're a curious newcomer, a student, an academic researcher, or a long-time libertarian, our goal is to provide you with valuable information and resources to further your understanding of anarcho-capitalist thought.
              </p>
            </section>

            <section id="purpose">
              <h2 className="text-3xl font-bold mb-4">Purpose</h2>
              <p className="mb-4">
                The purpose of Ancapistan.com is to serve as a central hub for information about anarcho-capitalism, addressing the need for a comprehensive resource that covers all aspects of this philosophy in one place.
              </p>
              <p className="mb-4">
                We believe that anarcho-capitalism represents an important set of ideas in political and economic thought that deserves serious consideration and study. By creating this website, we hope to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Provide clear explanations of anarcho-capitalist principles and theories</li>
                <li>Explore the historical development and intellectual foundations of anarcho-capitalism</li>
                <li>Highlight the contributions of key thinkers in the anarcho-capitalist tradition</li>
                <li>Examine potential practical applications of anarcho-capitalist ideas</li>
                <li>Present common criticisms and objections alongside anarcho-capitalist responses</li>
                <li>Offer a curated collection of resources for further study</li>
              </ul>
              <p>
                Our ultimate purpose is to contribute to the broader conversation about political and economic systems by ensuring that anarcho-capitalist perspectives are accurately represented and understood.
              </p>
            </section>

            <section id="approach">
              <h2 className="text-3xl font-bold mb-4">Our Approach</h2>
              <p className="mb-4">
                At Ancapistan.com, we strive to present information about anarcho-capitalism in a way that is:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Comprehensive:</strong> Covering all major aspects of anarcho-capitalist thought</li>
                <li><strong>Accessible:</strong> Written in clear language that can be understood by newcomers while still being valuable to those with more background knowledge</li>
                <li><strong>Well-researched:</strong> Based on careful study of primary sources and scholarly literature</li>
                <li><strong>Balanced:</strong> Presenting anarcho-capitalist ideas in their strongest form while also acknowledging criticisms</li>
                <li><strong>Educational:</strong> Focused on informing rather than persuading</li>
              </ul>
              <p className="mb-4">
                We believe that the best way to understand any political or economic philosophy is to engage with it seriously and on its own terms. Our approach is to present anarcho-capitalist ideas as their proponents would, while also providing context and critical perspectives.
              </p>
              <p>
                While we aim to be objective in our presentation, we recognize that complete neutrality is impossible. We are transparent about our focus on providing a resource specifically dedicated to anarcho-capitalism, though we strive to include diverse perspectives within that framework.
              </p>
            </section>

            <section id="contact">
              <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
              <p className="mb-4">
                We welcome feedback, suggestions, corrections, and inquiries about Ancapistan.com. You can reach us through the following channels:
              </p>
              <div className="bg-gray-100 p-6 rounded-lg">
                <p className="mb-2"><strong>Email:</strong> info@ancapistan.com</p>
                <p className="mb-2"><strong>Contact Form:</strong> <Link href="/about/contact" className="text-yellow-600 hover:text-yellow-800">Contact Us</Link></p>
                <p><strong>Social Media:</strong> Follow us on Twitter, Facebook, and YouTube (links in footer)</p>
              </div>
              <p className="mt-4">
                We strive to respond to all inquiries within 48 hours. For academic researchers or journalists seeking more information about anarcho-capitalism, we can also provide additional resources or connect you with subject matter experts.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
