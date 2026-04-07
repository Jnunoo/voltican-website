"use client";

import Image from "next/image";
import Link from "next/link";

/* ─── Data ────────────────────────────────────────────────────────────────── */

const competencies = [
  {
    title: "AI Services",
    accent: true,
    icon: (
      <svg viewBox="0 0 20 20" fill="none" width="13" height="13">
        <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.4"/>
        <circle cx="10" cy="3" r="1.5" fill="currentColor" opacity="0.8"/>
        <circle cx="10" cy="17" r="1.5" fill="currentColor" opacity="0.8"/>
        <circle cx="3" cy="10" r="1.5" fill="currentColor" opacity="0.8"/>
        <circle cx="17" cy="10" r="1.5" fill="currentColor" opacity="0.8"/>
        <line x1="10" y1="4.5" x2="10" y2="7" stroke="currentColor" strokeWidth="1.2"/>
        <line x1="10" y1="13" x2="10" y2="15.5" stroke="currentColor" strokeWidth="1.2"/>
        <line x1="4.5" y1="10" x2="7" y2="10" stroke="currentColor" strokeWidth="1.2"/>
        <line x1="13" y1="10" x2="15.5" y2="10" stroke="currentColor" strokeWidth="1.2"/>
      </svg>
    ),
    items: [
      "AI Strategy & Consulting",
      "Generative AI & LLMs",
      "AI-Powered Data Analytics",
      "Intelligent Process Automation",
      "AI Governance & Responsible AI",
      "MLOps & AI Infrastructure",
      "Computer Vision & Doc Intelligence",
      "Conversational AI & Chatbots",
    ],
  },
  {
    title: "Data & Analytics",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" width="13" height="13">
        <rect x="2" y="12" width="4" height="6" rx="1" stroke="currentColor" strokeWidth="1.3"/>
        <rect x="8" y="7" width="4" height="11" rx="1" stroke="currentColor" strokeWidth="1.3"/>
        <rect x="14" y="3" width="4" height="15" rx="1" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M4 11 L10 6 L16 2" stroke="currentColor" strokeWidth="1" strokeDasharray="2 1.5"/>
      </svg>
    ),
    items: [
      "Data Analytics & Reporting",
      "Data Science & Warehousing",
      "Data Mining & Migration",
      "Robotic Process Automation (RPA)",
      "Data Governance & Data Lake",
      "Machine Learning / Deep Learning",
    ],
  },
  {
    title: "Cloud & ERP Solutions",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" width="13" height="13">
        <path d="M14.5 15H6a5 5 0 1 1 4.9-6H14.5a3.5 3.5 0 1 1 0 7Z" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M10 12v3M8.5 13.5L10 12l1.5 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    items: [
      "Cloud DevOps / DevSecOps",
      "Cloud Migration & Management",
      "Cloud Storage & Security",
      "ERP: SAP · Oracle · MS · Salesforce",
      "Business Process Development",
      "Change Management",
    ],
  },
  {
    title: "Consulting & Staffing",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" width="13" height="13">
        <circle cx="7.5" cy="6" r="3" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M1.5 17a6 6 0 0 1 12 0" stroke="currentColor" strokeWidth="1.3"/>
        <circle cx="14.5" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.2"/>
        <path d="M17 14a4.5 4.5 0 0 0-5 0" stroke="currentColor" strokeWidth="1.2"/>
      </svg>
    ),
    items: [
      "Staff Augmentation",
      "Permanent Staffing",
      "Software Licensing",
      "Hardware Reseller",
      "Network & Cyber Security",
      "Program Management",
    ],
  },
];

const pastPerformance = [
  { client: "Dept. of Commerce", project: "Data Analytics", tech: "SAP, Deep Learning, Python, MS BI, Hadoop, Azure Cloud" },
  { client: "Santa Clara County", project: "Business Transformation", tech: "SME, SAP, Microsoft, Oracle, Analytics BOXI" },
  { client: "Levis & Strauss", project: "Business Process Augmentation", tech: "SAP ERP, .Net, C#, SQL Server, AWS" },
  { client: "Johnson City Electric", project: "Application Development", tech: "SAP ECC, SAP BW, MS BI, Java Portal" },
  { client: "Spinnaker", project: "ERP / ES Middleware", tech: "SAP CRM, Oracle, SQL, HANA, DB2, Linux" },
  { client: "Bridgestone", project: "Production Support", tech: "Salesforce, SAP ECC, SQL Server, SAP CRM" },
  { client: "Snohomish County PUD", project: "Big Data", tech: "Hadoop, Hive, NoSQL, HANAvora, HBase" },
];

const certifications = [
  "GSA MAS Schedule",
  "SBA HubZone",
  "Minority Business Enterprise (MBE)",
  "Texas HUB",
  "SAFe Agile Certified",
  "Pega Certified Team",
  "Small Disadvantaged Business (SDB)",
];

