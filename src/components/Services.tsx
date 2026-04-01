'use client';

import Link from 'next/link';
import ScrollReveal from './ScrollReveal';
import { services } from '@/data/services';

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          {/* Section header */}
          <div className="max-w-2xl mb-14">
            <p className="text-brand-blue font-semibold text-xs tracking-[0.18em] uppercase mb-3">
              Our Services
            </p>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-navy leading-tight">
              Enterprise technology solutions that drive growth
            </h2>
            <p className="mt-4 text-text-muted text-base leading-relaxed">
              Six core practice areas spanning the full technology lifecycle —
              from strategy and architecture through implementation and support.
            </p>
          </div>

          {/* Card grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex flex-col cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-xl"
              >
                {/* Image */}
                <div className="overflow-hidden rounded-xl mb-5 aspect-[16/9] bg-slate-100">
                  <img
                    src={service.imgUrl}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Tag */}
                <p className="text-[11px] font-semibold text-brand-blue tracking-widest uppercase mb-2">
                  {service.tag}
                </p>

                {/* Title */}
                <h3 className="text-[17px] font-heading font-bold text-brand-navy leading-snug mb-2 group-hover:text-brand-blue transition-colors duration-200">
                  {service.title}
                </h3>

                {/* Summary */}
                <p className="text-sm text-text-muted leading-relaxed flex-1">
                  {service.summary}
                </p>

                {/* Read more arrow */}
                <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-brand-navy group-hover:text-brand-blue transition-colors duration-200">
                  <span>Learn more</span>
                  <span className="translate-x-0 group-hover:translate-x-1.5 transition-transform duration-200">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
