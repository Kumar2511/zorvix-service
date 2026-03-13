import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import FadeIn from "@/components/FadeIn";
import { Target, Eye, Heart } from "lucide-react";

const About = () => (
  <Layout>
    <SEOHead
      title="About Zorvix — Reliable Digital Solutions for Business Growth"
      description="Zorvix is a digital service brand helping businesses build a strong online presence through professional website design, development, logo design, and SEO services."
    />

    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-primary text-xs font-semibold tracking-wide mb-6">
              ABOUT US
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight">
              About Our <span className="text-gradient">Zorvix</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Zorvix is a digital service brand focused on helping businesses build a strong online presence. We provide professional website design, development, logo design, and SEO services for startups and growing businesses. Our goal is to deliver reliable and high-quality digital solutions that support your business growth.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>

    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Target, title: "Our Mission", desc: "To make professional web design and SEO accessible to every business, helping them build a compelling digital presence that drives growth." },
            { icon: Eye, title: "Our Vision", desc: "A world where every business, regardless of size, has an impactful online presence that connects them with their audience effectively." },
            { icon: Heart, title: "Our Values", desc: "Quality craftsmanship, transparent communication, and a genuine commitment to our clients' success drive everything we do." },
          ].map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.1}>
              <div className="p-8 rounded-xl bg-background border border-border h-full">
                <div className="w-11 h-11 rounded-lg bg-hero-gradient flex items-center justify-center mb-5">
                  <item.icon size={20} className="text-primary-foreground" />
                </div>
                <h2 className="font-heading font-bold text-xl">{item.title}</h2>
                <p className="mt-3 text-muted-foreground leading-relaxed text-sm">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <FadeIn>
          <h2 className="text-3xl font-heading font-bold mb-6">What We Do</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              At Zorvix, we specialize in creating modern, responsive websites that are designed to convert visitors into loyal customers. Whether you need a sleek portfolio site, a full-featured e-commerce store, or a complete brand identity, we deliver solutions tailored to your unique business needs.
            </p>
            <p>
              Beyond design and development, we understand that a beautiful website means nothing without visibility. That's why every project we undertake includes comprehensive SEO optimization-from on-page SEO for every page (Home, About, Services, Blog, and Contact) to technical SEO best practices that help search engines find and rank your site.
            </p>
            <p>
              Our approach combines creative design with data-driven strategies, ensuring your business doesn't just look great online-it performs. We focus on fast-loading, mobile-responsive websites built with clean code and SEO-friendly structures that give you a competitive edge.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  </Layout>
);

export default About;
