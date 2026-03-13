import { ExternalLink, Star, Quote } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import FadeIn from "@/components/FadeIn";
import emmesPreview from "@/assets/emmes-industries.png";
import dlpsPreview from "@/assets/dlps-preview.png";

const projects = [
  {
    title: "Emmes Industries",
    description: "A professional business website for Emmes Industries, showcasing their industrial products and services with a clean, modern design.",
    url: "https://www.emmesindustries.in",
    tag: "Business Website",
    image: emmesPreview,
  },
  {
    title: "Digital Land Purchasing System",
    description: "A comprehensive digital platform for land purchasing and management, featuring secure transactions, property listings, and streamlined workflows.",
    url: "https://dlps-flame.vercel.app/",
    tag: "Web Application",
    image: dlpsPreview,
  },
];

const Projects = () => (
  <Layout>
    <SEOHead
      title="Our Projects — Client Work & Portfolio | Zorvix"
      description="Explore our portfolio of web design, e-commerce, and web application projects. See how Zorvix helps businesses succeed online."
    />

    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-primary text-xs font-semibold tracking-wide mb-6">
              OUR PROJECTS
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight">
              Featured <span className="text-gradient">Projects</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              A showcase of real-world projects we've built for our clients.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>

    <section className="pb-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 0.1}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-xl overflow-hidden border border-border hover:shadow-[var(--shadow-lg)] transition-shadow h-full"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 bg-card">
                  <span className="text-xs font-semibold text-primary">{project.tag}</span>
                  <h2 className="font-heading font-bold text-xl mt-1">{project.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm text-primary font-medium">
                    Visit Project <ExternalLink size={14} />
                  </span>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

      {/* Testimonials */}
      <section className="pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-primary text-xs font-semibold tracking-wide mb-6">
                CLIENT REVIEWS
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold">
                What Our <span className="text-gradient">Clients Say</span>
              </h2>
              <p className="mt-3 text-muted-foreground">Real feedback from businesses we've worked with.</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { name: "Rajesh Kumar", role: "Director, Emmes Industries", text: "Zorvix delivered an outstanding website for our industrial business. The design is professional, loads fast, and has significantly improved our online credibility with clients.", rating: 5 },
              { name: "Lavanya", role: "Owner,  DLPS", text: "Our e-commerce store looks stunning and sales have never been better. The team was incredibly responsive and detail-oriented throughout the project.", rating: 5 },
            ].map((t, i) => (
              <FadeIn key={t.name} delay={i * 0.1}>
                <div className="p-6 rounded-xl bg-card border border-border h-full flex flex-col">
                  <Quote size={24} className="text-primary/20 mb-3" />
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} size={14} className="fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">"{t.text}"</p>
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="font-heading font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
  </Layout>
);

export default Projects;
