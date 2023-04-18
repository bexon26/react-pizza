import React from "react";
import { useTranslation } from "react-i18next";

const Delivery = () => {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <h1>{t('Доставка и оплата')}</h1>

      <div className="container">
        <h2 className="section__title section__title-center">
        {t('Условия оплаты')}:
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
                    {t('Оплата наличными курьеру')}
                    </div>
                    <div className="delivery2__text">
                      <p>{t('Вы можете оплатить всю сумму заказа наличными денежными средствами в момент доставки заказа непосредственно доставившему его курьеру. Будем признательны, если вы приготовите заранее сумму без сдачи.')}
                         
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
                    {t('Оплата банковской картой через интернет')}
                    </div>
                    <div className="delivery2__text">
                      <p>
                      {t('Мы принимаем платежи по следующим банковским картам: Visa, Visa Electron, MasterCard, Maestro.')}
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
        {t('Быстрая доставка')}
        </h2>
        <div className="section__intro">
          <p>{t('Доставка осуществляется курьерами в течении часа по Хургаде.')}</p>
        </div>
        <div className="section__content">
          <div className="delivery2">
            <div className="delivery2__grid">
              <div className="delivery2__item">
                <div className="delivery2__wrapper">
                  <div className="delivery2__thumb"></div>
                  <div className="delivery2__content">
                    <div className="delivery2__title">
                    {t('Курьером домой или в офис')}
                    </div>
                    <div className="delivery2__text">
                      <p>{t('Доставка осуществляется с 11:00 - 21.00')}.</p>
                      <p>{t('Стоимось доставки - 20 EGP')}</p>
                      <p>{t('Минимальная сумма заказа – 200 EGP.')}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="delivery2__item">
                <div className="delivery2__wrapper">
                  <div className="delivery2__thumb"></div>
                  <div className="delivery2__content">
                    <div className="delivery2__title">
                    {t('Возможность самовывоза')}
                    </div>
                    <div className="delivery2__text">
                      <p>{t('Самовывоз - пн.-вс. с 10.00 до 21.00.')}</p>
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
