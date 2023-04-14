import React from "react";
import dishJPG from "../assets/img/dish-20.jpg";
import checkSVG from "../assets/img/checkMark.svg";

const About = () => {
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
            <h2 className="section__title">Готовая домашняя еда</h2>
            <p>
              Вкусное и сбалансированное питание – залог здоровья и хорошего
              настроения. Наш сервис специально для тех, кто привык питаться
              настоящей домашней едой, но не готов тратить время на поход в
              магазин и приготовление пищи.
            </p>
            <p>
              Мы решим эту проблему. Подбирайте подходящий рацион и
              наслаждайтесь домашней едой без хлопот!
            </p>
            <ul className="checklist">
              <li>Доставка 3 раза в неделю в герметичных контейнерах</li>
              <li>Штатные курьеры, которых знают постоянные клиенты</li>
              <li>Самовывоз или бесплатная доставка от 2100р</li>
              <li>Индивидуальный подход к каждому клиенту</li>
              <li>Разнообразие рационов</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <h2 className="section__title section__title-center">Почему мы?</h2>

        <div className="motivations">
          <div className="about-block">
            <div className="motivations__item">
              <div className="motivations__icon motivations__icon-1"></div>
              <div className="motivations__text">
                Вкусная домашняя еда по ГОСТу
              </div>
            </div>
          </div>
          <div className="about-block">
            <div className="motivations__item">
              <div className="motivations__icon motivations__icon-2"></div>

              <div className="motivations__text">
                Не нужно ходить в магазин, не нужно готовить
              </div>
            </div>
          </div>
          <div className="about-block">
            <div className="motivations__item ">
              <div className="motivations__icon motivations__icon-3"></div>

              <div className="motivations__text">
                Собственное производство и профессиональные повара
              </div>
            </div>
          </div>
          <div className="about-block">
            <div className="motivations__item">
              <div className="motivations__icon motivations__icon-4"></div>
              <div className="motivations__text">
                Бесплатная и безопасная доставка
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h2 className="section__title section__title-center">
          Бесплатная доставка
        </h2>
        <div className="section__intro">
          <p>
            У нас есть бесплатная доставка в Москве в пределах 5 км от МКАД.
          </p>
          <p>
            Доставка осуществляется пешими курьерами 3 раза в неделю, в вашем
            распоряжении всегда будет свежая еда.
          </p>
        </div>
        <div className="section__content">
          <div className="delivery2">
            <div className="delivery2__grid">
              <div className="delivery2__item">
                <div className="delivery2__wrapper">
                  <div className="delivery2__thumb"></div>
                  <div className="delivery2__content">
                    <div className="delivery2__title">
                      Курьером домой или в офис
                    </div>
                    <div className="delivery2__text">
                      <p>Доставка осуществляется три раза в неделю.</p>
                      <p>Доставим до двери в удобный двухчасовой интервал.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="delivery2__item">
                <div className="delivery2__wrapper">
                  <div className="delivery2__thumb"></div>
                  <div className="delivery2__content">
                    <div className="delivery2__title">
                      Возможность самовывоза
                    </div>
                    <div className="delivery2__text">
                      <p>
                        Подробности можете уточнить по телефону при заказе, мы
                        направим ваш заказ в ближайший к вам пункт самовывоза.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
