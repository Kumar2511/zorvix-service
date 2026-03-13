import { useState, FormEvent } from "react";
import { Mail, MessageCircle, Send, ArrowRight, Phone, Instagram } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import FadeIn from "@/components/FadeIn";
import { toast } from "sonner";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email is too long"),
  phone: z.string().trim().min(1, "Phone number is required").regex(/^\+?[0-9\s\-()]{7,20}$/, "Please enter a valid phone number"),
  projectType: z.string().trim().min(1, "Please select a project type"),
  budget: z.string().trim().min(1, "Please select an estimated budget"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters"),
});

const WHATSAPP_NUMBER = "919342170042";

const projectTypes = [
  "Business Website",
  "E-commerce Store",
  "Web Application",
  "Logo Design",
  "SEO Optimization",
  "Other",
];

const budgetRanges = [
  "Under ₹10,000",
  "₹10,000 - ₹25,000",
  "₹25,000 - ₹50,000",
  "₹50,000+",
  "Not sure yet",
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", projectType: "", budget: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    const whatsappMessage = encodeURIComponent(
      `New Inquiry from Zorvix Website:\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nProject Type: ${form.projectType}\nEstimated Budget: ${form.budget}\nMessage: ${form.message}`
    );

    toast.success("Message sent! Redirecting to WhatsApp...", { duration: 3000 });
    setForm({ name: "", email: "", phone: "", projectType: "", budget: "", message: "" });

    setTimeout(() => {
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`, "_blank");
    }, 3000);
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-lg border ${errors[field] ? "border-destructive" : "border-border"} bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition`;

  return (
    <Layout>
      <SEOHead
        title="Contact Zorvix — Start Your Web Design or SEO Project Today"
        description="Get in touch with Zorvix to discuss your website design, e-commerce development, logo design, or SEO project. Free consultation available."
      />

      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn>
            <div className="max-w-2xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-primary text-xs font-semibold tracking-wide mb-6">
                CONTACT US
              </span>
              <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight">
                Let's <span className="text-gradient">Work Together</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Ready to start your project? Reach out and let's discuss how Zorvix can help your business grow online.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <FadeIn>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1.5">Full Name</label>
                  <input id="name" type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass("name")} placeholder="Your name" />
                  {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1.5">Email Address</label>
                  <input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass("email")} placeholder="you@example.com" />
                  {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1.5">Phone Number</label>
                  <input id="phone" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClass("phone")} placeholder="+91 93421 70042" />
                  {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
                </div>
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium mb-1.5">Project Type</label>
                  <select id="projectType" value={form.projectType} onChange={(e) => setForm({ ...form, projectType: e.target.value })} className={inputClass("projectType")}>
                    <option value="">Select project type</option>
                    {projectTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                  {errors.projectType && <p className="mt-1 text-xs text-destructive">{errors.projectType}</p>}
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium mb-1.5">Estimated Budget</label>
                  <select id="budget" value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })} className={inputClass("budget")}>
                    <option value="">Select budget range</option>
                    {budgetRanges.map((b) => <option key={b} value={b}>{b}</option>)}
                  </select>
                  {errors.budget && <p className="mt-1 text-xs text-destructive">{errors.budget}</p>}
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1.5">Project Details</label>
                  <textarea id="message" rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${inputClass("message")} resize-none`} placeholder="Tell us about your project..." />
                  {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
                </div>
                <button type="submit" className="w-full bg-hero-gradient text-primary-foreground px-8 py-3.5 rounded-lg font-semibold shadow-primary-glow hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2">
                  Send Inquiry <Send size={16} />
                </button>
              </form>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="space-y-6">
                <div className="p-6 rounded-xl bg-card border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-hero-gradient flex items-center justify-center">
                      <Mail size={18} className="text-primary-foreground" />
                    </div>
                    <h3 className="font-heading font-semibold">Email Us</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">zorvix.service@gmail.com</p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-hero-gradient flex items-center justify-center">
                      <Phone size={18} className="text-primary-foreground" />
                    </div>
                    <h3 className="font-heading font-semibold">Call Us</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">+91 93421 70042</p>
                </div>
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="block p-6 rounded-xl bg-card border border-border hover:shadow-[var(--shadow-md)] transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-hero-gradient flex items-center justify-center">
                      <MessageCircle size={18} className="text-primary-foreground" />
                    </div>
                    <h3 className="font-heading font-semibold">WhatsApp</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">Chat with us on WhatsApp for quick responses.</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm text-primary font-medium">
                    Open WhatsApp <ArrowRight size={14} />
                  </span>
                </a>
              
                <div className="p-6 rounded-xl bg-hero-gradient text-primary-foreground">
                  <h3 className="font-heading font-bold text-lg">Start Your Project Today</h3>
                  <p className="mt-2 text-sm text-primary-foreground/80 leading-relaxed">
                    Whether you need a website, logo, or SEO strategy — we're here to help your business grow. Let's make it happen.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
