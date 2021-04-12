import { useSelector, useDispatch } from 'react-redux';
import style from './style.module.scss';
import TestPssuqQuestions from '../../../components/testPssuqQuestion/TestPssuqQuestion';
import { Button } from 'antd';
import Form from 'antd/lib/form/Form';
import FormItem from 'antd/lib/form/FormItem';
import { getResults } from '../../../redux/actions/pssuqTest';

const Step_2 = (props) => {
	const dispatch = useDispatch();
	const questions = useSelector((state) => state.pssuqTest.questions);
	const arrayOfQuestions = questions?.map((element) => (
		<TestPssuqQuestions
			name={element.questionID}
			key={element.questionID}
			question_text={element.question}
		/>
	));
	const PostAnswers = (values) => {
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
	};

	return (
		<Form name='Form' onFinish={PostAnswers}>
			<div className={style.container}>
				<div className={style.title}>{props.title_of_test}</div>
				<div className={style.content_container}>{arrayOfQuestions}</div>
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
