import { Link } from "react-router-dom";
import { Code, Palette, Search, ArrowRight, ShoppingCart, BarChart3, Figma, FileCode } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import FadeIn from "@/components/FadeIn";

const servicesData = [
  {
    icon: Code,
    title: "Custom Web Development (React/Next.js)",
    desc: "High-performance websites and web applications built with React and Next.js. We deliver scalable, maintainable code with modern architecture.",
    features: ["React & Next.js development", "TypeScript & Tailwind CSS", "API integration", "Performance optimization"],
  },
  
  {
    icon: Search,
    title: "SEO & Digital Marketing",
    desc: "Complete SEO optimization and digital marketing strategies to improve search visibility, drive organic traffic, and grow your business online.",
    features: ["On-page & technical SEO", "Keyword research & strategy", "Content optimization", "Analytics & reporting"],
  },
  
  {
    icon: Palette,
    title: "Logo & Brand Identity Design",
    desc: "Creative logo design and complete brand identity packages that communicate your brand values and make a lasting impression.",
    features: ["Multiple concept options", "Vector file formats", "Brand guidelines", "Unlimited revisions"],
  },
  
];

const Services = () => (
  <Layout>
    <SEOHead
      title="Our Services — Web Design, E-commerce, Logo Design & SEO | Zorvix"
      description="Zorvix offers custom web development with React/Next.js, e-commerce solutions, UI/UX design, creative logo design, and complete SEO optimization services."
    />

    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-primary text-xs font-semibold tracking-wide mb-6">
              OUR SERVICES
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight">
              Our <span className="text-gradient">Services</span>
            </h1>
            <ul className="mt-8 space-y-3 text-left max-w-xl mx-auto">
              <li className="flex items-start gap-3 text-muted-foreground">
                <FileCode size={16} className="text-primary shrink-0 mt-1" />
                <span>Modern and responsive Website Design & Development</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <FileCode size={16} className="text-primary shrink-0 mt-1" />
                <span>Fast and professional Static Website Development</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <FileCode size={16} className="text-primary shrink-0 mt-1" />
                <span>Secure E-commerce Website Development for online stores</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <FileCode size={16} className="text-primary shrink-0 mt-1" />
                <span>Creative Logo Design for strong brand identity</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <FileCode size={16} className="text-primary shrink-0 mt-1" />
                <span>Complete Website SEO Optimization to improve search visibility</span>
              </li>
            </ul>
          </div>
        </FadeIn>
      </div>
    </section>

    <section className="pb-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicesData.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.05}>
              <div className="p-8 rounded-xl bg-card border border-border h-full">
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-hero-gradient flex items-center justify-center">
                      <s.icon size={22} className="text-primary-foreground" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-heading font-bold">{s.title}</h2>
                    <p className="mt-2 text-muted-foreground leading-relaxed text-sm">{s.desc}</p>
                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {s.features.map((f) => (
                        <div key={f} className="flex items-center gap-2 text-sm">
                          <FileCode size={14} className="text-primary shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <FadeIn>
          <div className="bg-hero-gradient rounded-2xl p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground">
              Need a Custom Solution?
            </h2>
            <p className="mt-4 text-primary-foreground/80 max-w-lg mx-auto">
              Every business is unique. Let's discuss your specific needs and create a tailored plan.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 bg-background text-foreground px-8 py-3.5 rounded-lg font-semibold hover:bg-secondary transition-colors"
            >
              Get a Free Quote <ArrowRight size={18} />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  </Layout>
);

export default Services;
