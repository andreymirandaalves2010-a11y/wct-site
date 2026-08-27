export default function BackgroundVideo() {
  return (
    <div className="bg-video-wrapper" aria-hidden="true">
      <video
        className="bg-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/video/wct-intro.mp4" type="video/mp4" />
      </video>
      <div className="bg-video-overlay" />
      <div className="bg-video-grain" />
    </div>
  );
}