export function AmbientBackground() {
  return (
    <div className="ambient-scene" aria-hidden="true">
      <div className="ambient-scene__image" />
      <div className="ambient-scene__veil" />
      <div className="ambient-scene__gap-glow" />
      <div className="ambient-scene__cubes">
        <div className="ambient-cube ambient-cube--one" />
        <div className="ambient-cube ambient-cube--two" />
        <div className="ambient-cube ambient-cube--three" />
        <div className="ambient-cube ambient-cube--four" />
      </div>
    </div>
  );
}
