import PassedTest from '../../components/passedTest/PassedTest';
import style from './style.module.scss';
import boxes from '../../assets/images/Vector.svg';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const PassedTests = () => {
	return (
		<div className={style.general}>
			<div className={style.container}>
				<PassedTest image={boxes} title={'SUS'} />
				<PassedTest image={boxes} title={'PSSUQ'} />
				<PassedTest image={boxes} title={'MDT'} />
				<PassedTest image={boxes} title={'SUS'} />
				<PassedTest image={boxes} title={'SUS'} />
				<PassedTest image={boxes} title={'PSSUQ'} />
				<PassedTest image={boxes} title={'MDT'} />
				<PassedTest image={boxes} title={'SUS'} />
			</div>
			<div className={style.containerToButton}>
				<Link to='/dashboard'>
					<Button type='primary' htmlType='submit' className={style.submit}>
						Подтвердить
					</Button>
				</Link>
			</div>
		</div>
	);
};

export default PassedTests;
