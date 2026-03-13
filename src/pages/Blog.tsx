import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, User, Mail, Send } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import FadeIn from "@/components/FadeIn";
import { toast } from "sonner";

const categories = ["All", "Business", "Design", "E-commerce", "SEO", "Marketing", "Technology"];

const posts = [
  {
    slug: "importance-of-business-website",
    title: "Why Every Business Needs a Professional Website in 2026",
    excerpt: "In today's digital-first world, a professional website is no longer optional — it's essential. Discover why having a website is crucial for building credibility, reaching new customers, and growing your business online.",
    date: "March 5, 2026",
    readTime: "5 min read",
    category: "Business",
  },
  {
    slug: "website-design-trends",
    title: "Top Website Design Trends That Will Dominate This Year",
    excerpt: "From bold typography and micro-interactions to AI-driven personalization, explore the design trends that are shaping the future of web design and how you can leverage them for your business.",
    date: "February 28, 2026",
    readTime: "7 min read",
    category: "Design",
  },
  {
    slug: "benefits-of-ecommerce",
    title: "The Benefits of E-commerce Websites for Small Businesses",
    excerpt: "E-commerce websites open up a world of opportunity for small businesses. Learn how an online store can help you reach a global audience, increase revenue, and operate around the clock.",
    date: "February 20, 2026",
    readTime: "6 min read",
    category: "E-commerce",
  },
  {
    slug: "how-seo-helps-businesses",
    title: "How SEO Helps Businesses Grow Online: A Complete Guide",
    excerpt: "Search Engine Optimization is one of the most powerful tools for driving organic traffic. This guide breaks down how SEO works, why it matters, and how it can transform your business's online visibility.",
    date: "February 12, 2026",
    readTime: "8 min read",
    category: "SEO",
  },
  {
    slug: "social-media-marketing-tips",
    title: "10 Social Media Marketing Tips to Boost Your Brand in 2026",
    excerpt: "Social media is a powerful channel for brand awareness and customer engagement. Learn actionable tips for creating compelling content, growing your following, and driving conversions from social platforms.",
    date: "February 5, 2026",
    readTime: "6 min read",
    category: "Marketing",
  },
  {
    slug: "mobile-first-design-importance",
    title: "Why Mobile-First Design Is No Longer Optional",
    excerpt: "With over 60% of web traffic coming from mobile devices, a mobile-first approach is critical. Explore best practices for responsive design and how it impacts SEO rankings and user experience.",
    date: "January 28, 2026",
    readTime: "5 min read",
    category: "Design",
  },
  {
    slug: "choosing-right-ecommerce-platform",
    title: "How to Choose the Right E-commerce Platform for Your Store",
    excerpt: "Shopify, WooCommerce, or custom-built? Compare the top e-commerce platforms and find the best fit for your products, budget, and growth goals.",
    date: "January 20, 2026",
    readTime: "7 min read",
    category: "E-commerce",
  },
  {
    slug: "local-seo-guide",
    title: "Local SEO: How to Rank Your Business in Local Search Results",
    excerpt: "If you have a local business, local SEO is your secret weapon. Learn how to optimize your Google Business Profile, build citations, and dominate local search results.",
    date: "January 12, 2026",
    readTime: "6 min read",
    category: "SEO",
  },
  {
    slug: "web-performance-optimization",
    title: "Speed Matters: How to Optimize Your Website Performance",
    excerpt: "A slow website costs you visitors and revenue. Discover practical techniques for improving load times, Core Web Vitals, and overall site performance.",
    date: "January 5, 2026",
    readTime: "7 min read",
    category: "Technology",
  },
  {
    slug: "branding-for-startups",
    title: "Building a Strong Brand Identity for Your Startup",
    excerpt: "Your brand is more than a logo. Learn how to create a cohesive brand identity including colors, typography, voice, and visual language that resonates with your target audience.",
    date: "December 28, 2025",
    readTime: "5 min read",
    category: "Business",
  },
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const filteredPosts = activeCategory === "All"
    ? posts
    : posts.filter((p) => p.category === activeCategory);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsletterEmail)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    toast.success("Thanks for subscribing! You'll receive our latest updates.");
    setNewsletterEmail("");
  };

  return (
    <Layout>
      <SEOHead
        title="Blog — Web Design, SEO & Digital Marketing Tips | Zorvix"
        description="Read expert insights on website design, SEO strategies, e-commerce tips, and digital marketing from the Zorvix blog."
      />

      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn>
            <div className="max-w-2xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-primary text-xs font-semibold tracking-wide mb-6">
                OUR BLOG
              </span>
              <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight">
                Insights & <span className="text-gradient">Resources</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Expert tips on web design, SEO, and growing your business online.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Category Filters */}
      <section className="pb-10">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn>
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === cat
                      ? "bg-hero-gradient text-primary-foreground shadow-primary-glow"
                      : "bg-secondary text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredPosts.map((post, i) => (
              <FadeIn key={post.slug} delay={i * 0.05}>
                <article className="p-6 md:p-8 rounded-xl bg-card border border-border h-full flex flex-col hover:shadow-[var(--shadow-md)] transition-shadow">
                  <span className="text-xs font-semibold text-primary mb-3">{post.category}</span>
                  <h2 className="text-xl font-heading font-bold leading-snug">{post.title}</h2>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{post.excerpt}</p>
                  <div className="mt-5 pt-4 border-t border-border flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><User size={12} /> Zorvix</span>
                      <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <FadeIn>
              <p className="text-center text-muted-foreground py-12">No posts found in this category.</p>
            </FadeIn>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn>
            <div className="bg-hero-gradient rounded-2xl p-10 md:p-16 text-center max-w-3xl mx-auto">
              <Mail size={32} className="text-primary-foreground mx-auto mb-4" />
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground">
                Subscribe to Our Newsletter
              </h2>
              <p className="mt-3 text-primary-foreground/80 max-w-md mx-auto text-sm leading-relaxed">
                Get the latest web design tips, SEO strategies, and digital marketing insights delivered straight to your inbox.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-background/20 text-primary-foreground placeholder:text-primary-foreground/50 border border-primary-foreground/20 text-sm focus:outline-none focus:ring-2 focus:ring-primary-foreground/30"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-lg bg-background text-foreground font-semibold text-sm hover:bg-secondary transition-colors inline-flex items-center justify-center gap-2"
                >
                  Subscribe <Send size={14} />
                </button>
              </form>
            </div>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
