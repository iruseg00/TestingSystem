import { Form, Input, Button } from 'antd';
import style from './style.module.scss';
import { useSelector } from 'react-redux';

function TestSetupForm(props) {
	const USER_ID = useSelector((state) => state.users.profile.userID);
	return (
		<Form
			className={style.form}
			name='testSetup'
			onFinish={() => {
				props.GetDataFromInputSystem();
				props.GetDataFromInputNote();
				props.func_next();
				props.getTest();
			}}
			// onFinishFailed={onFinishFailed}
		>
			<Form.Item
				className={style.wrapper_input}
				label='Присвоенный ID'
				name='testID'
				rules={[
					{
						required: false,
						message: 'Please input test ID or generate it!',
					},
				]}
			>
				<Input
					placeholder={USER_ID}
					size='large'
					className={style.input + ' ' + style.input_disabled}
					disabled
				/>
			</Form.Item>
			<Form.Item
				className={style.wrapper_input}
				label='Тестируемая система'
				name='system'
				rules={[
					{
						required: false,
						message: 'Please input tested system name!',
					},
				]}
			>
				<Input size='large' className={style.input} />
			</Form.Item>
			<Form.Item className={style.wrapper_input} label='Примечание' name='note'>
				<Input size='large' className={style.input} />
			</Form.Item>
			<a className={style.scanningText} href={'/test-scanning'}>
				Сканировать имеющийся тест
			</a>
			<Form.Item>
				<Button type='primary' htmlType='submit' className={style.submit}>
					Начать тест
				</Button>
			</Form.Item>
		</Form>
	);
}

export default TestSetupForm;
