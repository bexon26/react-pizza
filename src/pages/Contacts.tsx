import React from "react";

const Contacts = () => {
  return (
    <div>
      <h1>Контакты</h1>
      {/* <div classNameName="Content-0-3-198 section-text-content">
        Фэйсбук, телеграм, инстаграмм, телефон
      </div> */}
      <div className="row contacts_row">
        <div className="col">
          <div className="c_item">
            <picture>
              <img src="https://cactus-gomel.by/wp-content/themes/cactus/img/icons/mdi_location_on.svg" />
            </picture>
            <div className="text">
              <span>Адрес</span>
              <strong
                itemProp="address"
                itemType="https://schema.org/PostalAddress"
              >
                г. Гомель, ул. Каменщикова д.36
              </strong>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="c_item">
            <picture>
              <img src="https://cactus-gomel.by/wp-content/themes/cactus/img/icons/phone1.svg" />
            </picture>
            <div className="text">
              <span>Телефон</span>
              <a href="tel:+375445153030" itemProp="telephone">
                +375 44 5153030
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="c_item">
            <picture>
              <img src="https://cactus-gomel.by/wp-content/themes/cactus/img/icons/mail.svg" />
            </picture>
            <div className="text">
              <span>Вопросы и предложения</span>
              <a href="mailto:cactusby@mail.ru" itemProp="email">
                cactusby@mail.ru
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <ul className="social_contacts">
            <li>
              <a
                rel="nofollow"
                target="_blank"
                href="https://www.instagram.com/cactusgomel/"
              >
                <img src="./assets/img/instagram_logo.png" />
              </a>
            </li>
            <li>
              <a
                rel="nofollow"
                target="_blank"
                href="https://www.instagram.com/cactusgomel/"
              >
                <img src="./assets/img/facebook_logo.png" />
              </a>
            </li>
            <li>
              <a
                rel="nofollow"
                target="_blank"
                href="https://www.instagram.com/cactusgomel/"
              >
                <img src="./assets/img/telegram_logo.svg.png" />
              </a>
            </li>
            <li>
              <a
                rel="nofollow"
                target="_blank"
                href="https://www.instagram.com/cactusgomel/"
              >
                <img src="./assets/img/whatsApp_logo.png" />
              </a>
            </li>
          </ul>
        </div>
        <div className="col map">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A8a5aa135edfa26b479a9ec97dfdf50d94721b1f280ce5b2f51cad533b399cc55&amp;source=constructor"
            width="100%"
            height="500"
            frameBorder="0"
          ></iframe>{" "}
        </div>
      </div>
    </div>
  );
};

export default Contacts;
