import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
  logos: Logo[];
};

export function LogoCloud({ logos }: LogoCloudProps) {
  return (
    <div className="relative mx-auto max-w-5xl py-6">
      <InfiniteSlider gap={72} speed={60} speedOnHover={20}>
        {logos.map((logo) => (
          <img
            alt={logo.alt}
            className="pointer-events-none h-7 w-auto select-none object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 md:h-8"
            height="auto"
            key={`logo-${logo.alt}`}
            loading="lazy"
            src={logo.src}
            width="auto"
          />
        ))}
      </InfiniteSlider>

      {/* Blur edges — color matched to the dark navy section background */}
      <div
        className="pointer-events-none absolute top-0 left-0 h-full w-[120px]"
        style={{ background: "linear-gradient(to right, #ffffff, transparent)" }}
      />
      <div
        className="pointer-events-none absolute top-0 right-0 h-full w-[120px]"
        style={{ background: "linear-gradient(to left, #ffffff, transparent)" }}
      />
    </div>
  );
}
