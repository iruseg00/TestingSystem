import style from "./style.module.scss";
import { Checkbox, Button } from "antd";
import { MDT } from "../../../variables/tests";

function MDTTest() {
  return (
    <div className={style.container}>
      <div className={style.testDescription}>
        Выберите 5 прилагательных, которые, по Вашему мнению, характеризуют
        интерфейс программы
      </div>
      <div className={style.test}>
        <div className={style.fstCol}>
          {MDT.map((item, index) => {
            while (index <= 35)
              return (
                <div className={style.option}>
                  {item}
                  <Checkbox value={index} />
                </div>
              );
            return undefined;
          })}
        </div>
        <div className={style.scndCol}>
          {MDT.map((item, index) => {
            while (index >= 36 && index <= 71)
              return (
                <div className={style.option}>
                  {item}
                  <Checkbox value={index} />
                </div>
              );
            return undefined;
          })}
        </div>
        <div className={style.thrdCol}>
          {MDT.map((item, index) => {
            while (index >= 72)
              return (
                <div className={style.option}>
                  {item}
                  <Checkbox value={index} />
                </div>
              );
            return undefined;
          })}
        </div>
      </div>
      <Button type="primary" htmlType="submit" className={style.submit}>
        Закончить тест
      </Button>
    </div>
  );
}

export default MDTTest;
