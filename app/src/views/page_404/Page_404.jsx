import { Button } from 'antd';
import s from './style.module.scss';
import { Link } from 'react-router-dom';

const Page_404 = () => {
	return (
		<div className={s.container}>
			<div className={s.title}>
				Ну... как бы это... ты пытаешься сослаться на несуществующий путь
				(ошибка 404)
			</div>
			<Link to='/dashboard'>
				<Button className={s.redirect_button} type='primary'>
					На главную
				</Button>
			</Link>
		</div>
	);
};

export default Page_404;