const naicsCodes = [
  { code: "541511", label: "Computer Programming", primary: true },
  { code: "541611", label: "Administrative Mgmt" },
  { code: "541512", label: "Computer Systems Design" },
  { code: "541519", label: "Other Computer Services" },
  { code: "518210", label: "Data Processing/Hosting" },
  { code: "541490", label: "Other Specialized Design" },
  { code: "541990", label: "Other Professional Svcs" },
  { code: "561110", label: "Office Administrative Svcs" },
];

const engagementModels = [
  "Free AI Readiness Assessment",
  "AI Pilot Program (8–12 wk POC)",
  "AI Implementation",
  "AI Managed Services",
];

const aiPartners = [
  "Anthropic Claude", "OpenAI / Azure OpenAI", "AWS Bedrock",
  "Google Vertex AI", "Databricks", "UiPath AI Center",
  "Microsoft Copilot Studio", "Snowflake AI", "Pinecone",
];

const platformPartners = [
  "SAP", "Oracle", "Microsoft", "Salesforce", "AWS",
  "IBM", "VMware", "Tableau", "Intel", "Dell", "Red Hat",
];

/* ─── Subtle hex grid ─────────────────────────────────────────────────────── */
function HexPattern({ opacity = 0.06 }: { opacity?: number }) {
  return (
    <svg
      aria-hidden="true"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity, pointerEvents: "none" }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="hexPat" x="0" y="0" width="46" height="52" patternUnits="userSpaceOnUse">
          <polygon points="23,2 44,13 44,39 23,50 2,39 2,13" fill="none" stroke="white" strokeWidth="0.7" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hexPat)" />
    </svg>
  );
}

/* ─── 3-D isometric neural-network illustration ───────────────────────────── */
function NeuralNet3D() {
  type Node = [number, number, number, number]; // cx, cy, r, opacity
  const nodes: Node[] = [
    [160, 34, 8, 1],   // hub
    [120, 58, 5, 0.75], [200, 58, 5, 0.75],
    [90,  86, 6, 0.9],  [160, 86, 4, 0.55], [230, 86, 6, 0.9],
    [110, 114, 5, 0.7], [160, 118, 7, 1],   [210, 114, 5, 0.7],
    [68,  48,  3, 0.5], [252, 48, 3, 0.5],
    [128, 138, 3, 0.45],[192, 138, 3, 0.45],
  ];
  const edges: [number, number][] = [
    [0,1],[0,2],[1,3],[2,5],[1,4],[2,4],[3,6],[4,7],[5,8],
    [6,7],[7,8],[3,9],[5,10],[6,11],[8,12],[0,4],[7,11],[7,12],
  ];
  return (
    <svg
      aria-hidden="true"
      viewBox="20 20 270 140"
      style={{ position: "absolute", right: 0, top: 0, width: "290px", height: "100%", opacity: 0.16, pointerEvents: "none" }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="rg1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#60b4ff" /><stop offset="100%" stopColor="#0a67c7" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="rg2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffb347" /><stop offset="100%" stopColor="#ff9800" stopOpacity="0" />
        </radialGradient>
      </defs>
      {edges.map(([a, b], i) => (
        <line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]}
          stroke="#60b4ff" strokeWidth="0.9" strokeOpacity="0.55" />
      ))}
      {nodes.map(([cx, cy, r, op], i) => {
        const isHub = i === 0 || i === 7;
        return (
          <g key={i}>
            <circle cx={cx} cy={cy} r={r * 2.6} fill={isHub ? "url(#rg2)" : "url(#rg1)"} opacity={op * 0.45} />
            <circle cx={cx} cy={cy} r={r} fill={isHub ? "#ffb347" : "#60b4ff"} opacity={op} />
          </g>
        );
      })}
    </svg>
  );
}

/* ─── Section label ───────────────────────────────────────────────────────── */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "5px" }}>
      <div style={{
        width: "3px", height: "13px", borderRadius: "2px",
        background: "linear-gradient(180deg, #0a67c7 0%, #003E6A 100%)",
        flexShrink: 0,
      }} />
      <span style={{
        fontSize: "9px", fontWeight: 800, textTransform: "uppercase",
        letterSpacing: "0.22em", color: "#003E6A",
      }}>{children}</span>
      <div style={{ flex: 1, height: "0.5px", background: "linear-gradient(90deg, #c0d5ee, transparent)" }} />
    </div>
  );
}

/* ─── Sidebar section ─────────────────────────────────────────────────────── */
function SideSection({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "5px" }}>
        <div style={{ width: "14px", height: "1.5px", background: "#ff9800", borderRadius: "1px" }} />
        <span style={{
          fontSize: "8px", fontWeight: 800, textTransform: "uppercase",
          letterSpacing: "0.22em", color: "#003E6A",
        }}>{label}</span>
      </div>
      {children}
    </div>
  );
}

