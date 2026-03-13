import { Link } from "react-router-dom";
import { Instagram, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "919342170042";

const Footer = () => (
  <footer className="bg-card border-t border-border">
    <div className="container mx-auto px-4 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <Link to="/" className="text-xl font-heading font-bold text-gradient">
            Zorvix
          </Link>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Helping businesses build a strong online presence through professional websites and SEO.
          </p>
          <div className="mt-4 flex items-center gap-3">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle size={18} />
            </a>
           
          </div>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-sm mb-4">Pages</h4>
          <div className="flex flex-col gap-2">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/services", label: "Services" },
              { to: "/projects", label: "Projects" },
              { to: "/blog", label: "Blog" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-sm mb-4">Services</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <span>Custom Web Development</span>
            <span>Logo & Brand Identity Design</span>
            <span>SEO & Digital Marketing</span>
          </div>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-sm mb-4">Contact</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <span>zorvix.service@gmail.com</span>
            <span>+91 93421 70042</span>
          </div>
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Zorvix. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
