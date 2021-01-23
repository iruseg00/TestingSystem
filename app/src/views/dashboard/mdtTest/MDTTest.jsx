import style from "./style.module.scss";
import TestSetup from "../../../components/testSetupForm/TestSetupForm";
import boxes from "../../../assets/images/Vector.svg";

function MDTTest() {
  return (
    <div className={style.container}>
      <img className={style.boxes} src={boxes} alt="boxes" />
      <div className={style.testSetups}>
        <div className={style.testName}>Microsoft Desirability Toolkit</div>
        <TestSetup />
      </div>
    </div>
  );
}

export default MDTTest;
