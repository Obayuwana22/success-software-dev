import { Code, Palette, Zap, Users } from "lucide-react";
import ME from "../images/about-avatar.png";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code",
    },
    {
      icon: Palette,
      title: "UI/UX Focus",
      description: "Creating beautiful and intuitive user experiences",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing for speed and user satisfaction",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively with teams and stakeholders",
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div className="relative">
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-slate-800 to-slate-700 rounded-full border-4 border-blue-400/30 overflow-hidden">
                <img
                  src={ME}
                  alt="Success"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating orbs */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400 rounded-full animate-bounce delay-300"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-cyan-400 rounded-full animate-bounce delay-700"></div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">
                Passionate Frontend Developer
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                With over 2 years of experience in frontend development, I
                specialize in creating exceptional digital experiences that
                combine beautiful design with robust functionality. My journey
                in web development started with a fascination for how code can
                bring creative visions to life.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm passionate about staying at the forefront of web
                technologies, constantly learning and adapting to new frameworks
                and best practices. When I'm not coding, you'll find me
                exploring through daily.dev for latest technology insights and
                best practices.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-6">
              {highlights.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="group p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {title}
                  </h4>
                  <p className="text-sm text-gray-400">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
