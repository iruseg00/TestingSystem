/* eslint-disable react/jsx-pascal-case */
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import style from './style.module.scss';
import Test_question from '../../../../components/test_question/Test_question';
import { Button } from 'antd';
import Form from 'antd/lib/form/Form';
import FormItem from 'antd/lib/form/FormItem';
import { postSusAnswers } from './../../../../services/sus_test';
import { getResults } from './../../../../redux/actions/susTest';

const Step_2 = (props) => {
	const dispatch = useDispatch();
	const ARRAY_OF_QEUSTIONS_REQUEST = useSelector((state) => state.susTest.susTests);
	const array_of_questions = ARRAY_OF_QEUSTIONS_REQUEST?.map((element) => (
		<Test_question
			name={element.questionID}
			key={element.questionID}
			question_text={element.question}
		/>
	));

	const PostAnswers = (values) => {
		console.log(values);
		let ARRAY_OF_ANSWERS = [];
		for (let item in values) {
			ARRAY_OF_ANSWERS[item - 1] = values[item];
		}
		console.log(ARRAY_OF_ANSWERS);
		let ARRAY_OF_ANSWERS_TO_POST = ARRAY_OF_ANSWERS.map((element, index) => {
			return {
				id: index + 1,
				answers: element,
			};
		});
		console.log(ARRAY_OF_ANSWERS_TO_POST);
		let answer_to_post = {
			answers: ARRAY_OF_ANSWERS_TO_POST,
			testingSystem: props.getData.testingSystem,
			description: props.getData.description,
		};
		console.log(answer_to_post);
		dispatch(getResults(answer_to_post));
		props.func_next();
	};

	return (
		<Form name='Form' onFinish={PostAnswers}>
			<div className={style.container}>
				<div className={style.title}>{props.title}</div>
				<div className={style.content_container}>{array_of_questions}</div>
				<FormItem name='button'>
					<Button type='primary' htmlType='submit' className={style.submit}>
						Подтвердить
					</Button>
				</FormItem>
			</div>
		</Form>
	);
};

export default Step_2;
