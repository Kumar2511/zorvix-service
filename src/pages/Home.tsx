import { Link } from "react-router-dom";
import { ArrowRight, Search, Palette, Code, Star, CheckCircle, ShoppingCart, BarChart3, Figma, Check } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import FadeIn from "@/components/FadeIn";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import emmesPreview from "@/assets/emmes-industries.png";
import dlpsPreview from "@/assets/dlps-preview.png";

const services = [
  { icon: Code, title: "Custom Web Development", desc: "High-performance React & Next.js websites tailored to your business needs." },
  { icon: Search, title: "SEO & Digital Marketing", desc: "Data-driven strategies to rank higher and grow organic traffic." },
  { icon: Palette, title: "Logo & Brand Identity", desc: "Distinctive brand identities that make lasting impressions." },
];

const testimonials = [
              { name: "Rajesh Kumar", role: "Director, Emmes Industries", text: "Zorvix delivered an outstanding website for our industrial business. The design is professional, loads fast, and has significantly improved our online credibility with clients.", rating: 5 },
              { name: "Lavanya", role: "Owner,  DLPS", text: "Our e-commerce store looks stunning and sales have never been better. The team was incredibly responsive and detail-oriented throughout the project.", rating: 5 },
];

const portfolioItems = [
  { title: "Emmes Industries", tag: "Business Website", desc: "A modern corporate website with clean design and optimized performance.", image: emmesPreview, url: "https://www.emmesindustries.in" },
  { title: "Digital Land Purchasing System", tag: "Web Application", desc: "A full-stack web app for streamlined land purchasing workflows.", image: dlpsPreview, url: "https://dlps-flame.vercel.app/" },
];

const whyChoose = [
  "Custom designs tailored to your brand",
  "SEO-optimized from the ground up",
  "Mobile-first responsive development",
  "Fast loading & performance focused",
  "Ongoing support and maintenance",
  "Transparent pricing, no hidden fees",
];

