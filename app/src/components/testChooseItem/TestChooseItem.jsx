import React from "react";
import style from "./style.module.scss";

class TestChooseItem extends React.Component {
  render() {
    return (
      <div className={style.main}>
        <div className={style.container}>
          <div className={style.left}>
            <div className={style.abbreviation}>{this.props.abbreviation}</div>
            <div className={style.decryption}>{this.props.decryption}</div>
          </div>
          <div className={style.description}>{this.props.description}</div>
        </div>
      </div>
    );
  }
}

export default TestChooseItem;
