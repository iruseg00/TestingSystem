import { Button } from 'antd';
import s from './style.module.scss';
import { Link } from 'react-router-dom';

const GetRandomError404 = () => {
	let randomNumb = Math.floor(Math.random() * 5) + 1;
	switch (randomNumb) {
		case 1:
			return (
				<div className={s.title}>
					Ну... как бы это... ты пытаешься сослаться на несуществующий путь (ошибка 404)
				</div>
			);
		case 2:
			return <div className={s.title}>Выйди, и зайди нормально!!! (ошибка 404)</div>;
		case 3:
			return <div className={s.title}>Уупс! (ошибка 404)</div>;
		case 4:
			return <div className={s.title}>Тук-тук... (ошибка 404)</div>;
		case 5:
			return (
				<div className={s.title}>
					Если бы мы знали что это такое, но мы не знаем что это такое (ошибка 404)
				</div>
			);
		default:
			return (
				<div className={s.title}>
					Ну... как бы это... ты пытаешься сослаться на несуществующий путь (ошибка 404)
				</div>
			);
	}
};

const Page_404 = () => {
	return (
		<div className={s.container}>
			{GetRandomError404()}
			<Link to='/dashboard'>
				<Button className={s.redirect_button} type='primary'>
					На главную
				</Button>
			</Link>
		</div>
	);
};

export default Page_404;
