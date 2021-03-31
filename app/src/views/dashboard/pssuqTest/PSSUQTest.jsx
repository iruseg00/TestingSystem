import style from "./style.module.scss";
import { Radio, Button } from "antd";
import { PSSUQ } from "../../../variables/tests";

function PSSUQTest() {
  return (
    <div className={style.container}>
      <div className={style.testDescription}>
        Оцените, насколько вы согласны с каждым утверждением
      </div>
      {PSSUQ.map((item, index) => {
        return (
          <div className={style.question}>
            {index + 1 + ". " + item}
            <br />
            <Radio.Group
              name={"answer" + index}
              style={{ paddingLeft: "100px" }}
            >
              <Radio value={1} style={{ paddingLeft: "60px" }} />
              <Radio value={2} style={{ paddingLeft: "60px" }} />
              <Radio value={3} style={{ paddingLeft: "60px" }} />
              <Radio value={4} style={{ paddingLeft: "60px" }} />
              <Radio value={5} style={{ paddingLeft: "60px" }} />
              <Radio value={6} style={{ paddingLeft: "60px" }} />
              <Radio value={7} style={{ paddingLeft: "60px" }} />
              <Radio value={8} style={{ paddingLeft: "60px" }} />
              <Radio value={9} style={{ paddingLeft: "60px" }} />
              <Radio value={10} style={{ paddingLeft: "60px" }} />
            </Radio.Group>
            <div className={style.description}>
              <div className={style.part}>
                <div className={style.number}>1</div>
                <div className={style.text}>неудовлетворительно</div>
              </div>
              <div className={style.part}>
                <div className={style.number}>10</div>
                <div className={style.text}>отлично</div>
              </div>
            </div>
          </div>
        );
      })}
      <Button type="primary" htmlType="submit" className={style.submit}>
        Закончить тест
      </Button>
    </div>
  );
}

export default PSSUQTest;
