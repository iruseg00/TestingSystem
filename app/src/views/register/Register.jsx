import style from './style.module.scss';
import SideBarStatic from '../../components/sideBarStatic/SideBarStatic';
import RegisterForma from '../../components/registerForma/RegisterForma';

function Register() {
	return (
		<div className={style.wrapper}>
			<SideBarStatic />
			<div className={style.container}>
				<h1 className={style.title}>РЕГИСТРАЦИЯ</h1>
				<RegisterForma />
			</div>
		</div>
	);
}

export default Register;
