export const productSpecifications = [
  {
    image: "table-image-time.png",
    label: "Игровое время",
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
    freeServerValue: "1"
  },
  {
    image: "table-image-big-symbol.png",
    label: "Большой символ изобилия творца",
    freeServerValue: "10"
  },
  {
    image: "table-image-mana.png",
    label: "Мана-батарея",
    subscriptionServerValue: "20"
  },
  {
    image: "table-image-module.png",
    label: "Модуль памяти",
    subscriptionServerValue: "10"
  },
  {
    image: "table-image-vito.png",
    label: "Помощник Вито",
    freeServerValue: "1",
    subscriptionServerValue: "1"
  }
];

export const URL_TO_TABLE_ROW_IMAGE = "assets/";

const ABSENCE_SYMBOL = "-";

export const printValue = (value) => {
  return (value === undefined || value === null ? ABSENCE_SYMBOL : value);
};