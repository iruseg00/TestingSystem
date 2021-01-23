import { Form, Input, Button } from "antd";
import style from "./style.module.scss";

function TestSetupForm() {
  return (
    <Form
      className={style.form}
      name="testSetup"
      // onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
    >
      <Form.Item
        className={style.wrapper_input}
        label="Присвоенный ID"
        name="testID"
        rules={[
          {
            required: false,
            message: "Please input test ID or generate it!",
          },
        ]}
      >
        <Input size="large" className={style.input} />
      </Form.Item>
      <Form.Item
        className={style.wrapper_input}
        label="Тестируемая система"
        name="system"
        rules={[
          {
            required: false,
            message: "Please input tested system name!",
          },
        ]}
      >
        <Input size="large" className={style.input} />
      </Form.Item>
      <Form.Item className={style.wrapper_input} label="Примечание" name="note">
        <Input size="large" className={style.input} />
      </Form.Item>
      <a className={style.scanningText} href={"/test-scanning"}>
        Сканировать имеющийся тест
      </a>
      <Form.Item>
        <Button type="primary" htmlType="submit" className={style.submit}>
          Начать тест
        </Button>
      </Form.Item>
    </Form>
  );
}

export default TestSetupForm;
