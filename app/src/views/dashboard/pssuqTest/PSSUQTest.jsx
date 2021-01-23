import style from "./style.module.scss";
import TestSetup from "../../../components/testSetupForm/TestSetupForm";
import boxes from "../../../assets/images/cubes-solid_2.svg";

function PSSUQTest() {
  return (
    <div className={style.container}>
      <img className={style.boxes} src={boxes} alt="boxes" />
      <div className={style.testSetups}>
        <div className={style.testName}>
          Post-Study System Usability Questionnaire
        </div>
        <TestSetup />
      </div>
    </div>
  );
}

export default PSSUQTest;
