// import style from "./style.module.scss";
import TestItem from "../../../components/testChooseItem/TestChooseItem";

function TestSelection() {
  return (
    <div>
      <TestItem
        abbreviation="SUS"
        decryption="System Usability Scale"
        description="Описание"
      />
      <TestItem
        abbreviation="PSSUQ"
        decryption="Post-Study System Usability Questionnaire"
        description="Описание"
      />
      <TestItem
        abbreviation="MDT"
        decryption="Post-Study System Usability Questionnaire"
        description="Описание"
      />
    </div>
  );
}

export default TestSelection;
