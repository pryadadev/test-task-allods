import "./PromoSection.css";

const PromoSection = () => {
  return (
    <div className="promo-section">
      <div className="background"></div>
      <div className="shading-left"></div>
      <div className="shading-right"></div>
      <div className="mafia-costume-female"></div>
      <div className="mafia-costume-male"></div>
      <div className="shading-bottom"></div>
      <div className="glow-line"></div>
      <div className="glow-center"></div>
      <div className="logo"></div>
      <div className="boxes"></div>
      <div className="text-container">
        <h1 className="header">КОЛЛЕКЦИОННЫЕ ИЗДАНИЯ</h1>
        <p className="slogan">
          Побеждайте легко, побеждайте стильно с новыми коллекционными изданиями «Аллодов Онлайн»!
        </p>
      </div>
    </div>
  );
};

export default PromoSection;