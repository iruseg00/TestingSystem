import React from 'react';
import { Button } from 'antd';
import style from './style.module.scss';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

function TestSetupForm(props) {
	const USER_ID = useSelector((state) => state.users.profile.userID);

	const { register, handleSubmit, getValues } = useForm();

	const onSubmit = () => {
		let valueSystem = getValues('testingSystem');
		let valueDescription = getValues('description');
		props.setData({ testingSystem: valueSystem, description: valueDescription });
		props.getTest();
		props.func_next();
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)} className={style.form} name='testSetup'>
			<input
				placeholder={USER_ID}
				size='large'
				className={style.input + ' ' + style.input_disabled}
				disabled
			/>

			<input
				name='testingSystem'
				{...register('testingSystem')}
				placeholder='testingSystem'
				size='large'
				className={style.input}
			/>

			<input
				name='description'
				{...register('description')}
				placeholder='description'
				size='large'
				className={style.input}
			/>

			<a className={style.scanningText} href={'/test-scanning'}>
				Сканировать имеющийся тест
			</a>

			<Button type='primary' htmlType='submit' className={style.submit}>
				Начать тест
			</Button>
		</form>
	);
}

export default TestSetupForm;
