import React from "react";

const Delivery = () => {
  return (
    <div>
      <h1>Доставка и оплата</h1>

      <div className="container">
        <h2 className="section__title section__title-center">
          Условия оплаты:
        </h2>
        {/* <div className="section__intro">
          <p>Доставка осуществляется курьерами в течении часа по Хургаде.</p>
        </div> */}
        <div className="section__content">
          <div className="delivery2">
            <div className="delivery2__grid">
              <div className="delivery2__item">
                <div className="delivery2__wrapper">
                  <div className="pay2__thumb"></div>
                  <div className="delivery2__content">
                    <div className="delivery2__title">
                      Оплата наличными курьеру
                    </div>
                    <div className="delivery2__text">
                      <p>
                        Вы можете оплатить всю сумму заказа наличными денежными
                        средствами в момент доставки заказа непосредственно
                        доставившему его курьеру. Будем признательны, если вы
                        приготовите заранее сумму без сдачи.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="delivery2__item">
                <div className="delivery2__wrapper">
                  <div className="pay2__thumb"></div>
                  <div className="delivery2__content">
                    <div className="delivery2__title">
                      Оплата банковской картой через интернет
                    </div>
                    <div className="delivery2__text">
                      <p>
                        Мы принимаем платежи по следующим банковским картам:
                        Visa, Visa Electron, MasterCard, Maestro.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h2 className="section__title section__title-center">
          Быстрая доставка
        </h2>
        <div className="section__intro">
          <p>Доставка осуществляется курьерами в течении часа по Хургаде.</p>
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
                      <p>Доставка осуществляется с 11:00 - 21.00.</p>
                      <p>Стоимось доставки - 20 EGP</p>
                      <p>Минимальная сумма заказа – 200 EGP.</p>
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
                      <p>Самовывоз - пн.-вс. с 10.00 до 21.00.</p>
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
