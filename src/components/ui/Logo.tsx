import Image from "next/image";

type LogoProps = {
  className?: string;
  showText?: boolean;
};

export function Logo({ className = "", showText = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <Image
        src="/logo1.png"
        alt="VareqonTech.ai logo"
        width={34}
        height={34}
        priority
      />

      {showText && (
        <span className="font-heading font-light text-[22px] tracking-[0.15em] leading-none">
          <span className="gradient-text font-semibold">VAREQONTECH</span>
          <span className="text-[var(--color-foreground)] opacity-60">.ai</span>
        </span>
      )}
    </div>
  );
}