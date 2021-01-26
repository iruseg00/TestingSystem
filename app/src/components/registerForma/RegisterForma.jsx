import { useState } from 'react';
// import { connect } from "react-redux";
import { Form, Input, Button, Radio } from 'antd';
import { withRouter } from "react-router";
import AuthService from "../../services/AuthService";
// import { login } from "../../redux/actions/auth";
// import { whoAmI } from "../../redux/actions/users";

import style from "./style.module.scss";

function RegisterForma(props)
{
    const [ValidateStatusSurname, setValidateStatusSurname] = useState('validating');
    const [ValidateStatusName, setValidateStatusName] = useState('validating');
    const [ValidateStatusMiddleName, setValidateStatusMiddleName] = useState('validating');
    const [RadioValue , setRadioValue] = useState('М');
    const [ValidateStatusEmail, setValidateStatusEmail] = useState('validating');
    const [ValidateStatusPass, setValidateStatusPass] = useState('validating');
    
    const [form] = Form.useForm();
    const onFinish = (values)=>
    {
        values.sex = RadioValue;
        AuthService.register(values).then(()=> props.history.push('/login'));
    };
    const onFinishFailed = ({ errorFields }) => 
    {
        const ErrFields = errorFields.map(field => field.name[0]);
        if(ErrFields.includes('surname')) setValidateStatusSurname('error');
        if(ErrFields.includes('name')) setValidateStatusName('error');
        if(ErrFields.includes('middleName')) setValidateStatusMiddleName('error');
        if(ErrFields.includes('email')) setValidateStatusEmail('error');
        if(ErrFields.includes('password')) setValidateStatusPass('error');   
    };
    const radioChange = e => 
    {
        setRadioValue(e.target.value);
    };
    const changedField = (e)=>
    {
        switch(e.target.id)
        {
            case 'register_surname':
                setValidateStatusSurname('validating');
                break;
            case 'register_name':
                setValidateStatusName('validating');
                break;
            case 'register_middleName':
                setValidateStatusMiddleName('validating');
                break;
            case 'register_email':
                setValidateStatusEmail('validating');
                break;   
            case 'register_password':
                setValidateStatusPass('validating');
                break;
            default: break;                                
        }
    };
    return (
        <Form form={form}
        className={style.form}
        name="register"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        >
            <div className={style.form_info}>
                <Form.Item
                className={style.wrapper_input}
                label="Фамилия"
                name="surname"
                validateStatus={ ValidateStatusSurname }
                rules={[
                  {
                    required: true,
                    message: 'Please input your surname!',
                    pattern: /^[a-zA-Zа-яА-Я]{2,18}/,
                  },
                ]}
                >
                    <Input 
                    size='large' 
                    className={style.input} 
                    onChange={changedField}
                    />
                </Form.Item>
                <Form.Item
                className={style.wrapper_input}
                label="Имя"
                name="name"
                validateStatus={ ValidateStatusName }
                rules={[
                  {
                    required: true,
                    message: 'Please input your name!',
                    pattern: /^[a-zA-Zа-яА-Я]{2,18}/,
                  },
                ]}
                >
                    <Input 
                    size='large' 
                    className={style.input} 
                    onChange={changedField}
                    />
                </Form.Item>
                <Form.Item
                className={style.wrapper_input}
                label="Отчество"
                name="middleName"
                validateStatus={ ValidateStatusMiddleName }
                rules={[
                  {
                    required: false,
                    message: 'Please input your father name!',
                    pattern: /^[a-zA-Zа-яА-Я]{2,18}/,
                  },
                ]}
                >
                    <Input 
                    size='large' 
                    className={style.input}
                    onChange={changedField} 
                    />
                </Form.Item>
                <Radio.Group 
                className={style.radio}
                options={['М', 'Ж']} 
                onChange={radioChange} 
                value={RadioValue} 
                />
                <Form.Item
                className={style.wrapper_input}
                label="Email"
                name="email"
                validateStatus={ ValidateStatusEmail }
                rules={[
                  {
                    required: true,
                    message: 'Please input your Email!',
                    pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  },
                ]}
                >
                    <Input 
                    size='large' 
                    className={style.input} 
                    onChange={changedField}
                    />
                </Form.Item>
                <Form.Item
                className={style.wrapper_input}
                label="Пароль"
                name="password"
                validateStatus={ ValidateStatusPass }
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                    pattern: /[0-9a-zA-Z.!$_-]{6,24}/,
                  },
                ]}
                >
                    <Input.Password 
                    size='large' 
                    className={style.input}
                    onChange={changedField}
                    />
                </Form.Item>
                <Form.Item>
                    <Button 
                    type="primary" 
                    htmlType="submit" 
                    className={style.submit}
                    >
                      Готово
                    </Button>
                </Form.Item>
            </div>
        </Form>
    );
}

// const mapStateToProps = ({ auth }) => ({ auth });
// const mapDispatchToProps = {
//   login,
//   whoAmI
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(RegisterForma);

export default withRouter(RegisterForma);