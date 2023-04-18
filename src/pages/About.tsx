import React from "react";
import dishJPG from "../assets/img/dish-20.jpg";
import checkSVG from "../assets/img/checkMark.svg";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <div className="container">
        <h1>О нас</h1>
        <div className="about">
          <div className="about-block">
            <img
              src={dishJPG}
              className="about-block__image"
              alt="Готовая домашняя еда"
            />
          </div>
          <div className="about-block">
            <h2 className="section__title">{t("Готовая домашняя еда")}</h2>
            <p>
              {t(
                "Вкусное и сбалансированное питание – залог здоровья и хорошего настроения. Наш сервис специально для тех, кто привык питаться настоящей домашней едой, но не готов тратить время на поход в магазин и приготовление пищи."
              )}
            </p>
            <p>{t('Мы решим эту проблему. Подбирайте подходящий рацион и наслаждайтесь домашней едой без хлопот!')}
              
            </p>
            <ul className="checklist">
              <li>{t("Доставка в течении часа в герметичных контейнерах")}</li>
              <li>{t("Штатные курьеры, которых знают постоянные клиенты")}</li>
              <li>{t("Самовывоз или быстрая доставка")}</li>
              <li>{t("Индивидуальный подход к каждому клиенту")}</li>
              <li>{t("Разнообразие блюд")}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <h2 className="section__title section__title-center">{t('Почему мы')}?</h2>

        <div className="motivations">
          <div className="about-block">
            <div className="motivations__item">
              <div className="motivations__icon motivations__icon-1"></div>
              <div className="motivations__text">{t('Вкусная домашняя еда')}</div>
            </div>
          </div>
          <div className="about-block">
            <div className="motivations__item">
              <div className="motivations__icon motivations__icon-2"></div>

              <div className="motivations__text">
              {t('Не нужно ходить в магазин, не нужно готовить')}
              </div>
            </div>
          </div>
          <div className="about-block">
            <div className="motivations__item ">
              <div className="motivations__icon motivations__icon-3"></div>

              <div className="motivations__text">{t('Свежие продукты')}</div>
            </div>
          </div>
          <div className="about-block">
            <div className="motivations__item">
              <div className="motivations__icon motivations__icon-4"></div>
              <div className="motivations__text">{t('Быстрая доставка')}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
