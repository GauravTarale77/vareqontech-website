import Image from "next/image";

type LogoProps = {
  className?: string;
};

export function Logo({ className = "" }: LogoProps) {
  return (
    <div className={`relative h-20 md:h-24 w-64 md:w-80 ${className}`}>
      <Image
        src="/logo-full.png"
        alt="VareqonTech.ai"
        fill
        priority
        className="object-contain object-left"
      />
    </div>
  );
}