import { Rocket, Heart } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-slate-900/50 backdrop-blur-sm border-t border-blue-500/20 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          {/* Logo */}
          <div className="flex items-center justify-center space-x-2 cursor-pointer" onClick={scrollToTop}>
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-lg flex items-center justify-center">
              <Rocket className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Success
            </span>
          </div>

          {/* Quote */}
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-gray-300 italic">
              "Code is like humor. When you have to explain it, it's bad."
            </p>
            <p className="text-sm text-gray-400 mt-2">- Cory House</p>
          </div>

          {/* Copyright */}
          <div className="flex items-center justify-center space-x-2 text-gray-400">
            <span>© 2024 Alex Nova. Made with</span>
            <Heart className="h-4 w-4 text-red-400 fill-current animate-pulse" />
            <span>and lots of coffee</span>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <span>Back to top</span>
            <div className="w-6 h-6 border-2 border-blue-400 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 border-t-2 border-blue-400 transform rotate-45"></div>
            </div>
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer