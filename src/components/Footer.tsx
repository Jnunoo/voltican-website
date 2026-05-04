import Image from "next/image";

const footerLinks = {
  Services: [
    { label: "Data & Analytics", href: "/services/data-analytics" },
    { label: "Data Governance", href: "/services/data-governance" },
    { label: "Automation (RPA)", href: "/services/automation-rpa" },
    { label: "Cloud & DevSecOps", href: "/services/cloud-devsecops" },
    { label: "SaaS & ERP", href: "/services/saas-erp" },
  ],
  "AI Services": [
    { label: "AI Strategy", href: "/#ai-services" },
    { label: "Generative AI", href: "/#ai-services" },
    { label: "AI Analytics", href: "/#ai-services" },
    { label: "Intelligent Automation", href: "/#ai-services" },
    { label: "AI Governance", href: "/#ai-services" },
  ],
  Company: [
    { label: "About Us", href: "/#about" },
    { label: "Industries", href: "/#industries" },
    { label: "Capability Statement", href: "/capability-statement" },
    { label: "Careers", href: "#" },
    { label: "Government", href: "#" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer id="contact" className="bg-brand-navy text-white">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <Image
                src="/logo-white.png"
                alt="Voltican"
                width={160}
                height={48}
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-brand-ice/60 leading-relaxed text-sm max-w-xs mb-6">
              Global management consulting, technology services, and AI solutions.
              Headquartered in Houston, TX since 2009.
            </p>
            {/* Contact info */}
            <div className="space-y-2 text-sm text-brand-ice/70">
              <p>
                <span className="text-brand-ice/40">Phone:</span>{" "}
                <a href="tel:+17137144965" className="hover:text-white transition-colors">
                  (713) 714-4965
                </a>
              </p>
              <p>
                <span className="text-brand-ice/40">Email:</span>{" "}
                <a href="mailto:admin@voltican.com" className="hover:text-white transition-colors">
                  admin@voltican.com
                </a>
              </p>
              <p>
                <span className="text-brand-ice/40">Offices:</span> Houston TX
                &bull; Sacramento CA &bull; India &bull; Canada
              </p>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-heading font-semibold text-sm tracking-wide mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-brand-ice/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-brand-ice/40">
          <p>&copy; {new Date().getFullYear()} Voltican Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
