import styles from "./ambient-background.module.css";

export function AmbientBackground() {
  return (
    <div className={styles.scene} aria-hidden="true">
      <div className={styles.poster} />
      <video
        className={styles.video}
        autoPlay
        muted
        loop
        playsInline
        onLoadedMetadata={(event) => {
          // Slower motion without adding a JavaScript animation loop.
          event.currentTarget.playbackRate = 0.45;
        }}
        preload="metadata"
        poster="/images/liquid-glass-background.jpg"
        disablePictureInPicture
        tabIndex={-1}
      >
        <source src="/videos/liquid-glass-bg.mp4" type="video/mp4" />
      </video>
      <div className={styles.veil} />
      <div className={styles.glow} />
    </div>
  );
}
