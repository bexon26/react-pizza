import React from "react";

const Delivery = () => {
  return (
    <div>
      <h1>Доставка и оплата</h1>
      <div>
        <p>
          Доставка курьером в Хургаде - 20 EGP, район Сахл-Хашиш и Эль-Ахья - 40
          EGP.
        </p>
        <p>Минимальная сумма заказа при доставке – 200 EGP.</p>
        <p>Самовывоз - пн.-вс. с 10.00 до 21.00.</p>
        <p>
          Время осуществления доставки: ежедневно (пн.-вс.) с 11.00 до 21.00.
        </p>

        <h2>Условия оплаты:</h2>

        <h3>Оплата наличными курьеру</h3>
        <p>
          Вы можете оплатить всю сумму заказа наличными денежными средствами в
          момент доставки заказа непосредственно доставившему его курьеру. Будем
          признательны, если вы приготовите заранее сумму без сдачи.
        </p>
        <h3>Оплата банковской картой через интернет</h3>
        <p>
          После нажатия кнопки «Купить» вы перейдете на специальную защищенную
          платежную страницу процессинговой системы bePaid.
        </p>
        <p>
          На платежной странице будет указан номер заказа и сумма платежа. Для
          оплаты вам необходимо ввести свои карточные данные и подтвердить
          платеж, нажав кнопку «Оплатить».
        </p>
        <p>
          Если ваша карта поддерживает технологию 3-D Secure, системой ваш будет
          предложено пройти стандартную одноминутную процедуру проверки
          владельца карты на странице вашего банка (банка, который выдал вашу
          карту).
        </p>
        <p>
          Обращаем ваше внимание, что после проведения платежа на указанный вами
          электронный адрес придет подтверждение оплаты (разместить или
          залинковать образец чека – кассовый, а можно и электронный чек,
          который будет доступен после проведения тестового платежа). Просим вас
          сохранять данные оплат.
        </p>
        <p>
          Мы принимаем платежи по следующим банковским картам: Visa, Visa
          Electron, MasterCard, Maestro.
        </p>
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

export default Delivery;
