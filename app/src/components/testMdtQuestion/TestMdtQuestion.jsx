import React from 'react';
import style from './style.module.scss';
import { Radio } from 'antd';
import FormItem from 'antd/lib/form/FormItem';

const Test_question = (props) => {
	const [value, setValue] = React.useState(1);

	const onChange = (e) => {
		console.log('radio checked', e.target.value);
		setValue(e.target.value);
	};
	return (
		<div className={style.container}>
			<div className={style.question_text}>{props.question_text}</div>
			<FormItem initialValue={0} name={props.name}>
				<Radio.Group className={style.radio_container} onChange={onChange} value={value}>
					<Radio className={style.radio} value={1}></Radio>
				</Radio.Group>
			</FormItem>
		</div>
	);
};

export default Test_question;
