import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Users, Zap, Calendar } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const stats = [
  { icon: Users, value: "50+", label: "Clients Served" },
  { icon: Zap, value: "100+", label: "Projects Done" },
  { icon: Calendar, value: "2023", label: "Freelancing Since" },
];

const HeroSection = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Red glow behind profile */}
      <div className="absolute top-1/2 right-[20%] -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px]" />
      
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div className="space-y-8 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm">
            <Sparkles size={14} />
            Open to New Projects
            <span className="w-2 h-2 rounded-full bg-status-online animate-pulse-dot" />
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold leading-[1.1]">
            Coding &<br />
            <span className="text-primary">Web Developer</span>
          </h1>

          <p className="text-muted-foreground text-lg max-w-lg leading-relaxed">
            Passionate developer exploring coding, WordPress, Termux, and AI tools. Known for <span className="text-foreground font-medium">fast delivery</span> and <span className="text-foreground font-medium">high-quality solutions</span>.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" onClick={() => scrollTo("#projects")} className="gap-2">
              View Portfolio <ArrowRight size={16} />
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollTo("#contact")} className="gap-2">
              Contact Me
            </Button>
          </div>

          {/* Stats */}
          <div className="flex gap-4 pt-4">
            {stats.map((s) => (
              <div key={s.label} className="flex-1 bg-card border border-border rounded-xl p-4">
                <div className="flex items-center gap-2 mb-1">
                  <s.icon size={16} className="text-primary" />
                  <span className="text-2xl font-display font-bold text-foreground">{s.value}</span>
                </div>
                <span className="text-xs text-muted-foreground">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Profile Card */}
        <div className="flex justify-center lg:justify-end animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="relative">
            <div className="absolute -inset-4 red-glow rounded-3xl" />
            <div className="relative w-72 sm:w-80 rounded-2xl overflow-hidden border border-border bg-card">
              <div className="relative">
                <div className="absolute top-4 right-4 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-card/80 backdrop-blur-sm border border-border text-xs text-foreground">
                  <span className="w-2 h-2 rounded-full bg-status-online animate-pulse-dot" />
                  Available
                </div>
                <img src={profileImg} alt="Professor Ansh" className="w-full h-80 object-cover" />
              </div>
              <div className="p-5 space-y-3">
                <div>
                  <h3 className="font-display font-bold text-lg text-foreground">Professor Ansh</h3>
                  <p className="text-sm text-muted-foreground">Full Stack Developer</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">20+ Projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
