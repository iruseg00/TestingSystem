import style from "./style.module.scss";
import TestSetup from "../../../components/testSetupForm/TestSetupForm";
import boxes from "../../../assets/images/cubes-solid_1.svg";

function SUSTest() {
  return (
    <div className={style.container}>
      <img className={style.boxes} src={boxes} alt="boxes" />
      <div className={style.testSetups}>
        <div className={style.testName}>System Usability Scale</div>
        <TestSetup />
      </div>
    </div>
  );
}

export default SUSTest;
