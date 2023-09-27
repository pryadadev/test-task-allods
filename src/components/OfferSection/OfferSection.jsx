import "./OfferSection.css";

const OfferSection = () => {

  // This 3 constants need to put in another JS-file and then import here
  const productSpecifications = [
    {
      image: "table-image-time.png",
      label: "Игровое время",
      freeServerValue: "-",
      subscriptionServerValue: "30 дней"
    },
    {
      image: "table-image-toolbox.png",
      label: "Запечатанный набор инструментов",
      freeServerValue: "1",
      subscriptionServerValue: "1"
    },
    {
      image: "table-image-fragile.png",
      label: "Хрупкая чистая руна 10-й ступени",
      freeServerValue: "1",
      subscriptionServerValue: "-"
    },
    {
      image: "table-image-big-symbol.png",
      label: "Большой символ изобилия творца",
      freeServerValue: "10",
      subscriptionServerValue: "-"
    },
    {
      image: "table-image-mana.png",
      label: "Мана-батарея",
      freeServerValue: "-",
      subscriptionServerValue: "20"
    },
    {
      image: "table-image-module.png",
      label: "Модуль памяти",
      freeServerValue: "-",
      subscriptionServerValue: "10"
    },
    {
      image: "table-image-vito.png",
      label: "Помощник Вито",
      freeServerValue: "1",
      subscriptionServerValue: "1"
    }
  ];
  const URL_TO_TABLE_ROW_IMAGE = "assets/";
  const ABSENCE_SYMBOL = "-";
  const printValue = (value) => {
    return (value === undefined || value === null ? ABSENCE_SYMBOL : value);
  };

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