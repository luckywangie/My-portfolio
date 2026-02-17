import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
  ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_ezljsu3",         // ✅ Your EmailJS service ID
        "template_x2cir8l",        // ✅ Your EmailJS template ID
        formRef.current,           // ✅ Reference to the form
        "ROUkF94XHXYKw4wm7"        // ✅ Your EmailJS public key
      )
      .then(() => {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        e.target.reset();
        setIsSubmitting(false);
      })
      .catch(() => {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again later.",
        });
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-32 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/30 -skew-x-12 transform translate-x-1/4 -z-10"></div>

      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Column: Info & Map Visual */}
          <div className="space-y-10">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold font-heading tracking-tight mb-6">
                Let's <span className="text-primary">Collaborate</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                Ready to transform your digital presence? I'm currently available for freelance projects and open to full-time opportunities.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <a href="mailto:wangiemamati@gmail.com" className="font-medium hover:text-primary transition-colors">wangiemamati@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Phone</div>
                  <a href="tel:+254759479158" className="font-medium hover:text-primary transition-colors">+254 759 479 158</a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Location</div>
                  <div className="font-medium">Nairobi, Kenya</div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-border">
              <div className="text-sm font-medium text-muted-foreground mb-4">CONNECT WITH ME</div>
              <div className="flex gap-4">
                {[
                  { icon: Linkedin, href: "https://www.linkedin.com/in/lucky-wangie/" },
                  { icon: Twitter, href: "https://x.com/Wangielucky" },
                  { icon: Instagram, href: "https://www.instagram.com/wangielucky/" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-1"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-3xl blur-2xl -z-10 opacity-50"></div>
            <div className="bg-card border border-border rounded-3xl p-8 md:p-10 shadow-2xl">
              <h3 className="text-2xl font-bold font-heading mb-6">Send a Message</h3>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="title" value="New Contact Form Message" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full magnetic-btn group"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
