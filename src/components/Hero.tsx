import React from 'react'
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react'

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          {/* Animated greeting */}
          <div className="space-y-4">
            <div className="inline-block">
              <span className="text-lg text-blue-400 font-medium animate-pulse">
                Hello, Universe! 👋
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              I'm{' '}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent animate-pulse">
                Alex Nova
              </span>
            </h1>
            
            <div className="text-2xl md:text-3xl text-gray-300 space-y-2">
              <div className="typing-animation">
                Frontend Developer
              </div>
              <div className="text-lg text-gray-400">
                Crafting stellar digital experiences across the galaxy
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I specialize in building exceptional web applications with React, TypeScript, and modern technologies. 
            Let's create something extraordinary together.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="group bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
            >
              View My Work
              <ArrowDown className="inline-block ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </button>
            
            <button className="group border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              <Download className="inline-block mr-2 h-5 w-5 group-hover:animate-bounce" />
              Download CV
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-8">
            {[
              { icon: Github, href: '#', label: 'GitHub' },
              { icon: Linkedin, href: '#', label: 'LinkedIn' },
              { icon: Mail, href: '#', label: 'Email' }
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="group p-3 bg-slate-800/50 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-600 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
                aria-label={label}
              >
                <Icon className="h-6 w-6 text-gray-300 group-hover:text-white transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('about')}
          className="text-gray-400 hover:text-white transition-colors"
        >
          <ArrowDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  )
}

export default Hero