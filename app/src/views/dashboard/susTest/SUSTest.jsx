import style from "./style.module.scss";
import { Row, Col, Radio, Button } from "antd";
import { SUS } from "../../../variables/tests";

function SUSTest() {
  return (
    <div className={style.container}>
      <div className={style.testDescription}>
        Оцените, насколько вы согласны с каждым утверждением
      </div>
      <Row>
        <Col flex={5} />
        <Col flex={1}>
          <div className={style.variantsDescription}>
            <div className={style.descText}>
              совершенно <br /> не согласен
            </div>
            <div className={style.descNumbers}>
              <div style={{ paddingLeft: "30px" }}>1</div>
              <div style={{ paddingLeft: "30px" }}>2</div>
              <div style={{ paddingLeft: "30px" }}>3</div>
              <div style={{ paddingLeft: "30px" }}>4</div>
              <div style={{ paddingLeft: "30px" }}>5</div>
            </div>
            <div className={style.descText}>
              полностью <br /> согласен
            </div>
          </div>
        </Col>
      </Row>
      {SUS.map((item, index) => {
        return (
          <Row style={{ paddingLeft: "35px" }}>
            <Col flex={"1000px"} className={style.question}>
              {item}
            </Col>
            <Col flex={"auto"}>
              <Radio.Group
                name={"answer" + index}
                style={{ paddingLeft: "212px" }}
              >
                <Radio value={1} style={{ paddingLeft: "23px" }} />
                <Radio value={2} style={{ paddingLeft: "23px" }} />
                <Radio value={3} style={{ paddingLeft: "23px" }} />
                <Radio value={4} style={{ paddingLeft: "23px" }} />
                <Radio value={5} style={{ paddingLeft: "23px" }} />
              </Radio.Group>
            </Col>
          </Row>
        );
      })}
      <Button type="primary" htmlType="submit" className={style.submit}>
        Закончить тест
      </Button>
    </div>
  );
}

export default SUSTest;
