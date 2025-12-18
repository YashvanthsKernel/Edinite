import { ArrowRight, BookOpen, Code, Users, Award, Target, Zap } from "lucide-react";
import { Link } from "wouter";
import ScrollAnimation from "@/components/ScrollAnimation";
import heroImage from '@assets/generated_images/Homepage_hero_engineering_montage_d31f5047.png';

export default function Edutech() {
  const features = [
    {
      icon: BookOpen,
      title: "Interactive Learning",
      description: "Hands-on engineering courses and tutorials"
    },
    {
      icon: Code,
      title: "Practical Projects",
      description: "Real-world CAD and simulation exercises"
    },
    {
      icon: Users,
      title: "Community",
      description: "Connect with fellow engineers and students"
    },
    {
      icon: Award,
      title: "Certification",
      description: "Earn recognized engineering credentials"
    },
    {
      icon: Target,
      title: "Mentorship",
      description: "Learn from experienced professionals"
    },
    {
      icon: Zap,
      title: "Career Support",
      description: "Job placement and interview preparation"
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      <section className="relative min-h-[80vh] py-20 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-500/15 dark:bg-orange-500/20 border border-orange-500/50 rounded-full px-4 py-2 mb-6">
              <span className="inline-block w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              <span className="text-sm text-orange-600 dark:text-orange-400 font-bold">Coming Soon</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground leading-tight mb-6">
              EDUTECH
              <br />
              <span className="bg-gradient-to-r from-primary via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Learning Platform
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
              We're building a comprehensive engineering education platform to help the next generation master CAD design, simulations, PCB layout, and more.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-16">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                  What's Coming
                </h2>
                <p className="text-muted-foreground mb-6">
                  Edutech is our upcoming educational initiative designed to democratize engineering knowledge. We're creating a platform where students, professionals, and enthusiasts can learn industry-standard tools and techniques directly from experienced engineers.
                </p>
              </div>

              <div className="space-y-4">
                {features.slice(0, 3).map((feature) => (
                  <div key={feature.title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/contact">
                <div className="group relative inline-flex mt-4">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-500 to-cyan-400 rounded-full opacity-0 group-hover:opacity-70 blur-lg transition-all duration-500" />
                  <div className="relative inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary/10 via-purple-500/10 to-cyan-400/10 border border-primary/30 group-hover:border-primary/50 transition-all duration-300 backdrop-blur-sm">
                    <span className="text-sm font-semibold text-foreground group-hover:text-white transition-colors">Request Early Access</span>
                    <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="relative">
                <div className="absolute -inset-8 bg-gradient-to-br from-primary/20 via-purple-500/10 to-transparent rounded-full blur-3xl" />
                <img 
                  src={heroImage} 
                  alt="Engineering Learning" 
                  className="relative z-10 w-full max-w-lg mx-auto drop-shadow-2xl rounded-lg opacity-80"
                  data-testid="img-edutech-hero"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
                Core Features
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our platform will offer a comprehensive suite of tools and resources for engineering education
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <ScrollAnimation key={feature.title} delay={index * 80}>
                <div className="p-6 rounded-lg bg-card border border-primary/20 hover:border-primary/40 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/30 to-purple-500/30 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimation>
            <h2 className="text-4xl font-heading font-bold text-foreground mb-6">
              Be Part of the Future of Engineering Education
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Edutech is <span className="font-bold text-orange-500 dark:text-orange-400">under development</span>. We're actively building this platform to make world-class engineering education accessible to everyone. If you're interested in being an early adopter or instructor, we'd love to hear from you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <div className="group relative inline-flex">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-500 to-cyan-400 rounded-full opacity-0 group-hover:opacity-70 blur-lg transition-all duration-500" />
                  <div className="relative inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary/10 via-purple-500/10 to-cyan-400/10 border border-primary/30 group-hover:border-primary/50 transition-all duration-300 backdrop-blur-sm">
                    <span className="text-sm font-semibold text-foreground group-hover:text-white transition-colors">Express Interest</span>
                    <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
              <Link href="/">
                <div className="group relative inline-flex">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-purple-500/20 to-cyan-400/20 rounded-full opacity-0 group-hover:opacity-50 blur-lg transition-all duration-500" />
                  <div className="relative inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary/5 via-purple-500/5 to-cyan-400/5 border border-primary/20 group-hover:border-primary/40 transition-all duration-300 backdrop-blur-sm">
                    <span className="text-sm font-semibold text-foreground group-hover:text-foreground transition-colors">Back to Home</span>
                    <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}
