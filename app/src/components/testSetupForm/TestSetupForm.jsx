import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Input } from 'antd';
import style from './style.module.scss';
import { useSelector } from 'react-redux';
import Form from 'antd/lib/form/Form';
import FormItem from 'antd/lib/form/FormItem';

function TestSetupForm(props) {
	const USER_ID = useSelector((state) => state.users.profile.userID);
	const onFinish = (values) => {
		props.setData({ testingSystem: values.testingSystem, description: values.description });
		props.getTest();
		props.func_next();
	};
	return (
		<Form onFinish={onFinish} className={style.form} name='testSetup'>
			<FormItem name='id'>
				<Input
					placeholder={USER_ID}
					size='large'
					className={style.input + ' ' + style.input_disabled}
					disabled
				/>
			</FormItem>
			<FormItem name='testingSystem'>
				<Input
					name='testingSystem'
					placeholder='testingSystem'
					size='large'
					className={style.input}
				/>
			</FormItem>
			<FormItem name='description'>
				<Input
					name='description'
					placeholder='description'
					size='large'
					className={style.input}
				/>
			</FormItem>
			<Link className={style.scanningText} to='/test-scanning'>
				Сканировать имеющийся тест
			</Link>
			<Button type='primary' htmlType='submit' className={style.submit}>
				Начать тест
			</Button>
		</Form>
	);
}

export default TestSetupForm;
