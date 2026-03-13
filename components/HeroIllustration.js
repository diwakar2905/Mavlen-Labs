import IllustrationSVG from "/illustrations/hero-rocket.svg";
import "./HeroIllustration.css";

export default function HeroIllustration() {
  return (
    <div className="illustration">
      <img src={IllustrationSVG} alt="Security architecture illustration" />
    </div>
  );
}
