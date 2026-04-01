'use client';
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import {
  SiSap,
  SiSalesforce,
  SiGooglecloud,
  SiDatabricks,
  SiSnowflake,
} from "react-icons/si";
import { FaMicrosoft, FaAws } from "react-icons/fa6";
import type { IconType } from "react-icons";

const MONO_COLOR = "#0a67c7"; // brand-blue — matches the About section icon color
const HOVER_COLOR = "#003e6a"; // brand navy on hover

type IconPartner = { type: "icon"; name: string; Icon: IconType };
type TextPartner = { type: "text"; name: string; display: string };
type Partner = IconPartner | TextPartner;

const partners: Partner[] = [
  { type: "icon", name: "SAP",          Icon: SiSap          },
  { type: "text", name: "Oracle",       display: "ORACLE"    },
  { type: "icon", name: "Microsoft",    Icon: FaMicrosoft    },
  { type: "text", name: "IBM",          display: "IBM"       },
  { type: "icon", name: "AWS",          Icon: FaAws          },
  { type: "text", name: "Azure",        display: "AZURE"     },
  { type: "icon", name: "Salesforce",   Icon: SiSalesforce   },
  { type: "icon", name: "Google Cloud", Icon: SiGooglecloud  },
  { type: "icon", name: "Snowflake",    Icon: SiSnowflake    },
  { type: "icon", name: "Databricks",   Icon: SiDatabricks   },
];

function PartnerMark({ partner }: { partner: Partner }) {
  const base =
    "flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300 group";

  if (partner.type === "icon") {
    return (
      <div className={base} title={partner.name}>
        <partner.Icon
          size={40}
          style={{ color: MONO_COLOR }}
          className="group-hover:text-[#003e6a] transition-colors duration-300"
        />
      </div>
    );
  }

  return (
    <div className={base} title={partner.name}>
      <span
        className="font-black tracking-widest uppercase leading-none select-none group-hover:text-[#003e6a] transition-colors duration-300"
        style={{
          color: MONO_COLOR,
          fontSize: partner.display.length <= 3 ? "22px" : "17px",
          fontFamily: "var(--font-heading, 'Inter', sans-serif)",
          letterSpacing: "0.12em",
        }}
      >
        {partner.display}
      </span>
    </div>
  );
}

export default function TechPartners() {
  return (
    <section className="py-14 overflow-hidden bg-white border-y border-slate-100">
      <div className="mx-auto max-w-7xl px-6 mb-10">
        <p className="text-center text-[11px] font-semibold text-slate-400 tracking-[0.2em] uppercase">
          Trusted Technology Partners
        </p>
      </div>

      <div className="relative">
        <InfiniteSlider gap={100} speed={60} speedOnHover={20}>
          {partners.map((p) => (
            <PartnerMark key={p.name} partner={p} />
          ))}
        </InfiniteSlider>

        {/* Soft edge fades */}
        <div
          className="pointer-events-none absolute top-0 left-0 h-full w-32 z-10"
          style={{ background: "linear-gradient(to right, #ffffff, transparent)" }}
        />
        <div
          className="pointer-events-none absolute top-0 right-0 h-full w-32 z-10"
          style={{ background: "linear-gradient(to left, #ffffff, transparent)" }}
        />
      </div>
    </section>
  );
}
