import React from "react";
import styles from "./SwitcherLang.module.scss";
import $ from "jquery"
import i18n from "../../../i18n";


const SwitcherLang = () => {

   const changeLanguage = (language: string) => {
      i18n.changeLanguage(language);
    };
  return (
    <div id="country-select">
      <div className={styles.select_lang}>
        <div className={styles.options}>
          
          <div className={styles.option} id="lang2">
            <input
              type="radio"
              name="flag"
              id="france"
              
              onClick={() => {
                $("#france").addClass("active");
                $("#unitedKingdom").removeClass("active");
                $("#lang3").toggle("slow", function () {});
                $(".select-lang").attr("style", "height:30px");
                changeLanguage("ru")
              }}
            />
            <label htmlFor="france">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg"
                alt=""
                className={styles.select_img}
              />
            </label>
          </div>
          <div className={styles.option} id="lang3">
            <input
              type="radio"
              name="flag"
              id="unitedKingdom"
              onClick={() => {
                $("#unitedKingdom").addClass("active");
                $("#france").removeClass("active");
                $("#lang2").toggle("slow", function () {});
                $(".select-lang").attr("style", "height:30px");
                changeLanguage("en")
              }}
            />
            <label htmlFor="unitedKingdom">
              <img
                src="http://www.modesign-online.de/assets/images/unitedKingdom.svg"
                alt=""
                className={styles.select_img}
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitcherLang;
