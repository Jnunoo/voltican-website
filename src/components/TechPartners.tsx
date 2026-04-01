'use client';
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { SiGooglecloud, SiDatabricks, SiSnowflake, SiSap, SiSalesforce } from "react-icons/si";
import { FaMicrosoft, FaAws, FaWindows } from "react-icons/fa6";
import type { IconType } from "react-icons";

// Brands where we have a matching vector icon
const partners: { name: string; Icon: IconType; color: string }[] = [
  { name: "SAP",           Icon: SiSap,          color: "#0F4E90" },
  { name: "Microsoft",     Icon: FaMicrosoft,    color: "#737373" },
  { name: "AWS",           Icon: FaAws,          color: "#FF9900" },
  { name: "Salesforce",    Icon: SiSalesforce,   color: "#00A1E0" },
  { name: "Google Cloud",  Icon: SiGooglecloud,  color: "#4285F4" },
  { name: "Databricks",    Icon: SiDatabricks,   color: "#FF3621" },
  { name: "Snowflake",     Icon: SiSnowflake,    color: "#29B5E8" },
];

// Brands using styled-text badges where no icon is available
const textPartners: { name: string; abbr: string; color: string; bg: string }[] = [
  { name: "Oracle",        abbr: "ORA",  color: "#fff", bg: "#F80000" },
  { name: "IBM",           abbr: "IBM",  color: "#fff", bg: "#1F70C1" },
  { name: "Azure",         abbr: "Az",   color: "#fff", bg: "#0078D4" },
  { name: "Tableau",       abbr: "TAB",  color: "#fff", bg: "#E97627" },
  { name: "Power BI",      abbr: "PBI",  color: "#fff", bg: "#F2C811" },
];

// Merge and interleave for a balanced slider
const allPartners = [
  partners[0],  // SAP
  textPartners[0], // Oracle
  partners[1],  // Microsoft
  textPartners[1], // IBM
  partners[2],  // AWS
  textPartners[2], // Azure
  partners[3],  // Salesforce
  textPartners[3], // Tableau
  partners[4],  // Google Cloud
  textPartners[4], // Power BI
  partners[5],  // Databricks
  partners[6],  // Snowflake
];

type AnyPartner = 
  | { name: string; Icon: IconType; color: string; abbr?: undefined }
  | { name: string; abbr: string; color: string; bg: string; Icon?: undefined };

export default function TechPartners() {
  return (
    <section className="py-14 overflow-hidden bg-white border-y border-surface-muted/40">
      <div className="mx-auto max-w-7xl px-6 mb-8">
        <p className="text-center text-xs font-semibold text-text-muted tracking-widest uppercase">
          Trusted Technology Partners
        </p>
      </div>

      <div className="relative">
        <InfiniteSlider gap={16} speed={55} speedOnHover={20}>
          {(allPartners as AnyPartner[]).map((partner) => (
            <div
              key={partner.name}
              className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-surface-muted/60 bg-surface-light/60 hover:bg-white hover:shadow-md hover:border-brand-blue/20 transition-all duration-300 whitespace-nowrap shrink-0"
            >
              {partner.Icon ? (
                // Vector icon from react-icons
                <partner.Icon
                  style={{ color: partner.color }}
                  className="shrink-0"
                  size={18}
                />
              ) : (
                // Styled text badge for brands without a vector icon
                <span
                  className="flex items-center justify-center rounded text-[9px] font-black tracking-tight shrink-0 px-1 h-5"
                  style={{ background: (partner as { bg: string }).bg, color: partner.color, minWidth: 28 }}
                >
                  {partner.abbr}
                </span>
              )}
              <span className="text-sm font-semibold text-brand-navy/75">
                {partner.name}
              </span>
            </div>
          ))}
        </InfiniteSlider>

        {/* Edge fades */}
        <div
          className="pointer-events-none absolute top-0 left-0 h-full w-24 z-10"
          style={{ background: "linear-gradient(to right, #ffffff, transparent)" }}
        />
        <div
          className="pointer-events-none absolute top-0 right-0 h-full w-24 z-10"
          style={{ background: "linear-gradient(to left, #ffffff, transparent)" }}
        />
      </div>
    </section>
  );
}
