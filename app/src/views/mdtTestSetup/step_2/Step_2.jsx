import { useSelector, useDispatch } from 'react-redux';
import style from './style.module.scss';
import TestMdtQuestions from '../../../components/testMdtQuestion/TestMdtQuestion';
import { Button } from 'antd';
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
		console.log(values);
		let arrayOfAnswers = [];
		for (let item in values) {
			arrayOfAnswers[item - 1] = values[item];
		}
		console.log(arrayOfAnswers);
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
		</Form>
	);
};

export default Step_2;
