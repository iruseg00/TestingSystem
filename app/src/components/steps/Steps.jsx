/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import style from './style.module.scss';
import { Steps } from 'antd';
import Step_1 from '../../views/dashboard/susTestSetup/step_1/Step_1';
import Step_2 from '../../views/dashboard/susTestSetup/step_2/Step_2';

const Stepps = (props) => {
	const [current, setCurrent] = React.useState(0);
	const { Step } = Steps;

	const next = () => {
		setCurrent(current + 1);
	};
	const steps = [
		// STEP_1
		{
			title: 'Начало',
			content: (
				<Step_1
					img={props.step_one_props.img}
					title={props.step_one_props.title_of_test}
					func_next={next}
				/>
			),
		},
		// STEP_2
		{
			title: 'Тест',
			content: <Step_2 title={props.step_one_props.title_of_test} func_next={next} />,
		},
		// STEP_3
		{
			title: 'Результат',
			content: 'Last-content',
		},
	];

	return (
		<span className={style.container_to_steps}>
			<Steps className={style.all_steps} current={current}>
				{steps.map((item) => (
					<Step key={item.title} title={item.title} />
				))}
			</Steps>
			<div className={style.steps_conent_my + ' steps-content'}>
				{steps[current].content}
			</div>
		</span>
	);
};

export default Stepps;
