import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from './style.module.scss';
import TestMdtQuestions from '../../../components/testMdtQuestion/TestMdtQuestion';
import { Button, Modal } from 'antd';
import Form from 'antd/lib/form/Form';
import FormItem from 'antd/lib/form/FormItem';
import { getResults } from '../../../redux/actions/mdtTest';

const Step_2 = (props) => {
	const dispatch = useDispatch();
	const questions = useSelector((state) => state.mdtTest.questions);
	const arrayOfQuestions = questions?.map((element) => (
		<TestMdtQuestions
			name={element.adjectiveID}
			key={element.adjectiveID}
			question_text={element.adjective}
		/>
	));
	const PostAnswers = (values) => {
		let arrayOfAnswers = [];
		for (let item in values) {
			arrayOfAnswers[item - 1] = values[item];
		}
		// let arrayOfAnswersToPost = arrayOfAnswers.map((element, index) => {
		// 	return {
		// 		id: index + 1,
		// 		// answer: element,
		// 	};
		// });
		let arrayOfAnswersToPost = [1, 2, 3, 4, 5];
		let answer_to_post = {
			answers: arrayOfAnswersToPost,
			testingSystem: props.getData.testingSystem,
			description: props.getData.description,
		};
		dispatch(getResults(answer_to_post));
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
		<Form name='Form' onFinish={PostAnswers}>
			<div className={style.container}>
				<div className={style.title}>
					Выберите 5 прилагательных, которые, по Вашему мнению, характеризуют интерфейс
					программы{' '}
				</div>
				<div className={style.content_container}>{arrayOfQuestions}</div>
				<FormItem name='button'>
					<Button
						type='primary'
						// htmlType='submit'
						onClick={showModal}
						className={style.submit}
					>
						Подтвердить
					</Button>
				</FormItem>
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
			</div>
		</Form>
	);
};

export default Step_2;
