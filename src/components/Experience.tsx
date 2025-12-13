import React from 'react'
import { Calendar, MapPin, Briefcase } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Frontend Developer',
      company: 'Stellar Tech Solutions',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Leading frontend development for enterprise applications, mentoring junior developers, and implementing modern React architectures.',
      achievements: [
        'Improved application performance by 40% through code optimization',
        'Led migration from legacy codebase to modern React/TypeScript stack',
        'Mentored 5+ junior developers and established coding standards'
      ],
      technologies: ['React', 'TypeScript', 'Next.js', 'GraphQL', 'AWS']
    },
    {
      title: 'Frontend Developer',
      company: 'Cosmic Digital Agency',
      location: 'Austin, TX',
      period: '2020 - 2022',
      description: 'Developed responsive web applications for various clients, collaborated with design teams, and implemented pixel-perfect UI components.',
      achievements: [
        'Delivered 15+ client projects on time and within budget',
        'Reduced development time by 30% through component library creation',
        'Improved client satisfaction scores by implementing user feedback'
      ],
      technologies: ['React', 'Vue.js', 'Sass', 'JavaScript', 'Node.js']
    },
    {
      title: 'Junior Frontend Developer',
      company: 'Nebula Startups Inc.',
      location: 'Remote',
      period: '2019 - 2020',
      description: 'Built interactive web interfaces, collaborated with backend developers, and contributed to open-source projects.',
      achievements: [
        'Contributed to 10+ open-source projects',
        'Implemented responsive designs for mobile-first approach',
        'Collaborated with cross-functional teams in agile environment'
      ],
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'jQuery']
    }
  ]

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Work{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
            My professional journey in frontend development
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 via-cyan-400 to-blue-500 rounded-full"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:space-x-8`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-600 rounded-full border-4 border-slate-900 z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ml-20 md:ml-0 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:transform hover:scale-105">
                    {/* Header */}
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                      <div className="flex items-center space-x-4 text-blue-300 mb-2">
                        <div className="flex items-center space-x-1">
                          <Briefcase className="h-4 w-4" />
                          <span className="font-semibold">{exp.company}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 text-gray-400 text-sm">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start space-x-2 text-gray-300">
                            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-slate-700/50 border border-blue-400/30 rounded-full text-xs text-blue-300 font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience