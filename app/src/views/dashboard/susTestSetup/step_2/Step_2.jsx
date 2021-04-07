/* eslint-disable react/jsx-pascal-case */
import { useSelector } from 'react-redux';
import style from './style.module.scss';
import Test_question from '../../../../components/test_question/Test_question';
import { Button } from 'antd';
import Form from 'antd/lib/form/Form';
import FormItem from 'antd/lib/form/FormItem';
import { postSusAnswers } from './../../../../services/sus_test';

const Step_2 = (props) => {
	const ARRAY_OF_QEUSTIONS_REQUEST = useSelector((state) => state.susTest.susTests);
	const array_of_questions = ARRAY_OF_QEUSTIONS_REQUEST?.map((element) => (
		<FormItem name={element.questionID} key={element.questionID}>
			<Test_question question_text={element.question} />
		</FormItem>
	));

	const PostAnswers = (values) => {
		console.log(values);
		// return postSusAnswers(values.input);
	};

	return (
		<Form name='Form' onFinish={PostAnswers}>
			<div className={style.container}>
				<div className={style.title}>{props.title}</div>
				<div className={style.content_container}>{array_of_questions}</div>
				<FormItem name='button'>
					<Button
						onClick={props.func_next}
						type='primary'
						htmlType='submit'
						className={style.submit}
					>
						Подтвердить
					</Button>
				</FormItem>
			</div>
		</Form>
	);
};

export default Step_2;
