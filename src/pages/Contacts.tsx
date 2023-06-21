import React from "react";
import instagram_logo from "../assets/img/instagram_logo.png";
import facebook_logo from "../assets/img/facebook_logo.png";
import telegram_logo from "../assets/img/telegram_logo.svg.png";
import whatsApp_logo from "../assets/img/whatsApp_logo.png";


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
              <img src="https://cactus-gomel.by/wp-content/themes/cactus/img/icons/mdi_location_on.svg" alt="mdi_location_on"/>
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
              <img src="https://cactus-gomel.by/wp-content/themes/cactus/img/icons/phone1.svg" alt="phone1"/>
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
          <ul className="social_contacts">
            <li>
              <a
               rel="noreferrer"
                target="_blank"
                href="https://www.instagram.com/cactusgomel/"
              >
                <img src={instagram_logo} alt="instagram_logo"/>
              </a>
            </li>
            <li>
              <a
               rel="noreferrer"
                target="_blank"
                href="https://www.instagram.com/cactusgomel/"
              >
                <img src={facebook_logo} alt="facebook_logo"/>
              </a>
            </li>
            <li>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.instagram.com/cactusgomel/"
              >
                <img src={telegram_logo} alt="telegram_logo"/>
              </a>
            </li>
            <li>
              <a
                // rel="nofollow"
                rel="noreferrer"
                target="_blank"
                href="https://www.instagram.com/cactusgomel/"
              >
                <img src={whatsApp_logo} alt="whatsApp_logo"/>
              </a>
            </li>
          </ul>
        </div>
        <div className="col map">
          <iframe
          title="yandex-map"
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
