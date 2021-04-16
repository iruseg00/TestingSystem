import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Input, Modal } from 'antd';
import style from './style.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import Form from 'antd/lib/form/Form';
import FormItem from 'antd/lib/form/FormItem';

function TestSetupForm(props) {
	const USER_ID = useSelector((state) => state.users.profile.userID);
	const dispatch = useDispatch();
	const onFinish = (values) => {
		props.setData({
			testingSystem: values.testingSystem,
			description: values.description,
		});
		dispatch(props.getTest());
		props.func_next();
	};
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
		<Form onFinish={onFinish} className={style.form} name='testSetup'>
			<div className={style.fields}>
				<span className={style.descText}>Присвоенный ID:</span>
				<FormItem name='id'>
					<Input
						placeholder={USER_ID}
						size='large'
						className={style.input + ' ' + style.input_disabled}
						disabled
					/>
				</FormItem>
			</div>
			<div className={style.fields}>
				<span className={style.descText}>Тестируемая система:</span>
				<FormItem
					rules={[
						{
							required: true,
							message: 'Сначала заполните это поле!',
						},
					]}
					name='testingSystem'
				>
					<Input name='testingSystem' size='large' className={style.input} />
				</FormItem>
			</div>
			<div className={style.fields}>
				<span className={style.descText}>Примечание:</span>
				<FormItem
					rules={[
						{
							required: true,
							message: 'Сначала заполните это поле!',
						},
					]}
					name='description'
				>
					<Input name='description' size='large' className={style.input} />
				</FormItem>
			</div>
			<Link className={style.scanningText} to='/test-scanning'>
				Сканировать имеющийся тест
			</Link>
			<Button type='primary' htmlType='submit' onClick={showModal} className={style.submit}>
				Начать тест
			</Button>
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

export default TestSetupForm;
