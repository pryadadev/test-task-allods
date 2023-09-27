import "./OfferSection.css";
import { productSpecifications, URL_TO_TABLE_ROW_IMAGE, printValue } from "data/productSpecifications";

const OfferSection = () => {

  return (
    <div className="offer-section">
      <div className="background"></div>
      <div className="glow-line"></div>

      <div className="section-grid">

        <div className="vito-container">
          <div className="vito-backlight"></div>
          <div className="vito"></div>
        </div>

        <div className="right-side-flexbox">

          <h1 className="header">НАБОР «ПОСЫЛКА С КОНТРАБАНДОЙ»</h1>

          <div className="table">

            <div className="header">
              <div className="name">Бесплатные сервера</div>
              <div className="name">Подписочный сервер</div>
            </div>

            <div className="body">
              {productSpecifications.map((item, index) => (
                <div className="row" key={index}>
                  <div className="image">
                    <img
                      src={URL_TO_TABLE_ROW_IMAGE + item.image}
                      alt=""
                    />
                  </div>
                  <div className="label">
                    {item.label}
                  </div>
                  <div className="free-server-value">
                    {printValue(item.freeServerValue)}
                  </div>
                  <div className="subscription-server-value">
                    {printValue(item.subscriptionServerValue)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <figure className="buy-offer-container">

            <div className="vito-box"></div>

            <div className="buy-action-container">
              <div className="price">399 ₽</div>
              <button className="button-buy">ПРИОБРЕСТИ</button>
            </div>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default OfferSection;