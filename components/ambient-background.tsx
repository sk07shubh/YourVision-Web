const particles = Array.from({ length: 24 }, (_, index) => index);

export function AmbientBackground() {
  return (
    <div className="ambient-scene" aria-hidden="true">
      <div className="ambient-scene__image" />
      <div className="ambient-scene__veil" />
      <div className="ambient-scene__particles">
        {particles.map((particle) => (
          <span className="ambient-particle" key={particle} />
        ))}
      </div>
    </div>
  );
}
