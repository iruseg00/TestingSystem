import React from "react";
import style from "./style.module.scss";
import barsImage from "../../assets/images/bars-solid_2.svg";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

class Header extends React.Component {
  render() {
    return (
      <div className={style.main}>
        <div className={style.container}>
          <div className={style.left}>
            <div className={style.button}>
              <img src={barsImage} alt="{null}" className={style.buttonIcon} />
            </div>
            <div className={style.headerName}>Тестирование</div>
          </div>
          <div className={style.profileIcon}>
            <Avatar size={65} icon={<UserOutlined />} />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