/* ─── Page ────────────────────────────────────────────────────────────────── */
export default function CapabilityStatementPage() {
  return (
    <>
      {/* Screen chrome */}
      <div
        className="screen-chrome no-print"
        style={{
          background: "linear-gradient(160deg, #04091a 0%, #060e1c 60%, #080d18 100%)",
          minHeight: "100vh", paddingTop: "80px", paddingBottom: "48px",
          display: "flex", flexDirection: "column", alignItems: "center",
          backgroundImage: "radial-gradient(ellipse 70% 40% at 50% 0%, rgba(10,103,199,0.18) 0%, transparent 70%)",
        }}
      >
        <div style={{
          width: "100%", maxWidth: "820px", marginBottom: "20px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <Link href="/" style={{
            color: "rgba(255,255,255,0.4)", fontSize: "13px",
            display: "flex", alignItems: "center", gap: "6px",
            textDecoration: "none", transition: "color 0.2s",
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M5 12l7-7M5 12l7 7" />
            </svg>
            Back to Home
          </Link>
          <button
            onClick={() => window.print()}
            style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              padding: "10px 22px", borderRadius: "50px",
              background: "linear-gradient(135deg, #0a67c7, #0951a3)",
              color: "#fff", fontSize: "13px", fontWeight: 600,
              border: "none", cursor: "pointer",
              boxShadow: "0 4px 20px rgba(10,103,199,0.45), 0 0 0 1px rgba(10,103,199,0.3)",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
              <rect x="6" y="14" width="12" height="8" rx="1"/>
            </svg>
            Print / Save as PDF
          </button>
        </div>
        <CapabilityDocument />
      </div>

      {/* Print-only */}
      <div className="print-only" style={{ display: "none" }}>
        <CapabilityDocument />
      </div>

      <style>{`
        @media print {
          .screen-chrome { display: none !important; }
          .print-only    { display: block !important; }
          /* Hide the site navbar — it's a fixed <header> outside this page */
          header[class*="fixed"],
          nav,
          [class*="print:hidden"],
          .no-print      { display: none !important; }
          @page { size: A4; margin: 0; }
          body { margin: 0 !important; padding: 0 !important; }
          * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
        }
        @media screen { .print-only { display: none !important; } }
      `}</style>
    </>
  );
}

/* ─── Printable A4 document ───────────────────────────────────────────────── */
function CapabilityDocument() {
  return (
    <div
      id="capability-doc"
      style={{
        width: "210mm", height: "297mm",
        background: "#ffffff",
        fontFamily: "'Inter', system-ui, sans-serif",
        fontSize: "10.5px", color: "#1a2d42", lineHeight: 1.45,
        boxShadow: "0 32px 100px rgba(0,0,0,0.75), 0 0 0 1px rgba(255,255,255,0.06)",
        display: "flex", flexDirection: "column",
        overflow: "hidden", position: "relative",
      }}
    >

      {/* ══ HEADER ═══════════════════════════════════════════════════════════ */}
      <header style={{
        background: "linear-gradient(115deg, #001428 0%, #002448 30%, #003466 60%, #0a4d8c 100%)",
        position: "relative", overflow: "hidden", flexShrink: 0,
      }}>
        <HexPattern opacity={0.05} />
        <NeuralNet3D />

        {/* Diagonal sheen */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "linear-gradient(108deg, rgba(10,103,199,0.14) 0%, transparent 50%, rgba(255,152,0,0.07) 100%)",
        }} />
        {/* Bottom glow line */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: "1px",
          background: "linear-gradient(90deg, transparent 0%, rgba(10,103,199,0.9) 25%, rgba(255,152,0,0.7) 75%, transparent 100%)",
        }} />

        {/* Top info row */}
        <div style={{
          position: "relative", zIndex: 2,
          display: "flex", alignItems: "center",
          padding: "15px 22px 0 22px", gap: "20px",
        }}>
          {/* Logo */}
          <div style={{
            display: "flex", flexDirection: "column", gap: "3px",
            paddingRight: "20px",
            borderRight: "1px solid rgba(255,255,255,0.11)",
            flexShrink: 0,
          }}>
            <Image
              src="/logo-white.png" alt="Voltican"
              width={180} height={54}
              style={{ height: "40px", width: "auto", objectFit: "contain", display: "block" }}
              priority
            />
            <div style={{
              fontSize: "7.5px", color: "rgba(255,255,255,0.38)",
              letterSpacing: "0.28em", textTransform: "uppercase", marginTop: "1px",
            }}>People · Process · Technology · AI</div>
          </div>

          {/* Contact 2-col grid */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "2px" }}>
            <div style={{
              fontSize: "7px", color: "rgba(255,255,255,0.35)",
              letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "3px",
            }}>Contact Information</div>
            <div style={{ display: "grid", gridTemplateColumns: "auto auto", columnGap: "26px", rowGap: "2.5px" }}>
              {[
                { path: "M2 3a1 1 0 0 1 1-1h2.5l1 3-1.5 1a9 9 0 0 0 4 4l1-1.5 3 1V14a1 1 0 0 1-1 1C5.4 15 1 10.6 1 5a3 3 0 0 1 1-2z", text: "713-369-0997" },
                { path: "M0.5 8.5a8 8 0 1 0 15 0 8 8 0 0 0-15 0zM8 0.5C6 3 5 5.5 5 8.5s1 5.5 3 8m0-16c2 2.5 3 5 3 8s-1 5.5-3 8M0.5 8.5h15", text: "www.voltican.com" },
                { path: "M1 3.5h14a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5H1a.5.5 0 0 1-.5-.5V4a.5.5 0 0 1 .5-.5zm0 0L8 9l7-5.5", text: "admin@voltican.com" },
                { path: "M8 0.5C5.25 0.5 3 2.75 3 5.5c0 4.125 5 9.5 5 9.5s5-5.375 5-9.5C13 2.75 10.75 0.5 8 0.5zM8 7.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4z", text: "6671 Southwest Fwy, Houston TX 77407" },
              ].map(({ path, text }, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                  <svg viewBox="0 0 16 16" fill="none" style={{ width: 9, height: 9, flexShrink: 0 }}>
                    <path d={path} stroke="rgba(255,255,255,0.5)" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span style={{ color: "rgba(255,255,255,0.75)", fontSize: "9px" }}>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cert badges */}
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "3.5px", alignItems: "flex-end" }}>
            {[
              ["MBE", "#ff9800"], ["SDB", "#ffb347"], ["HUBZone", "#ff9800"],
              ["Texas HUB", "#ffb347"], ["GSA MAS", "#ff9800"],
            ].map(([label, color]) => (
              <div key={label} style={{
                background: "rgba(255,152,0,0.11)",
                border: `1px solid ${color}50`,
                borderRadius: "20px", padding: "2px 9px",
                fontSize: "7.5px", fontWeight: 700,
                color, letterSpacing: "0.10em", textTransform: "uppercase",
              }}>{label}</div>
            ))}
          </div>
        </div>

        {/* Orange title band */}
        <div style={{
          position: "relative", zIndex: 2,
          background: "linear-gradient(90deg, #c96a00 0%, #e67e00 25%, #ff9800 65%, #f5a623 100%)",
          padding: "7px 22px", marginTop: "12px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          boxShadow: "0 3px 14px rgba(230,126,0,0.45)",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ width: "3px", height: "20px", background: "rgba(255,255,255,0.45)", borderRadius: "2px" }} />
            <span style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: "13px", fontWeight: 900, color: "#fff",
              letterSpacing: "0.32em", textTransform: "uppercase",
              textShadow: "0 1px 6px rgba(0,0,0,0.25)",
            }}>Capability Statement</span>
          </div>
          <span style={{ fontFamily: "monospace", fontSize: "8.5px", color: "rgba(255,255,255,0.88)", letterSpacing: "0.04em" }}>
            DUNS: 026977626&nbsp;&nbsp;|&nbsp;&nbsp;UEI: M3VMMKVPDGK3&nbsp;&nbsp;|&nbsp;&nbsp;DIR TSO-3996 · CPO-4942
          </span>
        </div>
      </header>

      {/* ══ BODY ══════════════════════════════════════════════════════════════ */}
      <div style={{ display: "flex", flex: 1, overflow: "hidden", minHeight: 0 }}>

        {/* ── LEFT SIDEBAR ─────────────────────────────────────────────────── */}
        <aside style={{
          width: "174px", flexShrink: 0,
          background: "linear-gradient(180deg, #f2f6fc 0%, #e8f0fc 100%)",
          backgroundImage: "radial-gradient(circle, rgba(10,103,199,0.11) 1px, transparent 1px)",
          backgroundSize: "13px 13px",
          borderRight: "1px solid #cddaee",
          padding: "11px 10px",
          display: "flex", flexDirection: "column", gap: "8px",
          position: "relative", overflow: "hidden",
        }}>
          {/* Top accent glow */}
          <div style={{
            position: "absolute", top: 0, left: 0, right: 0, height: "50px",
            background: "linear-gradient(180deg, rgba(10,103,199,0.09) 0%, transparent 100%)",
            pointerEvents: "none",
          }} />

          {/* WHO WE ARE */}
          <SideSection label="Who We Are">
            <div style={{
              background: "linear-gradient(135deg, #fff 0%, #f0f6ff 100%)",
              border: "1px solid #c5d8f7",
              borderRadius: "6px", padding: "7px 8px",
              fontSize: "9.5px", lineHeight: 1.65, color: "#1a2d42",
              boxShadow: "0 1px 5px rgba(10,103,199,0.07), inset 0 1px 0 rgba(255,255,255,0.9)",
            }}>
              <strong style={{ color: "#003E6A" }}>Minority-owned</strong> IT solutions &amp; AI modernization firm.{" "}
              <strong style={{ color: "#003E6A" }}>Founded 2009</strong> | Houston, TX — with operations in Sacramento CA, India &amp; Canada.
            </div>
            <div style={{ display: "flex", gap: "4px", marginTop: "5px" }}>
              {["17+ Years", "4 Locations"].map((b) => (
                <span key={b} style={{
                  flex: 1, textAlign: "center",
                  background: "linear-gradient(135deg, #003E6A, #0a67c7)",
                  color: "#fff", borderRadius: "4px",
                  padding: "3.5px 4px", fontSize: "9px", fontWeight: 700,
                  boxShadow: "0 2px 8px rgba(10,103,199,0.35)",
                }}>{b}</span>
              ))}
            </div>
            <div style={{
              marginTop: "4px",
              background: "linear-gradient(90deg, rgba(255,152,0,0.14), rgba(255,152,0,0.04))",
              border: "1px solid rgba(255,152,0,0.28)", borderRadius: "4px",
              padding: "3px 7px", fontSize: "9px", fontWeight: 700,
              color: "#9e5c00", textAlign: "center", letterSpacing: "0.06em",
            }}>Gov&apos;t &amp; Commercial</div>
          </SideSection>

          {/* CERTIFICATIONS */}
          <SideSection label="Certifications">
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              {certifications.map((cert) => (
                <div key={cert} style={{
                  display: "flex", alignItems: "center", gap: "5px",
                  padding: "2px 0", borderBottom: "0.5px solid rgba(10,103,199,0.09)",
                }}>
                  <div style={{
                    width: "5px", height: "5px", borderRadius: "1px", flexShrink: 0,
                    background: "linear-gradient(135deg, #0a67c7, #003E6A)",
                  }} />
                  <span style={{ fontSize: "9.5px", color: "#1a2d42" }}>{cert}</span>
                </div>
              ))}
            </div>
          </SideSection>

          {/* NAICS CODES */}
          <SideSection label="NAICS Codes">
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5px" }}>
              {naicsCodes.map(({ code, label, primary }) => (
                <div key={code} style={{
                  display: "flex", alignItems: "baseline", gap: "4px",
                  background: primary ? "rgba(10,103,199,0.07)" : "transparent",
                  borderRadius: primary ? "3px" : "0",
                  padding: primary ? "1.5px 4px" : "0",
                }}>
                  <span style={{
                    fontFamily: "monospace", fontSize: "9px",
                    color: primary ? "#003E6A" : "#0a67c7",
                    fontWeight: primary ? 800 : 500, minWidth: "38px", letterSpacing: "0.02em",
                  }}>{code}{primary && " ★"}</span>
                  <span style={{ fontSize: "8px", color: "#4a6383" }}>{label}</span>
                </div>
              ))}
            </div>
          </SideSection>

          {/* PRIMARY CONTACT */}
          <SideSection label="Primary Contact">
            <div style={{
              background: "linear-gradient(135deg, #fff 0%, #f4f8ff 100%)",
              border: "1px solid #c5d8f7", borderRadius: "6px",
              padding: "7px 8px",
              boxShadow: "0 1px 5px rgba(10,103,199,0.07), inset 0 1px 0 rgba(255,255,255,0.9)",
            }}>
              <div style={{ fontWeight: 800, fontSize: "11px", color: "#003E6A", marginBottom: "1px" }}>Eric Elewokor</div>
              <div style={{ fontSize: "9px", fontWeight: 600, color: "#0a67c7", marginBottom: "5px", letterSpacing: "0.03em" }}>
                Chief Executive Officer
              </div>
              <div style={{ fontSize: "9px", lineHeight: 1.85, color: "#4a6383" }}>
                937-776-8924 (mobile)<br />eric@voltican.com
              </div>
            </div>
          </SideSection>

          {/* AI PARTNERS */}
          <SideSection label="AI Partners">
            <div style={{ display: "flex", flexDirection: "column", gap: "2.5px" }}>
              {aiPartners.map((p) => (
                <div key={p} style={{ display: "flex", alignItems: "center", gap: "5px", padding: "1.5px 0" }}>
                  <div style={{
                    width: "5px", height: "5px", borderRadius: "50%", flexShrink: 0,
                    background: "linear-gradient(135deg, #0a67c7, #60b4ff)",
                    boxShadow: "0 0 4px rgba(10,103,199,0.4)",
                  }} />
                  <span style={{ fontSize: "9px", color: "#1a2d42", fontWeight: 500 }}>{p}</span>
                </div>
              ))}
            </div>
          </SideSection>

        </aside>

        {/* ── MAIN CONTENT ──────────────────────────────────────────────────── */}
        <main style={{
          flex: 1, minWidth: 0,
          padding: "11px 14px 10px",
          display: "flex", flexDirection: "column", gap: "9px",
          background: "#fff",
        }}>

          {/* Company description */}
          <div style={{
            background: "linear-gradient(135deg, #f0f7ff 0%, #e6f0fe 100%)",
            border: "1px solid #c5d8f7",
            borderLeft: "4px solid #0a67c7",
            borderRadius: "0 7px 7px 0",
            padding: "9px 12px",
            fontSize: "10px", lineHeight: 1.7, color: "#1a2d42",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.8), 0 2px 10px rgba(10,103,199,0.07)",
          }}>
            <strong style={{ color: "#003E6A" }}>Voltican</strong> is a minority-owned IT solutions and AI modernization firm with{" "}
            <strong style={{ color: "#003E6A" }}>17+ years</strong> of proven enterprise delivery across commercial, federal, state, and local government clients.
            Founded in 2009 and headquartered in Houston, TX, Voltican integrates AI into core business processes, enterprise platforms, and existing data infrastructure
            to deliver <strong style={{ color: "#003E6A" }}>measurable outcomes</strong> — not just prototypes. Our focus areas include Big Data &amp; Analytics,
            Artificial Intelligence (LLMs), Generative AI, Cloud Implementation, ERP System Design, Intelligent Process Automation, and IT Staff Augmentation.
          </div>

          {/* CORE COMPETENCIES */}
          <div>
            <SectionLabel>Core Competencies</SectionLabel>
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
              border: "1px solid #cddaee", borderRadius: "8px", overflow: "hidden",
              boxShadow: "0 4px 20px rgba(0,62,106,0.09), inset 0 1px 0 rgba(255,255,255,0.6)",
            }}>
              {competencies.map((col, i) => (
                <div key={col.title} style={{
                  borderRight: i < competencies.length - 1 ? "1px solid #cddaee" : "none",
                  display: "flex", flexDirection: "column",
                }}>
                  <div style={{
                    background: col.accent
                      ? "linear-gradient(145deg, #0855a8 0%, #0a67c7 55%, #1880e8 100%)"
                      : "linear-gradient(145deg, #002040 0%, #003E6A 55%, #004f84 100%)",
                    borderLeft: col.accent ? "3px solid #ff9800" : "3px solid transparent",
                    padding: "7px 8px",
                    display: "flex", alignItems: "center", gap: "6px",
                    minHeight: "32px",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1)",
                  }}>
                    <span style={{ color: col.accent ? "#ffb347" : "rgba(255,255,255,0.65)", display: "flex", flexShrink: 0 }}>
                      {col.icon}
                    </span>
                    <span style={{
                      fontSize: "9px", fontWeight: 800, color: "#fff",
                      textTransform: "uppercase", letterSpacing: "0.05em", lineHeight: 1.3,
                    }}>{col.title}</span>
                  </div>
                  <ul style={{
                    listStyle: "none", padding: "6px 8px 7px", margin: 0,
                    background: col.accent ? "linear-gradient(180deg, #fafcff 0%, #f4f8ff 100%)" : "#fff",
                    flex: 1, display: "flex", flexDirection: "column", gap: "1.5px",
                  }}>
                    {col.items.map((item) => (
                      <li key={item} style={{
                        fontSize: "9px", display: "flex", alignItems: "flex-start", gap: "4px", lineHeight: 1.55,
                      }}>
                        <span style={{
                          color: col.accent ? "#e67e00" : "#0a67c7",
                          fontWeight: 800, fontSize: "11px", lineHeight: "1.3", flexShrink: 0,
                        }}>›</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* PAST PERFORMANCE */}
          <div>
            <SectionLabel>Past Performance</SectionLabel>
            <table style={{
              width: "100%", borderCollapse: "collapse",
              fontSize: "8px", border: "1px solid #cddaee",
              borderRadius: "7px", overflow: "hidden",
              boxShadow: "0 2px 12px rgba(0,62,106,0.06)",
            }}>
              <thead>
                <tr style={{ background: "linear-gradient(90deg, #002040 0%, #003E6A 50%, #0a4d8c 100%)" }}>
                  {["Client / Agency", "Project Type", "Technology Stack"].map((h) => (
                    <th key={h} style={{
                      padding: "5px 9px", textAlign: "left",
                      fontSize: "8.5px", fontWeight: 700,
                      letterSpacing: "0.12em", textTransform: "uppercase",
                      color: "rgba(255,255,255,0.9)",
                    }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {pastPerformance.map((row, i) => (
                  <tr key={row.client} style={{
                    background: i % 2 === 0 ? "#fff" : "#f4f9ff",
                    borderBottom: "0.5px solid #ddeaf7",
                  }}>
                    <td style={{ padding: "3.5px 9px", fontWeight: 700, color: "#003E6A", whiteSpace: "nowrap", verticalAlign: "top" }}>{row.client}</td>
                    <td style={{ padding: "3.5px 9px", color: "#0a67c7", fontStyle: "italic", whiteSpace: "nowrap", verticalAlign: "top" }}>{row.project}</td>
                    <td style={{ padding: "3.5px 9px", color: "#4a6383", verticalAlign: "top" }}>{row.tech}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ENGAGEMENT MODELS */}
          <div>
            <SectionLabel>Engagement Models</SectionLabel>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
              {engagementModels.map((m, i) => (
                <span key={m} style={{
                  border: `1px solid ${i === 0 ? "#e67e00" : "#0a67c7"}`,
                  borderRadius: "20px", padding: "3px 12px",
                  fontSize: "9.5px", fontWeight: 600,
                  color: i === 0 ? "#9e5c00" : "#0a67c7",
                  background: i === 0 ? "rgba(255,152,0,0.07)" : "rgba(10,103,199,0.05)",
                  letterSpacing: "0.03em",
                }}>
                  {i === 0 && <span style={{ marginRight: "4px" }}>★</span>}
                  {m}
                </span>
              ))}
            </div>
          </div>

          {/* BY THE NUMBERS */}
          <div>
            <SectionLabel>By the Numbers</SectionLabel>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "6px" }}>
              {[
                { stat: "17+", label: "Years Enterprise\nDelivery", top: "#0a67c7", glow: "rgba(10,103,199,0.22)" },
                { stat: "4",   label: "Global Operating\nLocations", top: "#003E6A", glow: "rgba(0,62,106,0.18)" },
                { stat: "50+", label: "Enterprise Clients\nServed",  top: "#0a67c7", glow: "rgba(10,103,199,0.22)" },
                { stat: "200+",label: "Projects\nDelivered",  top: "#e67e00", glow: "rgba(230,126,0,0.22)" },
              ].map(({ stat, label, top, glow }) => (
                <div key={stat} style={{
                  background: "linear-gradient(160deg, #fff 0%, #f4f8ff 100%)",
                  border: "1px solid #cddaee",
                  borderTop: `3px solid ${top}`,
                  borderRadius: "0 0 7px 7px",
                  padding: "8px 10px 6px",
                  textAlign: "center",
                  display: "flex", flexDirection: "column", alignItems: "center", gap: "2px",
                  boxShadow: `0 4px 16px ${glow}, inset 0 1px 0 rgba(255,255,255,0.95)`,
                }}>
                  <div style={{
                    fontSize: "22px", fontWeight: 900, color: top,
                    lineHeight: 1, fontFamily: "'Raleway', sans-serif",
                    textShadow: `0 2px 10px ${glow}`,
                  }}>{stat}</div>
                  <div style={{ fontSize: "8.5px", color: "#4a6383", lineHeight: 1.4, whiteSpace: "pre-line" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* WHY CHOOSE VOLTICAN */}
          <div>
            <SectionLabel>Why Choose Voltican</SectionLabel>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5px" }}>
              {[
                {
                  icon: <svg viewBox="0 0 18 18" fill="none" style={{ width: 13, height: 13 }}><circle cx="9" cy="9" r="7.5" stroke="#0a67c7" strokeWidth="1.3"/><path d="M5 9l3 3 5-5" stroke="#0a67c7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
                  title: "Outcome-First Delivery",
                  body: "We integrate AI where it creates real ROI — not prototypes. Every engagement anchored to measurable business metrics.",
                  accent: "#0a67c7", bg: "#f0f7ff", bdr: "#c5d8f7",
                },
                {
                  icon: <svg viewBox="0 0 18 18" fill="none" style={{ width: 13, height: 13 }}><rect x="1.5" y="5.5" width="4.5" height="8" rx="1" stroke="#003E6A" strokeWidth="1.3"/><rect x="6.8" y="2.5" width="4.5" height="11" rx="1" stroke="#003E6A" strokeWidth="1.3"/><rect x="12" y="7.5" width="4.5" height="6" rx="1" stroke="#003E6A" strokeWidth="1.3"/></svg>,
                  title: "Full-Stack AI + Data Capability",
                  body: "From data strategy & governance to MLOps, LLM fine-tuning, and production deployment — one partner, end to end.",
                  accent: "#003E6A", bg: "#f0f4fb", bdr: "#c8d9f5",
                },
                {
                  icon: <svg viewBox="0 0 18 18" fill="none" style={{ width: 13, height: 13 }}><path d="M9 1.5l2 5.5H17l-5 3.5 1.5 5.5L9 13 4.5 16 6 10.5 1 7H7z" stroke="#e67e00" strokeWidth="1.3" strokeLinejoin="round"/></svg>,
                  title: "Federal & State Certified",
                  body: "GSA MAS, HUBZone, MBE, SDB, and Texas HUB certified. FAR-compliant delivery, set-aside awards, and DIR contract vehicles.",
                  accent: "#e67e00", bg: "#fffbf0", bdr: "#f5dfa0",
                },
                {
                  icon: <svg viewBox="0 0 18 18" fill="none" style={{ width: 13, height: 13 }}><circle cx="9" cy="9" r="7.5" stroke="#0a67c7" strokeWidth="1.3"/><path d="M1.5 9h15M9 1.5C7 4 6 6.5 6 9s1 5 3 7.5M9 1.5c2 2.5 3 5 3 7.5s-1 5-3 7.5" stroke="#0a67c7" strokeWidth="1.1"/></svg>,
                  title: "Cross-Sector Experience",
                  body: "Proven delivery across Federal, State & Local Government, Healthcare, Energy, Manufacturing, Retail, and Financial Services.",
                  accent: "#0a67c7", bg: "#f0f7ff", bdr: "#c5d8f7",
                },
              ].map(({ icon, title, body, accent, bg, bdr }) => (
                <div key={title} style={{
                  background: bg, border: `1px solid ${bdr}`,
                  borderLeft: `3px solid ${accent}`,
                  borderRadius: "0 6px 6px 0", padding: "8px 10px",
                  display: "flex", flexDirection: "column", gap: "3px",
                  boxShadow: "0 2px 8px rgba(10,103,199,0.05)",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    {icon}
                    <span style={{
                      fontSize: "9px", fontWeight: 800, color: "#1a2d42",
                      textTransform: "uppercase", letterSpacing: "0.05em",
                    }}>{title}</span>
                  </div>
                  <div style={{ fontSize: "9px", color: "#4a6383", lineHeight: 1.6 }}>{body}</div>
                </div>
              ))}
            </div>
          </div>

        </main>
      </div>

      {/* ══ PLATFORM PARTNERS BAR ════════════════════════════════════════════ */}
      <div style={{
        background: "linear-gradient(135deg, #001226 0%, #002040 50%, #003260 100%)",
        position: "relative", overflow: "hidden",
        padding: "9px 22px", flexShrink: 0,
      }}>
        <HexPattern opacity={0.045} />
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(10,103,199,0.8) 30%, rgba(255,152,0,0.55) 70%, transparent)",
        }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{
            fontSize: "7.5px", fontWeight: 800, letterSpacing: "0.22em",
            textTransform: "uppercase", color: "#7badd4",
            marginBottom: "5px", display: "flex", alignItems: "center", gap: "6px",
          }}>
            <span style={{ display: "inline-block", width: "16px", height: "1.5px", background: "#ff9800", borderRadius: "1px" }} />
            Platform Partners
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
            {platformPartners.map((p) => (
              <span key={p} style={{
                background: "rgba(255,152,0,0.09)",
                border: "1px solid rgba(255,152,0,0.26)",
                borderRadius: "4px", padding: "2px 8px",
                fontSize: "8.5px", color: "rgba(255,255,255,0.82)", fontWeight: 500,
              }}>{p}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ══ FOOTER ═══════════════════════════════════════════════════════════ */}
      <footer style={{
        background: "linear-gradient(90deg, #000e1c 0%, #001220 100%)",
        padding: "6px 22px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        flexShrink: 0,
        borderTop: "1px solid rgba(255,255,255,0.04)",
      }}>
        <Image src="/logo-white.png" alt="Voltican" width={100} height={30}
          style={{ height: "24px", width: "auto", objectFit: "contain" }} />
        <div style={{ fontSize: "8px", color: "rgba(255,255,255,0.4)", textAlign: "center", letterSpacing: "0.04em" }}>
          713-369-0997 &nbsp;·&nbsp; 281-201-9859 (fax) &nbsp;·&nbsp; www.voltican.com &nbsp;·&nbsp; 6671 Southwest Freeway, Houston, TX 77407
        </div>
        <div style={{ fontSize: "7.5px", color: "rgba(255,255,255,0.32)", textAlign: "right", lineHeight: 1.65 }}>
          Confidential &amp; Proprietary<br />© 2026 Voltican Inc.
        </div>
      </footer>

    </div>
  );
}
