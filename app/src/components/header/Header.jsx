import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Drawer } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { logout } from '../../redux/actions/auth';
import style from './style.module.scss';
import barsImage from '../../assets/images/bars-solid_2.svg';
import PC from './../../assets/images/vit.png';

const Header = () => {
	const [visible, setVisible] = useState(false);
	const userAvatar = useSelector((state) => state.users.profile.photo);
	const dispatch = useDispatch();
	const showDrawer = () => {
		setVisible(true);
	};

	const onClose = () => {
		setVisible(false);
	};

	return (
		<div className={style.container}>
			<Drawer
				className={style.menu}
				placement='left'
				width='330'
				closable={false}
				onClose={onClose}
				visible={visible}
			>
				<div className={style.links_container}>
					<div className={style.flex_1}>
						<Link className={style.side_bar_item} to='/dashboard'>
							Выбор теста
						</Link>
						<Link className={style.side_bar_item} to='/dashboard/profile'>
							Личный кабинет
						</Link>
						<Link className={style.side_bar_item} to='/dashboard/passed_tests'>
							Пройденные тесты
						</Link>
					</div>

					<div className={style.container_to_PC}>
						<img src={PC} alt='PC' />
					</div>
					<Link onClick={() => dispatch(logout())} to='/login'>
						<div className={style.side_bar_item + ' ' + style.exit_link}>Выйти из аккаунта</div>
					</Link>
				</div>
			</Drawer>

			<div className={style.left_items}>
				<div className={style.bar_img_container}>
					<img onClick={showDrawer} className={style.barImg} src={barsImage} alt='barsImage' />
				</div>
				<div className={style.title}>Тестирование</div>
			</div>

			<div className={style.avatar_container}>
				<Avatar size={64} src={userAvatar} icon={<UserOutlined />} />
			</div>
		</div>
	);
};

export default Header;
