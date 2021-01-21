import { Form, Input, Button } from 'antd';
import style from "./style.module.scss";

function LoginForma()
{
    return(
        <Form 
        className={style.form}
        name="login"
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        >
            <Form.Item
            className={style.wrapper_input}
            label="Email"
            name="email"
            rules={[
              {
                required: false,
                message: 'Please input your Email!',
              },
            ]}
            >
                <Input size='large' className={style.input}/>
            </Form.Item>
            <Form.Item
            className={style.wrapper_input}
            label="Пароль"
            name="password"
            rules={[
              {
                required: false,
                message: 'Please input your password!',
              },
            ]}
            >
              <Input.Password size='large' className={style.input}/>
            </Form.Item>
            <Form.Item>
                <Button 
                type="primary" 
                htmlType="submit" 
                className={style.submit}>
                  Войти
                </Button>
            </Form.Item>
        </Form>
    );
}

export default LoginForma;