const pricingPlans = [
  {
    name: "Starter",
    price: "₹9,999",
    period: "one-time",
    desc: "Perfect for small businesses getting started online.",
    features: ["5-page responsive website", "Mobile-friendly design", "Basic SEO setup", "Contact form integration", "1 month free support"],
    popular: false,
  },
  {
    name: "Professional",
    price: "₹24,999",
    period: "one-time",
    desc: "Ideal for growing businesses needing advanced features.",
    features: ["Up to 15 pages", "Custom UI/UX design", "Advanced SEO optimization", "E-commerce integration", "CMS setup", "3 months free support"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "quote",
    desc: "Tailored solutions for large-scale business needs.",
    features: ["Unlimited pages", "Custom web application", "Full SEO & marketing strategy", "Priority support", "Dedicated project manager", "Performance monitoring"],
    popular: false,
  },
];

const faqs = [
  { q: "How long does it take to build a website?", a: "A standard website takes 2-4 weeks depending on complexity. E-commerce and custom web applications may take 4-8 weeks. We'll provide a detailed timeline during our initial consultation." },
  { q: "What is your pricing structure?", a: "We offer flexible pricing plans starting from ₹9,999 for basic websites. Each project is unique, so we provide custom quotes based on your specific requirements. Contact us for a free consultation." },
  { q: "Do you provide ongoing maintenance?", a: "Yes! All our plans include free support after launch. We also offer monthly maintenance packages that cover updates, security patches, content changes, and performance monitoring." },
  { q: "Can you help with SEO and digital marketing?", a: "Absolutely. Every website we build is SEO-optimized by default. We also offer comprehensive SEO and digital marketing packages to help improve your search rankings and drive organic traffic." },
  { q: "What technologies do you use?", a: "We use modern technologies including React, Next.js, TypeScript, and Tailwind CSS for web development. For e-commerce, we work with Shopify and WooCommerce. All our sites are built for speed and scalability." },
  { q: "Do you offer revisions during the project?", a: "Yes, we include multiple revision rounds in every project. We work closely with you to ensure the final product matches your vision perfectly." },
];

const Home = () => (
  <Layout>
    <SEOHead
      title="Zorvix — Professional Web Design, Development & SEO Services"
      description="At Zorvix, we provide professional website design, development, and SEO services to help businesses build a strong online presence. From modern business websites to powerful e-commerce platforms."
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Zorvix",
        "description": "Digital service brand helping businesses build a strong online presence through professional website design, e-commerce development, logo design, and SEO optimization.",
        "url": "https://zorvix.com",
        "email": "hello@zorvix.com",
        "sameAs": [],
        "serviceType": ["Website Design", "E-commerce Development", "Logo Design", "SEO Optimization"],
        "areaServed": "Worldwide",
        "priceRange": "$$"
      }}
    />

    {/* Hero */}
    <section className="relative overflow-hidden py-24 md:py-36">
      <div className="absolute inset-0 bg-hero-gradient opacity-[0.04]" />
      <div className="container mx-auto px-4 lg:px-8 relative">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-primary text-xs font-semibold tracking-wide mb-6">
              FREELANCE DIGITAL SERVICES
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight tracking-tight">
              Professional Web Design, Development &
              <span className="text-gradient"> SEO Services</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
              At Zorvix, we provide professional website design, development, and SEO services to help businesses build a strong online presence. From modern business websites to powerful e-commerce platforms, we create fast, responsive, and user-friendly websites that support your business growth.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-hero-gradient text-primary-foreground px-8 py-3.5 rounded-lg font-semibold shadow-primary-glow hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
              >
                Start a Project <ArrowRight size={18} />
              </Link>
              <Link
                to="/services"
                className="border border-border px-8 py-3.5 rounded-lg font-semibold text-foreground hover:bg-secondary transition-colors inline-flex items-center justify-center"
              >
                View Services
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>

    {/* About */}
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">About Our <span className="text-gradient">Zorvix</span></h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Zorvix is a digital service brand focused on helping businesses build a strong online presence. We provide professional website design, development, logo design, and SEO services for startups and growing businesses. Our goal is to deliver reliable and high-quality digital solutions that support your business growth.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>

    {/* Detailed Services Grid */}
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <FadeIn>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Our Services</h2>
            <p className="mt-3 text-muted-foreground">Everything you need to succeed online.</p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.08}>
              <div className="p-6 rounded-xl bg-card border border-border hover:shadow-[var(--shadow-md)] transition-shadow h-full">
                <div className="w-11 h-11 rounded-lg bg-hero-gradient flex items-center justify-center mb-4">
                  <s.icon size={20} className="text-primary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose Zorvix */}
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold">Why Choose Zorvix?</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We combine creative design with technical expertise and proven SEO strategies to deliver websites that don't just look great — they perform.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyChoose.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-primary mt-0.5 shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>

    {/* Portfolio / Our Work */}
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <FadeIn>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Our Work</h2>
            <p className="mt-3 text-muted-foreground">A glimpse of projects we've delivered.</p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioItems.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.08}>
              <div className="rounded-xl overflow-hidden border border-border group hover:shadow-[var(--shadow-lg)] transition-shadow h-full flex flex-col">
                <div className="h-48 overflow-hidden bg-secondary">
                  {p.image ? (
                    <img src={p.image} alt={`${p.title} preview`} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <div className="w-full h-full bg-hero-gradient opacity-20 flex items-center justify-center">
                      <Code size={48} className="text-primary opacity-50" />
                    </div>
                  )}
                </div>
                <div className="p-5 bg-card flex-1 flex flex-col">
                  <span className="text-xs text-primary font-semibold">{p.tag}</span>
                  <h3 className="font-heading font-semibold mt-1 text-lg">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{p.desc}</p>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                  >
                    View Project <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
            View All Projects <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <FadeIn>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">What Our Clients Say</h2>
            <p className="mt-3 text-muted-foreground">Trusted by businesses worldwide.</p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.1}>
              <div className="p-6 rounded-xl bg-background border border-border h-full flex flex-col">
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

    {/* Pricing Plans */}
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <FadeIn>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Pricing Plans</h2>
            <p className="mt-3 text-muted-foreground">Transparent pricing for every business size.</p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pricingPlans.map((plan, i) => (
            <FadeIn key={plan.name} delay={i * 0.1}>
              <div className={`p-8 rounded-xl border h-full flex flex-col ${plan.popular ? "border-primary bg-card shadow-[var(--shadow-primary)]" : "border-border bg-card"}`}>
                {plan.popular && (
                  <span className="inline-block px-3 py-1 rounded-full bg-hero-gradient text-primary-foreground text-xs font-semibold mb-4 self-start">
                    Most Popular
                  </span>
                )}
                <h3 className="font-heading font-bold text-xl">{plan.name}</h3>
                <div className="mt-3">
                  <span className="text-3xl font-heading font-bold">{plan.price}</span>
                  {plan.period !== "quote" && <span className="text-sm text-muted-foreground ml-1">/ {plan.period}</span>}
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{plan.desc}</p>
                <ul className="mt-6 space-y-3 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check size={16} className="text-primary shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`mt-8 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all ${
                    plan.popular
                      ? "bg-hero-gradient text-primary-foreground shadow-primary-glow hover:opacity-90"
                      : "border border-border text-foreground hover:bg-secondary"
                  }`}
                >
                  Get Started <ArrowRight size={16} />
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <FadeIn>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Frequently Asked Questions</h2>
            <p className="mt-3 text-muted-foreground">Got questions? We've got answers.</p>
            
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-xl px-6 bg-background">
                  <AccordionTrigger className="text-left font-heading font-semibold hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </FadeIn>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <FadeIn>
          <div className="bg-hero-gradient rounded-2xl p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground">
              Ready to Build Your Online Presence?
            </h2>
            <p className="mt-4 text-primary-foreground/80 max-w-lg mx-auto">
              Let's create a website that drives results for your business. Get in touch today.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 bg-background text-foreground px-8 py-3.5 rounded-lg font-semibold hover:bg-secondary transition-colors"
            >
              Start Your Project <ArrowRight size={18} />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  </Layout>
);

export default Home;
