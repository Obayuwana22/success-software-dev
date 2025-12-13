import React from 'react'
import { ExternalLink, Github, Star } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'Stellar E-Commerce Platform',
      description: 'A modern e-commerce platform built with React, TypeScript, and Stripe integration. Features include real-time inventory, advanced filtering, and seamless checkout experience.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Stripe', 'Node.js'],
      github: '#',
      live: '#',
      featured: true
    },
    {
      title: 'Cosmic Task Manager',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
      technologies: ['Next.js', 'React', 'Socket.io', 'MongoDB', 'Tailwind CSS'],
      github: '#',
      live: '#',
      featured: true
    },
    {
      title: 'Galactic Weather App',
      description: 'A beautiful weather application with animated backgrounds, location-based forecasts, and interactive weather maps.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg',
      technologies: ['Vue.js', 'JavaScript', 'CSS3', 'Weather API'],
      github: '#',
      live: '#',
      featured: false
    },
    {
      title: 'Nebula Portfolio CMS',
      description: 'A headless CMS for portfolio websites with drag-and-drop page builder and real-time preview functionality.',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg',
      technologies: ['React', 'GraphQL', 'Node.js', 'PostgreSQL'],
      github: '#',
      live: '#',
      featured: false
    },
    {
      title: 'Quantum Analytics Dashboard',
      description: 'An advanced analytics dashboard with interactive charts, real-time data visualization, and customizable widgets.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg',
      technologies: ['React', 'D3.js', 'TypeScript', 'Express.js'],
      github: '#',
      live: '#',
      featured: false
    },
    {
      title: 'Interstellar Chat App',
      description: 'A real-time chat application with end-to-end encryption, file sharing, and group chat functionality.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg',
      technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
      github: '#',
      live: '#',
      featured: false
    }
  ]

  

  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-16 mb-20">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Project Image */}
              <div className={`relative group ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                  
                  {/* Project Links Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-900/50">
                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors"
                      >
                        <Github className="h-6 w-6 text-white" />
                      </a>
                      <a
                        href={project.live}
                        className="p-3 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
                      >
                        <ExternalLink className="h-6 w-6 text-white" />
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Featured Badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-400 to-cyan-500 text-slate-900 px-4 py-2 rounded-full font-bold text-sm flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-current" />
                  <span>Featured</span>
                </div>
              </div>

              {/* Project Info */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                  <p className="text-lg text-gray-300 leading-relaxed">{project.description}</p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-slate-800/50 border border-blue-400/30 rounded-full text-sm text-blue-300 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center space-x-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                  >
                    <Github className="h-5 w-5" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 rounded-lg transition-all"
                  >
                    <ExternalLink className="h-5 w-5" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">Other Notable Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project) => (
              <div
                key={project.title}
                className="group bg-slate-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                </div>

                <div className="p-6 space-y-4">
                  <h4 className="text-xl font-bold text-white">{project.title}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-700 rounded-full text-xs text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-slate-700 rounded-full text-xs text-gray-400">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex space-x-3 pt-2">
                    <a
                      href={project.github}
                      className="flex-1 flex items-center justify-center space-x-2 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors text-sm"
                    >
                      <Github className="h-4 w-4" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.live}
                      className="flex-1 flex items-center justify-center space-x-2 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors text-sm"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects