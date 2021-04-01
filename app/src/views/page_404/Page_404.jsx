import s from './style.module.scss';

const Page_404 = () => {
	return (
		<div className={s.container}>
			<div className={s.title}>
				Ну... как бы это... ты пытаешься сослаться на несуществующий путь
				(ошибка 404)
			</div>
		</div>
	);
};

export default Page_404;
