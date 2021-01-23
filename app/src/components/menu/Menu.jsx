import React from "react";
import style from "./style.module.scss";
import pc from "../../assets/images/pc.svg";
import arrow from "../../assets/images/arrow.svg";
import ellipse from "../../assets/images/ellipse.svg";

class Menu extends React.Component {
  render() {
    return (
      <div className={style.container}>
        <div className={style.pcImage}>
          <img className={style.pc} src={pc} alt="pc" />
        </div>
        <div className={style.items}>
          <div className={style.topItems}>
            <a className={style.menuItem} href="/dashboard/test-choosing">
              <img className={style.ellipse} src={ellipse} alt="ellipse" />
              Выбор теста
            </a>
            <a className={style.menuItem} href="/dashboard/personal">
              <img className={style.ellipse} src={ellipse} alt="ellipse" />
              Личный кабинет
            </a>
            <a className={style.menuItem} href="/dashboard/tests-passed">
              <img className={style.ellipse} src={ellipse} alt="ellipse" />
              Пройденные тесты
            </a>
          </div>
          <a className={style.menuItem + " " + style.exit} href="/exit">
            <img className={style.ellipse} src={ellipse} alt="ellipse" />
            Выход из аккаунта{" "}
            <img className={style.arrow} src={arrow} alt="arrow" />
          </a>
        </div>
      </div>
    );
  }
}

export default Menu;
