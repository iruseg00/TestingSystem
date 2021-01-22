import React from "react";
import style from "./style.module.scss";
import pc from "../../assets/images/pc.svg";

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
              Выбор теста
            </a>
            <a className={style.menuItem} href="/dashboard/personal">
              Личный кабинет
            </a>
            <a className={style.menuItem} href="/dashboard/tests-passed">
              Пройденные тесты
            </a>
          </div>
          <a className={style.menuItem + " " + style.exit} href="/exit">
            Выход из аккаунта
          </a>
        </div>
      </div>
    );
  }
}

export default Menu;
