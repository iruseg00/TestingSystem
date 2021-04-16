import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button, Radio, Modal } from 'antd';
import { register } from '../../redux/actions/registration';

import style from './style.module.scss';
import DragnDropImage from '../dragnDropImage/DragnDropImage';

function RegisterForma(props) {
	const [ValidateStatusSurname, setValidateStatusSurname] = useState('validating');
	const [ValidateStatusName, setValidateStatusName] = useState('validating');
	const [ValidateStatusMiddleName, setValidateStatusMiddleName] = useState('validating');
	const [ValidateStatusEmail, setValidateStatusEmail] = useState('validating');
	const [ValidateStatusPass, setValidateStatusPass] = useState('validating');
	const [RadioValue, setRadioValue] = useState('М');

	const [form] = Form.useForm();
	let userPhoto = null;
	const onFinish = (values) => {
		values.sex = RadioValue;
		values.photo = userPhoto;
		console.log(values);
		props.register(values);
	};
	const onFinishFailed = ({ errorFields }) => {
		const ErrFields = errorFields.map((field) => field.name[0]);
		if (ErrFields.includes('surname')) setValidateStatusSurname('error');
		if (ErrFields.includes('name')) setValidateStatusName('error');
		if (ErrFields.includes('middleName')) setValidateStatusMiddleName('error');
		if (ErrFields.includes('email')) setValidateStatusEmail('error');
		if (ErrFields.includes('password')) setValidateStatusPass('error');
	};
	const radioChange = (e) => setRadioValue(e.target.value);
	const changedField = (e) => {
		switch (e.target.id) {
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
			default:
				break;
		}
	};
	const onChangeAvatar = (image) => (userPhoto = image || null);
	// модальные хуки
	const [visible, setVisible] = React.useState(false);
	const [confirmLoading, setConfirmLoading] = React.useState(false);
	const [modalText, setModalText] = React.useState(
		'Вы уверены, что все данные введены верно?'
	);
	const showModal = () => {
		setVisible(true);
	};
	const handleOk = () => {
		setModalText('Идёт синхронизация с базой данных...');
		setConfirmLoading(true);
		setTimeout(() => {
			setVisible(false);
			setConfirmLoading(false);
		}, 2000);
	};
	const handleCancel = () => {
		console.log('Clicked cancel button');
		setVisible(false);
	};

	return (
		<Form
			form={form}
			className={style.form}
			name='register'
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
		>
			<div className={style.form_info}>
				<Form.Item
					className={style.wrapper_input}
					label='Фамилия'
					name='surname'
					validateStatus={ValidateStatusSurname}
					rules={[
						{
							required: true,
							message: 'Please input your surname!',
							pattern: /^[a-zA-Zа-яА-Я]{2,18}/,
						},
					]}
				>
					<Input size='large' className={style.input} onChange={changedField} />
				</Form.Item>
				<Form.Item
					className={style.wrapper_input}
					label='Имя'
					name='name'
					validateStatus={ValidateStatusName}
					rules={[
						{
							required: true,
							message: 'Please input your name!',
							pattern: /^[a-zA-Zа-яА-Я]{2,18}/,
						},
					]}
				>
					<Input size='large' className={style.input} onChange={changedField} />
				</Form.Item>
				<Form.Item
					className={style.wrapper_input}
					label='Отчество'
					name='middleName'
					validateStatus={ValidateStatusMiddleName}
					rules={[
						{
							required: false,
							message: 'Please input your father name!',
							pattern: /^[a-zA-Zа-яА-Я]{2,18}/,
						},
					]}
				>
					<Input size='large' className={style.input} onChange={changedField} />
				</Form.Item>
				<Radio.Group
					className={style.radio}
					label='Пол'
					options={['М', 'Ж']}
					onChange={radioChange}
					value={RadioValue}
				/>
				<Form.Item
					className={style.wrapper_input}
					label='Email'
					name='email'
					validateStatus={ValidateStatusEmail}
					rules={[
						{
							required: true,
							message: 'Please input your Email!',
							pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
						},
					]}
				>
					<Input size='large' className={style.input} onChange={changedField} />
				</Form.Item>
				<Form.Item
					className={style.wrapper_input}
					label='Пароль'
					name='password'
					validateStatus={ValidateStatusPass}
					rules={[
						{
							required: true,
							message: 'Please input your password!',
							pattern: /[0-9a-zA-Z.!$_-]{6,24}/,
						},
					]}
				>
					<Input.Password size='large' className={style.input} onChange={changedField} />
				</Form.Item>
				{/* КНОПКА РЕГИСТРАЦИИ */}
				<Form.Item>
					<Button
						type='primary'
						// htmlType='submit'
						onClick={showModal}
						className={style.submit}
					>
						Готово
					</Button>
				</Form.Item>
			</div>
			<Form.Item className={style.photo} name='photo'>
				<DragnDropImage onChange={onChangeAvatar} />
			</Form.Item>
			{/* МОДАЛКА */}
			<Modal
				centered
				bodyStyle={{
					border: '1px solid black',
					borderRadius: '10px',
					backgroundColor: '#e6e6e6',
					height: '216px',
					width: '527px',
					padding: '40px',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
				}}
				className={style.modalWindow}
				footer={null}
				closable={false}
				visible={visible}
				confirmLoading={confirmLoading}
			>
				<p className={style.modalText}>{modalText}</p>
				<div className={style.containerToModalButtons}>
					<Button
						name='modalSubmit'
						type='default'
						htmlType='submit'
						className={style.submit_modal}
						loading={props.registration.loading}
						onClick={handleOk}
					>
						Да
					</Button>
					<Button
						type='primary'
						htmlType='reset'
						className={style.cancel_modal}
						onClick={handleCancel}
					>
						Нет
					</Button>
				</div>
			</Modal>
		</Form>
	);
}

const mapStateToProps = ({ registration }) => ({ registration });
const mapDispatchToProps = {
	register,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForma);
