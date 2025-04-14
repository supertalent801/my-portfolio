import Link from 'next/link'

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group flex items-center hover:opacity-90 transition-all">
          <div className="relative">
            <span className="text-4xl font-extrabold text-white relative z-10 tracking-tighter">
              A
              <span className="absolute -right-4 -bottom-2 text-3xl opacity-90">P</span>
            </span>
            <span className="absolute -top-1 -right-1 text-4xl font-extrabold text-white/20 blur-[1px]">A</span>
            <span className="absolute -bottom-1 -right-3 text-3xl font-extrabold text-white/20 blur-[1px]">P</span>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-6 bg-black/40 backdrop-blur-md px-6 py-2 rounded-full border border-white/10">
            <Link href="/" className="text-sm text-gray-200 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/work" className="text-sm text-gray-200 hover:text-white transition-colors">
              Work
            </Link>
            <Link href="/about" className="text-sm text-gray-200 hover:text-white transition-colors">
              About
            </Link>
            <Link href="/blog" className="text-sm text-gray-200 hover:text-white transition-colors">
              Blog
            </Link>
            <Link href="/more" className="text-sm text-gray-200 hover:text-white transition-colors">
              More
            </Link>
            <Link
                href="/book-call"
                className="bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm hover:bg-white/20 transition-colors border border-white/10"
            >
                Book a Call
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation 