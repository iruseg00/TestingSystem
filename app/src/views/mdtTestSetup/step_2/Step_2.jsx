import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from './style.module.scss';
import TestMdtQuestions from '../../../components/testMdtQuestion/TestMdtQuestion';
import { Button } from 'antd';
import Form from 'antd/lib/form/Form';
import FormItem from 'antd/lib/form/FormItem';
import { getResults } from '../../../redux/actions/mdtTest';
import ModalWindow from '../../../components/modal/ModalWindow';

const Step_2 = (props) => {
	const [visible, setVisible] = React.useState(false);
	const [action, setAction] = React.useState();
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
		const send = () => () => {
			const arrayOfAnswersToPost = [];
			// let arrayOfAnswers = [];
			for (let item in values) {
				// arrayOfAnswers[item - 1] = values[item];
				if (values[item] !== 0) {
					arrayOfAnswersToPost.push(item.toString());
				} else if (values[item] === 'button') {
					continue;
				}
			}
			arrayOfAnswersToPost.pop();
			let answer_to_post = {
				answers: arrayOfAnswersToPost,
				testingSystem: props.getData.testingSystem,
				description: props.getData.description,
			};
			dispatch(getResults(answer_to_post));
			props.func_next();
		};
		setAction(send);
		setVisible(true);
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
					<Button type='primary' htmlType='submit' className={style.submit}>
						Подтвердить
					</Button>
				</FormItem>
			</div>
			<ModalWindow action={action} visible={visible} setVisible={setVisible}>
				Вы уверены, что все данные введены верно?
			</ModalWindow>
		</Form>
	);
};

export default Step_2;
