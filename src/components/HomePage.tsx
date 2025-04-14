import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-2xl font-bold text-gray-900">
                Ancapistan<span className="text-yellow-500">.org</span>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="/principles" className="border-transparent text-gray-900 hover:text-yellow-500 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Principles
              </Link>
              <Link href="/key-figures" className="border-transparent text-gray-900 hover:text-yellow-500 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Key Figures
              </Link>
              <Link href="/theory/economic-foundations" className="border-transparent text-gray-900 hover:text-yellow-500 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Economic Theory
              </Link>
              <Link href="/history" className="border-transparent text-gray-900 hover:text-yellow-500 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                History
              </Link>
              <Link href="/applications" className="border-transparent text-gray-900 hover:text-yellow-500 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Applications
              </Link>
              <Link href="/criticisms" className="border-transparent text-gray-900 hover:text-yellow-500 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Criticisms
              </Link>
              <Link href="/resources" className="border-transparent text-gray-900 hover:text-yellow-500 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
