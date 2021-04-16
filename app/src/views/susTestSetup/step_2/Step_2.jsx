import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from './style.module.scss';
import TestQuestion from '../../../components/test_question/Test_question';
import { Button, message, Modal } from 'antd';
import Form from 'antd/lib/form/Form';
import FormItem from 'antd/lib/form/FormItem';
import { getResults } from '../../../redux/actions/susTest';

const Step_2 = (props) => {
	const dispatch = useDispatch();
	const questions = useSelector((state) => state.susTest.questions);
	const arrayOfQuestions = questions?.map((element) => (
		<TestQuestion
			name={element.questionID}
			key={element.questionID}
			question_text={element.question}
		/>
	));
	const error = () => {
		message.error('Все утверждения должны быть оценены!');
	};
	const PostAnswers = (values) => {
		if (Object.values(values) !== undefined) {
			let arrayOfAnswers = [];
			for (let item in values) {
				arrayOfAnswers[item - 1] = values[item];
			}
			let arrayOfAnswersToPost = arrayOfAnswers.map((element, index) => {
				return {
					id: index + 1,
					answer: element,
				};
			});
			let answer_to_post = {
				answers: arrayOfAnswersToPost,
				testingSystem: props.getData.testingSystem,
				description: props.getData.description,
			};
			dispatch(getResults(answer_to_post));
			props.func_next();
		} else {
			error();
		}
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
				<div className={style.title}>{props.title_of_test}</div>
				<div className={style.numbers}>
					<div className={style.numbersToGrid}>
						<span className={style.number}>1</span>
						<span className={style.number}>2</span>
						<span className={style.number}>3</span>
						<span className={style.number}>4</span>
						<span className={style.number}>5</span>
					</div>
				</div>
				<div className={style.content_container}>{arrayOfQuestions}</div>
				<FormItem name='button'>
					<Button
						type='primary'
						onClick={showModal}
						htmlType='submit'
						className={style.submit}
					>
						Подтвердить
					</Button>
				</FormItem>
			</div>
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
};

export default Step_2;
