export function VideoBackground() {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      poster="/videos/hero-poster.jpg"
      className="absolute inset-0 w-full h-full object-cover"
    >
      <source src="/videos/hero-bg.mp4" type="video/mp4" />
    </video>
  );
}